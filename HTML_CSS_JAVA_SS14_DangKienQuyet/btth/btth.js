const products = [
    { id: 1, name: "Bánh Chưng Tranh Khúc", price: 150000 },
    { id: 2, name: "Giò Lụa Ước Lễ", price: 180000 },
    { id: 3, name: "Cành Đào Nhật Tân", price: 500000 },
    { id: 4, name: "Mứt T?ết Thập Cẩm", price: 120000 },
    { id: 5, name: "Lì Xì May Mắn", price: 20000 },
    { id: 6, name: "Dưa Hấu Khắc Chữ", price: 60000 }
];

let cart = [
    { id: 1, name: "Bánh Chưng Tranh Khúc", price: 150000 },
    { id: 2, name: "Giò Lụa Ước Lễ", price: 180000 },
]

function renderProducts() {
    let html = "";
    for (let i = 0; i < products.length; i++) {
        html += `<div class="product-card">
                    <img src="./img/banhchung.webp" alt="">
                    <h3>${products[i].name}</h3>
                    <p class="price">${products[i].price}đ</p>
                    <button class="btn-add" id="btn-add" onclick="addToCart(${i})">Thêm vào giỏ</button>
                    </div>`
    }
    document.getElementById("product-list").innerHTML = html
}

renderProducts();

function renderCart (){
    for (i=0; i< cart.length; i++){
    let str = "";
    str = str +`<li class="empty-msg">Chưa có món nào...</li>
                    <li>
                        <span class="cart-item-name">Bánh Chưng Tranh Khúc</span>
                        <div>
                            <span class="cart-item-price">150.000</span>
                            <button class="btn-remove">X</button>
                        </div>
                    </li>`
    }
    document.getElementById("cart-list").innerHTML = str;
}
renderCart();

//hàm thêm sản phẩm vào giỏ hàng
function addToCart(index){
    console.log("Thêm sản phẩm vào giỏ hàng: ", index);
    //sản phẩm thêm vào giỏ hàng
    cart.push(products[index]);
    //gọi lại hàm render giỏ hàng
    renderCart();
}