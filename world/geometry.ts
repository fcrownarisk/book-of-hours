
class Dot {
    constructor(public x: number, public y: number) {}
    draw(ctx: CanvasRenderingContext2D) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, 1, 0, Math.PI * 2);
        ctx.fill();
    }
}
class Line {
    constructor(public start: Dot, public end: Dot) {}
    draw(ctx: CanvasRenderingContext2D) {
        ctx.beginPath();
        ctx.moveTo(this.start.x, this.start.y);
        ctx.lineTo(this.end.x, this.end.y);
        ctx.stroke();
    }
}
class Circle {
    constructor(public center: Dot, public radius: number) {}
    draw(ctx: CanvasRenderingContext2D) {
        ctx.beginPath();
        ctx.arc(this.center.x, this.center.y, this.radius, 0, Math.PI * 2);
        ctx.stroke();
    }
}
class Rectangle {
    constructor(public topLeft: Dot, public width: number, public height: number) {}
    draw(ctx: CanvasRenderingContext2D) {
        ctx.beginPath();
        ctx.rect(this.topLeft.x, this.topLeft.y, this.width, this.height);
        ctx.stroke();
    }
}
class Square extends Rectangle {
    constructor(topLeft: Dot, size: number) {
        super(topLeft, size, size);
    }
}
class Triangle {
    constructor(public point1: Dot, public point2: Dot, public point3: Dot){}
    draw(ctx: CanvasRenderingContext2D) {
        ctx.beginPath();
        ctx.moveTo(this.point1.x, this.point1.y);
        ctx.lineTo(this.point2.x, this.point2.y);
        ctx.lineTo(this.point3.x, this.point3.y);
        ctx.closePath();
        ctx.stroke();
    }
}
class Polygon {
    constructor(public points: Dot[]){}
    draw(ctx: CanvasRenderingContext2D) {
        ctx.beginPath();
        ctx.moveTo(this.points[0].x, this.points[0].y);
        for (let i = 1; i < this.points.length; i++) {
            ctx.lineTo(this.points[i].x, this.points[i].y);
        }
        ctx.closePath();
        ctx.stroke();
    }
}
// 获取Canvas元素并设置其上下文
export const canvas = document.getElementById('myCanvas') as HTMLCanvasElement;
export const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
// 创建不同的图形实例并绘制它们
const dot = new Dot(50, 50);
dot.draw(ctx);
const line = new Line(new Dot(100, 100), new Dot(200, 200));
line.draw(ctx);
const circle = new Circle(new Dot(300, 300), 50);
circle.draw(ctx);
const rectangle = new Rectangle(new Dot(400, 400), 100, 50);
rectangle.draw(ctx);
const square = new Square(new Dot(450, 450), 50);
square.draw(ctx);
const triangle = new Triangle(new Dot(500, 500), new Dot(550, 550), new Dot(600, 500));
triangle.draw(ctx);
const polygon = new Polygon([new Dot(50, 50), new Dot(100, 100), new Dot(150, 50)]);
polygon.draw(ctx);