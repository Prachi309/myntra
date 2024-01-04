
   let bagItems;
   onLoad();
    function onLoad(){
      let bagItemsStr=localStorage.getItem('bagItems');
      bagItems= bagItemsStr ? JSON.parse(bagItemsStr):[];
    }
const items = [
    {
        id: '001',
        item_image: 'images/men/1.webp',
        company_name: 'boohooMAN',
        item_name: 'Floral Print Boxy Shirt',
        current_price: 1724,
        discount_price: 3449,
        discount_percentage: 50,
        return_period:14,
        delivery_date:'19 Jan 2023',
        rating: {
            stars: 4.5,
            noOfReviews: 1400,
        },
    },
    {
        id: '002',
        item_image: 'images/men/2.webp',
        company_name: 'boohooMAN',
        item_name: 'Cotton Reversible Bucket Hat',
        current_price: 539,
        discount_price: 1349,
        discount_percentage: 50,
        return_period:14,
        delivery_date:'19 Jan 2023',
        rating: {
            stars: 4,
            noOfReviews: 784,
        },

    },


    {
        id: '003',
        item_image: 'images/men/3.webp',
        company_name: 'HIGHLANDER',
        item_name: 'Men Black Tapered Fit Mid-Rise Clean Look Stretchable Jeans',
        current_price: 662,
        discount_price: 1299,
        discount_percentage: 49,
        return_period:14,
        delivery_date:'12 Jan 2023',
        rating: {
            stars: 4,
            noOfReviews: 32400,
        },

    },
    {
        id: '004',
        item_image: 'images/men/4.webp',
        company_name: 'ADIDAS Originals',
        item_name: 'Men Superstar XLG Leather Sneakers',
        current_price: 7199,
        discount_price: 11999,
        discount_percentage: 40,
        return_period:14,
        delivery_date:'3 Jan 2023',
        rating: {
            stars: 3.3,
            noOfReviews: 22,
        },

    },
    {
        id: '005',
        item_image: 'images/men/5.webp',
        company_name: 'Polo Ralph Lauren',
        item_name: 'Polo Collar Slim-Fit Cotton T-Shirt',
        current_price: 12600,
        discount_price: 14000,
        discount_percentage: 10,
        return_period:14,
        delivery_date:'19 Jan 2023',
        rating: {
            stars: 4,
            noOfReviews: 567,
        },

    },
    {
        id:'006',
            item_image:'images/men/6.webp',
            company_name:'Anouk',
            item_name:'Magenta Kurta- Palazzos & Dupatta',
            current_price:4099,
            discount_price: 8198, 
            discount_percentage: 50,
            return_period:14,
            delivery_date:'19 Jan 2023',
            rating: {
                stars:3,
                noOfReviews:765,
            },
            
        },
        {
            id:'007',
                item_image:'images/men/7.webp',
                company_name:'Mitera',
                item_name:'Mitera Pure Georgette Saree With Blouse Piece',
                current_price:809,
                discount_price: 2998, 
                discount_percentage: 73,
                return_period:14,
                delivery_date:'23 Jan 2023',
                rating: {
                    stars:4,
                    noOfReviews:6500,
                },
                
            },
            {
            id:'008',
            item_image:'images/men/8.webp',
            company_name:'KETCH',
            item_name:'Floral Halter Neck A-Line Dress',
            current_price:341,
            discount_price: 949, 
            discount_percentage: 64,return_period:14,
            delivery_date:'5 Jan 2023',
            rating: {
                stars:4.3,
                noOfReviews:258,
            },
            
        },
    
    {
        id:'009',
        item_image:'images/men/9.webp',
        company_name:'H&M',
        item_name:'Pure Cotton Oversized T-shirt',
        current_price:779,
        discount_price: 1299, 
        discount_percentage: 40,
        return_period:14,
        delivery_date:'7 Jan 2023',
        rating: {
            stars:4,
            noOfReviews:6500,
        },
    },
        
    {
        id:'010',
        item_image:'images/men/10.webp',
        company_name:'JM Looks',
        item_name:' Pointed Toe Party Block Mules',
        current_price:1197,
        discount_price: 1995, 
        discount_percentage: 40,
        return_period:14,
        delivery_date:'4 Jan 2023',
        rating: {
            stars:4.3,
            noOfReviews:654,
        },
    }
        
]
// var firstIndex=0;
//     function automaticSlide(){
//         setTimeout(automaticSlide, 2000)
//         var pics;
//         const img=document.querySelectorAll('.bannerImg');
//         for(pics=0;pics<img.length;pics++){
//             img[pics].style.display="none";
         
//         }
//         firstIndex++;
//         if(firstIndex>img.length)
//     { 
//         firstIndex=1;
//     }
//     img[firstIndex-1].style.display="block";
//     }
//     automaticSlide();

 
    displayItemsOnHomePage();
function addToBag(itemid){
    bagItems.push(itemid);
    localStorage.setItem('bagItems',JSON.stringify(bagItems)) // when the bag is clicked it is directed to a new page which erases the data of the bag hence we are storing the data in a local storage
    displayBagIcon();
}

displayBagIcon();
function displayBagIcon(){
   let BagItemCountElement=document.querySelector('.bag-item-count');
   if(bagItems.length > 0){
    BagItemCountElement.style.visibility='visible';
   BagItemCountElement.innerText=bagItems.length;
   }
   else{
    BagItemCountElement.style.visibility='hidden';
   }

}

function displayItemsOnHomePage(){
    let itemsContainerElement =document.querySelector(".category-items");
    if(!itemsContainerElement){
        return;
    }
let innerHTML='';

items.forEach(item=>{
    innerHTML+=` 
    <div class="itemcontainer">
        <img class="item-image" src="${item.item_image}" alt="">
    <div class="rating">${item.rating.stars} ⭐| ${item.rating.noOfReviews} </div>
    <div class="company-name">${item.company_name}</div>
    <div class="item-name">${item.item_name}</div>
    <div class="price"><span class="current-price">₹${item.current_price}</span>
        <span class="original-price">₹${item.discount_price}</span>
        <span class="discount">(${item.discount_percentage}% OFF)</span>
    </div>
    <button class="btn-add-bag" onclick="addToBag(${item.id})">Add To Bag</button>
    </div>`;
});

itemsContainerElement.innerHTML=innerHTML;
}


