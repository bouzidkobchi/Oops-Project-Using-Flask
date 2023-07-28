// import sum function
import {CreateIconPassword as f,checkof as checkof,
    passwordvalid as passwordvalid,showError as showError} from "./exp.js"
document.querySelector('.changePassword').classList.add('clearnone');
setTimeout(()=>{
    document.querySelector('.changePassword').classList.add('scale');
},1);
let main ;
let password = document.querySelectorAll('input[type="password"]');
//  buttons ti show or hide a password when user write it
let buttons = document.querySelectorAll('.showorhide');
passwordvalid(password[0]);
// when user click at login2 send information to server
document.querySelector('.changePassword #send').onclick = function(e){
    // show main page 
    main = true;
    password.forEach((pswrd)=>{
        if(pswrd.value === ''){
            pswrd.parentNode.classList.add('warning');
            setTimeout(()=>{
                pswrd.parentNode.classList.remove('warning');
            },2000);
        }
    });
    if(password[0].value === '' || password[1].value === ''){
        main = false;
    }
    if(main && password[0].value === password[1].value ){
        // go to main page
        console.log('oops!');
    }else{
            password[1].parentNode.classList.add('warning');
                setTimeout(()=>{
                    password[1].parentNode.classList.remove('warning');
                },2000);
                e.preventDefault();
    }
}
let arr = document.querySelectorAll('input[type="password"]')
// let r = document.querySelector('input[type="email"]');
// validate password
password[1].onfocus = function(){
        checkof(this,password[0].value,password[1]);
        console.log(document.querySelector('.confirm-password .show-hide-psrd'));
        if(!document.querySelector('.Confpassword .show-hide-psrd')){
            f('Confpassword',this,'changePassword');
            }
}
password[0].onfocus = function(){
        checkof(this,password[1].value,password[1]);
        if(!document.querySelector('.password .show-hide-psrd')){
            f('password',this,'changePassword');
            }
}
// create function to checkof confirm password to confirm about password entred by user
// my english is bad 'hhhh' i'm sorry but your developer your smart you know what I says
// function checkof(inputps,lastps){
//     // ps === password okay
//         inputps.addEventListener('keyup',()=>{
//             if(inputps.value === lastps && inputps.value !== '' && lastps !== ''){
//                 // change border color to green and show img 'check' by adding class 'checking'
//                 password[1].style = `border-color:#1bec1b;`;
//                 document.querySelector('#checkicon').classList.add('checking');
//             }else{
//                 // rest last border color 
//                 password[1].style = `border: 1px solid #00000057;`;
//                 document.querySelector('#checkicon').classList.remove('checking');
//             }
//     });
// }
arr[0].focus();
let create = document.createElement('div');
document.querySelector(`.changePassword .password`).appendChild(create);
// function to show message error in feilds
showError();