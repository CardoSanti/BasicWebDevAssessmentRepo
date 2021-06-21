const productData = [
    {
        product_name: 'Garden Explorer Red Floral Print Mini Dress',
        product_price: 'Php 250.00', 
        product_picture: './images/grid-items/grid-item-1.jpg',
        product_num: 1

    },
    {
        product_name: 'Tiers To My Heart Green Off-the-Shoulder Ruffled Mini Dress',
        product_price: 'Php 350.00', 
        product_picture: './images/grid-items/grid-item-2.jpg',
        product_num: 2

    },
    {
        product_name: 'Everyday Essential Sage Green Ribbed Racerback Tank Top',
        product_price: 'Php 500.00', 
        product_picture: './images/grid-items/grid-item-3.jpg',
        product_num: 3

    },
    {
        product_name: 'Tale to Tell Blue and Ivory Embroidered Shift Dress',
        product_price: 'Php 300.00', 
        product_picture: './images/grid-items/grid-item-4.jpg',
        product_num: 4

    },
    {
        product_name: 'Set For Life Blush Pink Ribbed Bodycon Two-Piece Dress',
        product_price: 'Php 350.00', 
        product_picture: './images/grid-items/grid-item-5.jpg',
        product_num: 5

    },
    {
        product_name: 'Down the Horizon Beige Striped Tie-Strap Skater Dress',
        product_price: 'Php 650.00', 
        product_picture: './images/grid-items/grid-item-6.jpg',
        product_num: 6

    },
    {
        product_name: 'Best Day Ever Black Cherry Print Skater Dress',
        product_price: 'Php 750.00', 
        product_picture: './images/grid-items/grid-item-7.jpg',
        product_num: 7

    },
    {
        product_name: 'Gigi Light Wash Denim Distressed Cutoff Shorts',
        product_price: 'Php 1300.00', 
        product_picture: './images/grid-items/grid-item-8.jpg',
        product_num: 8

    },
    {
        product_name: 'Arietta Medium Wash High Rise Distressed Shorts',
        product_price: 'Php 950.00', 
        product_picture: './images/grid-items/grid-item-9.jpg',
        product_num: 9

    },
    {
        product_name: 'Cocktail Hour Black Wrap Dress',
        product_price: 'Php 1650.00', 
        product_picture: './images/grid-items/grid-item-10.jpg',
        product_num: 10

    },
];

getGridHTML = (product) => {

    const _String = `
    <div class="grid-item grid-item-${product.product_num}">
        <img src="${product.product_picture}" alt="" class="img-gt img-gt-${product.product_num}">
        <p class="label-gt label-gt-${product.product_num}">${product.product_name}</p>
        <div class="bottom-container">
            <p class="price-gt price-gt-${product.product_num}">${product.product_price}</p>
            <button id="btn-gt-${product.product_num}" class="btn-gt btn-gt-1${product.product_num}">add to cart</button>
        </div>
    </div>
`   
    console.log(_String);

    return _String;
};

document.getElementById('section-grid').innerHTML =  `
    
    ${productData.map(getGridHTML).join('')}
`;