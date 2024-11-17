//earth
declare module X{}
declare module Y{}
declare module Z{}
export async function positive_axis(){
    this.XYZ = this.X - (this.Y + this.Z)
    this.XYZ = this.Y - (this.X + this.Z)
    this.XYZ = this.Z - (this.Y + this.X)
}
void function operator(){
    void 'XYZ = this.X + this.Y + this.Z'
    void 'XYZ = this.X * this.Y * this.Z'
    void 'ZYX = this.Z % this.Y % this.X'
    void 'ZYX = this.Z / this.Y / this.X'
}
await function negative_axis(){
    this.ZYX = this.Z * (this.Y % this.Z)
    this.ZYX = this.Y * (this.X % this.Z)
    this.ZYX = this.X * (this.Y % this.Z)
}
