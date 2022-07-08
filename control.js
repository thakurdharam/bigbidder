$("#myforms").submit(function(e){
    e.preventDefault();
});


var next_click=
document.querySelectorAll(".next_button");
var main_form=document.querySelectorAll(".main");
var step_list = document.querySelectorAll(".progress-bar li");
var num = document.querySelector(".step-number");
let formnumber=0;
let cnt = 0;

next_click.forEach(function(next_click_form){
    next_click_form.addEventListener('click',function(){
      
        if(!validateform()){
       
        return false;
        }      
       formnumber++;
       updateform();  
       progress_forward();
       contentchange();
    });
}); 
var back_click=document.querySelectorAll(".back_button");
back_click.forEach(function(back_click_form){
    back_click_form.addEventListener('click',function(){
       formnumber--;
       updateform();
       progress_backward();
       contentchange();
    });
});

var username=document.querySelector("#user_name");
// var shownname=document.querySelector(".shown_name");
 
var submit_click=document.querySelectorAll(".submit_button");
submit_click.forEach(function(submit_click_form){
    submit_click_form.addEventListener('click',function(){
    //    shownname.innerHTML= username.value;
       formnumber++;
       updateform(); 
    });
});

 
function updateform(){
    main_form.forEach(function(mainform_number){
        mainform_number.classList.remove('active');
    })
    main_form[formnumber].classList.add('active');
} 
 
function progress_forward(){
    // step_list.forEach(list => {
        
    //     list.classList.remove('active');
         
    // }); 
    
    num.innerHTML = formnumber+1;
    step_list[formnumber].classList.add('active');
}  

function progress_backward(){
    var form_num = formnumber+1;
    step_list[form_num].classList.remove('active');
    num.innerHTML = form_num;
} 
 
var step_num_content=document.querySelectorAll(".step-number-content");

 function contentchange(){
     step_num_content.forEach(function(content){
        content.classList.remove('active'); 
        content.classList.add('d-none');
     }); 
     step_num_content[formnumber].classList.add('active');
 } 
 
 
 function validateform(){

    var validate = true;
    var names = document.getElementById('user_name').value;
    var numb = document.getElementById('user_number').value;
    var email = document.getElementById('user_email').value;
    var msg = document.getElementById('user_msg').value;

    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;


    if(names!=""||numb!=""||email!=""||msg!=""){
        if(/^[A-z ]+$/.test(names)&&names!=""){
        validate=true;
        }else{ 
            console.log("enter a valid name");
  $('.toastname').toast('show');
  validate = false;
        }

        if(email.match(validRegex)){
            validate = true;
        }
        else{
      
            console.log("enter a valid email");
            $('.toastemail').toast('show');

            validate=false;
        }
        if(!isNaN(numb)){
            validate = true;
        }
        else{
        
            console.log("enter a valid phone number");
            $('.toastnumb').toast('show');

            validate=false;
        }
        if(msg!=""){
            validate = true;
        }
        else{
        
            console.log("enter a msg");
            $('.toastmsg').toast('show');

            validate=false;
        }
    }
    else{
    validate = false;
    }


    var obj = {};
    obj["Name"] = names;
    obj["Email"] = email;
    obj["Number"] = numb;
    obj["Message"] = msg;
    // obj["Budget"] = budget;
    // obj["Prefered Mode"] = prefmode;
    // obj["Prefered Time"] = preferedTime;
// init(JSON.stringify(obj));
     return validate;
  
 }


 function validateform2(){

    var validate = true;
     var prefmode = document.getElementById('flexCheckChecked1').value;


    // console.log(flexCheckChecked1);
 



    var obj2 = {};
    obj2["flexCheckChecked1"] = flexCheckChecked1;
// init(JSON.stringify(obj));
     return validate;
  

}



 function validateform3(){

    var validate = true;
    var budget = document.getElementById('onboard_budget').value;


    console.log(budget," ");
    if(budget!=""){
        if(!isNaN(budget)){
            validate = true;
        }
        else{
        
            console.log("enter a valid phone number");
            $('.toastnumb').toast('show');

         
        }



    var obj3 = {};
    obj3["Budget"] = budget;
// init(JSON.stringify(obj));
     return validate;
  
 }
}





function validateform4(){

    var validate = true;
     var prefmode = document.getElementById('preferedMode').value;
    var preftime = document.getElementById('preferedTime').value;


    console.log(prefmode," ",preftime);
    if(prefmode!=""){
        
            console.log("enter a valid preffered time");
            $('.toastnumb').toast('show');

        }



    var obj4 = {};
    obj4["Preffered Mode"] = prefmode;
    obj4["Preffered Time"] = preftime;
// init(JSON.stringify(obj));
     return validate;
  

}






function init(msg){
    fetch('https://analytics.funnearn.com/help/api/influencers/bbSendMail', {
        
        method: 'POST',
        mode:"cors",
        credentials:"same-origin",
        redirect:"follow",
        referrerPolicy:"no-referrer",
        body: msg,
        headers: { 'Content-Type': 'application/json',"Access-Control-Allow-Origin": "*"},
    }
        
    ).then(res => res.json())
      .then(json => console.log(json));
}


function senddata(){
    
    var names = document.getElementById('user_name').value;
    var numb = document.getElementById('user_number').value;
    var email = document.getElementById('user_email').value;
    var msg = document.getElementById('user_msg').value;
    var budget = document.getElementById('onboard_budget').value;
    var prefmode = document.getElementById('preferedMode').value;
    var preftime = document.getElementById('preferedTime').value;
    var checkbox1 = document.getElementById('influencer_marketing').checked;
    var checkbox2 = document.getElementById('advertising').checked;
    var checkbox3 = document.getElementById('public_relation').checked;
    var checkbox4 = document.getElementById('strategic_planning').checked;
    var influencer_marketing;
    var advertising;
    var public_relation;
    var strategic_planning;

    if(checkbox1){
        influencer_marketing = "Influencer Marketing"
    }
    else{
        influencer_marketing = " ";
    }
    if(checkbox2){
        advertising = "Advertising"
    }
    else{
        advertising = " ";
    }
    if(checkbox3){
        public_relation = "Public Relation"
    }
    else{
        public_relation = " ";
    }
    if(checkbox4){
        strategic_planning = "Strategic Planning"
    }
    else{
        strategic_planning = " ";
    }
    var obj = {};
    obj["Name"] = names;
    obj["Email"] = email;
    obj["Number"] = numb;
    obj["Message"] = msg;
    obj["Influencer_Marketing"] = influencer_marketing;
    obj["Advertising"] = advertising;
    obj["Public_Relation"] = public_relation;
    obj["Strategic_Planning"] = strategic_planning;
    obj["Budget"] = budget;
    obj["Preferred_Mode"] = prefmode;
    obj["Preferred_Time"] = preftime;
init(JSON.stringify(obj));
    // setTimeout(function(){
    //    window.location.href = 'https://www.bigbidder.in/';
    // }, 10000);
}


















