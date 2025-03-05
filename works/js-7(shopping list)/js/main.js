const productList = [];

// Builds a product object to insert into the list. 
// id is recieved through assignId() function.
function createProduct(name, amount, isBought, id){
    let product = {};

    product.name = name;
    product.amount= amount;
    product.isBought = isBought;
    product.id = id;

    return product;
}

function assignId(){
    let id;

    if (productList.length === 0){
        id = 0;
    }else{
        id = productList.length - 1;
    }

    return id;
};

// Dom elements
let nameInput = document.querySelector('#nameInput')
let amountInput = document.querySelector('#amountInput')
let isBoughtInput = document.querySelector('#isBoughtInput')

let listField = document.querySelector('.products-list') 

let btnAdd = document.querySelector('#btn-add')

// Page actions
function addProduct(){
    let product = createProduct(nameInput.value, amountInput.value, isBoughtInput.checked, assignId());

    productList.push(product);
};

function printProductList(){
   for(let el of productList){
        listField.innerHTML += `
            <li class="products-list__item" id="${el.id}"
                <span>${el.name}</span>
                <span>x${el.amount}</span>
                <input type="checkbox" id="list-check">
            </li>
        `
    };
};

function btnAddAction(){
    listField.innerHTML = `
`;
    addProduct();
    printProductList();
};

btnAdd.addEventListener('click', btnAddAction)
