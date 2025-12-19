import { useEffect, useRef, useState } from 'react';

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
}

interface FractalNode {
  x: number;
  y: number;
  z: number;
  size: number;
  color: string;
}

export function NeuralNetworkBox() {
  const neuralCanvasRef = useRef<HTMLCanvasElement>(null);
  const neuralBoxRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  // Neural network box effect
  useEffect(() => {
    const canvas = neuralCanvasRef.current;
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

    const boxSize = 300;
    canvas.width = boxSize;
    canvas.height = boxSize;

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
      const segmentIndex = segments.length;
      segments.push({
        x1: startX,
        y1: startY,
        z1: startZ,
        x2: endX,
        y2: endY,
        z2: endZ,
        depth,
        baseOpacity: 0.15 + (maxDepth - depth) * 0.08,
        activity: 0,
        color,
        thickness: 1 + (maxDepth - depth) * 0.5,
        connections: [],
      });

      // Add node at branch point
      nodes.push({
        x: endX,
        y: endY,
        z: endZ,
        size: 2 + (maxDepth - depth) * 0.8,
        color,
      });

      // Create asymmetric branches
      const numBranches = depth === 0 ? 3 : Math.random() > 0.5 ? 2 : 3;
      const lengthDecay = 0.6 + Math.random() * 0.2;
      
      for (let i = 0; i < numBranches; i++) {
        // Asymmetric angle variations
        const baseAngle = (i / numBranches) * Math.PI * 2 + branchAngleVariation;
        const angleVariation = (Math.random() - 0.5) * Math.PI * 0.8;
        const elevationVariation = (Math.random() - 0.5) * Math.PI * 0.5;
        
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
          length * lengthDecay * (0.8 + Math.random() * 0.4),
          depth + 1,
          maxDepth,
          color,
          branchAngleVariation + (Math.random() - 0.5) * 0.3
        );
      }
    };

    const initializeNetwork = () => {
      segments = [];
      nodes = [];

      const colors = ['blue', 'purple', 'cyan'];
      const numFractals = 5;
      
      // Create multiple interconnected fractals
      for (let i = 0; i < numFractals; i++) {
        const angle = (i / numFractals) * Math.PI * 2 + Math.random() * 0.5;
        const radius = 40 + Math.random() * 30;
        
        const startX = Math.cos(angle) * radius;
        const startY = Math.sin(angle) * radius;
        const startZ = (Math.random() - 0.5) * 60;
        
        // Initial direction pointing somewhat toward center with variation
        const centerBias = 0.4;
        const dirToCenter = {
          x: -startX,
          y: -startY,
          z: -startZ,
        };
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
          40 + Math.random() * 30,
          0,
          4 + Math.floor(Math.random() * 2),
          colors[i % colors.length],
          Math.random() * Math.PI * 2
        );
      }

      // Create interconnections between nearby segments
      segments.forEach((segment, i) => {
        const segmentEnd = { x: segment.x2, y: segment.y2, z: segment.z2 };
        
        segments.forEach((otherSegment, j) => {
          if (i === j) return;
          
          const otherStart = { x: otherSegment.x1, y: otherSegment.y1, z: otherSegment.z1 };
          const otherEnd = { x: otherSegment.x2, y: otherSegment.y2, z: otherSegment.z2 };
          
          const distToStart = Math.sqrt(
            (segmentEnd.x - otherStart.x) ** 2 +
            (segmentEnd.y - otherStart.y) ** 2 +
            (segmentEnd.z - otherStart.z) ** 2
          );
          
          const distToEnd = Math.sqrt(
            (segmentEnd.x - otherEnd.x) ** 2 +
            (segmentEnd.y - otherEnd.y) ** 2 +
            (segmentEnd.z - otherEnd.z) ** 2
          );
          
          if (distToStart < 30 || distToEnd < 30) {
            segment.connections.push(j);
          }
        });
      });

      // Initialize particles
      particles = [];
      for (let i = 0; i < 25; i++) {
        createParticle();
      }
    };

    const createParticle = () => {
      if (segments.length === 0) return;
      
      const segmentIndex = Math.floor(Math.random() * segments.length);
      const segment = segments[segmentIndex];
      const reverse = Math.random() > 0.5;
      
      particles.push({
        x: reverse ? segment.x2 : segment.x1,
        y: reverse ? segment.y2 : segment.y1,
        fromX: reverse ? segment.x2 : segment.x1,
        fromY: reverse ? segment.y2 : segment.y1,
        fromZ: reverse ? segment.z2 : segment.z1,
        toX: reverse ? segment.x1 : segment.x2,
        toY: reverse ? segment.y1 : segment.y2,
        toZ: reverse ? segment.z1 : segment.z2,
        progress: 0,
        speed: 0.004 + Math.random() * 0.008,
        size: 1.5 + Math.random() * 1.5,
        opacity: 0.7 + Math.random() * 0.3,
        segmentIndex,
      });
    };

    const transformPoint = (
      x: number, 
      y: number, 
      z: number, 
      angleY: number, 
      angleX: number, 
      camZ: number,
      jiggleOffsetX: number = 0,
      jiggleOffsetY: number = 0
    ) => {
      // Apply jiggle offset
      let newX = x + jiggleOffsetX;
      let newY = y + jiggleOffsetY;
      let newZ = z;
      
      // Rotate around Y axis
      let rotatedX = newX * Math.cos(angleY) - newZ * Math.sin(angleY);
      let rotatedZ = newX * Math.sin(angleY) + newZ * Math.cos(angleY);
      
      // Rotate around X axis
      let rotatedY = newY * Math.cos(angleX) - rotatedZ * Math.sin(angleX);
      rotatedZ = newY * Math.sin(angleX) + rotatedZ * Math.cos(angleX);
      
      // Apply camera Z position
      rotatedZ += camZ;
      
      return { x: rotatedX, y: rotatedY, z: rotatedZ };
    };

    const project3D = (x: number, y: number, z: number, centerX: number, centerY: number) => {
      const perspective = 400;
      const scale = perspective / (perspective + z);
      
      return {
        x: centerX + x * scale,
        y: centerY + y * scale,
        scale,
        z,
      };
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
      angleY: number, 
      angleX: number,
      camZ: number,
      jiggleOffsetX: number,
      jiggleOffsetY: number
    ) => {
      const transformed1 = transformPoint(segment.x1, segment.y1, segment.z1, angleY, angleX, camZ, jiggleOffsetX, jiggleOffsetY);
      const transformed2 = transformPoint(segment.x2, segment.y2, segment.z2, angleY, angleX, camZ, jiggleOffsetX, jiggleOffsetY);
      
      if (transformed1.z < -300 || transformed2.z < -300) {
        return { avgZ: -1000, visible: false };
      }
      
      const proj1 = project3D(transformed1.x, transformed1.y, transformed1.z, centerX, centerY);
      const proj2 = project3D(transformed2.x, transformed2.y, transformed2.z, centerX, centerY);
      
      const avgZ = (transformed1.z + transformed2.z) / 2;
      const depthFactor = Math.max(0.1, Math.min(1, 1 - avgZ / 1000));
      const totalOpacity = (segment.baseOpacity + segment.activity * 0.9) * depthFactor;
      
      const gradient = ctx.createLinearGradient(proj1.x, proj1.y, proj2.x, proj2.y);
      gradient.addColorStop(0, getLineColor(segment.color, totalOpacity * 0.6));
      gradient.addColorStop(0.5, getLineColor(segment.color, totalOpacity));
      gradient.addColorStop(1, getLineColor(segment.color, totalOpacity * 0.6));

      ctx.strokeStyle = gradient;
      ctx.lineWidth = Math.max(0.5, (segment.thickness + segment.activity * 2) * proj1.scale);
      ctx.beginPath();
      ctx.moveTo(proj1.x, proj1.y);
      ctx.lineTo(proj2.x, proj2.y);
      ctx.stroke();

      if (segment.activity > 0.3) {
        ctx.strokeStyle = getLineGlowColor(segment.color, segment.activity * 0.6 * depthFactor);
        ctx.lineWidth = Math.max(1, (segment.thickness * 2 + segment.activity * 4) * proj1.scale);
        ctx.beginPath();
        ctx.moveTo(proj1.x, proj1.y);
        ctx.lineTo(proj2.x, proj2.y);
        ctx.stroke();
      }

      segment.activity *= 0.93;
      
      return { avgZ, visible: true };
    };

    const drawNode = (
      node: FractalNode,
      centerX: number,
      centerY: number,
      angleY: number,
      angleX: number,
      camZ: number,
      jiggleOffsetX: number,
      jiggleOffsetY: number
    ) => {
      const transformed = transformPoint(node.x, node.y, node.z, angleY, angleX, camZ, jiggleOffsetX, jiggleOffsetY);
      
      if (transformed.z < -300 || transformed.z > 1000) return;
      
      const proj = project3D(transformed.x, transformed.y, transformed.z, centerX, centerY);
      const depthFactor = Math.max(0.2, Math.min(1, 1 - transformed.z / 1000));
      
      const nodeSize = node.size * proj.scale;
      
      const gradient = ctx.createRadialGradient(
        proj.x, proj.y, 0,
        proj.x, proj.y, nodeSize * 2.5
      );
      
      const glowColor = getLineGlowColor(node.color, 0.4 * depthFactor);
      gradient.addColorStop(0, `rgba(255, 255, 255, ${0.8 * depthFactor})`);
      gradient.addColorStop(0.4, glowColor);
      gradient.addColorStop(1, 'rgba(59, 130, 246, 0)');
      
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(proj.x, proj.y, nodeSize * 2.5, 0, Math.PI * 2);
      ctx.fill();
      
      ctx.fillStyle = getLineColor(node.color, 0.9 * depthFactor);
      ctx.beginPath();
      ctx.arc(proj.x, proj.y, nodeSize, 0, Math.PI * 2);
      ctx.fill();
    };

    const drawParticle = (
      particle: Particle, 
      centerX: number, 
      centerY: number, 
      angleY: number, 
      angleX: number,
      camZ: number,
      jiggleOffsetX: number,
      jiggleOffsetY: number
    ) => {
      const currentZ = particle.fromZ + (particle.toZ - particle.fromZ) * particle.progress;
      const currentX = particle.fromX + (particle.toX - particle.fromX) * particle.progress;
      const currentY = particle.fromY + (particle.toY - particle.fromY) * particle.progress;

      const transformed = transformPoint(currentX, currentY, currentZ, angleY, angleX, camZ, jiggleOffsetX, jiggleOffsetY);
      
      if (transformed.z < -300 || transformed.z > 1000) return;
      
      const proj = project3D(transformed.x, transformed.y, transformed.z, centerX, centerY);
      
      const segment = segments[particle.segmentIndex];
      if (!segment) return;
      
      const depthFactor = Math.max(0.2, Math.min(1, 1 - transformed.z / 1000));
      const finalOpacity = particle.opacity * depthFactor;
      
      const glowSize = particle.size * 5 * proj.scale;
      const gradient = ctx.createRadialGradient(
        proj.x, proj.y, 0,
        proj.x, proj.y, glowSize
      );
      
      const glowColor = getLineGlowColor(segment.color, finalOpacity * 0.8);
      
      gradient.addColorStop(0, `rgba(255, 255, 255, ${finalOpacity})`);
      gradient.addColorStop(0.3, glowColor);
      gradient.addColorStop(1, 'rgba(59, 130, 246, 0)');

      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(proj.x, proj.y, glowSize, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = `rgba(255, 255, 255, ${finalOpacity * 1.2})`;
      ctx.beginPath();
      ctx.arc(proj.x, proj.y, particle.size * proj.scale * 1.2, 0, Math.PI * 2);
      ctx.fill();

      segment.activity = Math.max(segment.activity, 1 - Math.abs(particle.progress - 0.5) * 1.5);
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;

      const time = Date.now() * 0.0001;
      cameraAngleY += 0.003;
      cameraAngleX = Math.sin(time * 0.8) * 0.3;
      cameraZ = Math.sin(time * 0.5) * 150;

      // Calculate jiggle offset when hovering
      let jiggleOffsetX = 0;
      let jiggleOffsetY = 0;
      
      if (isHovering && neuralBoxRef.current) {
        const rect = neuralBoxRef.current.getBoundingClientRect();
        const centerBoxX = rect.left + rect.width / 2;
        const centerBoxY = rect.top + rect.height / 2;
        
        // Calculate distance from mouse to center
        const deltaX = mousePos.x - centerBoxX;
        const deltaY = mousePos.y - centerBoxY;
        
        // Create jiggle effect (structure follows mouse with some damping)
        jiggleOffsetX = deltaX * 0.15;
        jiggleOffsetY = deltaY * 0.15;
      }

      // Sort segments by depth
      const segmentDepths = segments.map((segment, index) => {
        const transformed1 = transformPoint(segment.x1, segment.y1, segment.z1, cameraAngleY, cameraAngleX, cameraZ, jiggleOffsetX, jiggleOffsetY);
        const transformed2 = transformPoint(segment.x2, segment.y2, segment.z2, cameraAngleY, cameraAngleX, cameraZ, jiggleOffsetX, jiggleOffsetY);
        const avgZ = (transformed1.z + transformed2.z) / 2;
        return { index, avgZ };
      });

      segmentDepths.sort((a, b) => a.avgZ - b.avgZ);

      // Draw segments
      segmentDepths.forEach(({ index }) => {
        drawSegment(segments[index], centerX, centerY, cameraAngleY, cameraAngleX, cameraZ, jiggleOffsetX, jiggleOffsetY);
      });

      // Draw nodes
      nodes.forEach((node) => {
        drawNode(node, centerX, centerY, cameraAngleY, cameraAngleX, cameraZ, jiggleOffsetX, jiggleOffsetY);
      });

      // Update and draw particles
      particles = particles.filter((particle) => {
        particle.progress += particle.speed;

        if (particle.progress >= 1) {
          const currentSegment = segments[particle.segmentIndex];
          if (!currentSegment) return false;
          
          const connectedSegments = currentSegment.connections;

          if (connectedSegments.length > 0 && Math.random() < 0.75) {
            const nextSegmentIndex = connectedSegments[Math.floor(Math.random() * connectedSegments.length)];
            const nextSegment = segments[nextSegmentIndex];
            
            if (nextSegment) {
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
              
              particles.push({
                x: startFromBeginning ? nextSegment.x1 : nextSegment.x2,
                y: startFromBeginning ? nextSegment.y1 : nextSegment.y2,
                fromX: startFromBeginning ? nextSegment.x1 : nextSegment.x2,
                fromY: startFromBeginning ? nextSegment.y1 : nextSegment.y2,
                fromZ: startFromBeginning ? nextSegment.z1 : nextSegment.z2,
                toX: startFromBeginning ? nextSegment.x2 : nextSegment.x1,
                toY: startFromBeginning ? nextSegment.y2 : nextSegment.y1,
                toZ: startFromBeginning ? nextSegment.z2 : nextSegment.z1,
                progress: 0,
                speed: particle.speed * (0.9 + Math.random() * 0.2),
                size: particle.size,
                opacity: particle.opacity * 0.95,
                segmentIndex: nextSegmentIndex,
              });
            }
          }
          
          return false;
        }

        drawParticle(particle, centerX, centerY, cameraAngleY, cameraAngleX, cameraZ, jiggleOffsetX, jiggleOffsetY);
        return true;
      });

      // Create new particles
      if (Math.random() < 0.06 && particles.length < 45) {
        createParticle();
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    initializeNetwork();
    animationFrameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [mousePos, isHovering]);

  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  };

  return (
    <div
      ref={neuralBoxRef}
      className="w-[300px] h-[300px] transition-all duration-200"
      style={{
        transform: isHovering ? 'scale(1.05)' : 'scale(1)',
      }}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      onMouseMove={handleMouseMove}
    >
      <canvas
        ref={neuralCanvasRef}
        className="w-full h-full"
      />
    </div>
  );
}