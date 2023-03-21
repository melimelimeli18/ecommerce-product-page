
// List BUTTON

/* #menu-btn | to show navbar
 #preview-cart-btn | the cart icon/button on the navbar, to preview the item and price that we add to the card. When we clicked, there's a basket filled appear
#previous-btn | on mobile screen - we use that to slide an image, 
#next-btn | on mobile screen - we use that to slide an image,
#minus-btn | to set how many item we want to add to cart 
#plus-btn | to set how many item we want to add to cart 
#add-cart-btn | to add the item that we already set to the cart, and will be displayed, if we clicked on #preview-cart-btn*/

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
    const nextBtn = document.getElementById("next-btn");
    const previousBtn = document.getElementById("previous-btn");

    let currentIndex = 0;
    
    function showImage(index) {
        const { src } = fallLimitedSneaker[index];
        imageShow.style.backgroundImage = `url(${src})`;
      }
    
    nextBtn.addEventListener("click",function nextImage() {
        if (currentIndex === fallLimitedSneaker.length - 1) {
        currentIndex = 0;
        } else {
        currentIndex++;
        }
        showImage(currentIndex);
        }  
    )
    
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

// IF THE RADIO BTN/type BE CLICKED OR ON CHECKED STATE, IT WIL CHANGE THE IMAGE SHOW SOURCE TO THAT.

// As background image / the big image that will be displayed







})
