import { fetchApi } from "./fetchApi.js";
import { API_PRODUCT } from "./constant.js";
import { params } from "./variable.js";

const divProducts = document.querySelector("#row-products");

export const drawProduct = async () => {

    // const api = `${API_PRODUCT}?q=${params.q}&_sort=${params.sort},${params.order}`;
    const api = `${API_PRODUCT}?q=${params.q}&_sort=${params.sort}&_page=${params.page}&_limit=${params.limit}`;
    

    const data = await fetchApi(api);
    
        // console.log(data.products);
        // const products = data.products || data;

        let htmls = data.map(item => {
            return `
            <div class="inner-wrap col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6">
                    <div class="inner-box">
                        <div class="inner-image">
                            <img src="${item.thumbnail}" alt="${item.title}">
                        </div>
                        <div class="product-percent">${item.discountPercentage}%</div>
                        <h3 class="inner-title">${item.title}</h3>
                        <div class="inner-info">
                            <p class="inner-price">$${item.price}</p>
                            <div class="inner-total">Còn lại: ${item.minimumOrderQuantity} sp</div>
                        </div>
                    </div>
                </div>
            `;
        });

        // data.forEach(item => {

        //     htmls += `
        //      <div class="inner-wrap col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6">
        //             <div class="inner-box">
        //                 <div class="inner-image">
        //                     <img src="${item.thumbnail}" alt="${item.title}">
        //                 </div>
        //                 <h3 class="inner-title">${item.title}</h3>
        //                 <div class="inner-info">
        //                     <p class="inner-price">$${item.price}</p>
        //                     <div class="inner-total">Còn lại: ${item.minimumOrderQuantity} sp</div>
        //                 </div>
        //             </div>
        //         </div>
        // `;
        // });
        divProducts.innerHTML = htmls.join("");
}