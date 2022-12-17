const screen = window.matchMedia("(min-width: 1104px)")
if (screen){
    document.getElementsByClassName('about-doodle').style.display='none'
    document.getElementsByClassName('aboutimg').style.display='none'
    document.getElementsByClassName('contact-img1').style.display='none'
    document.getElementsByClassName('contact-img2').style.display='none'
    document.getElementsByClassName('arrow-doodle').style.display='none'
    document.getElementsByClassName('cover-doodle').style.display='none'
    document.getElementsByClassName('cover-img').style.display='none'
}
else{
    document.getElementsByClassName('about-doodle').style.display='block'
    document.getElementsByClassName('aboutimg').style.display='block'
    document.getElementsByClassName('contact-img1').style.display='block'
    document.getElementsByClassName('contact-img2').style.display='block'
    document.getElementsByClassName('arrow-doodle').style.display='block'
    document.getElementsByClassName('cover-doodle').style.display='block'
    document.getElementsByClassName('cover-img').style.display='block'
}