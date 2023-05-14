
// List BUTTON

/* #menu-btn | to show navbar
 #preview-cart-btn | the cart icon/button on the navbar, to preview the item and price that we add to the card. When we clicked, there's a basket filled appear

  TO DO LIST : 
  - lightbox, please try to combine method 1 and method 4 on lightbox

 LIST FEATURE  THAT NEED TO DO 
 - Lightbox (WIP)
 - Menu Navbar
 - Active States
 - Design Checkout Page (?)
 - Make some animation, Like opening cart, etc
 - Make Loading animation when opening (zoom effect when hovering big image).
 */

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

let currentIndex = 0;

  // function showImage(event,src) {
  //   // const { src } = fallLimitedSneaker[index];
  //   const image = event.target;
  //   image.style.backgroundImage = `url(${src})`;
  //   imageShow.style.backgroundImage = `url(${src})`;
  //   // imageShowLb.style.backgroundImage = `url(${src})`;

  //   //const lightboxImg = document.querySelector(".lightbox-image img");
  // }

  function showImage(src, elementID) {
    const imageLb = document.getElementById(elementID);
    imageLb.style.backgroundImage = `url(${src})`;
    imageShow.style.backgroundImage = `url(${src})`;

  }

  function nextImage(event){
    // const nextBtn = document.getElementById("next-btn");
     const button = event.target.id;
    const nextBtn = document.getElementById(button);
    nextBtn.addEventListener("click",function (){
      if (currentIndex === fallLimitedSneaker.length - 1){
        currentIndex = 0;
      } else {
        currentIndex++;
      }
      // showImage(currentIndex);
      showImage(fallLimitedSneaker[currentIndex].src, button);
    })
  }
  
  function previousImage(event){
    // const previousBtn = document.getElementById("previous-btn");
    const button = event.target.id;
    const previousBtn = document.getElementById(button);
    previousBtn.addEventListener("click", function(){
      if (currentIndex === 0) {
        currentIndex = fallLimitedSneaker.length - 1;
      } else {
        currentIndex--;
      }
      // showImage(currentIndex);
      showImage(fallLimitedSneaker[currentIndex].src, button);
    })
  }



  // const imageShow = document.getElementById("image-show"); pinjem bntr
  // const lightbox = document.createElement('div');
  // lightbox.id = 'lightbox';
  // document.body.appendChild(lightbox);
  const nextBtn = document.getElementById("next-btn");
  const previousBtn = document.getElementById("previous-btn");
  const gallery = document.querySelector(".thumbnail");
  // const galleryItems = document.querySelectorAll(".thumbnail .gallery-item");
  // const galleryItemsLB = [];
  // galleryItems.forEach(item => {
  //   galleryItemsLB.push(item.cloneNode(true));
  // });
  // const galleryItemImg = document.getElementById("image-show"); 
  // const galleryItemImg = document.querySelectorAll(".thumbnail .gallery-item img"); 

  const galleryItemImg = document.querySelectorAll(".thumbnail .gallery-item label"); //(label 1 (img-1), (label 2 (img-2)))
  const galleryItemsImgLB = [];
  galleryItemImg.forEach(item => {
    galleryItemsImgLB.push(item.cloneNode(true));
  });
  
  const lightbox = document.querySelector(".lightbox");
  const lightboxImg = document.querySelector(".lightbox-image img");
  const imageShow = document.getElementById("image-show");

  const productContainer = document.getElementById("product");

  // const radioBtn = Object.keys(fallLimitedSneaker).map(key => fallLimitedSneaker[key].type);
  // const radioBtns = this.querySelectorAll(".radioBtn");
  // const imageSrc = Object.keys(fallLimitedSneaker).map(key => fallLimitedSneaker[key].src);
// kalo gue pake galleryItemThumbnail, pencet2 an thumbnail di lightbox ngga bakalan jalan
// sedangkan kalo gue pake galleryItemImage, pencet2 an di thumbnail lightbox function jalan, tapi gue pengennya lightbox muncul saat gue pencet galleryItemThumbnail

function createGalleryItemEventListener(galleryItem, lightbox, lightboxImg, galleryItems) {
  //galleryItem is refer to the first paramater (item/clonedItem) that refers to galleryItems (".thumbnail .gallery-item") 

  // const galleryItemThumbnail = document.getElementById("image-show");
  // const galleryItemImage = galleryItem.querySelector("img");
  
  const galleryItemThumbnail = productContainer.querySelector(".bg-cover");
  const galleryItemImage = galleryItem.querySelector("img"); //img.rounded-lg.h-[5rem]
  const images = document.querySelectorAll('.gallery-item img');//image-product-1,2,3 (8 Kali)
  //gallery item stands for item/cloned eleement

  //0.1 bisa dipencet, tapi event listenernya cuma jalan saat mencet mini Image, dan pilih itemnya jalan.
  // galleryItemThumbnail.addEventListener("click", (e) => {
  //     images.forEach((galleryItemImg) => {
  //       galleryItemImage.addEventListener("click", (e) => {
  //         const clickedImage = e.target.getAttribute("src");
  //         lightbox.style.display = "flex";
  //         lightboxImg.src = clickedImage;
  //         lightbox.querySelector(".items").append(...galleryItems);
  //       })
  //     })
  //   })


  //02. sama aja, tapi ngga bisa jalan
  // galleryItemThumbnail.addEventListener("click", () => {
  //   images.forEach((image) => {
  //     image.addEventListener("click", (e) => {
  //       const clickedImage = e.target.getAttribute("src");
  //       lightbox.style.display = "flex";
  //       lightboxImg.src = clickedImage;
  //       lightbox.querySelector(".items").append(...galleryItems); 
  //     });
  //   });
  // });
  
  //03.  ngga bisa juga samsek
  // for (currentImage of galleryItemImg) {
  // currentImage.addEventListener("click", (e) =>{
  //     const clickedImage = e.target.getAttribute("src");
  //     lightbox.style.display = "flex";
  //     lightboxImg.src = clickedImage;
  //     lightbox.querySelector(".items").append(...galleryItems); 
  //   })
  // }

  //04. bisa mencet ke thumbnail, tapi mini imagenya ngga jalan
  // galleryItemThumbnail.addEventListener("click", (e) => {
  //   const clickedImage = galleryItemImage.getAttribute("src"); //images/image-product-1.jpg (1 sampe 4)
  //   lightbox.style.display = "flex";
  //   lightboxImg.src = clickedImage;
  //   lightbox.querySelector(".items").append(...galleryItems);
  //   showImage(event,"big-image");
  // })
  
  //05. Blend 1 and 4

  // let clickedImage;
  // galleryItemImage.addEventListener("click", (e) => {
  //   clickedImage = e.target.getAttribute("src");


  // })

  galleryItemThumbnail.addEventListener("click", () => {
    lightbox.style.display = "flex";
    lightboxImg.src = clickedImage;
    lightbox.querySelector(".items").append(...galleryItems);
  })

  function handleGalleryItemClick(src) {
    lightbox.style.display = "flex";
    lightboxImg.src = src;
    lightbox.querySelector(".items").append(...galleryItems); 
  }  
  galleryItemImage.addEventListener("click", (e) => {
    const clickedImage = e.target.getAttribute("src");
    handleGalleryItemClick(clickedImage);
  });
  galleryItemThumbnail.addEventListener("click", (e) => {
    const clickedImage = galleryItemImage.getAttribute("src");
    handleGalleryItemClick(clickedImage);
  });



}



   



    // galleryItemThumbnail.addEventListener("click", (e) => {
    //   //event.target
    //   const clickedImage = galleryItemImage.getAttribute("src");
    //   lightbox.style.display = "flex";
    //   lightboxImg.src = clickedImage;
    //   lightbox.querySelector(".items").append(...galleryItems); //append mini image element
    // })
  
  const galleryItems = document.querySelectorAll(".thumbnail .gallery-item"); 
  //mini thumbnail
  const galleryItemsLB = []; //to Run all the function both lightbox and none
  galleryItems.forEach(item => {
    const clonedItem = item.cloneNode(true);
    galleryItemsLB.push(clonedItem);
    createGalleryItemEventListener(item, lightbox, lightboxImg, galleryItemsLB);
    createGalleryItemEventListener(clonedItem, lightbox, lightboxImg, galleryItemsLB);
  })
  //showImage(fallLimitedSneaker[currentIndex].src);
  

  // for (let currentImage of galleryItemImg) {
  // currentImage.addEventListener("click", (e) => {
  // for (let i = 0; i < galleryItems.length; i++) {
  //   const currentImage = galleryItemImg[i];
  //   const clonedImage = galleryItems[i].cloneNode(true);
  //   clonedImage.addEventListener("click", (e) => {
  //     const clickedImage = e.target.getAttribute("src");
  //     lightbox.style.display = "flex";
  //     lightboxImg.src = clickedImage;
  //   });
  //   lightbox.querySelector(".items").appendChild(clonedImage);
  // }})
  
  // for (let currentImage of galleryItemImg) {
  //   currentImage.addEventListener("click", (e) => {
  //     const clickedImage = galleryItemsImgLB.target.getAttribute("src");
  //     lightbox.style.display = "flex";
  //     lightboxImg.src = clickedImage;
  //     lightbox.querySelector(".items").append(...galleryItemsLB);
  //   });
  // }

  const closeBtn = document.querySelector(".close-btn");
  closeBtn.addEventListener('click', function() {
    lightbox.style.display = "none";
  });



  // const closeBtn = document.querySelector(".close-btn");
  // closeBtn.addEventListener('click', function() {
  //   lightbox.remove();
  //   lightbox.style.display="none";
  // });


  // window.addEventListener("click", (e) => {
  //   if (
  //     e.target.getAttribute("class") === "lightbox" ||
  //     e.target.getAttribute("class") === "close-btn"
  //   ) {
  //     gallery.append(...galleryItems);
  //     lightbox.style.display = "none";
  //   }
  // })

  /* Suggestion :
  - Coca clone nya samain kayak yang dibawah cuma diganti ID nya aja.....
  imageShow, radioBtnElement, 
  
  showImage(fallLimitedSneaker[currentIndex].src);
  nextBtn.addEventListener("click", nextImage);
  previousBtn.addEventListener("click", previousImage);
    - 
  */

  // const imageShowLb = productCloneContainer.querySelector("#image-show");
  // const imageShowLb = imageShow.cloneNode(true);
  
  
  // function handleImageClick() {
  //   lightbox.classList.add('active');
    
  //   const lightboxContainer = document.createElement("div");
    // const productContainer = document.getElementById("product");
  //   productContainer.classList.remove("md:w-[30%]");
    
  //     const productCloneContainer = productContainer.cloneNode(true);
  //     productCloneContainer.classList.add("product-clone-container");
      
  //     const buttonContainerLb = document.createElement("div");  
  //     buttonContainerLb.classList.add("button-container-lb");
  //     const flexgrow = document.createElement("div");
  //     flexgrow.classList.add("flex-grow");

  //     const previousBtnLB = productCloneContainer.querySelector("#previous-btn");
  //     const nextBtnLB = productCloneContainer.querySelector("#next-btn"); 

  //     previousBtnLB.classList.remove("md:hidden");
  //     nextBtnLB.classList.remove("md:hidden");
      
  //     buttonContainerLb.appendChild(previousBtnLB);    
  //     buttonContainerLb.appendChild(flexgrow);    
  //     buttonContainerLb.appendChild(nextBtnLB);    

  //     const closeBtn = document.createElement('div');
  //     closeBtn.setAttribute('id', 'close-btn');
  //     const img = document.createElement('img');
  //     img.setAttribute('src', 'images/icon-close.svg');
  //     img.classList.add("close-icon");
  //     closeBtn.appendChild(img);
  //     closeBtn.addEventListener('click', function() {
  //       lightboxContainer.remove();
  //       lightbox.classList.remove('active');
  //       // lightbox.removeChild(lightbox.firstChild);
  //     });

  //     // productCloneContainer.replaceChild(imageShow, imageShowLb);
  //     lightboxContainer.appendChild(buttonContainerLb)
  //     lightboxContainer.appendChild(closeBtn);
  //     lightboxContainer.appendChild(productCloneContainer);
  //     lightbox.appendChild(lightboxContainer);
      
  //     // imageShowLb.addEventListener("change",showImage);
  //     showImage(currentIndex);
  //     nextBtnLB.addEventListener("click", nextImage);
  //     previousBtnLB.addEventListener("click", previousImage);
  // }


  
  // function addOrRemoveEventListener() {
  //   if (window.matchMedia("(min-width: 768px)").matches) {
  //     imageShow.addEventListener("click", handleImageClick);
  //   } else {
  //     imageShow.removeEventListener("click", handleImageClick);
  //   }
  // }

  // window.addEventListener("load", addOrRemoveEventListener);
  // window.addEventListener("resize", addOrRemoveEventListener);
      






fallLimitedSneaker.forEach(item => {
  // let currentIndex = 0;

  // for web
  const imageShow = document.getElementById("image-show");
  const radioBtnElement = document.getElementById(`${item.type}`);
  radioBtnElement.addEventListener("click",function(){
    imageShow.style.backgroundImage = `url('${item.src}')`;
  })
  //for mobile

  showImage(event,fallLimitedSneaker[currentIndex].src, imageShow);

  // const nextImageMobile = 

  nextBtn.addEventListener("click", nextImage);
  previousBtn.addEventListener("click", previousImage);
  // const lightbox = document.createElement('div');
  // lightbox.id = 'lightbox';
  // document.body.appendChild(lightbox);

  
  // imageShow.addEventListener("click",function(){
  //   lightbox.classList.add('active');
  //   const img = document.createElement('img');;
  //   img.src = item.src;
  //   while (lightbox.firstChild) {
  //     lightbox.removeChild(lightbox.firstChild);
  //   }
  //   lightbox.appendChild(img);
  //   lightbox.appendChild(previousBtn);
  //   lightbox.appendChild(nextBtn);
  // LIGHT BOX 

}) // AKHIR PARAMETER FOR EACH


// const lightbox = document.createElement('div');
// lightbox.id = 'lightbox';
// document.body.appendChild(lightbox);

// const images = document.querySelectorAll('.gallery-item img');
// images.forEach(image => {
//   imageShow.addEventListener('click', e => {
//     lightbox.classList.add('active');
//     const img = document.createElement('img');;
//     img.src = image.src;
//     while (lightbox.firstChild) {
//       lightbox.removeChild(lightbox.firstChild);
//     }
//     lightbox.appendChild(img);
//     lightbox.appendChild(previousBtn);
//     lightbox.appendChild(nextBtn);
//   })
// })

// lightbox.addEventListener('click', e => {
//   if (e.target !== e.currentTarget) return
//   lightbox.classList.remove('active')
// })



  // to edit how much item i want to add the cart
  const totalItem = document.querySelector(".total-item");
  let count = 0;
  totalItem.textContent = count;
  // add amount
  const plusBtn = document.getElementById("plus-btn")
  plusBtn.addEventListener("click",()=>{
    count++;
    totalItem.textContent = count;
  })
  // subtrack amount
  const minusBtn = document.getElementById("minus-btn");
  minusBtn.addEventListener("click", ()=>{
    if(totalItem.textContent < 1){
      return false
    } else{
        count--;
    totalItem.textContent = count;
    }
  }) 

  // the price before get discount and adding the currency
  const normalPriceCurrency = 250;
  const normalPrice = normalPriceCurrency.toLocaleString('en-US', { style: 'currency', currency: 'USD' }); //$250.00
  const normalPriceElement = document.getElementById("normal-price");
  normalPriceElement.textContent = normalPrice;

  //discount product
  const discountElement = document.querySelector(".discount p");
  const discount = document.createElement("div");
  const discountSymbol = document.createElement("span");
  const discountPrice = 50;
  
  discountSymbol.textContent = "%";
  discount.appendChild(document.createTextNode(discountPrice));
  discount.appendChild(discountSymbol);
  discountElement.appendChild(discount);
  
  // function discount 
  function afterDiscount(normalPriceCurrency,discountPrice){
    const discountAmount = (discountPrice / 100) * normalPriceCurrency;
    const discountedPrice = normalPriceCurrency - discountAmount;
    return discountedPrice;
  }
  
  // after discount
  const productPriceElement = document.getElementById("product-price");
    //please targetin the variable that has integer datatype
  const productPrice = afterDiscount(normalPriceCurrency,discountPrice);//150
  const productPriceCurrency = productPrice.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
  productPriceElement.append(productPriceCurrency);

  const titleProductElement = document.getElementById("product-title");
  const titleProduct = "Fall Limited Edition Sneakers";
  titleProductElement.textContent = titleProduct;

  //cart container display when be clicked
  const previewCartBtn = document.getElementById('preview-cart-btn');
  const cartContainer = document.querySelector(".cart-container");
  function openCart(){
    const show = ["hidden","block","transition-all","duration-300", "ease-out"];
    for (let i = 0; i < show.length; i++) {
      cartContainer.classList.toggle(show[i]);       
    }
  }
  previewCartBtn.addEventListener("change",function(){
    if (this.checked){
      openCart();
    } else {
      openCart();
    }
  })

  // preview the total item that i adding to cart
  if (cartContainer.children.length < 1) {
    cartContainer.style.height = 'auto';
    } else {
      cartContainer.style.height = '45%';
    }

  const checkoutBtn = document.getElementById("checkout-btn");
  const addCartBtn = document.getElementById("add-cart-btn");
  const NumberItemCart = document.querySelector(".item-cart");
  const cartContainerElement = document.getElementById("product-added-cart");

  // const cartContent = document.createElement("div");
  // cartContent.classList.add("cart-content");
  // cartContainerElement.appendChild(cartContent);

  const emptyNotify = document.querySelector(".empty-notify");
    
  addCartBtn.addEventListener("click", function(){
      let cartContent = document.querySelector(".cart-content");
      if(count < 1){
            return false
          }else{
            NumberItemCart.textContent = count;
          }
    if(!cartContent){
      checkoutBtn.style.display = "block";
      let cartContent = document.createElement("div");
      cartContent.classList.add("cart-content");
       
      emptyNotify.style.display = "none";   
      
      // notif count
      
        //product
        const shoesImage = document.createElement('img');
        shoesImage.classList.add("shoes-image")
        const shoes = 'images/image-product-1.jpg';
        shoesImage.src = shoes;
        cartContent.appendChild(shoesImage);

        //text section
        const textSectionCart = document.createElement("div");
        textSectionCart.classList.add("text-section-cart");
        cartContent.appendChild(textSectionCart);
        
          //title append
          const titleProductCartElement = document.createElement("p");
          titleProductCartElement.textContent = titleProduct;
          textSectionCart.appendChild(titleProductCartElement);

          //priceAmountSection
          const priceAmountSection = document.createElement("div");
          priceAmountSection.classList.add("price-amount-section");
          textSectionCart.appendChild(priceAmountSection);

            //price
            const productPriceOnCartElement = document.createElement("p");
            productPriceOnCartElement.classList.add("product-price-on-cart");
            productPriceOnCartElement.textContent = productPriceCurrency;
            priceAmountSection.appendChild(productPriceOnCartElement);

            //multiply simbol
            const multipleSymbolElement = document.createElement("span");
            multipleSymbolElement.classList.add("multiple-symbol");
            multipleSymbolElement.textContent = "x"; 
            priceAmountSection.appendChild(multipleSymbolElement);

            //amount
            const amountProductElement = document.createElement("p");
            amountProductElement.classList.add("amount-product");
            amountProductElement.textContent = count;
            priceAmountSection.appendChild(amountProductElement);

            //result of calculation 
            function CalculatingTotalPrice(productPrice,count){
              const total = productPrice * count;
              return '$' + total.toFixed(2);
            }

            const totalPriceElement = document.createElement("p");
            totalPriceElement.classList.add("total-price");
            const totalPrice = CalculatingTotalPrice(productPrice,count);
            totalPriceElement.append(totalPrice);
            priceAmountSection.appendChild(totalPriceElement);
        
        //delete button    
        const removeBtn = document.createElement("button");
        const removeIcon = document.createElement('img');
        removeIcon.src = 'images/icon-delete.svg';
        removeBtn.append(removeIcon);
        cartContent.appendChild(removeBtn);      
            
        removeBtn.addEventListener("click", function() {
          // Remove the cart item container from the DOM
          cartContainerElement.removeChild(cartContent);
          //remove the icon of the count cart too
          NumberItemCart.textContent = "";
          emptyNotify.style.display = "block";
          checkoutBtn.style.display = "none";
        })
        cartContainerElement.appendChild(cartContent);
    }
  }) 
 







})