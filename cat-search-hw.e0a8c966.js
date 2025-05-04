!function(){axios.defaults.baseURL="https://api.thecatapi.com/",axios.defaults.headers.common["x-api-key"]="live_jqe3uN0EE5jm1WMBDB9fpNVLj1xAGfiopj2YDqX7fm51UXiwScPXBh6ctBmpeWq0";let e=document.querySelector(".breed-select"),t=document.querySelector(".loader"),a=document.querySelector(".error"),n=document.querySelector(".cat-info");function r(){var e;t.style.display="block",e=this.value,n.style.display="none",axios.get(`v1/images/search?breed_ids=${e}`).then(e=>{if(!e)throw Error("Oops! Something went wrong! Try reloading the page");return e.data}).then(e=>{var t,a,r,i,o,s,l,d;n.style.display="flex",a=(t=e)[0].height,r=t[0].width,i=t[0].url,o=t[0].breeds[0].alt_names,s=t[0].breeds[0].name,l=t[0].breeds[0].description,d=t[0].breeds[0].origin,n.innerHTML=`<div class="catBreedImg--wrapper">
             <img
                class="catBreedImg"
                height="${a}px"
                width="${r}px"
                src="${i}"
                alt="${o}"
              >
           </div>
           <div class="catBreedInfo--wrapper">
             <h1 class="catBreedInfo__headline">${s}</h1>
             <p class="catBreedInfo__description">${l}</p>
             <span class="catBreedInfo__description origin">${d}</span>
           </div>`}).catch(e=>{a.style.display="block",a.textContent=e}).finally(()=>{t.style.display="none"})}axios.get("/v1/breeds").then(e=>{if(!e)throw Error("Oops! Something went wrong! Try reloading the page");return e}).then(t=>{e.style.display="block",function(t){let a=t.map(e=>`
        <option
          class="optionBreed"
          value="${e.id}"
        >
          ${e.name}
        </option>
      `).join("");e.insertAdjacentHTML("beforeend",a),e.addEventListener("change",r)}(t.data)}).catch(e=>{a.style.display="block",a.textContent=e}).finally(()=>{t.style.display="none"})}();
//# sourceMappingURL=cat-search-hw.e0a8c966.js.map
