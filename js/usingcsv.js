const trivia = {
    question1: {
      question: "Who was the first US president to live in the White House?",
      answer: "John Adams"
    },
    question2: {
      question: "What was the name of the first computer virus?",
      answer: "Brain"
    },
    question3: {
      question: "In which year did the Berlin Wall fall?",
      answer: "1989"
    },
    question4: {
      question: "What is the largest organ in the human body?",
      answer: "Liver"
    },
    question5: {
      question: "What is the chemical symbol for gold?",
      answer: "Au"
    },
    question6: {
      question: "What is the fastest land animal?",
      answer: "Cheetah"
    },
    question7: {
      question: "What is the largest country in the world by land area?",
      answer: "Russia"
    },
    question8: {
      question: "What is the deepest ocean in the world?",
      answer: "Pacific Ocean"
    },
    question9: {
      question: "Who wrote the play 'Romeo and Juliet'?",
      answer: "William Shakespeare"
    },
    question10: {
      question: "Which famous painting features the Mona Lisa?",
      answer: "Mona Lisa"
    },
    question11: {
      question: "What is the national anthem of the United States?",
      answer: "The Star-Spangled Banner"
    }
  }; 

  //initializations

//  crypto.randomUUID();


cont1=document.getElementById('container1');
cont2=document.getElementById('container2');


cont1_1=document.getElementById('container1_1');
cont2_1=document.getElementById('container2_1');
// question=cont1.children[0];
// answer=cont1.children[0];

answer_key={}

let y=function(cont_quest,cont_ans,mydict){
    for(let e of Object.values(trivia)){
        question=e['question'];
        answer=e['answer'];
        quest=makeQuestElement(question);
        cont1.appendChild(quest);
        
        ans=makeDraggableElement(answer);
        cont2.appendChild(ans);

        q_id=crypto.randomUUID();
        quest.setAttribute('id',q_id);
        a_id=crypto.randomUUID();
        ans.setAttribute('id',a_id);

        answer_key[q_id]=a_id;
    }
}
y();

function makeQuestElement(item){
    const element = document.createElement('div');
    element.textContent = item;
    return element
}

function makeDraggableElement(item){
    const element = document.createElement('div');
    element.classList.add('draggable');
    element.setAttribute('draggable', 'true');
    
    element.textContent = item;
    return element
} 

function getAnsweredQnA(container){
    mylist=[];
    for(let e of container.children){
        mylist.push(e.id);
    }
    return mylist;
}

function check(){
    question=getAnsweredQnA(cont1_1);
    answered=getAnsweredQnA(cont2_1);


    for(i=0;i<question.length;i++){
        // debugger;
        if(answer_key[question[i]]==answered[i]){
        }
        else{
            console.log("no way",document.getElementById(question[i]).innerText );
        }

    }

    
}