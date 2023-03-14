// Products data
const products = [
    {
        name: 'Product 1',
        image: 'https://via.placeholder.com/150',
        price: 10.99,
        description: 'This is a description of Product 1'
    },
    {
        name: 'Product 2',
        image: 'https://via.placeholder.com/150',
        price: 19.99,
        description: 'This is a description of Product 2'
    },
    {
        name: 'Product 3',
        image: 'https://via.placeholder.com/150',
        price: 7.99,
        description: 'This is a description of Product 3'
    },
    {
        name: 'Product 4',
        image: 'https://via.placeholder.com/150',
        price: 14.99,
        description: 'This is a description of Product 4'
    }
];

// Display products
const productContainer = document.querySelector('.row');

products.forEach(product => {
    // Create product card
    const productCard = document.createElement('div');
    productCard.classList.add('col-md-3', 'mb-3');

    // Product image
    const productImage = document.createElement('img');
    productImage.src = product.image;
    productImage.classList.add('img-fluid', 'mb-2');
    productCard.appendChild(productImage);

    // Product name
    const productName = document.createElement('h4');
    productName.textContent = product.name;
    productCard.appendChild(productName);

    // Product price
    const productPrice = document.createElement('p');
    productPrice.textContent = `$${product.price}`;
    productCard.appendChild(productPrice);

    // Product description
    const productDescription = document.createElement('p');
    productDescription.textContent = product.description;
    productCard.appendChild(productDescription);

    // Add product card to container
    productContainer.appendChild(productCard);
});


