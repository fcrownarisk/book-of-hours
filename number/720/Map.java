
public class Map {
    Class<?> keyType;
    Class<?> valueType;
}
abstract class HashMap<K, V> extends Map {
    public HashMap() {
        this.keyType = Object.class;
        this.valueType = Object.class;
    }
}