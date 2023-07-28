// import some function 
import {CreateIconPassword as f,showError as showError,placeHolder as placeHolder} from './exp.js'
// get information 
let loginSignIn = document.querySelector('.loginSignIn');
let goTomain = true;
     // add class clearnone to clear 'display : none;'
        loginSignIn.classList.add('clearnone');
     setTimeout(()=>{
        loginSignIn.classList.add('translate');
    },0);
document.querySelector('#send').onclick = function(e){
    goTomain = true;
    umbercardvalid(numbercard); // check of username
    passwordvalid(password); // check of password;
    // send information to server
    if(!goTomain){
        e.preventDefault();
    }
}
// function check validating input
let numbercard = document.querySelector('input[type="number"]'); 
let password = document.querySelector('input[type="password"]');
function umbercardvalid(nbrcard){
    if(nbrcard.value.length !==12 ||nbrcard.value == '' ){
        nbrcard.parentNode.classList.add('warning');
        setTimeout(()=>{
            nbrcard.parentNode.classList.remove('warning');
        },2000);
        goTomain=false
}
}
function passwordvalid(password){
// strat check password
if(password.value == ''){
    password.parentNode.classList.add('warning');
    setTimeout(()=>{
        password.parentNode.classList.remove('warning');
    },2000);
    goTomain=false
}
};
//  buttons ti show or hide a password when user write it
password.onfocus = function(){
    if(!document.querySelector('.loginSignIn .show-hide-psrd')){
        f('password',this,'loginSignIn');
    }
}
// if user click at input number card change password to ex
numbercard.onclick = ()=>{
    placeHolder('numbercart');
};
// function to show message error in feilds
showError();
