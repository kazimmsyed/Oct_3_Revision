console.log('learn_jquery connected');
$(document).ready(function(){
    //$('#navbar').fadeOut(500);
    $('#p01').hover(function(){
        $(this).hide();
    });

    $('#p02').mouseout(function(){
        $(this).hide();
    });
    
    var flag=true;
    $(document).keypress(function(e){
        if(e.which===13){
            if(flag==true){
                $('#navbar').fadeIn(500);
                flag=false
            }
            else{
                $('#navbar').fadeOut(500);
                flag=true;
            }
        }
    });


    var flag2=true
    $('#hamburger').click(function(){
        console.log('i was clicked',flag2)
        if (flag2){
            $('#sidebar').hide(); 
            flag2=false;
            console.log(flag2); 
        }
        else{
            $('#sidebar').show();
            flag2=true;
        }
        
    });

    


    const mediaQuery = window.matchMedia('(max-width: 1100px)');
    console.log(mediaQuery)
    mediaQuery.addEventListener('change', () => {
        if (mediaQuery.matches) {
            $('#sidebar').hide(); 
            flag2=false;
        }
      });

      sidebar=document.getElementById('sidebar')
      header=document.getElementById('header')
      body=document.body;
      

      header.addEventListener('click',(e)=>{
        e.stopPropagation();
        e.preventDefault()
      })

      sidebar.addEventListener('click',(e)=>{
        e.stopPropagation();
      });



      body.addEventListener('click',(e)=>{
        if(flag2==true && window.innerWidth < 769){
            $('#sidebar').hide();
            flag2=false;
        }
      });


      
});

