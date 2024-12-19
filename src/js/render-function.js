
export function renderImages(images) {
    const gallery = document.querySelector(".gallery");
    gallery.innerHTML = "";  
    const markup = images.map((image) => `
        <li class="gallery-item">
            <a class="gallery-link" href="${image.largeImageURL}">
                <img 
                    class="gallery-image" 
                    src="${image.webformatURL}" 
                    alt="${image.tags}" 
                />
            </a>
            <div class="gallery-container">
            <p class="gallery-text">Likes: <span class="gallery-span">${image.likes}</span></p>
            <p class="gallery-text">Views: <span class="gallery-span">${image.views}</span></p>
            <p class="gallery-text">Comments: <span class="gallery-span">${image.comments}</span></p>
            <p class="gallery-text">Downloads: <span class="gallery-span">${image.downloads}</span></p>
            </div>
        </li>
    `).join("");
    gallery.insertAdjacentHTML("beforeend", markup);
    
}
