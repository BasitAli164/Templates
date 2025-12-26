

export class DOMHeloper{

    static getElementById(id){
        const element=document.getElementById(id);
        if(!element){
            throw new Error(`Element with ${id} not Found`)
        }
        return element

    }
}