import java.awt.geom.Point2D;
import java.awt.geom.Path2D;
public class BermudaTriangle {
    public static void main(String[] args) {
        //define three vertex of Bermuda Triangle
        Point2D.Double vertex1 = new Point2D.Double(25.774, 77.006); // 佛罗里达州 florida
        Point2D.Double vertex2 = new Point2D.Double(18.466, 66.118); // 波多黎各 PuertoRico
        Point2D.Double vertex3 = new Point2D.Double(31.424, 64.151); // 百慕大 bermuda
        //创建一个Path2D对象来表示百慕大三角的边界
        Path2D.Double path = new Path2D.Double();
        path.moveTo(vertex1.getX(), vertex1.getY());
        path.lineTo(vertex2.getX(), vertex2.getY());
        path.lineTo(vertex3.getX(), vertex3.getY());
        path.closePath();
        System.out.println("Bermuda Triangle boundary points: " + path);
    }
}