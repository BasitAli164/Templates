let searchForm=document.querySelector('.search-form');

document.querySelector('#search-btn').onclick=()=>{
    searchForm.classList.toggle('active');
}



let shoppingCart=document.querySelector('.shopping-cart');

document.querySelector('#cart-btn').onclick=()=>{
    shoppingCart.classList.toggle('active');
}


let userIcon=document.querySelector('.login-form');

document.querySelector("#user-btn").onclick=()=>{
    userIcon.classList.toggle('active')
}