export type CircleType = InstanceType<typeof Circle>

export class Circle {
  x: number
  y: number
  r: number
  mx: number
  my: number
  colors: string[]
  constructor(x: number, y: number, r: number = 2 + Math.random() * 10) {
    this.x = x
    this.y = y
    this.r = r
    this.mx = Math.random()
    this.my = Math.random()
    this.colors = ['#ff4d4f', '#ff7a45', '#ffa940', '#d3f261', '#91caff']
  }

  // 画圆
  drawCircle(ctx: CanvasRenderingContext2D) {
    ctx.beginPath()
    ctx.arc(this.x, this.y, this.r, 0, 360)
    ctx.closePath()
    ctx.fillStyle
      = this.colors[Math.floor(Math.round(this.r * 10) % this.colors.length)]
    ctx.fill()
  }

  // 移动
  move(w: number, h: number) {
    this.mx = this.x < w && this.x > 0 ? this.mx : -this.mx
    this.my = this.y < h && this.y > 0 ? this.my : -this.my

    this.x += this.mx
    this.y += this.my
  }

  // 连线
  drawLine(ctx: CanvasRenderingContext2D, _circle: CircleType) {
    const dx = this.x - _circle.x
    const dy = this.y - _circle.y

    const d = Math.sqrt(dx * dx + dy * dy)

    if (d < 100) {
      ctx.beginPath()
      ctx.moveTo(this.x, this.y)
      ctx.lineTo(_circle.x, _circle.y)
      ctx.closePath()
      ctx.strokeStyle = 'rgba(204,204,204,0.4)'
      ctx.stroke()
    }
  }
}
