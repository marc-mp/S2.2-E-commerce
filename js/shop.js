// If you have time, you can move this variable "products" to a json or js file and load the data in this js. It will look more professional
var products = [
    {
        id: 1,
        name: 'cooking oil',
        price: 10.5,
        type: 'grocery',
        offer: {
            number: 3,
            percent: 20
        }
    },
    {
        id: 2,
        name: 'Pasta',
        price: 6.25,
        type: 'grocery'
    },
    {
        id: 3,
        name: 'Instant cupcake mixture',
        price: 5,
        type: 'grocery',
        offer: {
            number: 10,
            percent: 30
        }
    },
    {
        id: 4,
        name: 'All-in-one',
        price: 260,
        type: 'beauty'
    },
    {
        id: 5,
        name: 'Zero Make-up Kit',
        price: 20.5,
        type: 'beauty'
    },
    {
        id: 6,
        name: 'Lip Tints',
        price: 12.75,
        type: 'beauty'
    },
    {
        id: 7,
        name: 'Lawn Dress',
        price: 15,
        type: 'clothes'
    },
    {
        id: 8,
        name: 'Lawn-Chiffon Combo',
        price: 19.99,
        type: 'clothes'
    },
    {
        id: 9,
        name: 'Toddler Frock',
        price: 9.99,
        type: 'clothes'
    }
]

// => Reminder, it's extremely important that you debug your code. 
// ** It will save you a lot of time and frustration!
// ** You'll understand the code better than with console.log(), and you'll also find errors faster. 
// ** Don't hesitate to seek help from your peers or your mentor if you still struggle with debugging.

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
var cart = [];
var total = 0;

// Exercise 1
function buy(id) {
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cart array
    let indexProducts = products.findIndex(product => product.id === id)
    let productSelected = products[indexProducts]
    let indexCart = cart.findIndex(cartElement => cartElement.id === productSelected.id)
    if(indexCart === -1){
        productSelected["quantity"] = 1
        productSelected["subtotalWithDiscount"] = productSelected.price
        cart.push(productSelected)
        console.log(cart)
    
    }else{
        cart[indexCart].quantity = cart[indexCart].quantity + 1  // agrego propiedad cantidad con valor 1
        cart[indexCart].subtotalWithDiscount = cart[indexCart].price * cart[indexCart].quantity // agrego propiedad subtotalWithDiscount que sera el subtotal de cada producto

        console.log(cart)
    }
    applyPromotionsCart()  
    calculateTotal()
    contadorProductos()
}

// Exercise 2
function cleanCart() {
    cart.length = 0
    total = 0
    console.log(cart)
    printCart()
}

// Exercise 3
function calculateTotal() {
    // Calculate total price of the cart using the "cartList" array 
    total = 0
   
    for (let i = 0; i < cart.length; i++){
        cart[i].subtotalWithDiscount = cart[i].price * cart[i].quantity
        total += cart[i].subtotalWithDiscount
    }
    console.log(total)
}

// Exercise 4
function applyPromotionsCart() {
    // Apply promotions to each item in the array "cart"

    let indexId1 = cart.findIndex(element => element.id === 1)

    if(indexId1 != -1 && cart[indexId1].quantity >= 3){
        cart[indexId1].price = 10.5 * 0.8
        console.log(cart)
    }else if (indexId1 != -1 && cart[indexId1].quantity < 3){
        cart[indexId1].price = 10.5
    }

    let indexId3 = cart.findIndex(element => element.id === 3)

    if(indexId3 != -1 && cart[indexId3].quantity >= 10){
        cart[indexId3].price = 5 * 0.7
        console.log (cart)
    }else if (indexId3 != -1 && cart[indexId3].quantity < 10){
        cart[indexId3].price = 5
    }
}


// Exercise 5
function printCart() {
    // Fill the shopping cart modal manipulating the shopping cart dom

    const cartModal = document.getElementById("cartModal")
    // cartModal.innerHTML = " "
    cartModal.innerHTML = `
            <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel"><i class="fas fa-cart-arrow-down"></i> My Cart</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>				

        <div class="modal-body">
                    <h3 class="text-center bill px-5">Shopping Cart</h3>
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">Product</th>
                                <th scope="col">Price</th>
                                <th scope="col">Qty.</th>
                                <th scope="col">Total <small>(with discount)</small></th>
                                <th scope="col">Delete</th>
                            </tr>
                        </thead>
                        <tbody id="cart_list"> 							
                        </tbody>
                        </table>
                        <div class="text-center fs-3 bg-white" id="total_price_container">
                            <!-- Aquí se mostrará el total con descuento -->
                        </div>
                        <div class="text-center">
                            <a href="checkout.html" class="btn btn-primary m-3">Checkout</a>
                            <a href="javascript:void(0)" onclick="cleanCart()" class="btn btn-primary m-3">Clean Cart</a>
                        </div>
                    </div>
                </div>
            </div>`

    const cartList = document.getElementById("cart_list")
   

    for (let i = 0; i < cart.length; i++) {
        const product = cart[i]
        const row = document.createElement("tr");
        row.innerHTML = `
            <tr> 
            <th scope="row">${product.name}</th>
            <td>${product.price.toFixed(2)}</td>
            <td>${product.quantity}</td>
            <td>${product.subtotalWithDiscount.toFixed(2)}</td> 
            <td><button onclick="removeFromCart(${product.id})">-</button></td> 
            </tr>            
            `
        cartList.appendChild(row);
    }
    document.getElementById("total_price_container").innerHTML = `Total: $${total.toFixed(2)}`
}
    


function contadorProductos(){     
    let totalProductosCart = 0
    for (let i = 0; i < cart.length; i++){
        totalProductosCart += cart[i].quantity
    }
    const count_product = document.getElementById("count_product")  
    count_product.textContent = totalProductosCart.toString()   
}




// ** Nivell II **

// Exercise 7
function removeFromCart(id) {    
    
    const index = cart.findIndex(product => product.id === id)

    if (cart[index].quantity == 1 ) {            
        cart.splice(index, 1)
    }else{
        cart[index].quantity = cart[index].quantity - 1
    }
    applyPromotionsCart()
    calculateTotal()
    contadorProductos()
    printCart()
}  
      

function open_modal() {
    printCart();
}