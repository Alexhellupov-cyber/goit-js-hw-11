
import iziToast from 'izitoast';
import "izitoast/dist/css/iziToast.min.css";
import { renderImages } from './render-function';
import lightbox from "../main";

const API_KEY = "47343073-38824ad25c719e3c94b2dfcbe";
const btn = document.querySelector(".button");
const inp = document.querySelector(".input");
const loadingElement = document.getElementById("loading");
const gallery = document.querySelector(".gallery");

btn.addEventListener("click", (event) => {
    event.preventDefault();
    
    const query = inp.value.trim();
    if (!query) {
        iziToast.warning({
            title: "Hint",
            message: "Try to enter something into the input...",
        });
        return;
    }
    loadingElement.style.display = "block";
    gallery.innerHTML = "";
    
    const searchParams = new URLSearchParams({
        key: `${API_KEY}`,
        q: query,
        image_type: "photo",
        orientation: "horizontal",
        safesearch: true,
    });
    const url = `https://pixabay.com/api/?${searchParams}`;
    fetch(url)
        .then((response) => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then((data) => {
           loadingElement.style.display = "none";
            if (data.hits.length === 0) {
                iziToast.error({
                    title: "Error",
                    message: "Sorry, there are no images matching your search query. Please try again!",
                });
                return;
            }
            console.log(data.hits);
           renderImages(data.hits); 
            lightbox.refresh();
           inp.value = "";
        })
        .catch((error) => {
            loadingElement.style.display = "none";
            iziToast.error({
                title: "Error",
                message: `Something went wrong: ${error.message}`,
        
            });
        });
});

  




    