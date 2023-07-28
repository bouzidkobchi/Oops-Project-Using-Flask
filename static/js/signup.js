// ----- get information for Html --------
import {CreateIconPassword as f,
    checkof as checkof,
    passwordvalid as passwordvalid,
    showError as showError,placeHolder as placeHolder} from "./exp.js"
let loginSignUp = document.querySelector('.loginSignUp');
let container = document.querySelector('.container');
// let body = document.querySelector('body');
let goTomain = true;
let takePhoto = false;
//  buttons ti show or hide a password when user write it
let svgs = document.querySelectorAll('#eyes');
// add class clearnone to clear 'display : none;'
loginSignUp.classList.add('clearnone');
setTimeout(() => { // add class 'trasnslate' to add animation
    loginSignUp.classList.add('translate');
}, 1);
// add class intro
// get info form
let username = document.querySelector('input[type="text"]');
let numbercard = document.querySelector('input[type="number"]');
let password = document.querySelectorAll('input[type="password"]');
let email = document.querySelector('input[type="email"]');
// change place holder
username.onclick = ()=>{
    placeHolder('username');
}
email.onclick = ()=>{
    placeHolder('email');
}
numbercard.onclick = ()=>{
    placeHolder('numbercart');
}
document.querySelector('#send').onclick = function (e) {
    // e.preventDefault();
    usernamevalid(username);
    numbercardvalid(numbercard)
    emailvalid(email);
    cheakofPasswordAndCnfrmPassrd(password[0], password[1]);
    if (goTomain) {
        // send information to server if variable main is true
    } else {
        goTomain = true;
        e.preventDefault();
    }
};
// runs functions 
passwordvalid(password[0]);
// when click at camera go to next page 'upload'
document.querySelector('.takePhoto').onclick = function () {
    createPagePic();
    setTimeout(() => {
        document.querySelector('.uploadphoto').classList.add('show');
    }, 10);
    loginSignUp.style = `display:none;`
    loginSignUp.classList.remove('translate');
}
// this condition is correct when user he dont take any photo
if (!takePhoto) {
    username.addEventListener('keyup', () => {
        if (/[a-zA-Z]{1}/i.test(username.value) && !document.querySelector('.imgUser img')) {
            changeBackground();
        }
        if (username.value.length === 0) {
            document.querySelector('letter').innerText = '';
            document.querySelector('letter').parentNode.style.backgroundColor = '#f2f2f2'
        }
    });
}
password[1].onfocus = function () {
    checkof(this, password[0].value,password[1]);
    if(!document.querySelector('.Confpassword .show-hide-psrd')){
    f('Confpassword',this,'loginSignUp');
    }
}
password[0].onfocus = function () {
    checkof(this, password[1].value,password[1]);
    if(!document.querySelector('.password .show-hide-psrd')){
        f('password',this,'loginSignUp');
        }
}
// create function to checkof confirm password to confirm about password entred by user
// my english is bad 'hhhh' i'm sorry but your developer your smart you know what I says
// create function getColor
function getcolor(l) {
    let arrletters = [];
    l = l.toUpperCase();
    // fuling arr of letters
    for (let i = 65; i <= 90; i++) {
        arrletters.push(String.fromCharCode(i));
    }
    return `${arrcolors[arrletters.indexOf(l)]}`
}
// block code to set background at photo div when user it does not have an img
// function changeBackground
let arrcolors = ['2DCBCB', '712591', '7C83D4', 'E9F45F',
    '3A2F16', 'DE6687', '21D46D', 'A28D41',
    'C959D5', 'CA65C7', 'C918EC', '88C143',
    '2277FE', 'FF57D9', '989ED8', '3C2F71',
    'A47E6F', '45256D', '369275', '4285C1',
    'F5E8B8', '96FF56', '6B76EE', '676B85',
    'C149E6', '353AAE'];
function changeBackground() {
    let l = [...username.value];
    l = l[0];
    // set this letter on element 'letter' on HTML 
    document.querySelector('letter').innerText = l;
    document.querySelector('.imgUser').style.backgroundColor = `#${getcolor(l)}`;
}

// functions that check valid input
function usernamevalid(username) {
    // start check input username   
    if (!/^[A-Za-z][A-Za-z0-9_]{5,29}$/ig.test(username.value)) {
        username.parentNode.classList.add('warning');
        setTimeout(() => {
            username.parentNode.classList.remove('warning');
        }, 2000);
        goTomain = false;
    }
}
function numbercardvalid(nbrcard) {
    if (!(nbrcard.value.length === 12 && /\d{12}/ig.test(nbrcard.value))) {
        nbrcard.parentNode.classList.add('warning');
        setTimeout(() => {
            nbrcard.parentNode.classList.remove('warning');
        }, 2000);
        goTomain = false;
    }
}
function emailvalid(email) {
    //   check email valid
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)) {
        email.parentNode.classList.add('warning');
        setTimeout(() => {
            email.parentNode.classList.remove('warning');
        }, 2000);
        goTomain = false;
    }
    
}
// function to cheakof password input value equal confirm password input value 
function cheakofPasswordAndCnfrmPassrd(passwordorigin, confirmpassword) {
    if (passwordorigin.value == '' ||passwordorigin.value !== confirmpassword.value) {
        goTomain = false;
        confirmpassword.parentNode.classList.add('warning');
            setTimeout(() => {
                confirmpassword.parentNode.classList.remove('warning');
            }, 2000);
        }
        if(passwordorigin.value == ''){
            passwordorigin.parentNode.classList.add('warning');
            setTimeout(() => {
                passwordorigin.parentNode.classList.remove('warning');
            }, 2000);
        }
    
}
// function to show message error in feilds
showError();
// create function to create page upload in same page
function createPagePic() {
    // create div container
    // let container = document.createElement('div');
    // container.classList = 'container';
    let span = document.createElement('span');
    span.classList = 'title';
    container.appendChild(span);
    let h1 = document.createElement('h1');
    let h1text = document.createTextNode('Welcom!!');
    h1.appendChild(h1text);
    span.appendChild(h1);
    let h2 = document.createElement('h2');
    let h2text = document.createTextNode('take a Photo for your Profile');
    h2.appendChild(h2text);
    span.appendChild(h2);
    ////////////////////////
    let upload = document.createElement('div');
    upload.classList = 'uploadphoto';
    let button = document.createElement('button');
    button.innerText = 'x';
    upload.appendChild(button);
    let imgupload = document.createElement('div');
    imgupload.classList = 'imgupload';
    upload.appendChild(imgupload);
    let img = document.createElement('img');
    img.src = `../static/imgs/imgsignUp/camera.svg`;
    let svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M144 480C64.5 480 0 415.5 0 336c0-62.8 40.2-116.2 96.2-135.9c-.1-2.7-.2-5.4-.2-8.1c0-88.4 71.6-160 160-160c59.3 0 111 32.2 138.7 80.2C409.9 102 428.3 96 448 96c53 0 96 43 96 96c0 12.2-2.3 23.8-6.4 34.6C596 238.4 640 290.1 640 352c0 70.7-57.3 128-128 128H144zm79-217c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l39-39V392c0 13.3 10.7 24 24 24s24-10.7 24-24V257.9l39 39c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-80-80c-9.4-9.4-24.6-9.4-33.9 0l-80 80z"/></svg>
    `
    imgupload.innerHTML = svg;
    imgupload.appendChild(img);
    let textupload = document.createElement('div');
    textupload.classList = 'textupload';
    let h1two = document.createElement('h1');
    let h1twotext = document.createTextNode('Darg And Drop');
    h1two.appendChild(h1twotext);
    textupload.appendChild(h1two);
    textupload.appendChild(document.createTextNode('Upload any photo from your Galeary or take a Photo Now'));
    upload.appendChild(textupload);
    ////////// upload and take div
    let uploadtake = document.createElement('div');
    uploadtake.classList = 'uploadandtake';
    let spanupload = document.createElement('span');
    spanupload.id = 'upload';
    spanupload.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M288 109.3V352c0 17.7-14.3 32-32 32s-32-14.3-32-32V109.3l-73.4 73.4c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l128-128c12.5-12.5 32.8-12.5 45.3 0l128 128c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L288 109.3zM64 352H192c0 35.3 28.7 64 64 64s64-28.7 64-64H448c35.3 0 64 28.7 64 64v32c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V416c0-35.3 28.7-64 64-64zM432 456c13.3 0 24-10.7 24-24s-10.7-24-24-24s-24 10.7-24 24s10.7 24 24 24z"/></svg>`
    let spantake = document.createElement('span');
    spantake.id = 'take';
    spantake.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M149.1 64.8L138.7 96H64C28.7 96 0 124.7 0 160V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H373.3L362.9 64.8C356.4 45.2 338.1 32 317.4 32H194.6c-20.7 0-39 13.2-45.5 32.8zM256 384c-53 0-96-43-96-96s43-96 96-96s96 43 96 96s-43 96-96 96z"></path></svg>`;
    uploadtake.appendChild(spanupload);
    uploadtake.appendChild(spantake);
    upload.appendChild(uploadtake);
    document.querySelector('.container').appendChild(upload);
    SelectorElement();
}
// function selector element 
function SelectorElement() {
    // select buutons
    // button close
    document.querySelector('.uploadphoto button').onclick = function () {
        loginSignUp.style = 'disply:flex;';
        setTimeout(() => {
            loginSignUp.classList.add('translate');
        }, 0)
        document.querySelector('.title').remove();
        document.querySelector('.uploadphoto').remove();

    }
    // button take image by open camera;
    document.querySelector('#take').onclick = function () {
        openWebcam();
    }
    // button to upload an image
    document.querySelector('#upload').onclick = function () {
        if(document.querySelector('.imgUser img')){
            document.querySelector('.imgUser img').remove();
        }
        let input = document.createElement('input');
        input.type = 'file';
        input.click();
        let img = document.createElement('img');
        input.addEventListener('change',()=>{
            img.src = window.URL.createObjectURL(input.files[0]);
            loginSignUp.style = 'disply:flex;';
            setTimeout(() => {
                loginSignUp.classList.add('translate');
            }, 0)
            document.querySelector('.title').remove();
            document.querySelector('.uploadphoto').remove();
        });
        document.querySelector('.imgUser').appendChild(img);
        document.querySelector('.imgUser').appendChild(input);
        if(document.querySelector('.imgUser input')){
            document.querySelector('.imgUser input').remove();
        }
    }
}
// function opening camera
function openWebcam() {
    // now create element of camera in mobile and Desktop with MediaDevices API
    createCamera();
    // function take An Image and show it in div image in page Signup
    setTimeout(()=>{
        document.querySelector('.picture').classList.add('showcamera');
    },0);
    if(window.innerWidth<=768){
        camera({
            video:{
                facingMode:{exact: 'environment'},
            }
        });
    }
    else{
        camera({
            video:{
                width:1080,
                height:720,
            }
        });
    }
document.querySelector('#take-pic').onclick = ()=>{
        CreatePicture();
}
document.querySelector('#switch-camera').onclick = ()=>{
    console.log('hello wolrd');
    console.log(window.innerWidth); 
    // switch camera to back camera when using this app in mobile browser

}
}
// function to create Camera
function createCamera() {
    let picture = document.createElement('div');
    picture.classList = 'picture';
    let btnclose = document.createElement('button');
    btnclose.id= 'close';
    btnclose.href = '';
    btnclose.innerText = 'x';
    picture.appendChild(btnclose)
    let button = document.createElement('button');
    button.id = 'take-pic';
    button.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M149.1 64.8L138.7 96H64C28.7 96 0 124.7 0 160V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H373.3L362.9 64.8C356.4 45.2 338.1 32 317.4 32H194.6c-20.7 0-39 13.2-45.5 32.8zM256 384c-53 0-96-43-96-96s43-96 96-96s96 43 96 96s-43 96-96 96z"></path></svg>`;
    let btnswitch = document.createElement('button');
    btnswitch.id = 'switch-camera';
    btnswitch.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M0 224c0 17.7 14.3 32 32 32s32-14.3 32-32c0-53 43-96 96-96H320v32c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l64-64c12.5-12.5 12.5-32.8 0-45.3l-64-64c-9.2-9.2-22.9-11.9-34.9-6.9S320 19.1 320 32V64H160C71.6 64 0 135.6 0 224zm512 64c0-17.7-14.3-32-32-32s-32 14.3-32 32c0 53-43 96-96 96H192V352c0-12.9-7.8-24.6-19.8-29.6s-25.7-2.2-34.9 6.9l-64 64c-12.5 12.5-12.5 32.8 0 45.3l64 64c9.2 9.2 22.9 11.9 34.9 6.9s19.8-16.6 19.8-29.6V448H352c88.4 0 160-71.6 160-160z"/></svg>';
    picture.appendChild(button);
    picture.appendChild(btnswitch);
    let video = document.createElement('video');
    video.autoplay = true;
    picture.appendChild(video);
    document.body.appendChild(picture);
    document.querySelector('#close').onclick = ()=>{
        console.log('hello world');
        document.querySelector('.picture').remove();
    }
}
function CreatePicture() {
    if (document.querySelector('.imgUser img')) {
        document.querySelector('.imgUser img').remove();
    }
    let canvas = document.createElement('canvas');
    canvas.width = 300;
    canvas.height = 300;
    let img = document.createElement('img');
    img.src = '';
    document.querySelector('.imgUser').appendChild(img);
    // function onclick
    canvas.getContext('2d').drawImage(document.querySelector('video'), 0, 0, canvas.width, canvas.height);
    let url = canvas.toDataURL('image/jpg');
    document.querySelector('.imgUser img').src = url;
    document.querySelector('.picture').remove();
    loginSignUp.style = 'disply:flex;';
    setTimeout(() => {
        loginSignUp.classList.add('translate');
    }, 0)
    document.querySelector('.title').remove();
    document.querySelector('.uploadphoto').remove();
}
// opnening camera 
async function camera(constraints){
    // check of media decvaices support or No
    if(!navigator.mediaDevices || !navigator.mediaDevices.enumerateDevices()){
        // create div of explian problem
        return;
    }
    // check of constraints supported like 'facingMode' that we need to change between cameras
    
    if(!navigator.mediaDevices.getSupportedConstraints()['facingMode']){
        // create Div Problem 
    }
    let stream;
    if(stream){
        stream.getTracks().forEach((track)=>{
            track.stop();
        });
    }
    try{
        stream = await navigator.mediaDevices.getUserMedia(constraints);
        document.querySelector('video').srcObject = null;
        document.querySelector('video').srcObject = stream;
    }catch(e){
        console.log(e);
    }};