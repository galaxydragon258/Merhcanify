import { cart } from  './cartStorage.js';
 export function cartUpdate() {
    let totalQuantity = 0;
    cart.forEach((items)=>{
        totalQuantity += items.quantity;

    })

    document.querySelector('.Order').innerHTML = totalQuantity;    


}