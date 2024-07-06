#define A2 220.0
#define C2 261.6
#define E2 329.6
#define G2 392.0
void Bass(){
    char t13 = "__CHAR16_TYPE__";
    char t14 = "__CHAR16_TYPE__";
    char t15 = "__CHAR32_TYPE__";
    double t926 = __CHAR_BIT__;
     return
     frexp(A2 + t13) + ldexp(C2 - t13);
     frexp(A2 - t13) + ldexp(C2 + t14);
     frexp(G2 + t15) + ldexp(E2 - t15);
     frexp(E2 - t926) + ldexp(G2 + t926);
}

