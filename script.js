
// List BUTTON

/* #menu-btn | to show navbar
 #preview-cart-btn | the cart icon/button on the navbar, to preview the item and price that we add to the card. When we clicked, there's a basket filled appear

 #previous-btn | on mobile screen - we use that to slide an image, (DONE)

 #next-btn | on mobile screen - we use that to slide an image,(DONE)

 #minus-btn | to set how many item we want to add to cart (DONE)
 
 #plus-btn | to set how many item we want to add to cart (DONE)

 #add-cart-btn | to add the item that we already set to the cart, and will be displayed, if we clicked on (DONE)
 
 #preview-cart-btn*/

document.addEventListener("DOMContentLoaded", function (event) {
const fallLimitedSneaker = 
   [{
    "name" : "sneaker1",
    "type" : "img-1", //The radio button ID
    "src" : "images/image-product-1.jpg"
    },
    {
    "name" : "sneaker2",
    "type" : "img-2", //The radio button ID
    "src" : "images/image-product-2.jpg"
    },
    {
    "name" : "sneaker3",
    "type" : "img-3", //The radio button ID
    "src" : "images/image-product-3.jpg"
    },
    {
    "name" : "sneaker4",
    "type" : "img-4", //The radio button ID
    "src" : "images/image-product-4.jpg"
    }
];

fallLimitedSneaker.forEach(item => {
    // for web
    const imageShow = document.getElementById("image-show");
    const radioBtnElement = document.getElementById(`${item.type}`);
    radioBtnElement.addEventListener("click",function(){
        imageShow.style.backgroundImage = `url('${item.src}')`;
    })
    //for mobile
    let currentIndex = 0;
    
    function showImage(index) {
      const { src } = fallLimitedSneaker[index];
      imageShow.style.backgroundImage = `url(${src})`;
    }
    const nextBtn = document.getElementById("next-btn");
    nextBtn.addEventListener("click",function nextImage() {
        if (currentIndex === fallLimitedSneaker.length - 1) {
          currentIndex = 0;
        } else {
          currentIndex++;
        }
        showImage(currentIndex);
      }  
      )
    const previousBtn = document.getElementById("previous-btn");
    previousBtn.addEventListener("click", function previousImage() {
        if (currentIndex === 0) {
          currentIndex = fallLimitedSneaker.length - 1;
        } else {
          currentIndex--;
        }
        showImage(currentIndex);
      }
    )
})

  // to edit how much item i want to add the cart
  const totalItem = document.querySelector(".total-item");
  let count = 0;
  totalItem.textContent = count;

  const plusBtn = document.getElementById("plus-btn")
  plusBtn.addEventListener("click",()=>{
    count++;
    totalItem.textContent = count;
  })

  const minusBtn = document.getElementById("minus-btn");
  minusBtn.addEventListener("click", ()=>{
    if(totalItem.textContent < 1){
      return false
    } else{
        count--;
    totalItem.textContent = count;
    }
  })


  })

  // the price before get discount and adding the currency
  // const normalPriceCurrency = 250;
  // const normalPrice = normalPriceCurrency.toLocaleString('en-US', { style: 'currency', currency: 'USD' }); //$250.00
  // const normalPriceElement = document.querySelector(".normal-price");
  // normalPriceElement.textContent = normalPrice;
  
  const normalPrice = 250;
  const normalPriceCurrency = normalPrice.toLocaleString('en-US', { style: 'currency', currency: 'USD' }); //$250.00
  const normalPriceElement = document.querySelector(".normal-price");
  normalPriceElement.textContent = normalPriceCurrency;

const discountElement = document.querySelector(".discount p");
const discount = document.createElement("div");
  const discountSymbol = document.createElement("span");
    discountSymbol.textContent = "%";
  const discountProduct = document.createElement("span");
  const discountPrice = 50;
    discountProduct.textContent = discountPrice;
  
  discount.appendChild(discountProduct);
  discount.appendChild(discountSymbol);
  discountElement.appendChild(discount);

  // function discount
  function afterDiscount(normalPrice,discountPrice){
    const discountAmount = (discountPrice / 100) * normalPrice;
    const discountedPrice = normalPrice - discountAmount;
    return discountedPrice;
  }
  
  // after discount
  const productPriceElement = document.getElementById("product-price");
  const productPrice = afterDiscount(normalPrice,discountPrice);//150
  const productPriceCurrency = productPrice.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
  productPriceElement.append(productPriceCurrency);



  const titleProductElement = document.getElementById("product-title");
  const titleProduct = "Fall Limited Edition Sneakers";
  titleProductElement.textContent = titleProduct;


// kalo add cart button di pencet maka item di cart span bakal keganti sesuai dengan jumlah yang ditambahkan

// dan kalo preview cart dipencet, maka akan ngejumlahin angkanya, apakah harus nya udh ada dari awal??? trus pas dipencet itu ngedisplay doang??? SOalnya kan JS, kalo machinenya beneran gerak berarti butuh Backend dong??

/* Komponen Element di DisplayCart
- Ada Tulisan Bold (Cart),
- Ada garis horizontal (hr) yang lebar nya 100% dari container
- Ada image produk yang udah ditambahin.
- Nama produknya
- harga per pcs, di kali total Item, Harga setelah ditotal Item (bold), ama icon sampah (buat remove item yang ditambahin)
- Tombol checkout

Tombol display cart punya shadow yang ada di kiri, kanan, bawahnya.

kira-kira html dari cartnya itu sendii
div id=cart-container class=cart p-5
  h2 class=font-bold cart
  hr class= p-0
  div class=flex flex-row
    img src jpg
    div class=flex flex-col
      p Fall Limited Edition
      div class flex-row
        p 125
        p x
        p 3
        p class=font-bold 375
    img src icon
  div checkout button
*/

//liat ref ini di JS todolist
// const editButton = document.createElement('button');
// editButton.classList.add('editButton');
// const editIcon = document.createElement('img');
// editIcon.src = '../icon-svg/icon_edit.svg';


// bold

const removeIcon = document.createElement('img');
removeIcon.src = 'images/icon-delete.svg';
const removeBtn = document.createElement("button");
removeBtn.append(removeIcon);

const shoesImage = document.createElement('img');
const shoes = 'images/image-product-1.jpg';
shoesImage.append(shoes);

const previewCartBtn = document.getElementById('preview-cart-btn');

// ini tuh buat display doang. MAKE THE CART APPEAR (display BLOCK) OR ANYTHING WHEN CLICKED ON DISPLAYCART BUTTON.
function previewCart(){
  const cartContainer = getElementById("cart-container");
  console.log(cartContainer);
  // H2 CART TITLE - CHILD 1
  const cartTitle = document.createElement("h2");
  cartTitle.textContent = "Cart";
  cartContainer.appendChild(cartTitle); //ADD TO CONTAINER

  // HR - CHILD 2
  const horizontalLine = document.createElement('hr');
  cartContainer.appendChild(horizontalLine); //ADD TO CONTAINER
  
  // DIV - CHILD 3

  // CHECKOUT BTN - 

  // didalam container masukin h2, hr dan div. yang isinya jumlah item
}

  // preview the total item that i adding to cart
  const addCartBtn = document.getElementById("add-cart-btn");
  const NumberItemCart = document.querySelector(".item-cart");

  addCartBtn.addEventListener("click", ()=>{
    // ini buat ngedit angka si count.total item notif.
    if(count.textContent === 0){
      return false
    }else{
      NumberItemCart.textContent = count;
    }   


})

