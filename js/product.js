import { drawProduct } from "./drawProduct.js";
import { params } from "./variable.js";

// draw products
drawProduct();

//search
const inputSearch = document.querySelector("#search input");
const buttonSearch = document.querySelector("#search button");


const search = () => {
    params.q = inputSearch.value;
    drawProduct();
}
buttonSearch.addEventListener("click", function () {
    search();
});

inputSearch.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        search();
    }
});
//End search

//filter
const filter = document.querySelector("#filter");
filter.addEventListener("change", function (e) {
    console.log(e.target.value);

    switch (e.target.value) {
        case "mac-dinh":
            params.sort = "";
            // params.order = "";
            break;
        case "gia-thap-den-cao":
            params.sort = "price";
            // params.order = "price";
            break;
        case "gia-cao-den-thap":
            params.sort = "-price";
            // params.order = "-price";
            break;
        case "giam-gia-nhieu":
            params.sort = "-discountPercentage";
            // params.order = "views";
            break;
        default:
            break;
    }
    drawProduct();
})
// console.log(filter);
//End filter

// pagination
const pagiPrev = document.querySelector("#pagination-prev");
const pagiNext = document.querySelector("#pagination-next");
const pagiNumber = document.querySelector("#pagination-number");

pagiNext.addEventListener("click", function () {
    params.page = params.page + 1;
    pagiNumber.innerHTML = params.page;
    drawProduct();
})

pagiPrev.addEventListener("click", function () {
    if (params.page > 1) {
        params.page = params.page - 1;
        pagiNumber.innerHTML = params.page;
        drawProduct();
    }
})
//End pagination