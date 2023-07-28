// show or hide password function by cretae an icon
function CreateIconPassword(elementAppend,input,divAppendIt){
    // check if any element has class call 'show-hide-psrd' remove;
    if(document.querySelector('.show-hide-psrd')){
        document.querySelector('.show-hide-psrd').remove();
    }
    // create icon svg show password when click it
    let div = document.createElement('div');
    div.id = 'icon-Show-psrd'
    div.classList = 'show-hide-psrd';
    div.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 512.008 512.008" style="enable-background:new 0 0 512.008 512.008;" xml:space="preserve">
    <g class="r">
        <g>
            <path style="fill:#868491;" d="M280.01,464.008h-48c-4.422,0-8,3.578-8,8v8c0,17.648,14.352,32,32,32s32-14.352,32-32v-8    C288.01,467.586,284.432,464.008,280.01,464.008z"></path>
        </g>
        <g>
            <path style="fill:#5C546A;" d="M256.002,464.008H232.01c-4.422,0-8,3.578-8,8v8c0,17.646,14.347,31.995,31.992,31.999    L256.002,464.008L256.002,464.008z"></path>
        </g>
        <g id="lightouside">
            <path style="fill: #ededed;" d="M381.983,49.895c-37.391-35.141-86.367-52.742-137.734-49.52    C150.639,6.2,75.014,84.286,72.092,178.149c-2.156,69.547,34.375,133.578,95.344,167.117c15.156,8.344,24.57,24.367,24.57,41.828    v60.914c0,17.648,14.352,32,32,32h64c17.648,0,32-14.352,32-32v-60.914c0-17.445,9.484-33.508,24.766-41.93    c58.742-32.406,95.234-94.156,95.234-161.156C440.006,133.43,418.858,84.547,381.983,49.895z"></path>
        </g>
        <g id="lightinside">
            <circle style="fill: #dcdcdc;" cx="256.002" cy="184.008" r="128"></circle>
        </g>
        <g>
            <g>
                <path style="fill:#FFFFFF;" d="M283.986,232.008c-10.633,0-16.07-6.203-20.031-10.727c-3.492-3.984-4.883-5.273-8-5.273     c-3.102,0-4.484,1.289-7.961,5.266c-3.734,4.273-9.383,10.734-20.016,10.734c-10.625,0-16.273-6.461-20.008-10.734     c-3.477-3.977-4.859-5.266-7.961-5.266c-4.422,0-8-3.578-8-8s3.578-8,8-8c10.625,0,16.273,6.461,20.008,10.734     c3.477,3.977,4.859,5.266,7.961,5.266s4.492-1.289,7.969-5.266c3.734-4.273,9.383-10.734,20.008-10.734     c10.633,0,16.07,6.203,20.031,10.727c3.492,3.984,4.883,5.273,8,5.273c3.109,0,4.5-1.289,7.992-5.266     c3.742-4.273,9.391-10.734,20.031-10.734c4.422,0,8,3.578,8,8s-3.578,8-8,8c-3.117,0-4.508,1.289-8,5.273     C300.267,225.555,294.619,232.008,283.986,232.008z"></path>
            </g>
        </g>
        <g>
            <g>
                <path style="fill:#5C546A;" d="M232.002,384.008c-3.68,0-6.992-2.555-7.813-6.297l-40-184c-0.938-4.32,1.805-8.578,6.117-9.523     c4.344-0.953,8.578,1.805,9.523,6.117l40,184c0.938,4.32-1.805,8.578-6.117,9.523     C233.135,383.954,232.564,384.008,232.002,384.008z"></path>
            </g>
        </g>
        <g>
            <g>
                <path style="fill:#5C546A;" d="M280.017,384.008c-0.563,0-1.133-0.055-1.711-0.18c-4.313-0.945-7.055-5.203-6.117-9.523l40-184     c0.945-4.313,5.164-7.063,9.523-6.117c4.313,0.945,7.055,5.203,6.117,9.523l-40,184     C287.01,381.454,283.697,384.008,280.017,384.008z"></path>
            </g>
        </g>
        <g>
            <path style="fill:#B4B6BC;" d="M190.633,376.008c0.851,3.593,1.374,7.293,1.374,11.086v60.914c0,17.648,14.352,32,32,32h64    c17.648,0,32-14.352,32-32v-60.914c0-3.79,0.527-7.491,1.384-11.086H190.633z"></path>
        </g>
        <g>
            <path style="fill:#868491;" d="M256.002,376.008h-65.369c0.851,3.593,1.374,7.293,1.374,11.086v60.914c0,17.648,14.352,32,32,32    h31.995V376.008z"></path>
        </g>
        <g>
            <g>
                <rect x="256.002" y="400.008" style="fill:#868491;" width="64" height="16"></rect>
            </g>
        </g>
        <g>
            <g>
                <rect x="256.006" y="432.008" style="fill:#868491;" width="64" height="16"></rect>
            </g>
        </g>
        <g>
            <g>
                <rect x="192.002" y="400.008" style="fill:#5C546A;" width="64" height="16"></rect>
            </g>
        </g>
        <g>
            <g>
                <rect x="192.002" y="432.008" style="fill:#5C546A;" width="64" height="16"></rect>
            </g>
        </g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    <g>
    </g>
    </svg>`;
    document.querySelector(`.${divAppendIt} .${elementAppend}`).appendChild(div);
    // remove icon when click at any element in doucment just input or icon
    let icon = document.querySelector('#icon-Show-psrd');
    if(icon){
       setTimeout(()=>{
        document.onclick = (e)=>{
    
            if(e.target!==input&&e.target!==icon){
                icon?icon.remove():'';
                input.setAttribute('type','password');
            }
        }
       },0)
    }
    document.querySelector('.show-hide-psrd').onclick = ()=>{
        // remove class 'line' from this div
       if(document.querySelector('.show-hide-psrd').classList.toggle('line')) 
       {
        input.setAttribute('type','text');
       }else{
        input.setAttribute('type','password');
       }
        
        }
}
function checkof(inputps,lastps,inputCheck){
    // ps === password okay
        inputps.addEventListener('keyup',()=>{
            if(inputps.value === lastps && inputps.value !== '' && lastps !== ''){
                // change border color to green and show img 'check' by adding class 'checking'
                inputCheck.style = `border-color:#1bec1b;`;
                document.querySelector('#checkicon').classList.add('checking');
            }else{
                // rest last border color 
                inputCheck.style = `border: 1px solid #00000057;`;
                document.querySelector('#checkicon').classList.remove('checking');
            }
    });
}
// function passwordvalid
function passwordvalid(password) {
    // strat check password
    password.addEventListener('keyup', () => {
        if (password.value.length <= 4) {
            password.style = `border-color: red;`
        }
        if (password.value.length > 4 && password.value.length <= 8) {
            password.style = `border-color: #fb7612;`
        }
        if (password.value.length > 8) {
            password.style = `border-color:rgb(108 202 240);`
        }
        if (password.value.length > 12 && rgx(password.value)) {
            password.style = `border-color:#1bec1b;`;
            console.log('green');
        }
        if (password.value == '') {
            password.style = `border-color:#00000057;`
        };
    });

}
// // check strong password
function rgx(value) {
    return /(\w+\W+|\W+\w+)(\w+)?(\W+)?(\w+)?(\W+)?/ig.test(value);
};
// function Error message or not valid feild
// function error message
function errorMessg(elementAppend){
    // create div oops
    let div = document.createElement('div');
    div.classList = 'errorOops';
    let divIconError = document.createElement('div');
    divIconError.id = 'iconError';
    divIconError.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M256 32c14.2 0 27.3 7.5 34.5 19.8l216 368c7.3 12.4 7.3 27.7 .2 40.1S486.3 480 472 480H40c-14.3 0-27.6-7.7-34.7-20.1s-7-27.8 .2-40.1l216-368C228.7 39.5 241.8 32 256 32zm0 128c-13.3 0-24 10.7-24 24V296c0 13.3 10.7 24 24 24s24-10.7 24-24V184c0-13.3-10.7-24-24-24zm32 224a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"/></svg>`;
    div.appendChild(divIconError);
    let divtext = document.createElement('div');
    divtext.classList = 'text';
    div.appendChild(divtext);
    document.querySelector(`.${elementAppend}`).appendChild(div);
    if(elementAppend==='username'){
        document.querySelector(`.${elementAppend} .text`).innerText = 'this field must contain the letters and may contain numbers and _ symbol '
    }
    if(elementAppend==='numbercart'){
        document.querySelector(`.${elementAppend} .text`).innerText = 'this field must contain the student ID number'

    }
    if(elementAppend==='password'){
        document.querySelector(`.${elementAppend} .text`).innerText = `this field can't be empty`;
    }
    if(elementAppend==='Confpassword' && document.querySelector(`.${elementAppend} input`).value!==''){
        document.querySelector(`.${elementAppend} .text`).innerText = 'the password is diffrent from interd one';
    }
    if(document.querySelector(`.${elementAppend} input`).value==''){
        document.querySelector(`.${elementAppend} .text`).innerText = `this field can't be empty`;
    }
    if(elementAppend==='email'||elementAppend==='warning'){
        document.querySelector(`.${elementAppend} .text`).innerText = 'your email is not valid'

    }
    setTimeout(()=>{
        document.onclick = ()=>{
            div.remove();
        };
    },0);
    
}
// function to add functions to show error message in the feilds
function showError(){
    document.querySelectorAll('#warn').forEach((warn)=>{
        warn.onclick = ()=>{
            document.querySelector('.errorOops')?document.querySelector('.errorOops').remove():'';
            errorMessg(warn.parentNode.classList[0]);
            
        }
    });
}
// function to change place holder in field
function placeHolder(typeOfInput){
    if(typeOfInput==='username'){
        document.querySelector('.username input').placeholder = 'ex:abdellah_becherair';
    }
    if(typeOfInput==='numbercart'){
        document.querySelector('.numbercart input').placeholder = 'ex:202139049571';
    }
    if(typeOfInput==='email'){
        document.querySelector('.email input').placeholder = 'ex:abdellah.becherair@gmail.com';
    }
}
export{CreateIconPassword,checkof,
    passwordvalid,errorMessg,showError,placeHolder
    };