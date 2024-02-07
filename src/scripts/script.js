AOS.init();
//getting docs
let currentMenuItemIndex = 0;
//________________________________HIDE PAGE WHILE LOADING___________________________________
setVisible('#wrapper', false);
setVisible('#loading', true);

//_______________________________________LOADER_____________________________________________
window.addEventListener('load', function() { //used to be domcontentloaded
    //select all selection and set color
    let svgs = document.querySelectorAll("svg");
    //onload, run the function
    for (let i = 0; i < svgs.length; i++){
        svgs[i].style["max-height"]="10rem";
    }
    wait(100).then(() => {
        setVisible('#wrapper', true);
        setVisible('#loading', false);
        let bs = this.document.getElementById("blackscreen");
        bs.style.animation = "fadeMeOut 0.43s ease-in-out 0.1s 1 forwards";
        // windowResized();
      })
});
//________________________________MOUSE PIC INTERACTION____________________________________________
// const pic = document.querySelector('.image-container');
// pic.addEventListener('mousemove', (event) => {
//     let mouseX = event.clientX;
//     let mouseY = event.clientY;
//     let ox = window.innerWidth/2;
//     let oy = window.innerHeight/2;
//     //convert to rem scale
//     let incx = rescale(mouseX, ox - pic.offsetWidth/2, ox + pic.offsetWidth/2, -4, 4);
//     let incy = rescale(mouseY, oy - pic.offsetHeight/2, oy + pic.offsetHeight/2, -4, 4);
//     incy = (incy + 1) +"rem";
//     incx = incx+"rem";
//     //change variables
//     set_css_var("--vidy", incy);
//     set_css_var("--vidx", incx);
// });