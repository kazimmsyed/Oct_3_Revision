console.log('animation connected');

x=document.getElementById('rotate_circle');
rx=document.getElementById('rotate_X');
ry=document.getElementById('rotate_Y');
rz=document.getElementById('rotate_Z');

txt=document.getElementById('txt_rotate');
txt_x=document.getElementById('txt_rotatex');
txt_y=document.getElementById('txt_rotatey');
txt_z=document.getElementById('txt_rotatez');


box_d=document.getElementById('box_d')


x.addEventListener('click',(e)=>{
    box_d.style.transform+=`rotate(${txt.value}deg)`;
    num++;

})

rx.addEventListener('click',(e)=>{
    box_d.style.transform+=`rotateX(${txt_x.value}deg)`;
    
})

ry.addEventListener('click',(e)=>{
    box_d.style.transform+=`rotateY(${txt_y.value}deg)`;

    
})

rz.addEventListener('click',(e)=>{
    box_d.style.transform=`rotateX(${txt_z.value}deg)`;
    
})



