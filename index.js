"use strict";

const cartIcon = document.querySelector(".cart-content img");
const cartBox = document.querySelector(".cart-box");
const normalPrice = document.querySelector(".normal-price");
const qtyLabel = document.querySelector(".Qty-label");
const proContainer = document.querySelector(".pro-content");

//btn increatment and decreament
const qty = document.querySelector(".qty-number");
const incr = document.querySelector(".decreament");
const decr = document.querySelector(".increament");
const addCart = document.querySelector(".add-cart");
const cart_empty = document.querySelector(".cart-empty");

// img
const imageLarge = document.querySelector(".img-thumbnail img")
const thumbImage = document.querySelectorAll(".img-small img")

// modal
const modalEl = document.querySelector(".modal")
const closeIcon = document.querySelector(".close-icon")
const lImgModal = document.querySelector(".img-thumbnail-modal img")
const sImgModal = document.querySelectorAll(".img-small-modal img")


let proPrice = 125;
let totalQty = qty.innerHTML;
let totalPrice;

decr.addEventListener("click", () => {
  if (totalQty === 1) {
    totalQty === 1;
  } else {
    totalQty--;
  }
  totalPrice = proPrice * totalQty;
  normalPrice.textContent = "$" + totalPrice + ".00";
  qty.textContent = totalQty
});

incr.addEventListener("click", () => {
  totalQty++;
  totalPrice = proPrice * totalQty;
  normalPrice.textContent = "$" + totalPrice + ".00";
  qty.textContent = totalQty
})


//add and hide the cart
cartIcon.addEventListener("click", () => {
  cartBox.classList.toggle("display");
})

addCart.addEventListener("click", () => {
  qtyLabel.style.display = "block";
  qtyLabel.innerHTML = totalQty;
  proContainer.innerHTML= "";

  let html = ` 
                         <img src="images/image-product-1-thumbnail.jpg" alt="">
                            <div class="p-details">
                                <p class="pro-txt">Fall Limited Edition Sneakers</p>
                                <p class="price">
                                    $125.00 <span>x</span> <span class="times">${totalQty}</span> <span class="total">${proPrice * totalQty}</span>
                                </p>
                            </div>
                            <div class="trash">
                                <img src="images/icon-delete.svg" alt="" class="trash_img">
                            </div>`;
  console.log(totalPrice);
  proContainer.insertAdjacentHTML("afterbegin" , html);
  cart_empty.innerHTML ="";
  document.querySelector('.trash_img').addEventListener("click",()=>{
    cart_empty.innerHTML = "Your Cart is Empty : )";
    proContainer.innerHTML= "";
    qtyLabel.style.display = "none";
  })
 
})

thumbImage .forEach((img, indx) =>{
  indx++;
 img.addEventListener("click", (e)=>{
  imageLarge.src =`images/image-product-${indx}.jpg`
  thumbImage.forEach((thumb)=> thumb.classList.remove("active"))
  img.classList.add("active");
 })
})
 
imageLarge.addEventListener("click", ()=>{
  modalEl.style.display ="block";
})

closeIcon.addEventListener("click", ()=>{
  modalEl.style.display ="none";
})
sImgModal.forEach((mimg, indx)=>{
  indx++;
  mimg.addEventListener("click", (e)=>{
    lImgModal.src =`images/image-product-${indx}.jpg`
    sImgModal.forEach((thumb)=> thumb.classList.remove("active"))
    mimg.classList.add("active");
   })
})