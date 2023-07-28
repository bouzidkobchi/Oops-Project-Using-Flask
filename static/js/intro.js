// ------ get all information ----------
// -------- start js first page -------------
// function create element intro page;
let container =document.querySelector('.container');
// let svg =document.querySelector('#mySvg');
createIntroPage(); // create elelments page intro app 
let h1 = document.querySelector('h1');
let h1Strong = document.querySelector('strong');
let spanSvg = document.querySelector('.PhotoSVG');
let text = document.querySelector('.text');
let body = document.querySelector('body');
let html = document.querySelector('html');
let img = document.querySelector('.photoIntroduce img');
let textPhoto = document.querySelector('.textPhoto');
let loading = document.querySelector('.loading');
let href = document.querySelector('a');
// when user click at div loading go to next page
loading.onclick = function(){
    window.location = '/signup';
}
// ----------- run App Oops -----------
function introPageOne(){
    body.classList.add('introPage');
    html.classList.add('introPage');
    
    setTimeout(()=>{
        h1.classList.add('animate');
    },100);
    setTimeout(()=>{
        spanSvg.classList.add('animate');
    },200);
    setTimeout(()=>{
        h1.classList.add('hit');
    },1000);
    setTimeout(()=>{
        spanSvg.classList.add('chgColor');
    },1100);
    setTimeout(()=>{
        text.classList.add('scale');
    },1200);
    setTimeout(()=>{
        document.querySelector("#arrow").classList.add('show');
        skipPage();
        h1.classList.add('GoTop');
        text.classList.add('remove');
        document.querySelector('.photoIntroduce').classList.add('flex');
        setTimeout(()=>{
            setTimeout(()=>{
                // show img one
                document.querySelector('.photoIntroduce').classList.add('root');
                setTimeout(()=>{
                    document.querySelector('.photoIntroduce').classList.remove('root');
                    setTimeout(()=>{
                        // show img two
                        img.src = '../static/imgs/imgintro/pic 2.svg';
                        document.querySelector('.photoIntroduce').classList.add('root');
                        textPhoto.innerText = 'help me to find all problem and solve it';
                    },600);
                    setTimeout(()=>{
                        document.querySelector('.photoIntroduce').classList.remove('root');
                        setTimeout(()=>{
                            // show img three
                            img.src = '../static/imgs/imgintro/pic 3.svg';
                        document.querySelector('.photoIntroduce').classList.add('root');
                        textPhoto.innerText = 'Now after Find Problem solve it';
                        },600);
                    },4000);
                    setTimeout(()=>{
                        document.querySelector('.photoIntroduce').classList.remove('root');
                        setTimeout(()=>{
                            // show img four
                            img.src = '../static/imgs/imgintro/pic 4.svg';
                        document.querySelector('.photoIntroduce').classList.add('root');
                        textPhoto.innerText = 'open this app and find more surprise';
                        loading.classList.add('noneBefor');
                        loading.classList.add('getStarted');
                        },600);
                    },7000);
                },2000);
            },11)
        },300);
    },3000);
}
// function create introPage
function createIntroPage(){
    // create h1
    let h1 =document.createElement('h1');
    h1.classList = 'oops';
    // create Strong
    let strong = document.createElement('strong');
    let strongtext =document.createTextNode('Oops');
    strong.appendChild(strongtext);
    h1.appendChild(strong);
    //create span
    let span =document.createElement('span');
    span.classList = 'PhotoSVG';
    span.innerHTML = ` <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 512.008 512.008" style="enable-background:new 0 0 512.008 512.008;" xml:space="preserve">
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
    </svg> `
    // create ls
    for(let i =0;i<5;i++){
        let l =document.createElement('l');
        span.prepend(l);
    }
    h1.appendChild(span);
    container.prepend(h1);
    let p =document.createElement('p');
    p.classList = 'text';
    let ptext = document.createTextNode('time to fix problems');
    p.appendChild(ptext);
    container.appendChild(p);
    // create page all photos
    allPhotos();
}
// create function show all photos
function allPhotos(){
    let div = document.createElement('div');
    div.classList = 'photoIntroduce';
    // create dib photos
    let divphotos = document.createElement('div');
    divphotos.classList = 'photos';
    let img = document.createElement('img');
    img.src = '../static/imgs/imgintro/pic 1.svg'
    img.alt = "";
    divphotos.appendChild(img);
    div.appendChild(divphotos);
    // create div textPhoto
    let divtextphotos = document.createElement('div');
    divtextphotos.classList = 'textPhoto';
    let textDiv = document.createTextNode('now you can to fix any problem and rports about it');
    divtextphotos.appendChild(textDiv);
    div.appendChild(divtextphotos);
    // create div loading
    let divloading = document.createElement('div');
    divloading.classList = 'loading';
    let textspan =document.createTextNode('Get Started');
    divloading.appendChild(textspan);
    div.appendChild(divloading);
    container.appendChild(div);
 }
 introPageOne(); // run app first page intro
// function skip 
function skipPage(){
     // start set ablity to move icon 'skip'
 let leftarea = document.querySelector('#arrow').getBoundingClientRect().left;
 let positionX;
 let initX;
 let diffx;
 document.querySelector('#arrow').addEventListener('touchstart',(e)=>{
    positionX = e.touches[0].pageX - leftarea;
    initX = positionX;
    document.querySelector('#arrow').addEventListener('touchmove',(e)=>{
        positionX = e.touches[0].pageX-leftarea;
        diffx = positionX-initX;
        if(diffx<0){
            document.querySelector('#arrow').style.width = "50px";
        }
    });
    document.querySelector('#arrow').addEventListener('touchend',(e)=>{
        window.location.href = "/signup";
    });
 })
}