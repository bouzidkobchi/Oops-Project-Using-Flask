// accessing to body element by name
let body = document.querySelector('body');
// // this variable is not full time when API exist remove it
let nbrComments;
let index = 0;
let menuBar = false;
// let default img svg 
let default_img = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M57.7 193l9.4 16.4c8.3 14.5 21.9 25.2 38 29.8L163 255.7c17.2 4.9 29 20.6 29 38.5v39.9c0 11 6.2 21 16 25.9s16 14.9 16 25.9v39c0 15.6 14.9 26.9 29.9 22.6c16.1-4.6 28.6-17.5 32.7-33.8l2.8-11.2c4.2-16.9 15.2-31.4 30.3-40l8.1-4.6c15-8.5 24.2-24.5 24.2-41.7v-8.3c0-12.7-5.1-24.9-14.1-33.9l-3.9-3.9c-9-9-21.2-14.1-33.9-14.1H257c-11.1 0-22.1-2.9-31.8-8.4l-34.5-19.7c-4.3-2.5-7.6-6.5-9.2-11.2c-3.2-9.6 1.1-20 10.2-24.5l5.9-3c6.6-3.3 14.3-3.9 21.3-1.5l23.2 7.7c8.2 2.7 17.2-.4 21.9-7.5c4.7-7 4.2-16.3-1.2-22.8l-13.6-16.3c-10-12-9.9-29.5 .3-41.3l15.7-18.3c8.8-10.3 10.2-25 3.5-36.7l-2.4-4.2c-3.5-.2-6.9-.3-10.4-.3C163.1 48 84.4 108.9 57.7 193zM464 256c0-36.8-9.6-71.4-26.4-101.5L412 164.8c-15.7 6.3-23.8 23.8-18.5 39.8l16.9 50.7c3.5 10.4 12 18.3 22.6 20.9l29.1 7.3c1.2-9 1.8-18.2 1.8-27.5zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z"></path></svg>`
let Many_commnets = ['abdellah', 'abdelskdkjs sjs', 'abdellah', 'abdelskdkjs sjs', 'abdellah', 'abdelskdkjs sjs', 'abdellah', 'abdelskdkjs sjs', 'abdellah'];
// dark and light theme
console.log(localStorage.getItem('theme'));
if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('darkmode');
    console.log('darkmode');
}
// function control Top in main page
function controlTop() {
    // create div control Top
    let controlTop = document.createElement('div');
    controlTop.classList = 'control-top';
    // element of div control top
    let bars = document.createElement('span');
    bars.id = 'bars';
    bars.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg>';
    let search = document.createElement('span');
    search.id = 'search';
    search.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>';
    controlTop.appendChild(bars);
    controlTop.appendChild(search);
    body.appendChild(controlTop);
    bars.onclick = () => {
        menuBar = true;
        menu_bar();
    }
}
// function control bottom in main page
function controlBottom() {
    // create div control bottom
    let controlBottom = document.createElement('div');
    controlBottom.classList = 'control-bottom';
    let home = document.createElement('span');
    home.id = 'home';
    home.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M543.8 287.6c17 0 32-14 32-32.1c1-9-3-17-11-24L512 185V64c0-17.7-14.3-32-32-32H448c-17.7 0-32 14.3-32 32v36.7L309.5 7c-6-5-14-7-21-7s-15 1-22 8L10 231.5c-7 7-10 15-10 24c0 18 14 32.1 32 32.1h32v69.7c-.1 .9-.1 1.8-.1 2.8V472c0 22.1 17.9 40 40 40h16c1.2 0 2.4-.1 3.6-.2c1.5 .1 3 .2 4.5 .2H160h24c22.1 0 40-17.9 40-40V448 384c0-17.7 14.3-32 32-32h64c17.7 0 32 14.3 32 32v64 24c0 22.1 17.9 40 40 40h24 32.5c1.4 0 2.8 0 4.2-.1c1.1 .1 2.2 .1 3.3 .1h16c22.1 0 40-17.9 40-40V455.8c.3-2.6 .5-5.3 .5-8.1l-.7-160.2h32z"/></svg>`;
    controlBottom.appendChild(home);
    let addPost = document.createElement('span');
    addPost.id = 'add-post';
    addPost.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM232 344V280H168c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V168c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H280v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z"/></svg>`;
    controlBottom.appendChild(addPost);
    let chat = document.createElement('span');
    chat.id = 'chat';
    chat.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M64 0C28.7 0 0 28.7 0 64V352c0 35.3 28.7 64 64 64h96v80c0 6.1 3.4 11.6 8.8 14.3s11.9 2.1 16.8-1.5L309.3 416H448c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H64z"/></svg>`;
    controlBottom.appendChild(chat);
    body.appendChild(controlBottom);
    // when user click at add post create page add post
    addPost.onclick = () => {
        addPost.children[0].style.rotate = '45deg';
        body.classList.add('noneScroll');
        add_Post();
    }
    // home function
    home.onclick = () => {
        home.classList.add('move');
        setTimeout(() => {
            location.href = '../html file/main.html';
        }, 1000)
    }
}
// function container
function Container() {
    // create div Container
    let container = document.createElement('div');
    container.classList = 'container';
    let bel = document.createElement('span');
    bel.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M224 0c-17.7 0-32 14.3-32 32V51.2C119 66 64 130.6 64 208v18.8c0 47-17.3 92.4-48.5 127.6l-7.4 8.3c-8.4 9.4-10.4 22.9-5.3 34.4S19.4 416 32 416H416c12.6 0 24-7.4 29.2-18.9s3.1-25-5.3-34.4l-7.4-8.3C401.3 319.2 384 273.9 384 226.8V208c0-77.4-55-142-128-156.8V32c0-17.7-14.3-32-32-32zm45.3 493.3c12-12 18.7-28.3 18.7-45.3H224 160c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7z"/></svg>`;
    // let notification = document.createElement('span');
    // notification.id = 'notification'
    // notification.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M224 0c-17.7 0-32 14.3-32 32V51.2C119 66 64 130.6 64 208v18.8c0 47-17.3 92.4-48.5 127.6l-7.4 8.3c-8.4 9.4-10.4 22.9-5.3 34.4S19.4 416 32 416H416c12.6 0 24-7.4 29.2-18.9s3.1-25-5.3-34.4l-7.4-8.3C401.3 319.2 384 273.9 384 226.8V208c0-77.4-55-142-128-156.8V32c0-17.7-14.3-32-32-32zm45.3 493.3c12-12 18.7-28.3 18.7-45.3H224 160c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7z"/></svg>';
    // container.appendChild(notification);
    body.appendChild(container);
}

function createPost(imguser, nameUser, timeCrtPost, textPost,
    imgPost, number_up, number_down, number_comments,
    commentsPost, iconPublic, idPOst, align, l, d, s, r) {
    // this variable is not full  when API exist remove it
    nbrComments = 0;
    // create div Post 
    let post = document.createElement('div');
    post.classList = 'post';
    // Setting attribute
    post.setAttribute('data-id', idPOst);
    // control top post
    let controlTopPost = document.createElement('div');
    controlTopPost.classList = 'controlTopPost';
    post.appendChild(controlTopPost);
    // div info user
    let infoUser = document.createElement('div');
    infoUser.classList = 'infoUser';
    let divImgUser = document.createElement('div');
    divImgUser.classList = 'imguser';
    let imgUser = document.createElement('img');
    imgUser.src = imguser;
    divImgUser.appendChild(imgUser)
    infoUser.appendChild(divImgUser);
    let name_date = document.createElement('span');
    let name = document.createElement('span');
    name.innerHTML = nameUser;
    name.id = 'name';
    let date = document.createElement('span');
    date.id = 'date';
    date.innerHTML = timeCrtPost;
    let publicPrivat = document.createElement('span');
    publicPrivat.id = 'visibility';
    publicPrivat.innerHTML = `${iconPublic}`;
    infoUser.appendChild(publicPrivat);
    name_date.appendChild(name);
    name_date.appendChild(date);
    infoUser.appendChild(name_date);
    controlTopPost.appendChild(infoUser);
    // dots svg
    let dots = document.createElement('span');
    controlTopPost.appendChild(dots);
    dots.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M0 256a56 56 0 1 1 112 0A56 56 0 1 1 0 256zm160 0a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm216-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112z"/></svg>`;
    // when user click at three dots show info about this post 
    dots.onclick = () => {
        threedots(post, s, r);
        body.classList.add('noneScroll');
    }
    // body Post
    let bodyPost = document.createElement('div');
    bodyPost.classList = 'body-post';
    post.appendChild(bodyPost);
    // body.appendChild(post);
    if (textPost !== '') {
        let textBodyPost = document.createElement('span');
        textBodyPost.id = 'text';
        textBodyPost.innerText = textPost;
        !align ? textBodyPost.style.direction = 'rtl' : ''
        if (textBodyPost.innerText.length >= 178) {
            let showMore = document.createElement('span');
            showMore.id = 'show-more';
            showMore.innerHTML = 'show More...';
            bodyPost.appendChild(showMore);
            showMore.onclick = () => {
                if (showMore.id == 'show-more') {
                    showMore.innerHTML = 'show less';
                    textBodyPost.style = `
                    display: inline-block;
                   overflow:visible;`
                    showMore.id = 'show-less';
                } else {
                    showMore.innerHTML = 'show More...';
                    textBodyPost.style = `
                    display:block;
                   overflow:hidden;`;
                    showMore.id = 'show-more'
                }
            }
        }
        bodyPost.prepend(textBodyPost);
    }
    if (imgPost.length !== 0) {
        let move = false;
        let index;
        let imgs = document.createElement('div');
        imgs.classList = 'imgs';
        bodyPost.appendChild(imgs);
        let spans = document.createElement('div');
        spans.classList = 'spans';
        bodyPost.appendChild(spans);
        for (let j = 0; j < imgPost.length; j++) {
            let imgBodyPost = document.createElement('img');
            imgBodyPost.src = imgPost[j].path;
            imgs.appendChild(imgBodyPost);
            imgBodyPost.onclick = () => {
                let scrollNow = scrollY;
                console.log(scrollNow);
                console.log(scrollY);
                document.querySelector('.dots') ? document.querySelector('.dots').remove() : '';
                body.classList.remove('noneScroll');
                imgBodyPost.style.pointerEvents = 'none';
                body.classList.add('setting');
                imgBodyPost.classList.add('setting');
                body.prepend(imgBodyPost);
                document.querySelector('.container').style.display = 'none';
                document.querySelector('.control-top').style.display = 'none';
                document.querySelector('.control-bottom').style.display = 'none';
                // create div exit
                let exit = document.createElement('span');
                exit.classList = 'exit';
                exit.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><title>Close</title><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M368 368L144 144M368 144L144 368"/></svg>`;
                body.appendChild(exit);
                exit.onclick = () => {
                    setTimeout(() => {
                        scrollTo(0, scrollNow);
                    }, 100);
                    console.log(scrollNow);
                    body.classList.remove('setting');
                    imgBodyPost.style.pointerEvents = 'unset';
                    exit.remove();
                    document.querySelector('.container').style.display = 'flex';
                    document.querySelector('.control-top').style.display = 'flex';
                    document.querySelector('.control-bottom').style.display = 'flex';
                    imgBodyPost.classList.remove('setting');
                    imgs.appendChild(imgBodyPost);
                }
            }
            // creaet spans of other image
            let span = document.createElement('span');
            spans.appendChild(span);
            // change color of span
            spans.children[0].style = 'background:var(--yellow-color);scale:1.5;';
            setTimeout(() => {
                imgs.children[0].classList.add('noneIMG');

            }, 0);
            // clicking at span
            span.onclick = () => {
                index = j;
                // clicking at imgs
                // for spans
                for (let ele of spans.children) {
                    ele.style = 'background:gainsboro;scale:1;';
                }
                span.style = 'background:var(--yellow-color);scale:1.5;';
                // for images
                for (let My_img of imgs.children) {
                    My_img.classList.remove('noneIMG');
                }
                imgBodyPost.classList.add('noneIMG');
            }
        }
        // default click 
        spans.children[0].click();
        let area = imgs.getBoundingClientRect().left;
        let positionX;
        let initX;
        let diffX;
        imgs.addEventListener('touchstart', (e) => {
            positionX = e.touches[0].pageX - area;
            initX = positionX;
            imgs.addEventListener('touchmove', (e) => {
                positionX = e.touches[0].pageX - area;
                diffX = positionX - initX;
                move = true;
            });
        });
        // event end
        imgs.addEventListener('touchend', (e) => {
            console.log(diffX);
            if (diffX < 0 && index < spans.children.length && move && (diffX > 100 || diffX < -100)) {
                index++;
                index !== spans.children.length ? spans.children[index].click() : '';
                index === spans.children.length ? spans.children[--index].click() : '';
                move = false;
            }
            if (diffX > 0 && index > 0 && move) {
                index = index - 1;
                spans.children[index].click();
                move = false;
            }

        });

    }
    // intract with post
    let intract = document.createElement('div');
    intract.classList = 'intract-post';
    let up = document.createElement('span');
    up.id = 'up';
    up.innerHTML = `<svg  viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m12 20 9-11h-6V4H9v5H3z" class="icon_svg-stroke icon_svg-fill"  stroke-width="1.5" stroke-linejoin="round"></path></svg>`;
    let comment = document.createElement('span');
    comment.id = 'comment';
    comment.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><title>Chatbox</title><path d="M408 64H104a56.16 56.16 0 00-56 56v192a56.16 56.16 0 0056 56h40v80l93.72-78.14a8 8 0 015.13-1.86H408a56.16 56.16 0 0056-56V120a56.16 56.16 0 00-56-56z" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32"/></svg>`;
    let down = document.createElement('span');
    down.id = 'down';
    down.innerHTML = `<svg  viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m12 20 9-11h-6V4H9v5H3z" class="icon_svg-stroke icon_svg-fill"  stroke-width="1.5" stroke-linejoin="round"></path></svg>`;
    let upcounter = document.createElement('span');
    upcounter.id = 'Upcount';
    upcounter.innerHTML = number_up;
    intract.appendChild(upcounter);
    let downcounter = document.createElement('span');
    downcounter.id = 'Downcount';
    downcounter.innerHTML = number_down;
    // if l is true this user is up tthis post
    l ? up.children[0].classList.add('color') : '';
    d ? down.children[0].classList.add('color') : '';
    // when user click at down button change color and decrement by one;
    down.onclick = async () => {
        down.children[0].classList.toggle('color');
        if (up.children[0].classList.contains('color')) {
            up.children[0].classList.remove('color');
            upcounter.innerHTML--;
            console.log('run time');
        }
        if (down.children[0].classList.contains('color')) {
            // send info to server
            console.log(typeof post.getAttribute('data-id'));
            let response = await fetch("http://127.0.0.1:5000/dislike_post", {
                method: 'post',
                headers: { "Content-type": "application/json" },
                body: JSON.stringify({ post_id: post.getAttribute('data-id') }),
            });
            downcounter.innerHTML++;
        } else {
            console.log('not color');
            downcounter.innerHTML--;
            // send info to server
            let response = await fetch("http://127.0.0.1:5000/undislike_post", {
                method: 'post',
                headers: { "Content-type": "application/json" },
                body: JSON.stringify({ post_id: post.getAttribute('data-id') }),
            });
        }
    }
    // when user click at up button change color and increment by one;
    up.onclick = async () => {
        up.children[0].classList.toggle('color');
        if (down.children[0].classList.contains('color')) {
            down.children[0].classList.remove('color');
            downcounter.innerHTML--;
        }
        if (up.children[0].classList.contains('color')) {
            upcounter.innerHTML++;
            // send info to server
            let response = await fetch("http://127.0.0.1:5000/like_post", {
                method: 'post',
                headers: { "Content-type": "application/json" },
                body: JSON.stringify({ post_id: post.getAttribute('data-id') }),
            });
            console.log(response.json());
        } else {
            upcounter.innerHTML--;
            // send info to server
            let response = await fetch("http://127.0.0.1:5000/unlike_post", {
                method: 'post',
                headers: { "Content-type": "application/json" },
                body: JSON.stringify({ post_id: post.getAttribute('data-id') }),
            });
        }
    }
    let commentcounter = document.createElement('span');
    commentcounter.id = 'commentcount';
    commentcounter.innerHTML = number_comments;
    intract.appendChild(downcounter);
    intract.appendChild(commentcounter);
    post.appendChild(intract);
    intract.appendChild(up)
    intract.appendChild(comment)
    intract.appendChild(down);
    document.querySelector('.container').prepend(post);
    let comments = document.createElement('div');
    comments.classList = 'comments';
    let h2Comments = document.createElement('h2');
    h2Comments.innerText = 'Comments';
    comments.prepend(h2Comments);
    let allComments = document.createElement('div');
    allComments.classList = 'all-comments';
    comments.appendChild(allComments);
    post.appendChild(comments);
    createComments(allComments, Many_commnets[0]);
    comments.prepend(allComments.children[0]);
    comments.prepend(h2Comments);
    // create div 'veiw comments ' ;
    let nbrcomments
    if (Many_commnets.length > 1) {
        nbrcomments = document.createElement('span');
        nbrcomments.classList = 'nbr-comments';
        nbrcomments.innerText = 'show more comments...';
        nbrcomments.id = 'less';
        comments.appendChild(nbrcomments);
        // dont forget to edit this
        allComments.style.display = 'none';
        // when click at show more comments show other comments
        nbrcomments.onclick = () => {
            body.classList.add('noneScroll');
            for (let i = 0; i < Many_commnets.length; i++) {
                createComments(allComments, Many_commnets[i]);
            }
            allComments.style.display = 'flex';
            // creaet container of comments
            let more_Comments = document.createElement('div');
            more_Comments.classList = 'more_Comments';
            let title = document.createElement('div');
            title.classList = 'title';
            let titleh3 = document.createElement('h4');
            titleh3.innerHTML = 'Comments';
            // reset
            let reset = document.createElement('span');
            reset.id = 'reset';
            reset.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M201.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 338.7 54.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"></path></svg>`;
            title.appendChild(reset);
            title.appendChild(titleh3);
            more_Comments.appendChild(title);
            more_Comments.appendChild(allComments);
            body.appendChild(more_Comments);
            setTimeout(() => {
                more_Comments.classList.add('move');
                setTimeout(() => {
                    reset.children[0].classList.add('rotate');
                }, 250)
            }, 0);
            reset.onclick = () => {
                body.classList.remove('noneScroll');
                reset.children[0].classList.remove('rotate');
                setTimeout(() => {
                    more_Comments.classList.remove('move');
                    setTimeout(() => {
                        more_Comments.remove();
                        allComments.innerHTML = '';
                    }, 251);
                }, 250);
            }
            console.log(allComments.children);
        };
    }
    // create div write Comments
    let writeComment = document.createElement('div');
    writeComment.classList = 'write-comment';
    let imgComment = document.createElement('img');
    imgComment.src = imguser;
    let input = document.createElement('textarea');
    input.classList = 'textarea';
    input.placeholder = 'add your comment';
    let svg = document.createElement('span');
    svg.id = 'send-comment';
    svg.innerHTML = `<?xml version="1.0" encoding="UTF-8"?>
    <!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
    <svg width="800px" height="800px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <title>send_plane_fill</title>
        <g id="页面-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <g id="System" transform="translate(-1104.000000, -48.000000)" fill-rule="nonzero">
                <g id="send_plane_fill" transform="translate(1104.000000, 48.000000)">
                    <path d="M24,0 L24,24 L0,24 L0,0 L24,0 Z M12.5934901,23.257841 L12.5819402,23.2595131 L12.5108777,23.2950439 L12.4918791,23.2987469 L12.4918791,23.2987469 L12.4767152,23.2950439 L12.4056548,23.2595131 C12.3958229,23.2563662 12.3870493,23.2590235 12.3821421,23.2649074 L12.3780323,23.275831 L12.360941,23.7031097 L12.3658947,23.7234994 L12.3769048,23.7357139 L12.4804777,23.8096931 L12.4953491,23.8136134 L12.4953491,23.8136134 L12.5071152,23.8096931 L12.6106902,23.7357139 L12.6232938,23.7196733 L12.6232938,23.7196733 L12.6266527,23.7031097 L12.609561,23.275831 C12.6075724,23.2657013 12.6010112,23.2592993 12.5934901,23.257841 L12.5934901,23.257841 Z M12.8583906,23.1452862 L12.8445485,23.1473072 L12.6598443,23.2396597 L12.6498822,23.2499052 L12.6498822,23.2499052 L12.6471943,23.2611114 L12.6650943,23.6906389 L12.6699349,23.7034178 L12.6699349,23.7034178 L12.678386,23.7104931 L12.8793402,23.8032389 C12.8914285,23.8068999 12.9022333,23.8029875 12.9078286,23.7952264 L12.9118235,23.7811639 L12.8776777,23.1665331 C12.8752882,23.1545897 12.8674102,23.1470016 12.8583906,23.1452862 L12.8583906,23.1452862 Z M12.1430473,23.1473072 C12.1332178,23.1423925 12.1221763,23.1452606 12.1156365,23.1525954 L12.1099173,23.1665331 L12.0757714,23.7811639 C12.0751323,23.7926639 12.0828099,23.8018602 12.0926481,23.8045676 L12.108256,23.8032389 L12.3092106,23.7104931 L12.3186497,23.7024347 L12.3186497,23.7024347 L12.3225043,23.6906389 L12.340401,23.2611114 L12.337245,23.2485176 L12.337245,23.2485176 L12.3277531,23.2396597 L12.1430473,23.1473072 Z" id="MingCute" fill-rule="nonzero">
    
    </path>
                    <path d="M21.4325,4.86103 L15.4325,20.361 C15.175,21.0261 14.324,21.2156 13.8087,20.7227 L10.4266,17.4876 L8.35348,19.5607 C8.0385,19.8757 7.49993,19.6526 7.49993,19.2072 L7.49993,14.6882 L2.30868,9.72268 C1.74196,9.1806 1.99133,8.22685 2.75086,8.03155 L20.2509,3.53155 C21.0389,3.32889 21.7262,4.10218 21.4325,4.86103 Z M19,6.00006 L8.03159,13.1534 L9.76704,14.8134 L19,6.00006 Z" id="形状" fill="#09244B">
    
    </path>
                </g>
            </g>
        </g>
    </svg>`;
    svg.onclick = () => {
        if (input.value.trim() !== '') {
            if (allComments.children.length === 0) {
                nbrcomments.innerText = 'show less comments';
                nbrcomments.style = 'margin:0;';
            }
            createComments(allComments, input.value.trim());
            svg.classList.add('animate');
            input.value = '';
            input.style.height = '40px';
            setTimeout(() => {
                svg.classList.remove('animate');
            }, 1000);
        }
    }
    writeComment.appendChild(imgComment);
    writeComment.appendChild(input);
    writeComment.appendChild(svg);
    comments.appendChild(writeComment);
    input.addEventListener('keyup', (e) => {
        input.style.height = 'auto';
        e.target.scrollHeight >= 114 ? input.style.height = `114px` : input.style.height = `${e.target.scrollHeight}px`;
    });
    // when user click at comment go to input comment
    comment.onclick = (e) => {
        scrollTo(0, scrollY + input.getBoundingClientRect().y - 200);
        comment.children[0].classList.add('color');
        input.focus();
        document.onclick = (e) => {
            if (e.target !== comment && e.target !== input) {
                comment.children[0].classList.remove('color');
            }
        }
    }
    post.style.scale = '0';
    setTimeout(() => {
        post.style.scale = '1';
    });
}
// function create content when user click at three dots
async function threedots(post, savePOST, reportPOST) {
    console.log(savePOST);
    if (document.querySelector('.dots')) {
        document.querySelector('.dots').remove();
    }
    // create div dots
    let dots = document.createElement('div');
    dots.classList = 'dots';
    // create div content
    // create slash
    let slash = document.createElement('span');
    slash.id = 'hide-show';
    dots.appendChild(slash);
    let content = document.createElement('div');
    content.classList = 'content';
    dots.appendChild(content);
    // create span
    let span = document.createElement('span');
    span.id = 'move';
    // create lis
    for (let i = 0; i < 4; i++) {
        // create li 
        let li = document.createElement('li');
        li.classList = 'li-content';
        // create span in li
        let spanLi = document.createElement('span');
        li.appendChild(spanLi);
        let divText = document.createElement('div');
        divText.classList = 'text';
        // title
        let title = document.createElement('span');
        divText.appendChild(title);
        // p
        let p = document.createElement('p');
        divText.appendChild(p);
        li.appendChild(divText);
        content.appendChild(li);
        if (i == 0) {
            spanLi.innerHTML = `<?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
            <svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.89 5.87891H5.11C3.4 5.87891 2 7.27891 2 8.98891V20.3489C2 21.7989 3.04 22.4189 4.31 21.7089L8.24 19.5189C8.66 19.2889 9.34 19.2889 9.75 19.5189L13.68 21.7089C14.96 22.4089 16 21.7989 16 20.3489V8.98891C16 7.27891 14.6 5.87891 12.89 5.87891Z" fill="#292D32"/>
            <path d="M21.9998 5.11V16.47C21.9998 17.92 20.9598 18.53 19.6898 17.83L17.7598 16.75C17.5998 16.66 17.4998 16.49 17.4998 16.31V8.99C17.4998 6.45 15.4298 4.38 12.8898 4.38H8.81984C8.44984 4.38 8.18984 3.99 8.35984 3.67C8.87984 2.68 9.91984 2 11.1098 2H18.8898C20.5998 2 21.9998 3.4 21.9998 5.11Z" fill="#292D32"/>
            </svg>`;
            title.innerHTML = 'save post';
            p.innerText = 'add this to your saved Items';
            savePOST ? li.classList.add('chColor') : ''
            savePOST ? li.classList.add('scale') : ''
            li.onclick = async () => {
                li.classList.toggle('chColor');
                setTimeout(() => {
                    li.classList.toggle('scale');
                }, 10)
                if (li.classList.contains('chColor')) {
                    title.innerHTML = 'saved post';
                    let response = await fetch("http://127.0.0.1:5000/save_post", {
                        method: "post",
                        headers: { "Content-type": "application/json" },
                        body: JSON.stringify({ post_id: post.getAttribute('data-id') })
                    });
                    console.log(response.json());
                }
                else {
                    title.innerHTML = 'save post';
                    let response = await fetch("http://127.0.0.1:5000/unsave_post", {
                        method: "post",
                        headers: { "Content-type": "application/json" },
                        body: JSON.stringify({ post_id: post.getAttribute('data-id') })
                    });
                    console.log(response.json());
                }
                li.classList.contains('chColor') ? p.innerText = 'this post is added to your saved posts' : p.innerText = 'add this to your saved Items';
            }
        }
        if (i == 1) {
            spanLi.innerHTML = `<?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
            <svg fill="#000000" width="800px" height="800px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" d="M16,2 C16.2652165,2 16.5195704,2.10535684 16.7071068,2.29289322 L21.7071068,7.29289322 C21.8946432,7.4804296 22,7.73478351 22,8 L22,15 C22,15.2339365 21.9179838,15.4604694 21.7682213,15.6401844 L16.7682213,21.6401844 C16.5782275,21.868177 16.2967798,22 16,22 L8,22 C7.73478351,22 7.4804296,21.8946432 7.29289322,21.7071068 L2.29289322,16.7071068 C2.10535684,16.5195704 2,16.2652165 2,16 L2,8 C2,7.73478351 2.10535684,7.4804296 2.29289322,7.29289322 L7.29289322,2.29289322 C7.4804296,2.10535684 7.73478351,2 8,2 L16,2 Z M15.5857864,4 L8.41421356,4 L4,8.41421356 L4,15.5857864 L8.41421356,20 L15.5316251,20 L20,14.6379501 L20,8.41421356 L15.5857864,4 Z M12,16 C12.5522847,16 13,16.4477153 13,17 C13,17.5522847 12.5522847,18 12,18 C11.4477153,18 11,17.5522847 11,17 C11,16.4477153 11.4477153,16 12,16 Z M12,6 C12.5522847,6 13,6.44771525 13,7 L13,13 C13,13.5522847 12.5522847,14 12,14 C11.4477153,14 11,13.5522847 11,13 L11,7 C11,6.44771525 11.4477153,6 12,6 Z"/>
            </svg>`;
            title.innerHTML = 'Report Post';
            p.innerText = `I'm concerned about this`;
            reportPOST ? li.classList.add('chColor') : ''
            reportPOST ? li.classList.add('scale') : ''
            li.onclick = async () => {
                li.classList.toggle('chColor');
                setTimeout(() => {
                    li.classList.toggle('scale');
                }, 10);
                if (li.classList.contains('chColor')) {
                    title.innerHTML = 'Reported post';
                    title.innerHTML = 'Report Post';
                    p.innerText = `I'm Not concerned about this`;
                    // SEND INFO TO SERVER
                    let response = await fetch("http://127.0.0.1:5000/report_post", {
                        method: "post",
                        headers: { "Content-type": "application/json" },
                        body: JSON.stringify({ post_id: post.getAttribute('data-id') })
                    });
                    console.log(response.json());
                } else {
                    p.innerText = `I'm concerned about this`;
                    // SEND INFO TO SERVER
                    let response = await fetch("http://127.0.0.1:5000/unreport_post", {
                        method: "post",
                        headers: { "Content-type": "application/json" },
                        body: JSON.stringify({ post_id: post.getAttribute('data-id') })
                    });
                    console.log(response.json());
                }
            }
        }
        if (i == 2) {
            spanLi.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm88 200H296c13.3 0 24 10.7 24 24s-10.7 24-24 24H152c-13.3 0-24-10.7-24-24s10.7-24 24-24z"/></svg>`;
            title.innerHTML = 'Hide Post';
            p.innerText = `See fewer Posts like this`;
            li.classList.add('chColor');
            li.onclick =async () => {
                // SEND DATA TO SERVER BY FECTH
                let response = await fetch("http://127.0.0.1:5000/hide_post", {
                    method: "post",
                    headers: { "Content-type": "application/json" },
                    body: JSON.stringify({ post_id: post.getAttribute('data-id') })
                });
                console.log(response.json());
                // remove div dots
                dots.classList.remove('move');
                setTimeout(() => {
                    dots.classList.remove('show');
                    dots.remove();
                    // remove post
                    post.classList.add('move');
                    back(scrollY, post);
                }, 400);
                // create div back
                body.classList.remove('noneScroll');
            }
        }
        if (i == 3) {
            spanLi.innerHTML = `<?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
            <svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19.53 8L14 2.47C13.8595 2.32931 13.6688 2.25018 13.47 2.25H11C10.2707 2.25 9.57118 2.53973 9.05546 3.05546C8.53973 3.57118 8.25 4.27065 8.25 5V6.25H7C6.27065 6.25 5.57118 6.53973 5.05546 7.05546C4.53973 7.57118 4.25 8.27065 4.25 9V19C4.25 19.7293 4.53973 20.4288 5.05546 20.9445C5.57118 21.4603 6.27065 21.75 7 21.75H14C14.7293 21.75 15.4288 21.4603 15.9445 20.9445C16.4603 20.4288 16.75 19.7293 16.75 19V17.75H17C17.7293 17.75 18.4288 17.4603 18.9445 16.9445C19.4603 16.4288 19.75 15.7293 19.75 15V8.5C19.7421 8.3116 19.6636 8.13309 19.53 8ZM14.25 4.81L17.19 7.75H14.25V4.81ZM15.25 19C15.25 19.3315 15.1183 19.6495 14.8839 19.8839C14.6495 20.1183 14.3315 20.25 14 20.25H7C6.66848 20.25 6.35054 20.1183 6.11612 19.8839C5.8817 19.6495 5.75 19.3315 5.75 19V9C5.75 8.66848 5.8817 8.35054 6.11612 8.11612C6.35054 7.8817 6.66848 7.75 7 7.75H8.25V15C8.25 15.7293 8.53973 16.4288 9.05546 16.9445C9.57118 17.4603 10.2707 17.75 11 17.75H15.25V19ZM17 16.25H11C10.6685 16.25 10.3505 16.1183 10.1161 15.8839C9.8817 15.6495 9.75 15.3315 9.75 15V5C9.75 4.66848 9.8817 4.35054 10.1161 4.11612C10.3505 3.8817 10.6685 3.75 11 3.75H12.75V8.5C12.7526 8.69811 12.8324 8.88737 12.9725 9.02747C13.1126 9.16756 13.3019 9.24741 13.5 9.25H18.25V15C18.25 15.3315 18.1183 15.6495 17.8839 15.8839C17.6495 16.1183 17.3315 16.25 17 16.25Z" fill="#000000"/>
            </svg>`;
            title.innerHTML = 'Copy link';

            li.onclick = () => {
                li.classList.add('chColor');
                setTimeout(() => {
                    li.classList.add('scale');
                }, 10);
                title.innerHTML = 'Copied!';
                copyText(window.location.href);
            }
        }
    }
    dots.appendChild(content);
    slash.onclick = () => {
        dots.classList.remove('move');
        setTimeout(() => {
            dots.classList.remove('show');
            dots.remove();
        }, 400);
        body.classList.remove('noneScroll');

    }
    body.appendChild(dots);
    setTimeout(() => {
        dots.classList.add('move');
    }, 0)
    dots.classList.add('show');
    let slashArea = slash.parentNode.getBoundingClientRect().top;
    let positionY;
    let initY;
    let diffY;
    // for mobil
    slash.parentNode.addEventListener('touchstart', (e) => {
        positionY = e.touches[0].pageY - slashArea;
        initY = positionY;
        // add event touch move
        slash.parentNode.addEventListener('touchmove', (e) => {
            positionY = e.touches[0].pageY - slashArea;
            diffY = positionY - initY;
            if (diffY > 0) {
                dots.classList.remove('move');
                setTimeout(() => {
                    dots.remove();

                }, 400)
            }
        });
        slash.parentNode.addEventListener('touchend', () => {
            body.classList.remove('noneScroll');
        });
    });
    // function apply when user click at one of them 


}
// function Comments
function createComments(parent, text) {
    // img commenter
    let commenter = document.createElement('span');
    commenter.classList = 'commenter';
    let imgCommenter = document.createElement('img');
    imgCommenter.src = "../static/imgs/imgcode/linkedin.jpg";
    let nameCommenter = document.createElement('span');
    nameCommenter.classList = 'name-commenter';
    nameCommenter.innerHTML = 'Abdellah Bech';
    let comment = document.createElement('span');
    comment.id = 'comment-post';
    comment.innerText = text;
    // time of set comment
    let time = document.createElement('span');
    time.id = 'time-comment';
    let nbrTime = 5;
    time.innerHTML = `${nbrTime}min`;
    let name_comment = document.createElement('span');
    name_comment.classList = 'name_comment';
    // create messgae show more or hide 
    if (comment.innerText.length >= 178) {
        comment.style = 'height:35px;overflow:hidden;'
        let showMore = document.createElement('span');
        showMore.id = 'show-more';
        showMore.innerHTML = 'show More...';
        name_comment.appendChild(showMore);
        showMore.onclick = () => {
            if (showMore.id == 'show-more') {
                showMore.innerHTML = 'show less';
                comment.style = `
                   overflow:visible;`
                showMore.id = 'show-less';
            } else {
                showMore.innerHTML = 'show More...';
                comment.style = `
                    height:35px;
                   overflow:hidden;`;
                showMore.id = 'show-more'
            }
        }
    }
    // create intract with comment
    let intract_comment = document.createElement('span');
    intract_comment.classList = 'intracting';
    let upIntract = document.createElement('span');
    upIntract.innerHTML = '<svg  viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m12 20 9-11h-6V4H9v5H3z" class="icon_svg-stroke icon_svg-fill"  stroke-width="1.5" stroke-linejoin="round"></path></svg>';
    let downIntract = document.createElement('span');
    downIntract.innerHTML = '<svg  viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m12 20 9-11h-6V4H9v5H3z" class="icon_svg-stroke icon_svg-fill"  stroke-width="1.5" stroke-linejoin="round"></path></svg>';
    let upcounter = document.createElement('span');
    upcounter.id = 'Up-count-comment';
    upcounter.innerHTML = 430
    upIntract.appendChild(upcounter);
    let downcounter = document.createElement('span');
    downcounter.id = 'Down-count-comment';
    downcounter.innerHTML = '454';
    downIntract.appendChild(downcounter);
    intract_comment.appendChild(upIntract);
    intract_comment.appendChild(downIntract);
    commenter.appendChild(intract_comment);
    // functions decrement and increment
    downIntract.onclick = () => {
        downIntract.children[0].classList.toggle('color')
        if (upIntract.children[0].classList.contains('color')) {
            upIntract.children[0].classList.remove('color');
            upcounter.innerHTML--;
        }
        downIntract.children[0].classList.contains('color') ? downcounter.innerHTML++ : downcounter.innerHTML--;
    }
    // when user click at up button change color and increment by one;
    upIntract.onclick = () => {
        upIntract.children[0].classList.toggle('color')
        if (downIntract.children[0].classList.contains('color')) {
            downIntract.children[0].classList.remove('color');
            downcounter.innerHTML--;
        }
        upIntract.children[0].classList.contains('color') ? upcounter.innerHTML++ : upcounter.innerHTML--;
    }
    // create div dots in comments
    let dots_Comments = document.createElement('span');
    dots_Comments.id = 'dots_Commets';
    dots_Comments.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M0 256a56 56 0 1 1 112 0A56 56 0 1 1 0 256zm160 0a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm216-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112z"/></svg>`;
    // when user click at dots that is exist in comment run this function 'dotsComments'
    dots_Comments.onclick = (e) => {
        // set prop at  div 'name_comment'
        name_comment.style.zIndex = '1';
        if (document.querySelector('.hidden')) {
            document.querySelector('.hidden').parentNode.children[2].style.zIndex = '0';
            document.querySelector('.hidden').classList.remove('hidden');
        }
        // hidden div intract comment
        intract_comment.classList.add('hidden');

        // remove all created div dots comments
        document.querySelector('.fun-comment') ? document.querySelector('.fun-comment').remove() : '';
        dotsComments(name_comment, dots_Comments, intract_comment, parent.parentNode);
        // disable clicking
        setTimeout(() => {
            document.onclick = () => {
                document.querySelector('.fun-comment') ? document.querySelector('.fun-comment').remove() : '';
                intract_comment.classList.remove('hidden');
                setTimeout(() => {
                    name_comment.style.zIndex = '0';
                }, 150);
            }
        }, 0);
    }
    name_comment.appendChild(dots_Comments);
    commenter.appendChild(imgCommenter);
    name_comment.appendChild(time);
    name_comment.appendChild(nameCommenter);
    name_comment.appendChild(comment);
    commenter.appendChild(name_comment);
    parent.appendChild(commenter);
}
// function back 
function back(scroll, post) {
    // add time out to post div
    if (document.querySelector('.back')) {
        document.querySelector('.back').remove();
    }
    let timeNone = setTimeout(() => {
        post.classList.add('none');
    }, 300)
    let divBack = document.createElement('div');
    divBack.classList = 'back';
    // create text
    let textBack = document.createElement('p');
    textBack.innerText = 'this post is deleted successfuly';
    // create btn back
    let btnBack = document.createElement('button');
    btnBack.id = 'back';
    btnBack.innerText = 'back'
    divBack.appendChild(textBack);
    divBack.appendChild(btnBack);
    body.appendChild(divBack);
    setTimeout(() => {
        divBack.classList.add('scale');
    }, 0)
    let timeOne = setTimeout(() => {
        divBack.classList.remove('scale');
        setTimeout(() => {
            post.remove();
            divBack.remove();
            document.querySelector('.container').children.length == 0 ? NoPosts() : '';
        }, 500);

    }, 4000);
    btnBack.onclick = async () => {
                        // SEND DATA TO SERVER BY FECTH
                        let response = await fetch("http://127.0.0.1:5000/unhide_post", {
                            method: "post",
                            headers: { "Content-type": "application/json" },
                            body: JSON.stringify({ post_id: post.getAttribute('data-id') })
                        });
        post.classList.remove('none');
        setTimeout(() => {
            post.classList.remove('move');
        });
        clearTimeout(timeOne);
        clearTimeout(timeNone);
        scrollTo(0, scroll);
        divBack.remove();
    }

}
// function for copy any text or url
function copyText(text) {
    let input = document.createElement('input');
    input.id = 'copy';
    input.type = 'text';
    input.readOnly = true;
    input.value = `${text}`;
    body.appendChild(input);
    input.select();
    document.execCommand('copy');
    document.getSelection().removeAllRanges();
    input.remove();
}
// function create dots of div 'comments'
function dotsComments(parent, eleMain, elechange, BIGPARENT) {
    // let nbr_of_comments = BIGPARENT.children[1].children.length;
    // create div dots Comments 
    let div_dots = document.createElement('div');
    div_dots.classList = 'fun-comment';
    setTimeout(() => {
        div_dots.classList.add('showDiv');
    }, 0)
    // edit function
    let li_edit = document.createElement('li');
    li_edit.id = 'edit';
    li_edit.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.8 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z"/></svg>`;
    // when click at edit run function 'editComments'
    li_edit.onclick = () => {
        /* code of function to edit comment */
        eleMain.style.pointerEvents = 'none';
        // editComments(parent.children[3], parent.children[3].innerText);
        elechange.children[0].style = `display:none;`
        elechange.children[1].style = `display:none;`
        // change some prop in css
        elechange.classList.add('changed');
        // create function edit comment
        let save = document.createElement('span');
        save.id = 'save';
        save.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M0 224c0 17.7 14.3 32 32 32s32-14.3 32-32c0-53 43-96 96-96H320v32c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l64-64c12.5-12.5 12.5-32.8 0-45.3l-64-64c-9.2-9.2-22.9-11.9-34.9-6.9S320 19.1 320 32V64H160C71.6 64 0 135.6 0 224zm512 64c0-17.7-14.3-32-32-32s-32 14.3-32 32c0 53-43 96-96 96H192V352c0-12.9-7.8-24.6-19.8-29.6s-25.7-2.2-34.9 6.9l-64 64c-12.5 12.5-12.5 32.8 0 45.3l64 64c9.2 9.2 22.9 11.9 34.9 6.9s19.8-16.6 19.8-29.6V448H352c88.4 0 160-71.6 160-160z"/></svg>`;
        let cancel = document.createElement('span');
        cancel.id = 'cancel'
        cancel.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M368 368L144 144M368 144L144 368"/></svg>`;
        elechange.appendChild(save);
        elechange.appendChild(cancel);
        parent.children[3].style.display = 'none';
        contentComment(parent, parent.children[3], elechange, save, cancel);
    }
    // delete function
    let li_delet = document.createElement('li');
    li_delet.id = 'remove';
    li_delet.onclick = () => {
        parent.parentNode.style = 'scale:0;';
        setTimeout(() => {
            parent.parentNode.remove();
            // nbr_of_comments--
            // if (nbr_of_comments == 0) {
            //     BIGPARENT.children[2].innerText = 'No Comments Here';
            //     BIGPARENT.children[2].style = 'margin:0 auto;';
            // }
        }, 510);
    }
    li_delet.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><title>Trash</title><path d="M112 112l20 320c.95 18.49 14.4 32 32 32h184c17.67 0 30.87-13.51 32-32l20-320" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/><path stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M80 112h352"/><path d="M192 112V72h0a23.93 23.93 0 0124-24h80a23.93 23.93 0 0124 24h0v40M256 176v224M184 176l8 224M328 176l-8 224" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/></svg>`;
    // copy function
    let li_copy = document.createElement('li');
    li_copy.id = 'copy';
    li_copy.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><title>Clipboard</title><path d="M336 64h32a48 48 0 0148 48v320a48 48 0 01-48 48H144a48 48 0 01-48-48V112a48 48 0 0148-48h32" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32"/><rect x="176" y="32" width="160" height="64" rx="26.13" ry="26.13" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32"/></svg>`;
    div_dots.appendChild(li_edit);
    div_dots.appendChild(li_delet);
    div_dots.appendChild(li_copy);
    parent.appendChild(div_dots);
    li_copy.onclick = () => {
        copyText(parent.children[3].innerText);
    }
    document.onclick = () => {
        eleMain.classList.remove('noneclick');
    }
}
// function create div to edit comment
function contentComment(nameComment, CommentPOst, intract, btnSave, btnCancel) {
    let textarea = document.createElement('textarea');
    textarea.id = 'edit-comment';
    nameComment.appendChild(textarea);
    intract.style = 'bottom:-30px;'
    textarea.value = CommentPOst.innerText;
    textarea.focus();
    textarea.addEventListener('keyup', (e) => {
        textarea.style.height = 'auto';
        textarea.style.height = `${e.target.scrollHeight}px`;
    });
    // disable button save when text area is empty
    textarea.addEventListener('keyup', () => {
        textarea.value.trim() !== '' ? btnSave.style = 'background:green;' : btnSave.style = 'background:#00800042;pointer-events:none;'
    });
    // save 
    btnSave.onclick = () => {
        if (textarea.value.trim() !== '') {
            CommentPOst.innerText = textarea.value;
            CommentPOst.style.display = 'block';
            intract.style = 'bottom:-22px;'
            nameComment.children[0].style.pointerEvents = 'unset';
            nameComment.parentNode.children[0].children[0].style = `display:block;`;
            nameComment.parentNode.children[0].children[1].style = `display:block;`;
            // set none to new last span sva and cancel
            btnSave.style.display = 'none';
            btnCancel.style.display = 'none';
            // remove class changed
            intract.classList.remove('changed');
            textarea.remove();
        } else {
            btnSave.style = 'background:#00800042;pointer-events:none;'
        }
    }
    // cancel
    btnCancel.onclick = () => {
        // remove none from last spans
        intract.children[0].style = `display:block;`;
        intract.children[1].style = `display:block;`;
        // set none to new last span sva and cancel
        btnSave.style.display = 'none';
        btnCancel.style.display = 'none';
        // remove class changed
        intract.classList.remove('changed');
        nameComment.children[0].style.pointerEvents = 'unset';
        CommentPOst.innerText = CommentPOst.innerText;
        CommentPOst.style.display = 'block';
        intract.style = 'bottom:-22px;'
        // remove text area
        textarea.remove();
    }

}
// function to add post
let IsImage = false; // we need this var is global
// arr of paths
let paths_img = [];
function add_Post() {
    // create pat image
    // for pass the path
    let path = '';
    // default value
    let ICONpRIVATE = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M57.7 193l9.4 16.4c8.3 14.5 21.9 25.2 38 29.8L163 255.7c17.2 4.9 29 20.6 29 38.5v39.9c0 11 6.2 21 16 25.9s16 14.9 16 25.9v39c0 15.6 14.9 26.9 29.9 22.6c16.1-4.6 28.6-17.5 32.7-33.8l2.8-11.2c4.2-16.9 15.2-31.4 30.3-40l8.1-4.6c15-8.5 24.2-24.5 24.2-41.7v-8.3c0-12.7-5.1-24.9-14.1-33.9l-3.9-3.9c-9-9-21.2-14.1-33.9-14.1H257c-11.1 0-22.1-2.9-31.8-8.4l-34.5-19.7c-4.3-2.5-7.6-6.5-9.2-11.2c-3.2-9.6 1.1-20 10.2-24.5l5.9-3c6.6-3.3 14.3-3.9 21.3-1.5l23.2 7.7c8.2 2.7 17.2-.4 21.9-7.5c4.7-7 4.2-16.3-1.2-22.8l-13.6-16.3c-10-12-9.9-29.5 .3-41.3l15.7-18.3c8.8-10.3 10.2-25 3.5-36.7l-2.4-4.2c-3.5-.2-6.9-.3-10.4-.3C163.1 48 84.4 108.9 57.7 193zM464 256c0-36.8-9.6-71.4-26.4-101.5L412 164.8c-15.7 6.3-23.8 23.8-18.5 39.8l16.9 50.7c3.5 10.4 12 18.3 22.6 20.9l29.1 7.3c1.2-9 1.8-18.2 1.8-27.5zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z"/></svg>`;
    let addpost = document.createElement('div');
    addpost.classList = 'add-post';
    let top = document.createElement('div');
    top.classList = 'top';
    let h2 = document.createElement('h2');
    h2.innerText = 'create Post';
    top.appendChild(h2);
    let priPub = document.createElement('div');
    priPub.id = 'pri-pub';
    let icon = document.createElement('span')
    icon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M57.7 193l9.4 16.4c8.3 14.5 21.9 25.2 38 29.8L163 255.7c17.2 4.9 29 20.6 29 38.5v39.9c0 11 6.2 21 16 25.9s16 14.9 16 25.9v39c0 15.6 14.9 26.9 29.9 22.6c16.1-4.6 28.6-17.5 32.7-33.8l2.8-11.2c4.2-16.9 15.2-31.4 30.3-40l8.1-4.6c15-8.5 24.2-24.5 24.2-41.7v-8.3c0-12.7-5.1-24.9-14.1-33.9l-3.9-3.9c-9-9-21.2-14.1-33.9-14.1H257c-11.1 0-22.1-2.9-31.8-8.4l-34.5-19.7c-4.3-2.5-7.6-6.5-9.2-11.2c-3.2-9.6 1.1-20 10.2-24.5l5.9-3c6.6-3.3 14.3-3.9 21.3-1.5l23.2 7.7c8.2 2.7 17.2-.4 21.9-7.5c4.7-7 4.2-16.3-1.2-22.8l-13.6-16.3c-10-12-9.9-29.5 .3-41.3l15.7-18.3c8.8-10.3 10.2-25 3.5-36.7l-2.4-4.2c-3.5-.2-6.9-.3-10.4-.3C163.1 48 84.4 108.9 57.7 193zM464 256c0-36.8-9.6-71.4-26.4-101.5L412 164.8c-15.7 6.3-23.8 23.8-18.5 39.8l16.9 50.7c3.5 10.4 12 18.3 22.6 20.9l29.1 7.3c1.2-9 1.8-18.2 1.8-27.5zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z"/></svg>`;
    let icon2 = document.createElement('span');
    icon2.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M201.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 338.7 54.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg>`;
    priPub.appendChild(icon);
    priPub.appendChild(icon2);
    top.appendChild(priPub);
    addpost.appendChild(top);
    // function priPub
    let boolPub = true;
    priPub.onclick = () => {
        setTimeout(() => {
            icon2.children[0].style = 'rotate:0deg;';
        }, 0)
        priPub.style.pointerEvents = 'none';
        let content_priPub = document.createElement('div');
        content_priPub.classList = 'content_priPub';
        let private = document.createElement('li');
        let span_pri = document.createElement('span');
        span_pri.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80z"/></svg>`;
        private.appendChild(span_pri);
        let textPri = document.createTextNode('private');
        private.appendChild(textPri);
        // public
        let public = document.createElement('li');
        let span_pub = document.createElement('span');
        span_pub.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M57.7 193l9.4 16.4c8.3 14.5 21.9 25.2 38 29.8L163 255.7c17.2 4.9 29 20.6 29 38.5v39.9c0 11 6.2 21 16 25.9s16 14.9 16 25.9v39c0 15.6 14.9 26.9 29.9 22.6c16.1-4.6 28.6-17.5 32.7-33.8l2.8-11.2c4.2-16.9 15.2-31.4 30.3-40l8.1-4.6c15-8.5 24.2-24.5 24.2-41.7v-8.3c0-12.7-5.1-24.9-14.1-33.9l-3.9-3.9c-9-9-21.2-14.1-33.9-14.1H257c-11.1 0-22.1-2.9-31.8-8.4l-34.5-19.7c-4.3-2.5-7.6-6.5-9.2-11.2c-3.2-9.6 1.1-20 10.2-24.5l5.9-3c6.6-3.3 14.3-3.9 21.3-1.5l23.2 7.7c8.2 2.7 17.2-.4 21.9-7.5c4.7-7 4.2-16.3-1.2-22.8l-13.6-16.3c-10-12-9.9-29.5 .3-41.3l15.7-18.3c8.8-10.3 10.2-25 3.5-36.7l-2.4-4.2c-3.5-.2-6.9-.3-10.4-.3C163.1 48 84.4 108.9 57.7 193zM464 256c0-36.8-9.6-71.4-26.4-101.5L412 164.8c-15.7 6.3-23.8 23.8-18.5 39.8l16.9 50.7c3.5 10.4 12 18.3 22.6 20.9l29.1 7.3c1.2-9 1.8-18.2 1.8-27.5zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z"/></svg>`;
        public.appendChild(span_pub);
        let textpub = document.createTextNode('public');
        public.appendChild(textpub);
        // append it
        content_priPub.appendChild(private);
        content_priPub.appendChild(public);
        addpost.appendChild(content_priPub);
        setTimeout(() => {
            content_priPub.style.translate = '0 0';
            // remove this div when user click at outside
            document.onclick = () => {
                content_priPub.style.translate = '0 -10px';
                content_priPub.remove();
                icon2.children[0].style = 'rotate:-90deg;';
                priPub.style.pointerEvents = 'unset';
            }
        });
        // some functions 
        private.onclick = () => {
            icon.innerHTML = span_pri.innerHTML;
            ICONpRIVATE = icon.innerHTML;
            boolPub = false
        }
        public.onclick = () => {
            icon.innerHTML = span_pub.innerHTML;
            ICONpRIVATE = icon.innerHTML;
        }

    };
    let btnClear = document.createElement('span');
    btnClear.id = 'clear';
    btnClear.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"/></svg>`;
    addpost.appendChild(btnClear);
    // textarea
    let Istext = false;
    let textarea = document.createElement('textarea');
    textarea.placeholder = `what's your problem ...`;
    addpost.appendChild(textarea);
    btnClear.onclick = () => {
        btnClear.style.pointerEvents = 'none';
        let warning = document.createElement('div');
        warning.classList = 'warn-post';
        let textwarn = document.createTextNode('do you want to remove this text');
        warning.appendChild(textwarn);
        let btnnext = document.createElement('button');
        btnnext.id = 'remove-text';
        btnnext.innerText = 'NEXT';
        warning.appendChild(btnnext);
        addpost.appendChild(warning);
        setTimeout(() => {
            warning.style.scale = '1';
        }, 0)
        btnnext.onclick = () => {
            textarea.value = '';
            warning.style.scale = '0';
            warning.remove();
            btnClear.style.pointerEvents = 'unset';
        }
        setTimeout(() => {
            document.onclick = () => {
                warning.remove();
                btnClear.style.pointerEvents = 'unset';
            }
        }, 0)
    }
    // check of text area 
    let checker_textarea = setInterval(() => {
        textarea.value.trim() !== '' ? Istext = true : Istext = false;
    }, 0.002);
    // div imags
    let images = document.createElement('div');
    images.classList = 'images';
    addpost.appendChild(images);
    body.appendChild(addpost);
    /* create Counter */
    let counter = document.createElement('div');
    counter.classList = 'counter';
    let nbrone = document.createElement('span');
    nbrone.id = 'nbr-one';
    nbrone.innerText = '0';
    let nbrTwo = document.createElement('span');
    nbrTwo.id = 'nbr-two';
    nbrTwo.innerText = '5';
    counter.appendChild(nbrone);
    counter.appendChild(document.createTextNode('/'));
    counter.appendChild(nbrTwo);
    /* create Counter */
    setTimeout(() => {
        addpost.style.top = '0px';
    }, 200)
    // controls bottom
    let bottom = document.createElement('div');
    bottom.classList = 'bottom';
    let send_cancel = document.createElement('div');
    send_cancel.classList = 'send-cancel';
    let btnsend = document.createElement('button');
    // condition
    btnsend.id = 'send-post';
    btnsend.innerText = 'POST';
    send_cancel.appendChild(btnsend);
    let btncancel = document.createElement('button');
    btncancel.id = 'cancel-post';
    btncancel.innerText = 'CANCEL';
    send_cancel.appendChild(btncancel);
    bottom.appendChild(send_cancel);
    addpost.appendChild(bottom);
    // alignment
    let align_text = document.createElement('span');
    align_text.classList = 'align_text';
    align_text.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M288 64c0 17.7-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32H256c17.7 0 32 14.3 32 32zm0 256c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H256c17.7 0 32 14.3 32 32zM0 192c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg>`;
    bottom.appendChild(align_text);
    let align = true;
    align_text.onclick = () => {
        align = !align;
        if (addpost.classList.toggle('align')) {
            align_text.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M448 64c0 17.7-14.3 32-32 32H192c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32zm0 256c0 17.7-14.3 32-32 32H192c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32zM0 192c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg>`;
        } else {
            align_text.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M288 64c0 17.7-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32H256c17.7 0 32 14.3 32 32zm0 256c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H256c17.7 0 32 14.3 32 32zM0 192c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg>`;
        }
    }
    // end alignment
    // choose image
    let choose_img = document.createElement('span');
    choose_img.id = 'choose-img';
    choose_img.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M0 96C0 60.7 28.7 32 64 32H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zM323.8 202.5c-4.5-6.6-11.9-10.5-19.8-10.5s-15.4 3.9-19.8 10.5l-87 127.6L170.7 297c-4.6-5.7-11.5-9-18.7-9s-14.2 3.3-18.7 9l-64 80c-5.8 7.2-6.9 17.1-2.9 25.4s12.4 13.6 21.6 13.6h96 32H424c8.9 0 17.1-4.9 21.2-12.8s3.6-17.4-1.4-24.7l-120-176zM112 192a48 48 0 1 0 0-96 48 48 0 1 0 0 96z"/></svg>`;
    bottom.appendChild(choose_img);
    choose_img.onclick = () => {
        images.appendChild(counter);

        let take_image = document.createElement('div');
        take_image.classList = 'take_image';
        // take
        let take = document.createElement('span');
        take.id = 'take-pic';
        take.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M220.6 121.2L271.1 96 448 96v96H333.2c-21.9-15.1-48.5-24-77.2-24s-55.2 8.9-77.2 24H64V128H192c9.9 0 19.7-2.3 28.6-6.8zM0 128V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H271.1c-9.9 0-19.7 2.3-28.6 6.8L192 64H160V48c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16l0 16C28.7 64 0 92.7 0 128zM168 304a88 88 0 1 1 176 0 88 88 0 1 1 -176 0z"/></svg>`;
        take_image.appendChild(take);
        // upload
        let upload = document.createElement('span');
        upload.id = 'upolad-pic';
        upload.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M288 109.3V352c0 17.7-14.3 32-32 32s-32-14.3-32-32V109.3l-73.4 73.4c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l128-128c12.5-12.5 32.8-12.5 45.3 0l128 128c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L288 109.3zM64 352H192c0 35.3 28.7 64 64 64s64-28.7 64-64H448c35.3 0 64 28.7 64 64v32c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V416c0-35.3 28.7-64 64-64zM432 456a24 24 0 1 0 0-48 24 24 0 1 0 0 48z"/></svg>`;
        take_image.appendChild(upload);
        bottom.appendChild(take_image);
        setTimeout(() => {
            take_image.style.translate = '0px 25px';
            setTimeout(() => {
                document.onclick = () => {
                    take_image.remove();
                }
            }, 0)
        }, 0);
        take.onclick = async () => {
            // chack if media devices is supported in this browser
            if (!navigator.mediaDevices && !navigator.mediaDevices.getUserMedia) {
                return;
            } else {
                try {
                    let video_take = document.createElement('div');
                    video_take.classList = 'video_take';
                    let video = document.createElement('video');
                    video.autoplay = 'true';
                    let stream = await navigator.mediaDevices.getUserMedia({ video: true });
                    video.srcObject = stream;
                    let takePIC = document.createElement('button');
                    takePIC.id = 'take-picture';
                    takePIC.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M220.6 121.2L271.1 96 448 96v96H333.2c-21.9-15.1-48.5-24-77.2-24s-55.2 8.9-77.2 24H64V128H192c9.9 0 19.7-2.3 28.6-6.8zM0 128V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H271.1c-9.9 0-19.7 2.3-28.6 6.8L192 64H160V48c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16l0 16C28.7 64 0 92.7 0 128zM168 304a88 88 0 1 1 176 0 88 88 0 1 1 -176 0z"/></svg>`;
                    video_take.appendChild(takePIC);
                    video_take.appendChild(video);
                    addpost.appendChild(video_take);
                    // when click at outside remove div video element
                    // when click at button take an pictures by canvas element
                    takePIC.onclick = () => {
                        let canvas = document.createElement('canvas');
                        canvas.width = 1080;
                        canvas.height = 720;
                        let ctx = canvas.getContext('2d');
                        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
                        let img = document.createElement('img');
                        let url = canvas.toDataURL('image', 'jpg');
                        path = url;
                        let obj = {
                            path: path,
                            key: 0,
                        }
                        paths_img.push(obj);
                        img.src = url;
                        img.width = 1080;
                        img.height = 720;
                        nbrone.innerHTML++;
                        picture_path(images, `${url}`, choose_img, nbrone);
                        IsImage = true;
                        if (nbrone.innerHTML == 5) {
                            choose_img.style.pointerEvents = 'none';
                            choose_img.children[0].style = 'fill: #b6b6b65c;';
                        }

                    }
                    document.onclick = (e) => {
                        if (e.target !== video) {
                            video_take.remove();
                            // stop tracks on this video
                            stream.getTracks()[0].stop();
                        }
                    }
                }
                catch (e) {
                    console.log(e);
                }


            }
        }
        upload.onclick = () => {
            let input = document.createElement('input');
            input.type = 'file';
            input.accept = 'image/png,image/jpg';
            input.click();
            // let image_load = '';
            input.addEventListener('change', () => {
                const reader = new FileReader();
                reader.readAsDataURL(input.files[0]);
                reader.addEventListener('load', () => {
                    path = reader.result;
                    let obj = {
                        path: path,
                        key: 0,
                    }
                    paths_img.push(obj);
                    picture_path(images, `${reader.result}`, choose_img, nbrone);
                    IsImage = true;
                    nbrone.innerHTML++;
                    if (nbrone.innerHTML == 5) {
                        choose_img.style.pointerEvents = 'none';
                        choose_img.children[0].style = 'fill: #b6b6b65c;';
                    }
                });
            })
        }
    }
    // check if post is valid or not
    let checker = setInterval(() => {
        if (Istext || IsImage) {
            btnsend.style = `background: #ff5700;pointer-events:unset;`;
        } else {
            btnsend.style = `background: #ff570054;pointer-events:none;`;

        }
    }, 0.002);
    // when user click at cancel this post remove this page
    btncancel.onclick = () => {
        body.classList.remove('noneScroll');
        clearInterval(checker);
        clearInterval(checker_textarea);
        addpost.remove();
        document.querySelector('#add-post').children[0].style = '0deg';
    }
    // when user click at send send post and created
    btnsend.onclick = async () => {
        console.log(boolPub);
        body.classList.remove('noneScroll');
        console.log(boolPub);
        // condition
        document.querySelector('.container').classList.contains('newChange') ?
            document.querySelector('.container').classList.remove('newChange') : '';
        // rest setting
        index = 0;
        IsImage = false;
        Istext = false;
        addpost.remove();
        document.querySelector('#add-post').children[0].style = '0deg';
        paths_img = [];
        document.querySelector('.text-h2') ? document.querySelector('.text-h2').remove() : '';
        postServer(textarea.value, boolPub, align);
        boolPub = true;
    }

}
// function to create mini picture by path
let newArr = [];
function picture_path(divImgs, path, chooseImg, counter) {
    let spanImg = document.createElement('span');
    let img = document.createElement('img');
    paths_img[index].key = index;
    img.id = index;
    index++;
    img.src = path;
    spanImg.appendChild(img);
    let removeImg = document.createElement('span');
    removeImg.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><title>Close</title><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M368 368L144 144M368 144L144 368"/></svg>`;
    spanImg.appendChild(removeImg);
    divImgs.appendChild(spanImg);
    // functions of this function
    removeImg.onclick = () => {
        index--;
        for (let i = 0; i < paths_img.length; i++) {
            if (parseInt(img.id) !== paths_img[i].key) {
                newArr.push(paths_img[i]);
            }
        }
        paths_img = newArr;
        newArr = [];
        chooseImg.style.pointerEvents = 'unset';
        chooseImg.children[0].style = 'fill: #b6b6b6;';
        counter.innerHTML--;
        counter.innerHTML = counter.innerHTML;
        counter.innerHTML == 0 ? IsImage = false : '';
        spanImg.style = 'scale:0;';
        setTimeout(() => {
            spanImg.remove();
        }, 80);
    }
}
// when no exist any post run function no POSTS
function NoPosts() {
    document.querySelector('.container').classList.add('newChange');
    let h2 = document.createElement('h3');
    h2.classList = 'text-h2';
    h2.innerText = 'No Posts Here';
    body.style = 'height:100vh;'
    body.appendChild(h2);
}
// function to create content menu bars
function menu_bar() {
    // when user click at this span remove div content
    let span = document.createElement('span');
    span.classList = 'overlay';
    body.appendChild(span);
    span.onclick = () => {
        content.classList.remove('move');
        setTimeout(() => {
            content.remove();
        }, 100)
        span.remove();
    }
    // creaet the div content
    let content = document.createElement('div');
    content.classList = 'menu-bar';
    // content top
    let content_top = document.createElement('div');
    content_top.classList = 'content_top';
    // img user
    let imguser = document.createElement('span');
    imguser.classList = 'img-menu';
    let btn_upload = document.createElement('button');
    btn_upload.id = 'upload_menu';
    btn_upload.innerHTML = '+';
    imguser.appendChild(btn_upload);
    let img = document.createElement('img');
    img.src = '../static/imgs/imgcode/linkedin.jpg';
    imguser.appendChild(img);
    content_top.appendChild(imguser);
    // change languages and theme to dark
    let control_top = document.createElement('div');
    control_top.classList = 'control_top';
    let lang = document.createElement('span');
    lang.id = 'lang';
    lang.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M0 128C0 92.7 28.7 64 64 64H256h48 16H576c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H320 304 256 64c-35.3 0-64-28.7-64-64V128zm320 0V384H576V128H320zM178.3 175.9c-3.2-7.2-10.4-11.9-18.3-11.9s-15.1 4.7-18.3 11.9l-64 144c-4.5 10.1 .1 21.9 10.2 26.4s21.9-.1 26.4-10.2l8.9-20.1h73.6l8.9 20.1c4.5 10.1 16.3 14.6 26.4 10.2s14.6-16.3 10.2-26.4l-64-144zM160 233.2L179 276H141l19-42.8zM448 164c11 0 20 9 20 20v4h44 16c11 0 20 9 20 20s-9 20-20 20h-2l-1.6 4.5c-8.9 24.4-22.4 46.6-39.6 65.4c.9 .6 1.8 1.1 2.7 1.6l18.9 11.3c9.5 5.7 12.5 18 6.9 27.4s-18 12.5-27.4 6.9l-18.9-11.3c-4.5-2.7-8.8-5.5-13.1-8.5c-10.6 7.5-21.9 14-34 19.4l-3.6 1.6c-10.1 4.5-21.9-.1-26.4-10.2s.1-21.9 10.2-26.4l3.6-1.6c6.4-2.9 12.6-6.1 18.5-9.8l-12.2-12.2c-7.8-7.8-7.8-20.5 0-28.3s20.5-7.8 28.3 0l14.6 14.6 .5 .5c12.4-13.1 22.5-28.3 29.8-45H448 376c-11 0-20-9-20-20s9-20 20-20h52v-4c0-11 9-20 20-20z"/></svg>`;
    let theme = document.createElement('span');
    theme.id = 'to-dark';
    theme.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M448 256c0-106-86-192-192-192V448c106 0 192-86 192-192zm64 0c0 141.4-114.6 256-256 256S0 397.4 0 256S114.6 0 256 0S512 114.6 512 256z"/></svg>`;
    control_top.appendChild(lang);
    control_top.appendChild(theme);
    content_top.appendChild(control_top);
    content.appendChild(content_top);
    // function to change theme to dark mode
    theme.onclick = () => {
        body.classList.toggle('darkmode');
        // set valu to local storage
        body.classList.contains('darkmode') ? localStorage.setItem('theme', 'dark') :
            localStorage.setItem('theme', 'light');
    }
    // body content

    let body_content = document.createElement('div');
    body_content.classList = 'body_content';
    // first title
    let frstTitle = document.createElement('div');
    frstTitle.classList = 'frstTitle';
    body_content.appendChild(frstTitle);
    for (let i = 0; i < 2; i++) {
        let li = document.createElement('li');
        frstTitle.appendChild(li);
        let p = document.createElement('p');
        let icon = document.createElement('span');
        li.appendChild(p);
        li.appendChild(icon);
        if (i == 0) {
            p.innerText = 'Account'; icon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"/></svg>`;
        }
        else {
            p.innerText = 'add account'; icon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3zM504 312V248H440c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V136c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H552v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z"/></svg>`;
        }

    }
    // second title
    let SecondTitle = document.createElement('div');
    SecondTitle.classList = 'SecondTitle';
    body_content.appendChild(SecondTitle);
    for (let i = 0; i < 4; i++) {
        let li = document.createElement('li');
        SecondTitle.appendChild(li);
        let p = document.createElement('p');
        li.appendChild(p);
        let nbr = document.createElement('span');
        if (i !== 3) {

            nbr.classList = 'nbr';
            li.appendChild(nbr);
            console.log('not equal');
        }
        let icon = document.createElement('span');
        li.appendChild(icon)
        if (i == 0) {
            p.innerText = 'Saved Posts';
            nbr.innerHTML = '25';
            icon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z"/></svg>`;
        }
        if (i == 1) {
            p.innerText = 'Reported Posts';
            nbr.innerHTML = '10';
            icon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M64 32C64 14.3 49.7 0 32 0S0 14.3 0 32V64 368 480c0 17.7 14.3 32 32 32s32-14.3 32-32V352l64.3-16.1c41.1-10.3 84.6-5.5 122.5 13.4c44.2 22.1 95.5 24.8 141.7 7.4l34.7-13c12.5-4.7 20.8-16.6 20.8-30V66.1c0-23-24.2-38-44.8-27.7l-9.6 4.8c-46.3 23.2-100.8 23.2-147.1 0c-35.1-17.6-75.4-22-113.5-12.5L64 48V32z"/></svg>`;
        }
        if (i == 2) {
            p.innerText = 'Hide posts';
            nbr.innerHTML = '2';
            icon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zM223.1 149.5C248.6 126.2 282.7 112 320 112c79.5 0 144 64.5 144 144c0 24.9-6.3 48.3-17.4 68.7L408 294.5c8.4-19.3 10.6-41.4 4.8-63.3c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3c0 10.2-2.4 19.8-6.6 28.3l-90.3-70.8zM373 389.9c-16.4 6.5-34.3 10.1-53 10.1c-79.5 0-144-64.5-144-144c0-6.9 .5-13.6 1.4-20.2L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5L373 389.9z"/></svg>`;
        }
        if (i == 3) {
            p.innerText = 'Settings';
            icon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M481.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-30.9 28.1c-7.7 7.1-11.4 17.5-10.9 27.9c.1 2.9 .2 5.8 .2 8.8s-.1 5.9-.2 8.8c-.5 10.5 3.1 20.9 10.9 27.9l30.9 28.1c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-39.7-12.6c-10-3.2-20.8-1.1-29.7 4.6c-4.9 3.1-9.9 6.1-15.1 8.7c-9.3 4.8-16.5 13.2-18.8 23.4l-8.9 40.7c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-8.9-40.7c-2.2-10.2-9.5-18.6-18.8-23.4c-5.2-2.7-10.2-5.6-15.1-8.7c-8.8-5.7-19.7-7.8-29.7-4.6L69.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l30.9-28.1c7.7-7.1 11.4-17.5 10.9-27.9c-.1-2.9-.2-5.8-.2-8.8s.1-5.9 .2-8.8c.5-10.5-3.1-20.9-10.9-27.9L8.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l39.7 12.6c10 3.2 20.8 1.1 29.7-4.6c4.9-3.1 9.9-6.1 15.1-8.7c9.3-4.8 16.5-13.2 18.8-23.4l8.9-40.7c2-9.1 9-16.3 18.2-17.8C213.3 1.2 227.5 0 242 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l8.9 40.7c2.2 10.2 9.4 18.6 18.8 23.4c5.2 2.7 10.2 5.6 15.1 8.7c8.8 5.7 19.7 7.7 29.7 4.6l39.7-12.6c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM242 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z"/></svg>`;
        }
    }
    let logOut = document.createElement('li');
    logOut.classList = 'color';
    let h3 = document.createElement('p');
    h3.innerHTML = 'Log Out';
    let icon = document.createElement('span');
    icon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 192 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l210.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128zM160 96c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 32C43 32 0 75 0 128L0 384c0 53 43 96 96 96l64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l64 0z"/></svg>`;
    logOut.appendChild(h3);
    logOut.appendChild(icon);
    body_content.appendChild(logOut);
    content.appendChild(body_content);
    // when clicking at logOut switch to sighn up page
    logOut.onclick = () => {
        location.href = `${path}/logout`;
    }
    // logo

    let logo_copyright = document.createElement('div');
    logo_copyright.classList = 'logo_copyright';
    let text = document.createElement('h5');
    text.innerText = 'Oops! Team 2023';
    logo_copyright.appendChild(text);
    // create logo
    let logo = document.createElement('span');
    logo.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 512.008 512.008" style="enable-background:new 0 0 512.008 512.008;" xml:space="preserve">
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
    logo_copyright.appendChild(logo);
    logo_copyright.appendChild(logo);
    content.appendChild(logo_copyright)
    menuBar ? setTimeout(() => {
        content.classList.add('move');
    }, 0) : '';
    let area = content_top.getBoundingClientRect().left;
    let positionX, initX, diffX;
    content.addEventListener('touchstart', (e) => {
        positionX = e.touches[0].pageX - area;
        initX = positionX;
        content.addEventListener('touchmove', (e) => {
            positionX = e.touches[0].pageX - area;
        });
    });
    content.addEventListener('touchend', () => {
        diffX = positionX - initX;
        if (diffX < 0 && diffX * -1 > 50) {
            content.classList.remove('move');
            setTimeout(() => {
                content.remove();
            }, 100);
            span.remove();
            menuBar = false;
        }
    });
    // function to change language of this application
    lang.onclick = () => {
        let div = document.createElement('div');
        div.classList = 'language';
        document.querySelector('.language') ? document.querySelector('.language').remove() : '';
        for (let i = 0; i < 3; i++) {
            let li = document.createElement('li');
            i == 0 ? li.innerText = 'arabic' : '';
            i == 1 ? li.innerText = 'english' : '';
            i == 2 ? li.innerText = 'franch' : '';
            div.appendChild(li);
        }
        control_top.prepend(div);
        setTimeout(() => {
            div.classList.add("move");
            setTimeout(() => {
                div.classList.add('translate');
            }, 100);
        }, 200);
        setTimeout(() => {
            document.onclick = () => {
                div.remove();
            };
        }, 0)
    }
    body.appendChild(content);
}
// function to create post and saved in server
async function postServer(text, priPub, alignment) {
    console.log(priPub);
    console.log('peoplw');
    let data = await fetch("http://127.0.0.1:5000/add_post", {
        method: 'post',
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({
            content: text,
            is_public: priPub,
            ild: alignment,
        }),
    });
    console.log(data.json());

}
// function save post server
async function savePostServer() {
    let response = await fetch("", {
        method: "post",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ post_id: post.getAttribute('data-id') })
    });
    console.log(response.json());
}
// function get data from server
async function getPosts() {
    let response = await fetch('http://127.0.0.1:5000/posts?all_posts=true', {
        method: 'get',
    });
    let data = await response.json();
    // create post
    data.total==0?NoPosts():'';
    for (let post of data.posts) {
        console.log(post);
        if (post.is_public) {
            default_img = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M57.7 193l9.4 16.4c8.3 14.5 21.9 25.2 38 29.8L163 255.7c17.2 4.9 29 20.6 29 38.5v39.9c0 11 6.2 21 16 25.9s16 14.9 16 25.9v39c0 15.6 14.9 26.9 29.9 22.6c16.1-4.6 28.6-17.5 32.7-33.8l2.8-11.2c4.2-16.9 15.2-31.4 30.3-40l8.1-4.6c15-8.5 24.2-24.5 24.2-41.7v-8.3c0-12.7-5.1-24.9-14.1-33.9l-3.9-3.9c-9-9-21.2-14.1-33.9-14.1H257c-11.1 0-22.1-2.9-31.8-8.4l-34.5-19.7c-4.3-2.5-7.6-6.5-9.2-11.2c-3.2-9.6 1.1-20 10.2-24.5l5.9-3c6.6-3.3 14.3-3.9 21.3-1.5l23.2 7.7c8.2 2.7 17.2-.4 21.9-7.5c4.7-7 4.2-16.3-1.2-22.8l-13.6-16.3c-10-12-9.9-29.5 .3-41.3l15.7-18.3c8.8-10.3 10.2-25 3.5-36.7l-2.4-4.2c-3.5-.2-6.9-.3-10.4-.3C163.1 48 84.4 108.9 57.7 193zM464 256c0-36.8-9.6-71.4-26.4-101.5L412 164.8c-15.7 6.3-23.8 23.8-18.5 39.8l16.9 50.7c3.5 10.4 12 18.3 22.6 20.9l29.1 7.3c1.2-9 1.8-18.2 1.8-27.5zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z"></path></svg>`
        } else {
            default_img = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80z"></path></svg> `

        }
        createPost("../static/imgs/imgcode/linkedin.jpg", post.auther.user_name, '15 oct 2023', `${post.content}`
            , paths_img, post.likes, post.dislikes, 4, '', default_img, post.id,
            post.ild, post.l, post.d, post.s, post.r);
    }
}
getPosts();
controlTop();
Container();
controlBottom();
