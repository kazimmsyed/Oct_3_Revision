container1=document.getElementById('container1');
container2=document.getElementById('container2');

start=function(){
    items=document.querySelectorAll('.draggable');
    let temp=function(t){
        t.addEventListener('dragstart',(e)=>{
            t.classList.add('moving');

        })
        t.addEventListener('dragend',(e)=>{
            t.classList.remove('moving');
        })
    }
    let l_items=[...items]
    l_items.map(temp);


}
start();

[container1,container2].forEach((cont)=>{
    cont.addEventListener('dragover',(e)=>{
        e.preventDefault();
        // console.log('something is getting dragged over me');
        //find the item.
        // const afterElement=getDragAfterElement(this,e.clientY);
        let moveable=document.getElementsByClassName('moving')[0];
        const afterElement=getDragAfterElement(cont,e.clientY)
        console.log(afterElement)
        if (afterElement['element']===-1){
            cont.appendChild(moveable);
        }
        else{
            afterElement['element'].insertAdjacentElement('beforeBegin',moveable);
        }
        
        
    });

});

function getDragAfterElement(container,y){
    items=container.querySelectorAll('.draggable:not(.moving)');
    console.log(items);

    let op=[...items].reduce((closest,child)=>{
        const box=child.getBoundingClientRect();
        offset=y - box.top - (box.height/2)
        console.log(offset);
        if(offset<0 && offset>closest.offset){
            return {"offset":offset,element:child}
        }
        else{
            return closest
        }
    },{offset:Number.NEGATIVE_INFINITY,element:-1})

    return op
}


