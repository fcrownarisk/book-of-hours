import java.io.InputStream;
import java.io.OutputStream;
import java.io.IOException;
import java.io.BufferedInputStream;
import java.io.BufferedOutputStream;
public void main(String[] args) {
    InputStream in = new BufferedInputStream(System.in);
    OutputStream out = new BufferedOutputStream(System.out);
    try {
        int c;   
        while ((c = in.read()) != -1) {
            out.write(c);
        }
    } catch (IOException e) {
        e.printStackTrace();
    } finally {
        try {
            in.close();
            out.close();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}