

export class DOMHeloper{

    static getElementById(id){
        const element=document.getElementById(id);
        if(!element){
            throw new Error(`Element with ${id} not Found`)
        }
        return element

    }


    static createElements(title,description,className){

        // craete all required elements
        const containerDiv=document.createElement('div');
        const leftBox=document.createElement('div');
        const rightBox=document.createElement('div');
        const leftBoxInner=document.createElement('div')
        const  titleele=document.createElement('p');
        const descriptionele=document.createElement('p');
        const editBtn=document.createElement('button');
        const deleteBtn=document.createElement('button');
        const checkbox=document.createElement('input');


        // add text for each element

        titleele.textContent=title;
        descriptionele.textContent=description;
        editBtn.textContent="Edit";
        deleteBtn.textContent="Delete";
        checkbox.type="checkbox";


        // add className
        if(className){
            containerDiv.className=className
        }



        // appending in there parent
        leftBoxInner.appendChild(titleele)
        leftBoxInner.appendChild(descriptionele)

        leftBox.appendChild(leftBoxInner)
        leftBox.appendChild(checkbox)

        rightBox.appendChild(editBtn)
        rightBox.appendChild(deleteBtn)


        containerDiv.appendChild(leftBox)
        containerDiv.appendChild(rightBox)


        return containerDiv

        



    }


    static appendFragments(parent,items,createFn){
        const fragment=document.createDocumentFragment();



    }
}