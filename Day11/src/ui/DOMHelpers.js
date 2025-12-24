export class DOMHelper{
    static getElementById(id){
        const element= document.getElementById(id)
        if(!element){
            throw new Error(`Element with ${id} not found in HTML file`)
        }

        return element;
    }
}