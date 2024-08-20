import { fetchApi } from "./fetchApi.js";
import { API_CATEGORY } from "./constant.js";
import { params } from "./variable.js";

const listCategoies = document.querySelector("#menu");

fetchApi(API_CATEGORY)
    .then(data => {
        // let htmls = "";

        // data.forEach(item => {
        //     htmls += `
        // <li class="list-category" data-category="${item}"}><a href="#">${item}</a></li>
        // `;
        // })
        let htmls = data.map(item => {
            return `
             <li class="list-category" data-category="${item}"}><a href="#">${item}</a></li>
            `;
        })
        // listCategoies.innerHTML = htmls;
        listCategoies.innerHTML = htmls.join("");

        const selectCategory =  document.querySelector("#menu .list-category");
        selectCategory.forEach(item => {
            item.addEventListener("click", function(){
                params.listCategoies = item.dataset.category;
                params.listCategoies = item.getAttribute("data-category");
                console.log(params);
            })
        })

    })