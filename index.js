import{r as e}from"./assets/rolldown-runtime-QTnfLwEv.js";import{n as t,r as n,t as r}from"./assets/vendor-D2lm8pA-.js";(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();async function i(e,t,r){console.log(`page`,t);try{return(await n.get(`https://pixabay.com/api/`,{params:{key:`56293122-e27c6b73e2974564ba58f2b50`,q:e,image_type:`photo`,orientation:`horizontal`,safesearch:!0,page:t,per_page:r}})).data}catch(e){console.error(e)}}var a=e(t(),1);window.global=window,globalThis.global=window;var o=a.default.default,s=new o(`.gallery a`,{captionsData:`alt`,captionDelay:250,showCounter:!1});function c(e){let t=document.querySelector(`.gallery`),n=e.map(e=>`<li class="gallery-item">
      <a class="gallery-link" href="${e.largeImageURL}">
        <img
          class="gallery-image"
          src="${e.webformatURL}"
        
          alt="${e.tags}"
        />
      </a>
      
      <ul class='gallery-image-infolist'>
        <li class='info-item'>
        <span class="info-title">Likes</span>
        <span class='info-value'>${e.likes}</span>
        </li>
        <li class='info-item'>
        <span class="info-title">Views</span>
        <span class='info-value'>${e.views}</span>
        </li>
        <li class='info-item'>
        <span class="info-title">Comments</span>
        <span class='info-value'>${e.comments}</span>
        </li>
        <li class='info-item'>
        <span class="info-title">Downloads</span>
        <span class='info-value'>${e.downloads}</span>
        </li>
      </ul>
      
    </li>`).join(``);t.insertAdjacentHTML(`beforeend`,n),s.refresh()}function l(e){let t=document.querySelector(`.gallery`);t.innerHTML=``}function u(e){document.querySelector(`.loader`).classList.add(`is-active`)}function d(e){document.querySelector(`.loader`).classList.remove(`is-active`)}function f(){document.querySelector(`.load-more-btn`).classList.remove(`hidden`)}function p(){document.querySelector(`.load-more-btn`).classList.add(`hidden`)}var m=e(r(),1),h=[],g,_,v,y=15;document.addEventListener(`DOMContentLoaded`,()=>{console.log(`DOM loaded`);let e=document.querySelector(`.form`);e.addEventListener(`submit`,async t=>{if(t.preventDefault(),p(),l(),_=1,g=new FormData(t.currentTarget).get(`search-text`).trim(),!g){console.log(`Поле порожнє або містить лише пробіли`),m.default.show({balloon:!0,closeOnEscape:!0,closeOnClick:!0,backgroundColor:`red`,titleColor:`#fff`,messageColor:`#fff`,theme:`light`,position:`topRight`,title:`❌ Empty string:`,message:`enter valid text`});return}e.reset(),u(`waiting...`);try{let e=await i(g,_,y);v=Math.ceil(e.total/y),console.log(`totalPages:`,v),b(e)}catch(e){x(e)}finally{console.log(`HTTP Request successfull`),d()}})}),document.querySelector(`.load-more-btn`).addEventListener(`click`,e=>{p(),u(),_+=1,i(g,_,y).then(e=>{b(e),S(2)}).catch(e=>{x(e)}).finally(()=>{console.log(`HTTP Request successfull`),d()})});function b(e){let t=e.total;if(h=e.hits,console.log(`totalImages:`,t),h.length===0){m.default.show({balloon:!0,closeOnEscape:!0,closeOnClick:!0,backgroundColor:`yellow`,theme:`light`,position:`topRight`,message:`Sorry, there are no images matching your search query. Please try again!`});return}else m.default.show({balloon:!0,closeOnEscape:!0,closeOnClick:!0,backgroundColor:`blue`,titleColor:`#fff`,messageColor:`#fff`,theme:`light`,position:`topRight`,message:`Congratulations! Found ${h.length} images`}),c(h),_<v?f():(p(),m.default.show({balloon:!0,closeOnEscape:!0,closeOnClick:!0,backgroundColor:`blue`,titleColor:`#fff`,messageColor:`#fff`,theme:`light`,position:`topRight`,message:`We're sorry, but you've reached the end of search results.`}))}function x(e){console.log(`handleError data:`,e),m.default.show({balloon:!0,closeOnEscape:!0,closeOnClick:!0,backgroundColor:`red`,titleColor:`#fff`,messageColor:`#fff`,theme:`light`,position:`topRight`,title:`❌ Critical:`,message:`HTTP-request failed`})}function S(e){let t=document.querySelector(`.gallery-item`).getBoundingClientRect().height*e;window.scrollBy({top:t,behavior:`smooth`})}
//# sourceMappingURL=index.js.map