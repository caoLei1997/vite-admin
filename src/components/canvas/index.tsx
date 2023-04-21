import { useEffect, useRef } from 'react'
import { CanvasContainer } from './style'
import type { CircleType } from '@/utils/canvas-ball'
import { Circle } from '@/utils/canvas-ball'

function CanvasBg() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current as HTMLCanvasElement
    const ctx = canvas.getContext('2d') as CanvasRenderingContext2D
    const w = (canvas.width = window.innerWidth)
    const h = (canvas.height = window.innerHeight)
    const circles: CircleType[] = []

    // 绘制球
    const draw = () => {
      ctx.clearRect(0, 0, w, h)
      for (let i = 0; i < circles.length; i++) {
        circles[i].move(w, h)
        circles[i].drawCircle(ctx)

        for (let j = i + 1; j < circles.length; j++)
          circles[i].drawLine(ctx, circles[j])
      }
      window.requestAnimationFrame(draw)
    }

    // 初始化 canvas
    const init = (num: number) => {
      for (let i = 0; i < num; i++) {
        const circle: CircleType = new Circle(
          Math.random() * w,
          Math.random() * h,
        )
        circles.push(circle)
      }
      draw()
    }

    init(50)
  }, [])
  return (
    <CanvasContainer>
      <canvas ref={canvasRef}></canvas>
    </CanvasContainer>
  )
}

export default CanvasBg
