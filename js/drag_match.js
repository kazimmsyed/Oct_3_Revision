cont2=document.getElementById('container2');
cont1=document.getElementById('container1');
container2_1=document.getElementById('container2_1');
container1_1=document.getElementById('container1_1');
btn_lock=document.querySelector('.btn_lock');

let start=function(){
    items=document.querySelectorAll('.draggable');
    
    [...items].forEach(i => {
        i.addEventListener('dragstart',(e)=>{
            i.classList.add('dragged');
        });

        i.addEventListener('dragend',(e)=>{
            i.classList.remove('dragged');
        });
        
    });
}


let makebuttons=function(){
    draggables=[...cont2.querySelectorAll('.draggable')].slice(1,);
    draggables.forEach((e)=>{
        btn_cp=btn_lock.cloneNode(false);
        e.appendChild(btn_cp);
    })
}


start();
makebuttons();

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
        //code used when i used to use order.
        // moveable.style.order=element.style.order;
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


function changeBtnText(btn){
    // debugger;
    if(btn.value==='Save'){
        btn.value='Undo';
    }
    else{
        btn.value='Save';
    }
}


[...btn_lock].forEach((btn)=>{
    btn.addEventListener('click',(e)=>{
        // debugger;
        parent=btn.parentElement;
        if(btn.value=='Save'){
            i=findElementIndex(cont2,parent);
            // debugger;
            // console.log(i)
            q=document.querySelector(`#container1 div:nth-of-type(${i})`)
            container1_1.appendChild(q);
            container2_1.appendChild(parent);

        }
        else{
            i=findElementIndex(container2_1,parent)-1;
            // debugger;
            cont1.appendChild(container1_1.children[i]);
            cont2.appendChild(container2_1.children[i])
        }
        console.log('changeBtnText');
        changeBtnText(btn);
    });
});




function findElementIndex(container,parent){
    /* Maybe use a seperate list */
    i=0;
    for(let e of container.children){
        // debugger;
        i=i+1;
        if(e.innerText==parent.innerText){
            break;
        }
    }    
    return i;
}







btn_shuffle=document.getElementById('btn_shuffle');





// btn_shuffle.addEventListener('click',(e)=>{
//     shuffle(cont2);
// })
//we won't let the user shuffle.
setTimeout(()=>{
    shuffle(cont2)
},500)

let shuffle=function(container){
    draggable=container.querySelectorAll('.draggable');
    size=draggable.length;
    order=fisher_yates_shuffle(size);
    // i=0
    // draggable.forEach((e)=>{
    //     e.style.order=order[i];
    //     i++;
    // });
    // console.log(order);
    my_list=[]
    order.forEach((e)=>{
        my_list.push(draggable[e]);
        cont2.removeChild(draggable[e])
    })
    console.log(my_list);
    my_list.forEach((e)=>{
        cont2.appendChild(e);
    })
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

