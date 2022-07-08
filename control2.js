$("#myforms").submit(function(e){
    e.preventDefault();
});


var next_click=document.querySelectorAll(".next_button");
var main_form=document.querySelectorAll(".main");
var step_list = document.querySelectorAll(".progress-bar li");
var num = document.querySelector(".step-number");
let formnumber=0;

next_click.forEach(function(next_click_form){
    next_click_form.addEventListener('click',function(){
       if(!validateform()){
        console.log("form running");
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
var shownname=document.querySelector(".shown_name");
 
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
    var numb = document.getElementById('number').value;
    var email = document.getElementById('email').value;
    var msg = document.getElementById('msg').value;
    // var flink = document.getElementById('flink').value;
    // var ffollowers = document.getElementById('ffollowers').value;
    // var twilink = document.getElementById('twilink').value;
    // var twifollowers = document.getElementById('twifollowers').value;
    // var ilink = document.getElementById('ilink').value;
    // var ifollowers = document.getElementById('ifollowers').value;
    // var ylink = document.getElementById('ylink').value;
    // var yfollowers = document.getElementById('yfollowers').value;
    // var telelink = document.getElementById('telelink').value;
    // var telefollowers = document.getElementById('telefollowers').value;
    // var Phone_link = document.getElementById('Phone_link').value;
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;


    console.log(names," ",numb ," ", email," ",msg);
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


    var obj2 = {};
    obj2["Name"] = names;
    obj2["Email"] = email;
    obj2["Number"] = numb;
    obj2["Message"] = msg;
    // obj["flink"] = flink;
    // obj["ffolowers"] = ffollowers;
    // obj["twelink"] = twelink;
    // obj["twefolowers"] = twefollowers;
    // obj["ilink"] = ilink;
    // obj["ifolowers"] = ifollowers;
    // obj["ylink"] = ylink;
    // obj["yfolowers"] = yfollowers;
    // obj["telelink"] = telelink;
    // obj["telefolowers"] = telefollowers;
    // obj["Phone_link"] = Phone_link;
    // obj["Budget"] = budget;
    // obj["Prefered Mode"] = prefmode;
    // obj["Prefered Time"] = preferedTime;
     return validate;
  
 }



function init(msg){
    fetch('https://analytics.funnearn.com/help/api/brands/bbSendMail', {
        
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
    var numb = document.getElementById('number').value;
    var email = document.getElementById('email').value;
    var msg = document.getElementById('msg').value;
    var flink = document.getElementById('f_link').value;
    var ffollowers = document.getElementById('f_followers').value;
    var twilink = document.getElementById('twi_link').value;
    var twifollowers = document.getElementById('twi_followers').value;
    var ilink = document.getElementById('I_link').value;
    var ifollowers = document.getElementById('I_followers').value;
    var ylink = document.getElementById('Y_link').value;
    var yfollowers = document.getElementById('Y_followers').value;
    var telelink = document.getElementById('Tele_link').value;
    var telefollowers = document.getElementById('Tele_followers').value;
    var Phone_link = document.getElementById('Phone_link').value;

    var obj = {};
    obj["Name"] = names;
    obj["Email"] = email;
    obj["Number"] = numb;
    obj["Message"] = msg;
    obj["facebook_link"] = flink;
    obj["facebook_folowers"] = ffollowers;
    obj["twitter_link"] = twilink;
    obj["twitter_folowers"] = twifollowers;
    obj["instagram_link"] = ilink;
    obj["instagram_folowers"] = ifollowers;
    obj["youtube_link"] = ylink;
    obj["youtube_folowers"] = yfollowers;
    obj["telegram_link"] = telelink;
    obj["telegram_folowers"] = telefollowers;
    obj["Phone_link"] = Phone_link;
init(JSON.stringify(obj));
init(JSON.stringify(obj));
    setTimeout(function(){
       window.location.href = 'https://www.bigbidder.in/';
    }, 10000);
}




















