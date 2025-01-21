import{i as n,S as u}from"./assets/vendor-5ObWk2rO.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))e(r);new MutationObserver(r=>{for(const t of r)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&e(a)}).observe(document,{childList:!0,subtree:!0});function s(r){const t={};return r.integrity&&(t.integrity=r.integrity),r.referrerPolicy&&(t.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?t.credentials="include":r.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function e(r){if(r.ep)return;r.ep=!0;const t=s(r);fetch(r.href,t)}})();function d(o){const s=`https://pixabay.com/api/?${new URLSearchParams({key:"47110078-1dfbe4a00d7fe250476d6992f",q:o,image_type:"photo",orientation:"horizontal",safesearch:!0})}`;return fetch(s).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()})}function f(o){const i=document.querySelector(".gallery"),s=o.map(e=>`<li class="gallery-item">
      <a class="gallery-link" href="${e.largeImageURL}">
        <img src="${e.webformatURL}"
        alt="${e.tags}"/>
        </a>
        <div class="descr-list">
        <div class="descr-item">
        <b class="info">Likes</b>
        <span class="value">${e.likes}</span>
        </div>
        <div class="descr-item">
        <b class="info">Views</b>
        <span class="value">${e.views}</span>
        </div>
        <div class="descr-item">
        <b class="info">Comments</b>
        <span class="value">${e.comments}</span>
        </div>
        <div class="descr-item">
        <b class="info">Downloads</b>
        <span class="value">${e.downloads}</span>
        </div>
        </div>
        </li>`).join("");i.innerHTML=s}function m(){const o=document.querySelector(".gallery");o.innerHTML=""}const l=document.querySelector(".search-form"),c=document.querySelector(".loader");c.hidden=!0;l.addEventListener("submit",h);function h(o){o.preventDefault();const i=o.target.elements.image.value.trim();if(!i){n.warning({message:"Warning! The form is empty, please fill searching form.",position:"topRight"}),l.reset();return}m(),l.reset(),c.hidden=!1,d(i).then(s=>{if(s.hits.length===0){n.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}f(s.hits),new u(".gallery-link",{captionsData:"alt",captionDelay:250}).refresh()}).catch(s=>{n.error({message:"Error!",position:"topRight"}),console.error(s)}).finally(()=>{c.hidden=!0})}
//# sourceMappingURL=index.js.map
