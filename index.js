import{S as u,i as n}from"./assets/vendor-5ObWk2rO.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();function d(o){const s=`https://pixabay.com/api/?${new URLSearchParams({key:"47110078-1dfbe4a00d7fe250476d6992f",q:o,image_type:"photo",orientation:"horizontal",safesearch:!0})}`;return fetch(s).then(r=>{if(!r.ok)throw new Error(r.status);return r.json()})}function f(o){const a=document.querySelector(".gallery"),s=o.map(r=>`<li class="gallery-item">
      <a class="gallery-link" href="${r.largeImageURL}">
        <img src="${r.webformatURL}"
        alt="${r.tags}"/>
        </a>
        <div class="descr-list">
        <div class="descr-item">
        <b class="info">Likes</b>
        <span class="value">${r.likes}</span>
        </div>
        <div class="descr-item">
        <b class="info">Views</b>
        <span class="value">${r.views}</span>
        </div>
        <div class="descr-item">
        <b class="info">Comments</b>
        <span class="value">${r.comments}</span>
        </div>
        <div class="descr-item">
        <b class="info">Downloads</b>
        <span class="value">${r.downloads}</span>
        </div>
        </div>
        </li>`).join("");a.innerHTML=s}function m(){const o=document.querySelector(".gallery");o.innerHTML=""}const l=document.querySelector(".search-form"),c=document.querySelector(".loader");document.querySelector(".gallery");c.hidden=!0;const p=new u(".gallery a",{captionsData:"alt",captionDelay:250});l.addEventListener("submit",h);function h(o){o.preventDefault();const a=o.target.elements.image.value.trim();if(!a){n.warning({message:"Warning! The form is empty, please fill searching form.",position:"topRight"}),l.reset();return}m(),l.reset(),c.hidden=!1,d(a).then(s=>{if(s.hits.length===0){n.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}f(s.hits),p.refresh()}).catch(s=>{n.error({message:"Error!",position:"topRight"}),console.error(s)}).finally(()=>{c.hidden=!0})}
//# sourceMappingURL=index.js.map
