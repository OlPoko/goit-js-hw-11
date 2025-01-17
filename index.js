import{S as m,i as a}from"./assets/vendor-BrddEoy-.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const p=async s=>{const t=`https://pixabay.com/api/?key=48224339-eb859193739eff8149475b5bf&q=${s}&image_type=photo&orientation=horizontal&safesearch=true`,o=await fetch(t);if(!o.ok)throw new Error("Failed to fetch images");return o.json()};let c;const h=s=>s.map(({webformatURL:t,largeImageURL:o,tags:i,likes:e,views:r,comments:n,downloads:f})=>`
      <a href="${o}" class="gallery-item">
        <img src="${t}" alt="${i}" loading="lazy" />
        <div class="info">
          <p><b>Likes:</b> ${e}</p>
          <p><b>Views:</b> ${r}</p>
          <p><b>Comments:</b> ${n}</p>
          <p><b>Downloads:</b> ${f}</p>
        </div>
      </a>
    `).join(""),g=(s,t)=>{s.innerHTML=t,c?c.refresh():c=new m(".gallery-item")},y=document.querySelector("#search-form"),l=document.querySelector(".gallery"),d=document.querySelector(".loader"),b=()=>d.classList.remove("hidden"),u=()=>d.classList.add("hidden"),L=async s=>{s.preventDefault();const t=s.currentTarget.elements.searchQuery.value.trim();if(!t){a.error({title:"Error",message:"Please enter a search term.",position:"topRight",backgroundColor:"#FF0000"});return}b();try{const o=await p(t);if(u(),o.hits.length===0){l.innerHTML="",a.info({title:"No Results",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",backgroundColor:"#FF0000"});return}const i=h(o.hits);g(l,i)}catch(o){u(),a.error({title:"Error",message:o.message,position:"topRight",backgroundColor:"#FF0000"})}};y.addEventListener("submit",L);
//# sourceMappingURL=index.js.map
