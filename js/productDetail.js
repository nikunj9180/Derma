document.addEventListener('DOMContentLoaded', function() {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');

    fetch('../products.json')
        .then(response => response.json())
        .then(data => {
            const product = data.products.find(product => product.id === id);
            renderProductDetail(product);
        });
});

function renderProductDetail(product) {
    const imageContainer = document.getElementById('imageContainer');
    imageContainer.innerHTML = `
        <img class="productImg" src="${product.image}" alt=""/>`

    document.getElementById('productName').innerText = product.name;
    document.getElementById('product-quantity').innerText = product.quantity;
    document.getElementById('description').innerText = product.description;
    document.getElementById('product-price').innerText ="Price: " + product.price;
}

function goBack() {
    window.history.back();
}