let box=document.querySelectorAll('.box')


window.addEventListener('scroll',checkboxes)
checkboxes()


function checkboxes(){
    const triggerBtn=window.innerHeight/5*4
    box.forEach((ele)=>{
        let boxTop=ele.getBoundingClientRect().top

        if(boxTop<triggerBtn){
            box.classList.add('show')
        }else{
            box.classList.remove("show")
        }
    })
}