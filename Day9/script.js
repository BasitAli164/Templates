const myBody=document.querySelector("body");


const table=document.createElement("table")
const tablebody=document.createElement("tbody")


for(let i=1;i<4;i++){
    const tr=document.createElement('tr')
    for (let j=1;j<5;j++){
        const td=document.createElement('td')
        const currentText=document.createTextNode(`Row ${i} and Col ${j}`)
        td.appendChild(currentText)
        tr.appendChild(td)

        if(j==1){
            td.style.backgroundColor='red'
        }
    }


    tablebody.appendChild(tr)

    
}


table.appendChild(tablebody)

myBody.appendChild(table)


table.setAttribute("border",'2')