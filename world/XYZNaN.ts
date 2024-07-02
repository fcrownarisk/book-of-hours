import "./XYZisNaN.ts"
export const tensor_X=(X:any)=>{ 
   [[NaN][0][NaN],
    [0][NaN][0],
    [NaN][0][NaN]]
   
    [[NaN][0][0][NaN],
    [0][NaN][NaN][0],
    [0][NaN][NaN][0],
    [NaN][0][0][NaN]]

    [[NaN][0][0][0][NaN],
    [0][NaN][0][NaN][0],
    [0][0][NaN][0][0],
    [0][NaN][0][NaN][0],
    [NaN][0][0][0][NaN]]
}
export const tensor_Y=(Y:any)=>{ 
    [[NaN][0][NaN],
     [0][NaN][0],
     [0][NaN][0]]
    
    [[[NaN][0][0][NaN],
     [0][NaN][NaN][0],
     [0][NaN][NaN][0],
     [0][NaN][NaN][0]]
 
     [[NaN][0][0][0][NaN],
     [0][NaN][0][NaN][0],
     [0][0][NaN][0][0],
     [0][0][NaN][0][0],
     [0][0][NaN][0][0]]
    ]
 }
 export const tensor_Z=(Z:any)=>{ 
    [[NaN][NaN][NaN],
     [0][NaN][0],
     [NaN][NaN][NaN]]
    
    [[NaN][NaN][NaN][NaN],
     [0][0][NaN][0],
     [0][NaN][0][0],
     [NaN][NaN][NaN][NaN]]
 
     [[NaN][NaN][NaN][NaN][NaN],
     [0][0][0][NaN][0],
     [0][0][NaN][0][0],
     [0][NaN][0][0][0],
     [NaN][NaN][NaN][NaN][NaN]]

 }
export const tensor_N=(N:any)=>{ 
    [[NaN][0][NaN],
     [NaN][NaN][NaN],
     [NaN][0][NaN]]
    
    [[NaN][0][0][NaN],
     [NaN][NaN][0][NaN],
     [NaN][0][NaN][NaN],
     [NaN][0][0][NaN]]
 
     [[NaN][0][0][0][NaN],
     [NaN][NaN][0][0][NaN],
     [NaN][0][NaN][0][NaN],
     [NaN][0][0][NaN][NaN],
     [NaN][0][0][0][NaN]]
}