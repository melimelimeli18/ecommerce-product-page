const gallery = document.querySelector(".gallery"); //sebagai .thumbnail
const tabBtns = document.querySelectorAll(".tab");
const galleryItems = document.querySelectorAll(".gallery .item"); //.thumbnail .gallery-item
const galleryItemImg = document.querySelectorAll(".gallery .item img"); //.thumbnail .gallery-item img/label
const lightbox = document.querySelector(".lightbox");
const lightboxImg = document.querySelector(".lightbox-image img"); //beeg thumbnail

// Lightbox settings
// const galleryItemImg = document.querySelectorAll(".gallery .item img"); 
// Image yang ada dalam list ini di loop trus di event listenerin 

for (let currentImage of galleryItemImg) {
  currentImage.addEventListener("click", (e) => {
    const clickedImage = e.target.getAttribute("src"); //cuma ngambil source pada target. tidak mengacu pada elemen
    lightbox.style.display = "flex"; //memunculkan continer elemen lightbox
    lightboxImg.src = clickedImage; //merefer pada big thumbnail.
    lightbox.querySelector(".items").append(...galleryItems); //mengambil semua child yang ada di items, lalu merubah mereka ke array, lalu dimasukan ke container .items, dan ...
    
    // lightbox.querySelector(".items").append(...galleryItems);
  });
}

/*
    <div class="lightbox">
      <div class="lightbox-image">
        <div class="cross">X</div>
        <img src="images/car2.jpg" alt="" />
      </div>
      <div class="items"></div>
    </div>
*/
/* BLEND TO MY PROJECT 

    <div class="lightbox hidden flex-col">
        <div class="close-btn">X</div>
        <div>
            <div id="previous-btn" class="flex bg-white items-center bg-white px-4 py-3 rounded-full mx-5 cursor-pointer md:hidden">
                <img class="" src="images/icon-previous.svg" alt="">
            </div>
            <div class="flex-grow"></div>
            <div id="next-btn" class="flex bg-white items-center bg-white px-4 py-3 rounded-full mx-5 cursor-pointer md:hidden">
                <img class="" src="images/icon-next.svg" alt="">
            </div>
        </div>
        <div class="lightbox-image">
            <img src="images/car2.jpg" alt="" /> // big thumbnail.
        </div>
        <div class="items"></div> thumbnail mini dibawahnya 
    </div>
*/


// Remove lightbox when user click outside the image or cross button
window.addEventListener("click", (e) => {
  if (
    e.target.getAttribute("class") === "lightbox" ||
    e.target.getAttribute("class") === "cross"
  ) {
    gallery.append(...galleryItems);
    lightbox.style.display = "none";
  }
});




// add event listener on all tabs
for (let tabBtn of tabBtns) {
  tabBtn.addEventListener("click", (e) => {
    clickedTab = e.target.getAttribute("data-tabs");
    filterGalleryItems(clickedTab, e.target);
  });
}

// lets change images on tab click
function filterGalleryItems(clickedTab, tab) {
  // remove active class from all tab buttons
  for (let tabBtn of tabBtns) {
    tabBtn.classList.remove("active");
  }
  // add active class on clicked tab button
  tab.classList.add("active");

  // Now show or hide images
  if (clickedTab === "all") {
    for (let galleryItem of galleryItems) {
      galleryItem.style.display = "block";
    }
  } else {
    for (let galleryItem of galleryItems) {
      if (galleryItem.getAttribute("data-filter") === clickedTab) {
        galleryItem.style.display = "block";
      } else {
        galleryItem.style.display = "none";
      }
    }
  }
}

//////// PUNYA GW YANG BENER DI JS (github) fa83e38

function createGalleryItemEventListener(galleryItem, lightbox, lightboxImg, galleryItems) {
  const galleryItemImage = galleryItem.querySelector("img");
  galleryItemImage.addEventListener("click", (e) => {
    const clickedImage = galleryItemImage.getAttribute("src");
    lightbox.style.display = "flex";
    lightboxImg.src = clickedImage;
    lightbox.querySelector(".items").append(...galleryItems);
  });
}

// const galleryItems = document.querySelectorAll(".thumbnail .gallery-item");
const galleryItemsLB = [];
galleryItems.forEach(item => {
  const clonedItem = item.cloneNode(true);
  galleryItemsLB.push(clonedItem);
  createGalleryItemEventListener(item, lightbox, lightboxImg, galleryItemsLB);
  createGalleryItemEventListener(clonedItem, lightbox, lightboxImg, galleryItemsLB);
});

////// punya gw sekarang di workspace (masih rusak), thumbnail ngga bisa dipencet, tapi sebelumnya function work on both lightbox and not.

function createGalleryItemEventListener(galleryItem, lightbox, lightboxImg, galleryItems) {
  const galleryItemThumbnail = productContainer.querySelector(".bg-cover");
  const galleryItemImage = galleryItem.querySelector("img");

  galleryItemThumbnail.addEventListener("click", (e) => {
    const clickedImage = galleryItemImage.getAttribute("src");
    lightbox.style.display = "flex";
    lightboxImg.src = clickedImage;
    lightbox.querySelector(".items").append(...galleryItems);
    showImage(event,"big-image");
  })
}

// const galleryItems = document.querySelectorAll(".thumbnail .gallery-item"); 
// const galleryItemsLB = []; //to Run all the function both lightbox and none
galleryItems.forEach(item => {
  const clonedItem = item.cloneNode(true);
  galleryItemsLB.push(clonedItem);
  createGalleryItemEventListener(item, lightbox, lightboxImg, galleryItemsLB);
  createGalleryItemEventListener(clonedItem, lightbox, lightboxImg, galleryItemsLB);
})

// Penyimpanan didalem function createGalleryItemEventListener, didalam galeryThumbnail, Event Lisener

      // const nextBtnLB = lightbox.querySelector("#next-btn-lb");
      // const previousBtnLB = lightbox.querySelector("#previous-btn-lb");  
      // nextBtnLB.addEventListener("click", nextImage);
      // previousBtnLB.addEventListener("click", previousImage);

      // showImage(event,"big-image");
      // showImage(event,src);   