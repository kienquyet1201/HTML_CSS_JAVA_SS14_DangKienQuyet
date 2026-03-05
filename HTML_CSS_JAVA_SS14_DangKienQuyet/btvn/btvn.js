const products = [
    { id: 1, name: "Bánh Chưng", price: 150000 },
    { id: 2, name: "Giò Lụa", price: 180000 },
    { id: 3, name: "Cành Đào", price: 500000 },
    { id: 4, name: "Mứt Tết", price: 120000 },
    { id: 5, name: "Bao Lì Xì", price: 25000 },
    { id: 6, name: "Dưa Hấu Tết", price: 80000 },
];

const productList = document.getElementById("product-list");

for (let i = 0; i < products.length; i++) {
    const div = document.createElement("div");
    div.className = "product";
    div.innerHTML = products[i].id + "  - " + products[i].name + " - " + products[i].price + "VNĐ";
    productList.appendChild(div);
}
// BTVN 02
const form = document.getElementById("product-form");
const nameInput = document.getElementById("product-name");
const priceInput = document.getElementById("product-price");


form.addEventListener("submit", function (more) {
    more.preventDefault();
    let name = nameInput.value;
    let price = priceInput.value;
    let newProduct = {
        name: name,
        price: price
    };
    let li = document.createElement("li");
    li.className = "product-item";
    li.innerHTML = newProduct.name + " - " + newProduct.price + " VNĐ";
    nameInput.value = "";
    priceInput.value = "";
    //BTVN 03
    const deleteBtn = document.createElement("button");
    deleteBtn.className = "delete-btn";
    deleteBtn.textContent = "Xóa";

    deleteBtn.addEventListener("click", function () {
        const confirmDelete = confirm("Bạn có chắc muốn xóa sản phẩm này?");

        if (confirmDelete) {
            li.remove();
        }
    });
    li.appendChild(deleteBtn);
    productList.appendChild(li);
    nameInput.value = "";
    priceInput.value = "";
    //BTVN 04
    function formatPrice(number) {
        return Number(number).toLocaleString("vi-VN") + " VNĐ";
    }
    let inf = document.createElement("span");
    inf.textContent = name + " - " + formatPrice(price);
    li.innerHTML = "";
    li.appendChild(inf);

    let buttonDele = document.createElement("button");
    buttonDele.className = "edit-price-btn";
    buttonDele.textContent = "Sửa giá";

    buttonDele.addEventListener("click", function () {
        let newPrice = prompt("Nhập giá mới (VND):");
        if (newPrice !== null && newPrice !== "" && !isNaN(newPrice)) {
            inf.textContent = name + " - " + formatPrice(newPrice);
        }
    });
    li.appendChild(buttonDele);
    li.appendChild(deleteBtn);
});
// BTVN 5
const searchInput = document.getElementById("search-input");

searchInput.addEventListener("input", function () {
    let keyword = searchInput.value.toLowerCase();

    let productItems = document.querySelectorAll(".product-item");

    productItems.forEach(function (item) {
        let text = item.textContent.toLowerCase();

        if (text.includes(keyword)) {
            item.style.display = "";
        } else {
            item.style.display = "none";
        }
    });
});
//BTVN 6
function renderProducts(list) {
    let productList = document.getElementById("product-list");
    productList.innerHTML = "";

    for (let i = 0; i < list.length; i++) {
        const li = document.createElement("li");
        li.className = "product-item";
        li.textContent = list[i].name + " - " + list[i].price + " VNĐ";
        productList.appendChild(li);
    }
}
let sortA = document.getElementById("sort-asc");
let sortB = document.getElementById("sort-desc");
sortA.addEventListener("click", function () {
    products.sort(function (a, b) {
        return a.price - b.price;
    });
    renderProducts(products);
});
sortB.addEventListener("click", function () {
    products.sort(function (a, b) {
        return b.price - a.price;
    });
    renderProducts(products);
});