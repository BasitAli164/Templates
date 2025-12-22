let result=document.querySelector("#result")
let filter=document.getElementById("filter")

let listItem=[];

filter.addEventListener('input',(e)=>filterData(e.target.value))

async function getData() {
    let res=await fetch('https://randomuser.me/api?reuslt=50')

    let {results}=await res.json()

    result.innerHTML=''
    results.forEach((user)=>{
        let li=document.createElement('li')
        listItem.push(li)


        li.innerHTML=`
        <img  src="${user.picture.large}" alt="${user.name.first}"/>
        <div class="user-info">
        <h4>${user.name.first} ${user.name.last}</h4>
        <p>${user.location.city}, ${user.location.country}</p>

        
        </div>
        
        `

        result.appendChild(li)
         
    })
    
}

function filterData(searchItem){
    listItem.forEach((item)=>{
        if(item.innerText.toLowerCase().include(searchItem.toLowerCase())){
            item.classList.remove('hide')

        }else{
            item.classList.add('hide')
        }
    })
}