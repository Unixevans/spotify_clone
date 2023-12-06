window.onscroll = function() {
    const header = document.querySelector('#gmb-banner');
    const fixedNav = header.offsetTop;
    const toTop = document.querySelector('#nav-content');


    if(window.pageYOffset > fixedNav) {
        toTop.classList.add('trans');
    }
}