// import some function
import {showError as showError} from './exp.js'
// get information from page 'code'
document.querySelector('.code').classList.add('clearnone');
setTimeout(()=>{
    document.querySelector('.code').classList.add('scale');
},1);
let input = document.querySelector('input');
let send = document.querySelector('input[type="submit"]');
let form = document.querySelector('form');
showError();
send.onclick = (e)=>{
    //   check email valid
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input.value)) {
        input.id = 'warning';
        form.classList = 'warning';
        setTimeout(() => {
            input.parentNode.classList.remove('warning');
            input.id = '';
        }, 2000);
        e.preventDefault();
    }
}
