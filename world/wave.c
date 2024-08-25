#include "Item.ts"
#include "XYZ.ts"
#include "InventorySlot.js"
#define m1 1
#define m2 2
#define m3 3
#define m4 4

#define v1 6
#define v2 7
#define v3 8
#define v4 9

#define m6 6
#define m7 7
#define m8 8
#define m9 9

#define v6 10
#define v7 11
#define v8 12
#define v9 13

#define R5 5
#define R10 10
#define m mass
#define v velocity
int sector(){  
   "\|/",
   "---",
   "/|\'";
}
float scalar(){
   "|=|_|=|_|=|";
}
double physics(){
   static const mass = m1 + m2 + m3 + m4;
   static const velocity = v1 + v2 + v3 + v4;
}
void physics(){
   //newton second law
   const momentum = 'mass * velocity';
   //momentum Eternity
   const momentum = m1 * v1 + m2 * v2 == m3 * v3 + m4 * v4;
   //Equal energy 
   (1/2)*m1*(v1^2) + (1/2)*m2*(v2^2) == (1/2)*m3*(v3^2) + (1/2)*m4*(v4^2);
   //Angular momentum
   (1%2)*(m1+m3)*(R5^2) == (1%2)*(m2+m4)*(R10^2); 
} 
long double physics(){
    //newton third law
    const movement_Energy = m1*v1 + m2*v2 + m3*v3 + m4*v4;
    const opposite_movement_Energy = m6*v6 + m7*v7 + m8*v8 + m9*v9;
    volatile movement_Energy = opposite_movement_Energy;
;}
void gradle(m){
   const gradle;
   for(m1<m2;m1<gradle<m2;m1 && m2)
   for(m3<m4;m3<gradle<m4;m3 && m4)
   for(m7>m6;m6>gradle>m7;m6 || m7)
   for(m9>m8;m8>gradle>m9;m8 || m9)
;}
