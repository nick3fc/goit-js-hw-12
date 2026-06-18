import{a as c,S as u,i as n}from"./assets/vendor-CgWX3-ZD.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const l of e)if(l.type==="childList")for(const i of l.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const l={};return e.integrity&&(l.integrity=e.integrity),e.referrerPolicy&&(l.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?l.credentials="include":e.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(e){if(e.ep)return;e.ep=!0;const l=r(e);fetch(e.href,l)}})();function f(t){return c.get("https://pixabay.com/api/",{params:{key:"56293122-e27c6b73e2974564ba58f2b50",q:t,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(o=>o.data)}const d=new u(".gallery a",{captionsData:"alt",captionDelay:250,showCounter:!1});function g(t){const o=document.querySelector(".gallery"),r=t.map(s=>`<li class="gallery-item">
      <a class="gallery-link" href="${s.largeImageURL}">
        <img
          class="gallery-image"
          src="${s.webformatURL}"
        
          alt="${s.tags}"
        />
      </a>
      
      <ul class='gallery-image-infolist'>
        <li class='info-item'>
        <span class="info-title">Likes</span>
        <span class='info-value'>${s.likes}</span>
        </li>
        <li class='info-item'>
        <span class="info-title">Views</span>
        <span class='info-value'>${s.views}</span>
        </li>
        <li class='info-item'>
        <span class="info-title">Comments</span>
        <span class='info-value'>${s.comments}</span>
        </li>
        <li class='info-item'>
        <span class="info-title">Downloads</span>
        <span class='info-value'>${s.downloads}</span>
        </li>
      </ul>
      
    </li>`).join("");o.insertAdjacentHTML("beforeend",r),d.refresh()}function m(t){const o=document.querySelector(".gallery");o.innerHTML=""}function p(t){document.querySelector(".loader").classList.add("is-active")}function h(t){document.querySelector(".loader").classList.remove("is-active")}let a=[];document.addEventListener("DOMContentLoaded",()=>{console.log("DOM loaded");const t=document.querySelector(".form");t.addEventListener("submit",o=>{o.preventDefault(),m();const r=new FormData(o.currentTarget).get("search-text").trim();if(!r){console.log("Поле порожнє або містить лише пробіли"),n.show({balloon:!0,closeOnEscape:!0,closeOnClick:!0,backgroundColor:"red",titleColor:"#fff",messageColor:"#fff",theme:"light",position:"topRight",title:"❌ Empty string:",message:"enter valid text"});return}t.reset(),p(),f(r).then(s=>{y(s)}).catch(s=>{b(s)}).finally(()=>{console.log("HTTP Request successfull"),h()})})});function y(t){a=t.hits,a.length===0?n.show({balloon:!0,closeOnEscape:!0,closeOnClick:!0,backgroundColor:"yellow",theme:"light",position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"}):(n.show({balloon:!0,closeOnEscape:!0,closeOnClick:!0,backgroundColor:"blue",titleColor:"#fff",messageColor:"#fff",theme:"light",position:"topRight",message:`Congratulations! Found ${a.length} images`}),g(a))}function b(t){console.log("handleError data:",t),n.show({balloon:!0,closeOnEscape:!0,closeOnClick:!0,backgroundColor:"red",titleColor:"#fff",messageColor:"#fff",theme:"light",position:"topRight",title:"❌ Critical:",message:"HTTP-request failed"})}
//# sourceMappingURL=index.js.map
