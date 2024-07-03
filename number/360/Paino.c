#define E81 329.63 
#define A 246.94
#define D 196.00
#define G 146.83
#define B 110.00 
#define E82 82.41
void Guitar(){
    int t7 = 60;
    int t8 = 120;
    int t9 = 180;
    int t10 = 240;
    int t11 = 300;
    int t12 = 360;
    return 
      sin(E81 + t7) + cos(E82 - t7);
      asin(E81 - t8) + acos(E82 + t8);
    return 
      tan(A + t9) + atan(D - t9);
      tan(D - t10) + atan(D + t10);
    return  
      exp(G + t11) + log(B - t11);
      exp(G - t12) + log(B + t12);
}

