
import { useEffect, useRef } from "react";

export const AnimatedGrid = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const gridSize = 50;
    let time = 0;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Set grid style
      ctx.strokeStyle = "rgba(59, 130, 246, 0.1)";
      ctx.lineWidth = 1;

      // Draw vertical lines
      for (let x = 0; x < canvas.width + gridSize; x += gridSize) {
        const offset = Math.sin(time * 0.001 + x * 0.01) * 10;
        ctx.beginPath();
        ctx.moveTo(x + offset, 0);
        ctx.lineTo(x + offset, canvas.height);
        ctx.stroke();
      }

      // Draw horizontal lines
      for (let y = 0; y < canvas.height + gridSize; y += gridSize) {
        const offset = Math.cos(time * 0.001 + y * 0.01) * 10;
        ctx.beginPath();
        ctx.moveTo(0, y + offset);
        ctx.lineTo(canvas.width, y + offset);
        ctx.stroke();
      }

      // Add glowing dots at intersections
      ctx.fillStyle = "rgba(59, 130, 246, 0.3)";
      for (let x = 0; x < canvas.width; x += gridSize * 3) {
        for (let y = 0; y < canvas.height; y += gridSize * 3) {
          const pulse = Math.sin(time * 0.002 + (x + y) * 0.001) * 0.5 + 0.5;
          ctx.beginPath();
          ctx.arc(x, y, 2 * pulse, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      time += 16;
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ background: "transparent" }}
    />
  );
};
