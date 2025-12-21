let insert=document.querySelector('.insert')
window.addEventListener("keydown",(eve)=>{
    insert.innerHTML=`
         <div class="key">
            ${eve.key===''?'space':eve.key}
            <small>${eve.key}</small>
        </div>
         <div class="key">
            ${eve.keyCode}
            <small>${eve.keyCode}</small>
        </div>
         <div class="key">
            ${eve.code}
            <small> ${eve.code}</small>
        </div>
    `

})