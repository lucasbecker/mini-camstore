// Lista de produtos
const products = [
  {
    id:1,
    name: 'Camêra 01',
    price: 100,
    category: 'analogic',
    image: './images/products/product-01.jpg',
    amount: 0
  },
  {
    id:2,
    name: 'Camêra 02',
    price: 100,
    category: 'analogic',
    image: './images/products/product-02.jpg',
    amount: 0
  },
  {
    id:3,
    name: 'Camêra 03',
    price: 100,
    category: 'analogic',
    image: './images/products/product-03.jpg',
    amount: 0
  },
  {
    id:4,
    name: 'Camêra 04',
    price: 100,
    category: 'analogic',
    image: './images/products/product-04.jpg',
    amount: 0
  },
  {
    id:5,
    name: 'Camêra 05',
    price: 100,
    category: 'analogic',
    image: './images/products/product-05.jpg',
    amount: 0
  },
  {
    id:6,
    name: 'Camêra 06',
    price: 100,
    category: 'analogic',
    image: './images/products/product-06.jpg',
    amount: 0
  },
  {
    id:7,
    name: 'Camêra 07',
    price: 100,
    category: 'digital',
    image: './images/products/product-07.jpg',
    amount: 0
  },
  {
    id:8,
    name: 'Camêra 08',
    price: 100,
    category: 'digital',
    image: './images/products/product-08.jpg',
    amount: 0
  },
  {
    id:9,
    name: 'Camêra 09',
    price: 100,
    category: 'digital',
    image: './images/products/product-09.jpg',
    amount: 0
  },
  {
    id:10,
    name: 'Camêra 10',
    price: 100,
    category: 'digital',
    image: './images/products/product-10.jpg',
    amount: 0
  },
  {
    id:11,
    name: 'Camêra 11',
    price: 100,
    category: 'digital',
    image: './images/products/product-11.jpg',
    amount: 0
  },
  {
    id:12,
    name: 'Camêra 12',
    price: 100,
    category: 'digital',
    image: './images/products/product-12.jpg',
    amount: 0
  }
];

// Containers
var containerProducts = document.getElementById('products');
var containerCart = document.getElementById('cart');

// Exibe os produtos
function updateShowcase(productsFiltered){
  containerCart.innerHTML = ``;
  containerProducts.innerHTML = ``;
  productsFiltered.map( (product) => {
    containerProducts.innerHTML += `
      <div class="product"> 
        <img alt="`+product.name+`" src="`+product.image+`"/>
        <div>
          <p>`+product.name+`</p> 
          <p>R$`+product.price+`</p>
        </div>
        <a class="addCart" key="`+product.id+`" href="javascript:void(0);" onclick="addProductToCart('`+product.id+`')">Adicionar ao carrinho</a>
      </div>
    `; 
  })
}

// Inicializando a exibição padrão
updateShowcase(products);

// Filtrando os produtos por categoria
function filter(category) {
  if(category != 'all'){
    const productsFiltered = products.filter(product => product.category == category);
    updateShowcase(productsFiltered);
  }else{
    updateShowcase(products);
  }
}

// Adiciona um produto a lista do carrinho
function addProductToCart(key) {
  products.map( p => {
    if(p.id == key) p.amount++;
  });
  return false;
}

// Diminui a quantidade de um produto do carrinho
function decreaseAmount(key){
  products.map( p => {
    if(p.id == key) p.amount--;
  });
  showCart();
  return false;
}

// Aumenta a quantidade de um produto do carrinho
function increaseAmount(key){
  products.map( p => {
    if(p.id == key) p.amount++;
  });
  showCart();
  return false;
}

// Remove um produto do carrinho
function removeProduct(key){
  products.map( p => {
    if(p.id == key) p.amount = 0;
  });
  showCart();
  return false;
}

// Exibe conteúdo do carrinho
function showCart(){
  let priceTotal = 0;
  containerProducts.innerHTML = ``;
  containerCart.innerHTML = `<h2>Carrinho de compras</h2>`;
  products.map( (product) => {
    if(product.amount > 0){
      containerCart.innerHTML += `
        <div class="cartProduct"> 
          <p><span>Produto:</span> `+product.name+` </p>
          <p><span>Quantidade:</span> <button onclick="decreaseAmount('`+product.id+`')">–</button> `+product.amount+` <button onclick="increaseAmount('`+product.id+`')">+</button></p>
          <p><span>Valor:</span> `+(product.amount * product.price)+`</p>
          <p><button onclick="removeProduct('`+product.id+`')">X</button></p>
        </div>
      `; 
      priceTotal +=(product.amount * product.price);
    }
  })
  containerCart.innerHTML += `<h3>Valor total da compra: `+ priceTotal +`</h3>`;
  if(priceTotal>0){
    containerCart.innerHTML += `
      <div class="footerCart">
        <button class="btnCart">Finalizar compra</button>
      </div>  
    `;
  }
}

// Exibe o ano corrente na página
document.getElementById('year').innerHTML = (new Date().getFullYear());