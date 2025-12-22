let img=document.querySelector('.img')
let name=document.querySelector('.name')
let description=document.querySelector('.description')



const data=[
    {
        name:"Ali",
        des:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste quia totam eligendi nulla magni! Impedit neque tempore quo accusantium consequatur quidem soluta, hic excepturi cumque. Aut fugit repellendus praesentium beatae.",
        image:'../image/blog-1.jpg',
    },
    {
        name:"Ali",
        des:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste quia totam eligendi nulla magni! Impedit neque tempore quo accusantium consequatur quidem soluta, hic excepturi cumque. Aut fugit repellendus praesentium beatae.",
        image:'../image/blog-2.jpg',
    },
    {
        name:"Ali",
        des:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste quia totam eligendi nulla magni! Impedit neque tempore quo accusantium consequatur quidem soluta, hic excepturi cumque. Aut fugit repellendus praesentium beatae.",
        image:'../image/blog-3.jpg',
    },
    {
        name:"hussain",
        des:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste quia totam eligendi nulla magni! Impedit neque tempore quo accusantium consequatur quidem soluta, hic excepturi cumque. Aut fugit repellendus praesentium beatae.",
        image:'../image/cat-3.png',
    },
    {
        name:"king",
        des:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste quia totam eligendi nulla magni! Impedit neque tempore quo accusantium consequatur quidem soluta, hic excepturi cumque. Aut fugit repellendus praesentium beatae.",
        image:'../image/cat-2.png',
    },
    {
        name:"Ali",
        des:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste quia totam eligendi nulla magni! Impedit neque tempore quo accusantium consequatur quidem soluta, hic excepturi cumque. Aut fugit repellendus praesentium beatae.",
        image:'../image/blog-1.jpg',
    },
    {
        name:"Ali",
        des:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste quia totam eligendi nulla magni! Impedit neque tempore quo accusantium consequatur quidem soluta, hic excepturi cumque. Aut fugit repellendus praesentium beatae.",
        image:'../image/cat-1.png',
    },
    {
        name:"Akhon",
        des:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste quia totam eligendi nulla magni! Impedit neque tempore quo accusantium consequatur quidem soluta, hic excepturi cumque. Aut fugit repellendus praesentium beatae.",
        image:'../image/blog-2.jpg',
    },
    {
        name:"Abid",
        des:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste quia totam eligendi nulla magni! Impedit neque tempore quo accusantium consequatur quidem soluta, hic excepturi cumque. Aut fugit repellendus praesentium beatae.",
        image:'../image/blog-3.jpg',
    },
    {
        name:"muhammad",
        des:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste quia totam eligendi nulla magni! Impedit neque tempore quo accusantium consequatur quidem soluta, hic excepturi cumque. Aut fugit repellendus praesentium beatae.",
        image:'../image/blog-1.jpg',
    },
]

let id=1
const update=()=>{

    let {name,img,des}=data[id]

    console.log(name)
    name.innerHTML=name,
    img.src=img
    description.innerHTML=des
    id++
    if(id>data.length-1)
    {
        id=0
    }


    
}
setInterval(update,1000)