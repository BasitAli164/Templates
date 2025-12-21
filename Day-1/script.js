let images=document.querySelectorAll('.images')
images.forEach(img => {
    img.addEventListener('click',()=>{
        removeClassList()
        img.classList.add('active')
    })
    
});


function removeClassList(){
    images.forEach(img=>{
        img.classList.remove("active")
    })
}




let btn=document.querySelector('.btn')
console.log(btn)

btn.addEventListener('click',()=>{
    btn.classList.toggle('active')
    
})