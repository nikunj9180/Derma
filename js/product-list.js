document.addEventListener('DOMContentLoaded', function() {
    fetch('../products.json')
        .then(response => response.json())
        .then(data => {
            renderProductList(data.products);
            window.products = data.products; // Store products data globally for filtering
        });
});


function renderProductList(products) {
    const productList = document.getElementById('product-list');
    productList.innerHTML = '';
    products.forEach((product) => {
        const productCard = document.createElement('div');
        productCard.className = 'productCard';
        productCard.innerHTML = `
            <img src="${product.image}" alt="" class="productImg" />
            <div class="productInfo">
            <p>${product.quantity}</p>
            <h3 class="productHeading">
              <hr class="partitionLine" />
              ${product.name}
              <hr class="partitionLine" />
            </h3>
            <p class="textInfo">Price: ${product.price}</p>
   
          </div>

        `;
        productCard.onclick = () => showProductDetail(product.id);
        productList.appendChild(productCard);
    });
}
function showProductDetail(id) {
    // Navigate to the product detail page with the product ID as a URL parameter
    window.location.href = `single_page.html?id=${id}`;
}

function filterProducts(brand) {
    const filteredProducts = brand === 'All' ? window.products : window.products.filter(product => product.brand === brand);
    renderProductList(filteredProducts);
}

