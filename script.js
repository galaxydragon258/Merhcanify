import {data} from './data/data.js';
import { cart } from  './cartStorage.js';
import {cartUpdate} from './CartUpdate.js';

let html = '';

data.forEach((iteem)=>{
    html +=`
    <div class="product-infos">
                <div class="image-container">
                    <img src="images/${iteem.image}" class="product-image">
                </div>

                <div>
                    <p class="product-name">${iteem.name}</p>
                </div>
                <div class="star-count">
                    <img class = "star"src="images/rating.png">
                    <p class='ratings'>80</p>
                </div>
                <div>
                    <p class = 'price'>$${iteem.price/100}</p>
                </div>
                <div>
                    <select class="quantity">
                        <option value ="1">1</option>
                        <option value ="2">2</option>
                        <option value ="3">3</option>
                        <option value ="4">4</option>
                        <option value ="5">5</option>
                        <option value ="6">6</option>
                        <option value ="7">7</option>
                        <option value ="8">8</option>
                        <option value ="9">9</option>
                        <option value ="10">10</option>

                
                    </select>

                    <div class="checkmark-container">
                        <img src="./images/checkmark.png" class="checkmark">
                        <p> Added</p>
                        </div>
                    <div class="button-container">
                        
                        <button class="add-to-cart" data-product-id="${iteem.id}">
                            Add to Cart
                        </button>
                    </div>
                </div>

            </div>


    `

    document.querySelector('.product-preview').innerHTML = html;
})

document.querySelectorAll('.add-to-cart').forEach((button)=>{
    button.addEventListener('click',()=>{
        const productId = button.dataset.productId;
        console.log(productId);
        let found = false;
        let matchProduct;

        data.forEach((items)=>{
            if(items.id === productId){
                matchProduct = items;

            }

        })

        cart.forEach((cartItems)=>{
            if(productId === cartItems.id){
                cartItems.quantity += 1
                found = true;
            
            }

            

        })

        if(!found){
            cart.push({
                    name: matchProduct.name,
                    id: matchProduct.id,
                    quantity:1
            });
        }

        cartUpdate();

        console.log(cart);





  


        
    })
})
