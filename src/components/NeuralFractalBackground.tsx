import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  fromX: number;
  fromY: number;
  fromZ: number;
  toX: number;
  toY: number;
  toZ: number;
  progress: number;
  speed: number;
  size: number;
  opacity: number;
  segmentIndex: number;
}

interface FractalSegment {
  x1: number;
  y1: number;
  z1: number;
  x2: number;
  y2: number;
  z2: number;
  depth: number;
  baseOpacity: number;
  activity: number;
  color: string;
  thickness: number;
  connections: number[];
  isOccupied: boolean;
}

interface FractalNode {
  x: number;
  y: number;
  z: number;
  size: number;
  color: string;
}

export function NeuralFractalBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const lastTimeRef = useRef<number>(0);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    let segments: FractalSegment[] = [];
    let nodes: FractalNode[] = [];
    let cameraAngleY = 0;
    let cameraAngleX = 0;
    let cameraZ = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = {
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1
      };
    };

    window.addEventListener('mousemove', handleMouseMove);

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      const width = window.innerWidth;
      const height = window.innerHeight;
      
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      
      ctx.scale(dpr, dpr);
      
      initializeNetwork();
    };

    // Generate asymmetric fractal branch
    const createFractalBranch = (
      startX: number,
      startY: number,
      startZ: number,
      dirX: number,
      dirY: number,
      dirZ: number,
      length: number,
      depth: number,
      maxDepth: number,
      color: string,
      branchAngleVariation: number = 0
    ) => {
      if (depth > maxDepth) return;

      // Calculate end point
      const endX = startX + dirX * length;
      const endY = startY + dirY * length;
      const endZ = startZ + dirZ * length;

      // Add segment
      segments.push({
        x1: startX,
        y1: startY,
        z1: startZ,
        x2: endX,
        y2: endY,
        z2: endZ,
        depth,
        baseOpacity: 0.08 + (maxDepth - depth) * 0.04,
        activity: 0,
        color,
        thickness: 0.8 + (maxDepth - depth) * 0.4,
        connections: [],
        isOccupied: false,
      });

      // Add node at branch point
      nodes.push({
        x: endX,
        y: endY,
        z: endZ,
        size: 1.5 + (maxDepth - depth) * 0.6,
        color,
      });

      // Create asymmetric branches
      const numBranches = depth === 0 ? 3 : Math.random() > 0.5 ? 2 : 3;
      const lengthDecay = 0.55 + Math.random() * 0.25;
      
      for (let i = 0; i < numBranches; i++) {
        // Asymmetric angle variations
        const baseAngle = (i / numBranches) * Math.PI * 2 + branchAngleVariation;
        const angleVariation = (Math.random() - 0.5) * Math.PI * 0.9;
        const elevationVariation = (Math.random() - 0.5) * Math.PI * 0.6;
        
        // Create rotation matrix for branch direction
        const angle = baseAngle + angleVariation;
        const elevation = elevationVariation;
        
        // Calculate perpendicular vectors
        const perpX = Math.cos(angle);
        const perpY = Math.sin(angle) * Math.cos(elevation);
        const perpZ = Math.sin(angle) * Math.sin(elevation);
        
        // Mix with parent direction for organic look
        const mixFactor = 0.3 + Math.random() * 0.3;
        const newDirX = dirX * (1 - mixFactor) + perpX * mixFactor;
        const newDirY = dirY * (1 - mixFactor) + perpY * mixFactor;
        const newDirZ = dirZ * (1 - mixFactor) + perpZ * mixFactor;
        
        // Normalize
        const mag = Math.sqrt(newDirX * newDirX + newDirY * newDirY + newDirZ * newDirZ);
        
        createFractalBranch(
          endX, endY, endZ,
          newDirX / mag, newDirY / mag, newDirZ / mag,
          length * lengthDecay * (0.75 + Math.random() * 0.5),
          depth + 1,
          maxDepth,
          color,
          branchAngleVariation + (Math.random() - 0.5) * 0.4
        );
      }
    };

    const initializeNetwork = () => {
      segments = [];
      nodes = [];

      const colors = ['blue', 'purple', 'cyan'];
      const numFractals = 15; // Reduced for performance
      const spread = Math.max(canvas.width, canvas.height) * 0.8;
      
      // Create multiple fractals
      for (let i = 0; i < numFractals; i++) {
        const angle = (i / numFractals) * Math.PI * 2 + Math.random() * 0.5;
        const radius = spread * 0.3 + Math.random() * spread * 0.2;
        
        const startX = Math.cos(angle) * radius;
        const startY = Math.sin(angle) * radius;
        const startZ = (Math.random() - 0.5) * 300;
        
        const centerBias = 0.35;
        const dirToCenter = { x: -startX, y: -startY, z: -startZ };
        const mag = Math.sqrt(dirToCenter.x ** 2 + dirToCenter.y ** 2 + dirToCenter.z ** 2);
        
        const randomDir = {
          x: (Math.random() - 0.5) * 2,
          y: (Math.random() - 0.5) * 2,
          z: (Math.random() - 0.5) * 2,
        };
        const randomMag = Math.sqrt(randomDir.x ** 2 + randomDir.y ** 2 + randomDir.z ** 2);
        
        const finalDirX = (dirToCenter.x / mag) * centerBias + (randomDir.x / randomMag) * (1 - centerBias);
        const finalDirY = (dirToCenter.y / mag) * centerBias + (randomDir.y / randomMag) * (1 - centerBias);
        const finalDirZ = (dirToCenter.z / mag) * centerBias + (randomDir.z / randomMag) * (1 - centerBias);
        const finalMag = Math.sqrt(finalDirX ** 2 + finalDirY ** 2 + finalDirZ ** 2);
        
        createFractalBranch(
          startX, startY, startZ,
          finalDirX / finalMag, finalDirY / finalMag, finalDirZ / finalMag,
          spread * 0.15 + Math.random() * spread * 0.1,
          0,
          5, // Reverted depth for performance
          colors[i % colors.length],
          Math.random() * Math.PI * 2
        );
      }

      // Create interconnections between nearby segments
      // Optimization: Use squared distance to avoid Math.sqrt in the loop
      const threshold = spread * 0.15;
      const thresholdSq = threshold * threshold;

      for (let i = 0; i < segments.length; i++) {
        const s1 = segments[i];
        // Only check a subset of segments to keep it O(N*K) instead of O(N^2)
        // or just use a faster loop
        for (let j = i + 1; j < segments.length; j++) {
          const s2 = segments[j];
          
          // Check distance between end of s1 and start/end of s2
          const dx = s1.x2 - s2.x1;
          const dy = s1.y2 - s2.y1;
          const dz = s1.z2 - s2.z1;
          const distSq = dx*dx + dy*dy + dz*dz;
          
          if (distSq < thresholdSq) {
            s1.connections.push(j);
            s2.connections.push(i);
          }
        }
      }

      // Find Largest Connected Component (LCC) to ensure all threads are connected
      if (segments.length > 0) {
        const visited = new Set<number>();
        const components: number[][] = [];
        
        for (let i = 0; i < segments.length; i++) {
          if (!visited.has(i)) {
            const component: number[] = [];
            const queue = [i];
            visited.add(i);
            while (queue.length > 0) {
              const curr = queue.shift()!;
              component.push(curr);
              segments[curr].connections.forEach(next => {
                if (!visited.has(next)) {
                  visited.add(next);
                  queue.push(next);
                }
              });
            }
            components.push(component);
          }
        }
        
        // Sort components by size and pick the largest
        components.sort((a, b) => b.length - a.length);
        const lccIndices = new Set(components[0] || []);
        
        // Filter segments and rebuild connections
        const oldToNew = new Map<number, number>();
        const filteredSegments: FractalSegment[] = [];
        
        segments.forEach((s, i) => {
          if (lccIndices.has(i)) {
            oldToNew.set(i, filteredSegments.length);
            filteredSegments.push(s);
          }
        });
        
        // Update connections with new indices
        filteredSegments.forEach(s => {
          s.connections = s.connections
            .filter(oldIdx => lccIndices.has(oldIdx))
            .map(oldIdx => oldToNew.get(oldIdx)!);
        });
        
        segments = filteredSegments;

        // Rebuild nodes list from remaining segments to ensure no floating nodes
        const newNodes: FractalNode[] = [];
        const nodeKey = (x: number, y: number, z: number) => 
          `${Math.round(x)},${Math.round(y)},${Math.round(z)}`;
        const seenNodes = new Set<string>();

        segments.forEach(s => {
          [ {x: s.x1, y: s.y1, z: s.z1}, {x: s.x2, y: s.y2, z: s.z2} ].forEach(p => {
            const key = nodeKey(p.x, p.y, p.z);
            if (!seenNodes.has(key)) {
              seenNodes.add(key);
              newNodes.push({
                x: p.x, y: p.y, z: p.z,
                size: 1.5 + (5 - s.depth) * 0.6,
                color: s.color
              });
            }
          });
        });
        nodes = newNodes;
      }

      // Initialize particles
      particles = [];
      for (let i = 0; i < 400; i++) {
        const p = {
          x: 0, y: 0, fromX: 0, fromY: 0, fromZ: 0, toX: 0, toY: 0, toZ: 0,
          progress: 0, speed: 0, size: 0, opacity: 0, segmentIndex: 0
        };
        resetParticle(p);
        particles.push(p);
      }
    };

    const resetParticle = (particle: Particle, segmentIndex?: number) => {
      if (segments.length === 0) return;
      
      // Free old segment
      if (segments[particle.segmentIndex]) {
        segments[particle.segmentIndex].isOccupied = false;
      }

      let idx = segmentIndex !== undefined ? segmentIndex : Math.floor(Math.random() * segments.length);
      
      // If the chosen segment is occupied, try to find a free one (up to 10 attempts)
      if (segments[idx].isOccupied) {
        for (let i = 0; i < 10; i++) {
          const randomIdx = Math.floor(Math.random() * segments.length);
          if (!segments[randomIdx].isOccupied) {
            idx = randomIdx;
            break;
          }
        }
      }

      const segment = segments[idx];
      segment.isOccupied = true;
      const reverse = Math.random() > 0.5;
      
      particle.fromX = reverse ? segment.x2 : segment.x1;
      particle.fromY = reverse ? segment.y2 : segment.y1;
      particle.fromZ = reverse ? segment.z2 : segment.z1;
      particle.toX = reverse ? segment.x1 : segment.x2;
      particle.toY = reverse ? segment.y1 : segment.y2;
      particle.toZ = reverse ? segment.z1 : segment.z2;
      particle.x = particle.fromX;
      particle.y = particle.fromY;
      particle.progress = 0;
      particle.speed = 0.002 + Math.random() * 0.004;
      particle.size = 1 + Math.random() * 1.5;
      particle.opacity = 0.5 + Math.random() * 0.3;
      particle.segmentIndex = idx;
    };

    // Reusable objects to reduce GC
    const tempPoint = { x: 0, y: 0, z: 0 };
    const tempProj = { x: 0, y: 0, scale: 0, z: 0 };

    const transformPointMutate = (
      x: number, 
      y: number, 
      z: number, 
      cosY: number, 
      sinY: number, 
      cosX: number, 
      sinX: number,
      camZ: number,
      out: { x: number, y: number, z: number }
    ) => {
      // Rotate around Y axis
      const rotX = x * cosY - z * sinY;
      const rotZ_temp = x * sinY + z * cosY;
      
      // Rotate around X axis
      const rotY = y * cosX - rotZ_temp * sinX;
      const rotZ = y * sinX + rotZ_temp * cosX;
      
      out.x = rotX;
      out.y = rotY;
      out.z = rotZ + camZ;
    };

    const project3DMutate = (
      x: number, 
      y: number, 
      z: number, 
      centerX: number, 
      centerY: number,
      out: { x: number, y: number, scale: number, z: number }
    ) => {
      const perspective = 800;
      const scale = perspective / (perspective + z);
      out.x = centerX + x * scale;
      out.y = centerY + y * scale;
      out.scale = scale;
      out.z = z;
    };

    const getLineColor = (color: string, opacity: number) => {
      switch (color) {
        case 'blue':
          return `rgba(59, 130, 246, ${opacity})`;
        case 'purple':
          return `rgba(168, 85, 247, ${opacity})`;
        case 'cyan':
          return `rgba(34, 211, 238, ${opacity})`;
        default:
          return `rgba(96, 165, 250, ${opacity})`;
      }
    };

    const getLineGlowColor = (color: string, opacity: number) => {
      switch (color) {
        case 'blue':
          return `rgba(147, 197, 253, ${opacity})`;
        case 'purple':
          return `rgba(216, 180, 254, ${opacity})`;
        case 'cyan':
          return `rgba(103, 232, 249, ${opacity})`;
        default:
          return `rgba(147, 197, 253, ${opacity})`;
      }
    };

    const drawSegment = (
      segment: FractalSegment, 
      centerX: number, 
      centerY: number, 
      cosY: number, 
      sinY: number, 
      cosX: number, 
      sinX: number,
      camZ: number
    ) => {
      // Transform point 1
      transformPointMutate(segment.x1, segment.y1, segment.z1, cosY, sinY, cosX, sinX, camZ, tempPoint);
      if (tempPoint.z < -500) return { avgZ: -1000, visible: false };
      project3DMutate(tempPoint.x, tempPoint.y, tempPoint.z, centerX, centerY, tempProj);
      const x1 = tempProj.x;
      const y1 = tempProj.y;
      const z1 = tempProj.z;
      const scale1 = tempProj.scale;

      // Transform point 2
      transformPointMutate(segment.x2, segment.y2, segment.z2, cosY, sinY, cosX, sinX, camZ, tempPoint);
      if (tempPoint.z < -500) return { avgZ: -1000, visible: false };
      project3DMutate(tempPoint.x, tempPoint.y, tempPoint.z, centerX, centerY, tempProj);
      const x2 = tempProj.x;
      const y2 = tempProj.y;
      const z2 = tempProj.z;

      const avgZ = (z1 + z2) / 2;
      const depthFactor = Math.max(0.05, Math.min(1, 1 - avgZ / 2000));
      const totalOpacity = (segment.baseOpacity + segment.activity * 0.7) * depthFactor;
      
      // Optimization: Use solid color instead of gradient for performance
      // The gradient was 0.5 -> 1.0 -> 0.5 opacity. We use 0.8 as an approximation.
      ctx.strokeStyle = getLineColor(segment.color, totalOpacity * 0.8);
      ctx.lineWidth = Math.max(0.5, (segment.thickness + segment.activity * 1.5) * scale1);
      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.stroke();

      if (segment.activity > 0.3) {
        ctx.strokeStyle = getLineGlowColor(segment.color, segment.activity * 0.5 * depthFactor);
        ctx.lineWidth = Math.max(1, (segment.thickness * 2 + segment.activity * 3) * scale1);
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();
      }

      segment.activity *= 0.94;
      
      return { avgZ, visible: true };
    };

    const drawNode = (
      node: FractalNode,
      centerX: number,
      centerY: number,
      cosY: number, 
      sinY: number, 
      cosX: number, 
      sinX: number,
      camZ: number
    ) => {
      transformPointMutate(node.x, node.y, node.z, cosY, sinY, cosX, sinX, camZ, tempPoint);
      
      if (tempPoint.z < -500 || tempPoint.z > 2000) return;
      
      project3DMutate(tempPoint.x, tempPoint.y, tempPoint.z, centerX, centerY, tempProj);
      const depthFactor = Math.max(0.1, Math.min(1, 1 - tempProj.z / 2000));
      
      const nodeSize = node.size * tempProj.scale;
      
      const gradient = ctx.createRadialGradient(
        tempProj.x, tempProj.y, 0,
        tempProj.x, tempProj.y, nodeSize * 2
      );
      
      const glowColor = getLineGlowColor(node.color, 0.3 * depthFactor);
      gradient.addColorStop(0, `rgba(255, 255, 255, ${0.6 * depthFactor})`);
      gradient.addColorStop(0.4, glowColor);
      gradient.addColorStop(1, 'rgba(59, 130, 246, 0)');
      
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(tempProj.x, tempProj.y, nodeSize * 2, 0, Math.PI * 2);
      ctx.fill();
      
      ctx.fillStyle = getLineColor(node.color, 0.8 * depthFactor);
      ctx.beginPath();
      ctx.arc(tempProj.x, tempProj.y, nodeSize, 0, Math.PI * 2);
      ctx.fill();
    };

    const drawParticle = (
      particle: Particle, 
      centerX: number, 
      centerY: number, 
      cosY: number, 
      sinY: number, 
      cosX: number, 
      sinX: number,
      camZ: number
    ) => {
      const currentZ = particle.fromZ + (particle.toZ - particle.fromZ) * particle.progress;
      const currentX = particle.fromX + (particle.toX - particle.fromX) * particle.progress;
      const currentY = particle.fromY + (particle.toY - particle.fromY) * particle.progress;

      transformPointMutate(currentX, currentY, currentZ, cosY, sinY, cosX, sinX, camZ, tempPoint);
      
      if (tempPoint.z < -500 || tempPoint.z > 2000) return;
      
      project3DMutate(tempPoint.x, tempPoint.y, tempPoint.z, centerX, centerY, tempProj);
      
      const segment = segments[particle.segmentIndex];
      if (!segment) return;
      
      const depthFactor = Math.max(0.1, Math.min(1, 1 - tempProj.z / 2000));
      const finalOpacity = particle.opacity * depthFactor;
      
      // Calculate beam direction based on segment projection
      // We need the projected start and end points of the segment to align the beam
      // Optimization: We can approximate direction using the particle's movement
      // But for perfect alignment, let's project the 'to' point
      transformPointMutate(particle.toX, particle.toY, particle.toZ, cosY, sinY, cosX, sinX, camZ, tempPoint);
      project3DMutate(tempPoint.x, tempPoint.y, tempPoint.z, centerX, centerY, tempProj); // Reusing tempProj for 'to' point
      const toX = tempProj.x;
      const toY = tempProj.y;
      
      // Restore current particle position (we overwrote tempProj)
      transformPointMutate(currentX, currentY, currentZ, cosY, sinY, cosX, sinX, camZ, tempPoint);
      project3DMutate(tempPoint.x, tempPoint.y, tempPoint.z, centerX, centerY, tempProj);
      const curX = tempProj.x;
      const curY = tempProj.y;

      const dx = toX - curX;
      const dy = toY - curY;
      const angle = Math.atan2(dy, dx);
      const dotSize = particle.size * tempProj.scale;
      const pulseLength = dotSize * 12; // Localized thickening length

      ctx.save();
      ctx.translate(curX, curY);
      ctx.rotate(angle);

      // Localized thickening (the 'pulse')
      // We draw it centered at (0,0) which is the current particle position
      const pulseGradient = ctx.createLinearGradient(-pulseLength / 2, 0, pulseLength / 2, 0);
      pulseGradient.addColorStop(0, `rgba(255, 255, 255, 0)`);
      pulseGradient.addColorStop(0.5, getLineColor(segment.color, finalOpacity * 0.5));
      pulseGradient.addColorStop(1, `rgba(255, 255, 255, 0)`);

      ctx.strokeStyle = pulseGradient;
      ctx.lineWidth = dotSize * 2.2; // Noticeably thicker but localized
      ctx.lineCap = 'round';
      ctx.beginPath();
      ctx.moveTo(-pulseLength / 2, 0);
      ctx.lineTo(pulseLength / 2, 0);
      ctx.stroke();
      
      // Localized glow
      ctx.globalCompositeOperation = 'lighter';
      const glowGradient = ctx.createRadialGradient(0, 0, 0, 0, 0, dotSize * 4);
      glowGradient.addColorStop(0, getLineGlowColor(segment.color, finalOpacity * 0.4));
      glowGradient.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.fillStyle = glowGradient;
      ctx.beginPath();
      ctx.arc(0, 0, dotSize * 4, 0, Math.PI * 2);
      ctx.fill();
      ctx.globalCompositeOperation = 'source-over';

      // Sharp white dot (the packet)
      ctx.fillStyle = `rgba(255, 255, 255, ${finalOpacity})`;
      ctx.beginPath();
      ctx.arc(0, 0, dotSize, 0, Math.PI * 2);
      ctx.fill();

      ctx.restore();

      segment.activity = Math.max(segment.activity, 1 - Math.abs(particle.progress - 0.5) * 1.5);
    };

    const animate = (time: number) => {
      // Throttle to 30 FPS
      const fps = 30;
      const interval = 1000 / fps;
      if (!lastTimeRef.current) {
        lastTimeRef.current = time;
      }

      const deltaTime = time - lastTimeRef.current;
      
      if (deltaTime < interval) {
        animationFrameId = requestAnimationFrame(animate);
        return;
      }
      
      lastTimeRef.current = time - (deltaTime % interval);

      // Adjust physics for time delta (normalized to 60fps)
      const timeScale = deltaTime / 16.67;

      // Clear with fade effect for trails - adjusted for timeScale
      // We want the fade to be consistent in real-time
      // alpha 0.3 at 60fps means retaining 0.7 opacity
      // at 30fps (2x time), we want to retain 0.7^2 = 0.49 opacity -> fade 0.51
      const fadeAlpha = 1 - Math.pow(0.7, timeScale);
      ctx.fillStyle = `rgba(10, 10, 10, ${Math.min(1, fadeAlpha)})`;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;

      // Use actual time for smooth animation regardless of framerate
      const animTime = Date.now() * 0.0001;
      
      // Interactive camera with smoothing
      const targetCameraAngleY = mouseRef.current.x * 0.5 + 0.002 * timeScale; // Add constant rotation
      const targetCameraAngleX = mouseRef.current.y * 0.2 + Math.sin(animTime * 0.6) * 0.2;
      
      // Smooth interpolation (lerp)
      const lerpFactor = 0.05 * timeScale;
      const prevAngleY = cameraAngleY;
      cameraAngleY += (targetCameraAngleY - cameraAngleY) * lerpFactor;
      cameraAngleX += (targetCameraAngleX - cameraAngleX) * lerpFactor;
      
      // Calculate rotation velocity to tie particle speed to turning pace
      const rotationVelocity = Math.abs(cameraAngleY - prevAngleY) / timeScale;
      const speedMultiplier = 1 + rotationVelocity * 150; // Boost speed based on turning
      
      cameraZ = Math.sin(animTime * 0.4) * 200;

      // Pre-calculate trig values
      const cosY = Math.cos(cameraAngleY);
      const sinY = Math.sin(cameraAngleY);
      const cosX = Math.cos(cameraAngleX);
      const sinX = Math.sin(cameraAngleX);

      // Sort segments by depth and cache transformed points
      // We use a reusable array to avoid GC, resizing if necessary
      const renderableSegments: { 
        index: number; 
        avgZ: number;
        p1: { x: number, y: number, z: number };
        p2: { x: number, y: number, z: number };
      }[] = [];

      segments.forEach((segment, index) => {
        // Transform p1
        transformPointMutate(segment.x1, segment.y1, segment.z1, cosY, sinY, cosX, sinX, cameraZ, tempPoint);
        const p1 = { x: tempPoint.x, y: tempPoint.y, z: tempPoint.z };
        
        // Transform p2
        transformPointMutate(segment.x2, segment.y2, segment.z2, cosY, sinY, cosX, sinX, cameraZ, tempPoint);
        const p2 = { x: tempPoint.x, y: tempPoint.y, z: tempPoint.z };
        
        const avgZ = (p1.z + p2.z) / 2;
        
        // Culling: only add if at least one point is in front of the camera (approx)
        if (p1.z > -500 || p2.z > -500) {
          renderableSegments.push({ index, avgZ, p1, p2 });
        }
      });

      renderableSegments.sort((a, b) => a.avgZ - b.avgZ);

      // Draw segments using cached transformed points with batching
      // We quantize opacity and width to group draw calls
      let currentStrokeStyle = '';
      let currentLineWidth = 0;
      let pendingBatch = false;

      ctx.beginPath();

      renderableSegments.forEach(({ index, p1, p2 }) => {
        const segment = segments[index];
        
        // Project p1
        project3DMutate(p1.x, p1.y, p1.z, centerX, centerY, tempProj);
        const x1 = tempProj.x;
        const y1 = tempProj.y;
        const scale1 = tempProj.scale;

        // Project p2
        project3DMutate(p2.x, p2.y, p2.z, centerX, centerY, tempProj);
        const x2 = tempProj.x;
        const y2 = tempProj.y;

        // Screen-space culling: skip if completely off-screen
        const minX = Math.min(x1, x2);
        const maxX = Math.max(x1, x2);
        const minY = Math.min(y1, y2);
        const maxY = Math.max(y1, y2);

        if (maxX < 0 || minX > canvas.width || maxY < 0 || minY > canvas.height) {
          return;
        }

        const avgZ = (p1.z + p2.z) / 2;
        const depthFactor = Math.max(0.05, Math.min(1, 1 - avgZ / 2000));
        
        // Quantize opacity to 0.05 steps to allow batching
        const rawOpacity = segment.baseOpacity * depthFactor * 0.8;
        const quantizedOpacity = Math.round(rawOpacity * 20) / 20;
        
        // Quantize width to 0.1 steps - Activity removed to keep network stable
        const rawWidth = Math.max(0.5, segment.thickness * scale1);
        const quantizedWidth = Math.round(rawWidth * 10) / 10;

        const strokeStyle = getLineColor(segment.color, quantizedOpacity);

        // If style changed, flush the batch
        if (strokeStyle !== currentStrokeStyle || quantizedWidth !== currentLineWidth) {
          if (pendingBatch) {
            ctx.stroke();
            ctx.beginPath();
          }
          currentStrokeStyle = strokeStyle;
          currentLineWidth = quantizedWidth;
          ctx.strokeStyle = currentStrokeStyle;
          ctx.lineWidth = currentLineWidth;
          pendingBatch = true;
        }

        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);

        // Segment-wide glow removed to prevent breaking the connected effect
        
        // Time-based decay still happens to track segment usage if needed
        segment.activity *= Math.pow(0.94, timeScale);
      });
      
      if (pendingBatch) {
        ctx.stroke();
      }

      // Draw nodes
      nodes.forEach((node) => {
        drawNode(node, centerX, centerY, cosY, sinY, cosX, sinX, cameraZ);
      });

      // Update and draw particles
      particles.forEach((particle) => {
        // Time-based movement scaled by rotation pace
        particle.progress += particle.speed * timeScale * speedMultiplier;

        if (particle.progress >= 1) {
          const currentSegment = segments[particle.segmentIndex];
          if (currentSegment) {
            currentSegment.isOccupied = false; // Free current segment
          } else {
            resetParticle(particle);
            return;
          }
          
          const connectedSegments = currentSegment.connections;
          const freeConnections = connectedSegments.filter(idx => !segments[idx].isOccupied);

          if (freeConnections.length > 0 && Math.random() < 0.95) {
            const nextSegmentIndex = freeConnections[Math.floor(Math.random() * freeConnections.length)];
            const nextSegment = segments[nextSegmentIndex];
            
            if (nextSegment) {
              nextSegment.isOccupied = true; // Occupy next segment
              const distToStart = Math.sqrt(
                Math.pow(nextSegment.x1 - particle.toX, 2) + 
                Math.pow(nextSegment.y1 - particle.toY, 2) + 
                Math.pow(nextSegment.z1 - particle.toZ, 2)
              );
              const distToEnd = Math.sqrt(
                Math.pow(nextSegment.x2 - particle.toX, 2) + 
                Math.pow(nextSegment.y2 - particle.toY, 2) + 
                Math.pow(nextSegment.z2 - particle.toZ, 2)
              );
              
              const startFromBeginning = distToStart < distToEnd;
              
              // Mutate existing particle instead of pushing new one
              particle.fromX = startFromBeginning ? nextSegment.x1 : nextSegment.x2;
              particle.fromY = startFromBeginning ? nextSegment.y1 : nextSegment.y2;
              particle.fromZ = startFromBeginning ? nextSegment.z1 : nextSegment.z2;
              particle.toX = startFromBeginning ? nextSegment.x2 : nextSegment.x1;
              particle.toY = startFromBeginning ? nextSegment.y2 : nextSegment.y1;
              particle.toZ = startFromBeginning ? nextSegment.z2 : nextSegment.z1;
              particle.progress = 0;
              particle.speed = particle.speed * (0.95 + Math.random() * 0.1);
              particle.opacity = particle.opacity * 0.98;
              particle.segmentIndex = nextSegmentIndex;
              
              // If opacity gets too low, reset to a random segment to keep it fresh
              if (particle.opacity < 0.1) {
                resetParticle(particle);
              }
            } else {
              resetParticle(particle);
            }
          } else {
            resetParticle(particle);
          }
        }

        drawParticle(particle, centerX, centerY, cosY, sinY, cosX, sinX, cameraZ);
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    resize();
    window.addEventListener('resize', resize);
    animationFrameId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ background: '#0a0a0a' }}
    />
  );
}
