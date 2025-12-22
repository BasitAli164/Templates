let story=document.querySelector('.story')
let set=document.querySelector('#set-content')
let clear=document.querySelector('#clear-content')



set.addEventListener('click',()=>{
    // story.innerHTML="<b>basit</b>"
    story.textContent="my name is basit"
})
clear.addEventListener('click',()=>{
    // story.innerHTML=""
    story.textContent=""
})



let parent=document.querySelector(".parent")
let addChild=document.querySelector("#addChild")


addChild.addEventListener("click",()=>{
        

        if (parent.childNodes.length > 1) {
        
        return;
    }

        const child=document.createElement("a")
        child.classList.add("child")
        child.textContent="child"
        parent.appendChild(child)

    })


let remvoeChild=document.querySelector("#removeChild")

remvoeChild.addEventListener('click',()=>{
    const child=document.body.querySelector('.child');
    parent.removeChild(child)
})

