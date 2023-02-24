let scrollToTop= document.querySelector(".scroll-to-top");
let stickyNav = document.querySelector(".sticky-navbar")
let body = document.querySelector("html,body")
// console.log(stickyNav)
window.addEventListener("scroll" , ()=>{
    if(body.scrollTop >= 100){
        scrollToTop.style.display= "block";
        scrollToTop.addEventListener("click" , ()=>{
            window.scrollTo(0 , 0);
        });
    }else{
        scrollToTop.style.display= "none"
    }
})
window.addEventListener("scroll" , ()=>{
    if(body.scrollTop >= 100 ){
        stickyNav.style.display= "block";
        if(stickyNav.classList.contains("animate__fadeOutUp")){
            stickyNav.classList.remove("animate__animated","animate__fadeOutUp")
        }

        stickyNav.classList.add("animate__animated","animate__fadeInDown")       
    }else{
        stickyNav.style.display= "block";
        if(stickyNav.classList.contains("animate__fadeInDown")){
            stickyNav.classList.remove("animate__animated","animate__fadeInDown")
        }

        stickyNav.classList.add("animate__animated","animate__fadeOutUp")
        

    }
})


// add active class
let linkitem = document.querySelectorAll(".nav-link")
for (let index = 0; index < linkitem.length; index++) {
    linkitem[index].addEventListener("click" , ()=>{
        // loop for remove class
        for (let i = 0; i < linkitem.length; i++) {
            linkitem[i].classList.remove("active")
            
        }
        linkitem[index].classList.add("active")
    })
}
// dark-modev and light-mode
let moonIcon = document.querySelector(".dark-theme")
let sunIcon = document.querySelector(".light-theme")
let styleSheet = document.querySelector("#skin_color")
moonIcon.addEventListener("click" , ()=>{
    styleSheet.setAttribute("href" , "css/style-dark.css")
    localStorage.setItem("dark-theme" , "css/style-dark.css")
})

//this if for ckeck storage when refresh or open new tab
if(localStorage.getItem("dark-theme" )){
    styleSheet.setAttribute("href" , "css/style-dark.css")
}


sunIcon.addEventListener("click" , ()=>{
    styleSheet.setAttribute("href" , "css/style.css")
    localStorage.removeItem("dark-theme" )
})
let showimage = document.querySelectorAll(".show-more-image")
let showbutton = document.querySelector(".btn-show-more")
let showless = document.querySelector(".btn-show-less")
showbutton.addEventListener("click" , ()=>{
    for (let index = 0; index < showimage.length; index++) {
        showimage[index].style.display="block"
        
    }
    showbutton.style.display="none";
    showless.style.display="block";
})
showless.addEventListener("click" , ()=>{
    for (let index = 0; index < showimage.length; index++) {
        showimage[index].style.display="none"
        
    }
    showbutton.style.display="block";
    showless.style.display="none";
})
//contact form
 let formdata = document.querySelectorAll(".form-data")
 let subject = document.querySelector(".subject")
 let email = document.querySelector(".email")
 let message = document.querySelector("textarea")
 message.disabled = true;
 for (let index = 0; index < formdata.length; index++) {
    formdata[index].addEventListener("blur" , ()=>{
        if(subject.value == "" || email.value == ""){
            message.disabled = true
        }else{
            message.disabled = false
        }
    })
     
 }
