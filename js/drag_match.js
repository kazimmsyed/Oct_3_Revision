cont2=document.getElementById('container2');
solved=document.getElementById('container2_1');


let start=function(){
    items=document.querySelectorAll('.draggable');
    
    [...items].forEach(i => {
        i.addEventListener('dragstart',(e)=>{
            i.classList.add('dragged');
        });

        i.addEventListener('dragend',(e)=>{
            i.classList.remove('dragged');
        })
    });
}



// for(let e of cont2){
    
//     e.appendChild('')
// }

start();


cont2.addEventListener('dragover',(e)=>{
    moveable=document.querySelector('.dragged');
    // console.log(moveable);
    if ((moveable.parentElement!=cont2)||moveable==null){
        //if we drag a draggable item from one container into another,
        // we don't want any unordinary things to happen for that purpose this func
        return
    }
    
    parent=moveable.parentElement
    let {offset,element}=getAfterElement(parent,e.clientY);
    // console.log(element)

    if(element===-1){
        cont2.appendChild(moveable)
    }
    else{
        moveable.style.order=element.style.order;
        element.insertAdjacentElement('beforeBegin',moveable);
    }
});

let getAfterElement=function(container,y){
    items=container.querySelectorAll(`.draggable:not(.dragged)`);
    // console.log(items);

    op=[...items].reduce((acc,i)=>{
        item=i.getBoundingClientRect();
        offset=y-item.top-(item.height/2);
        // console.log(offset)
        if(offset<0 && offset>acc.offset){
            return {"offset":offset,"element":i}
        }
        else{
            return acc
        }
    },{"offset":Number.NEGATIVE_INFINITY,"element":-1});

    // console.log("-----")
    return op;
    
}

btn_lock=document.querySelectorAll('.btn_lock');

[...btn_lock].forEach((btn)=>{
    btn.addEventListener('click',(e)=>{
        parent=btn.parentElement;
        i=0;
        for(let e of cont2.children){
            debugger;
            if(e.innerText==parent.innerText){
                break;
            }
            i=i+1;
        }
        console.log(i)
        solved.appendChild(parent);

    });
});

btn_shuffle=document.getElementById('btn_shuffle');





btn_shuffle.addEventListener('click',(e)=>{
    shuffle(cont2);
})

let shuffle=function(container){
    draggable=container.querySelectorAll('.draggable');
    size=draggable.length;
    order=fisher_yates_shuffle(size);
    i=0
    draggable.forEach((e)=>{
        e.style.order=order[i];
        i++;
    });

}

let fisher_yates_shuffle=(num)=>{
    num=num;
    l=[...Array(num).keys()];
    num=num-1;
    let rando;
    for(i=0;i<num;num--){
        rando=Math.floor(Math.random()*(num-i));
        [l[num],l[rando]]=[l[rando],l[num]]
    }
    return l
}