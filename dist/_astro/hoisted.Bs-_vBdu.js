import"./hoisted.BaWgQmZZ.js";const r=document.getElementById("form"),c=document.getElementById("result");r.addEventListener("submit",function(l){if(l.preventDefault(),r.classList.add("was-validated"),!r.checkValidity()){r.querySelectorAll(":invalid")[0].focus();return}const e=new FormData(r),t=Object.fromEntries(e),a=JSON.stringify(t);c.innerHTML="Sending...",fetch("https://api.web3forms.com/submit",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:a}).then(async n=>{let o=await n.json();n.status==200?(c.classList.add("text-green-500"),c.innerHTML=o.message):(console.log(n),c.classList.add("text-red-500"),c.innerHTML=o.message)}).catch(n=>{console.log(n),c.innerHTML="Something went wrong!"}).then(function(){r.reset(),r.classList.remove("was-validated"),setTimeout(()=>{c.style.display="none"},5e3)})});class s extends HTMLElement{connectedCallback(){this.videoId=this.getAttribute("videoid");let e=this.querySelector(".lty-playbtn");if(this.playLabel=e&&e.textContent.trim()||this.getAttribute("playlabel")||"Play",this.dataset.title=this.getAttribute("title")||"",this.style.backgroundImage||(this.style.backgroundImage=`url("https://i.ytimg.com/vi/${this.videoId}/hqdefault.jpg")`,this.upgradePosterImage()),e||(e=document.createElement("button"),e.type="button",e.classList.add("lty-playbtn"),this.append(e)),!e.textContent){const t=document.createElement("span");t.className="lyt-visually-hidden",t.textContent=this.playLabel,e.append(t)}this.addNoscriptIframe(),e.removeAttribute("href"),this.addEventListener("pointerover",s.warmConnections,{once:!0}),this.addEventListener("click",this.activate),this.needsYTApi=this.hasAttribute("js-api")||navigator.vendor.includes("Apple")||navigator.userAgent.includes("Mobi")}static addPrefetch(e,t,a){const n=document.createElement("link");n.rel=e,n.href=t,a&&(n.as=a),document.head.append(n)}static warmConnections(){s.preconnected||(s.addPrefetch("preconnect","https://www.youtube-nocookie.com"),s.addPrefetch("preconnect","https://www.google.com"),s.addPrefetch("preconnect","https://googleads.g.doubleclick.net"),s.addPrefetch("preconnect","https://static.doubleclick.net"),s.preconnected=!0)}fetchYTPlayerApi(){window.YT||window.YT&&window.YT.Player||(this.ytApiPromise=new Promise((e,t)=>{var a=document.createElement("script");a.src="https://www.youtube.com/iframe_api",a.async=!0,a.onload=n=>{YT.ready(e)},a.onerror=t,this.append(a)}))}async getYTPlayer(){return this.playerPromise||await this.activate(),this.playerPromise}async addYTPlayerIframe(){this.fetchYTPlayerApi(),await this.ytApiPromise;const e=document.createElement("div");this.append(e);const t=Object.fromEntries(this.getParams().entries());this.playerPromise=new Promise(a=>{let n=new YT.Player(e,{width:"100%",videoId:this.videoId,playerVars:t,events:{onReady:o=>{o.target.playVideo(),a(n)}}})})}addNoscriptIframe(){const e=this.createBasicIframe(),t=document.createElement("noscript");t.innerHTML=e.outerHTML,this.append(t)}getParams(){const e=new URLSearchParams(this.getAttribute("params")||[]);return e.append("autoplay","1"),e.append("playsinline","1"),e}async activate(){if(this.classList.contains("lyt-activated"))return;if(this.classList.add("lyt-activated"),this.needsYTApi)return this.addYTPlayerIframe(this.getParams());const e=this.createBasicIframe();this.append(e),e.focus()}createBasicIframe(){const e=document.createElement("iframe");return e.width=560,e.height=315,e.title=this.playLabel,e.allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",e.allowFullscreen=!0,e.src=`https://www.youtube-nocookie.com/embed/${encodeURIComponent(this.videoId)}?${this.getParams().toString()}`,e}upgradePosterImage(){setTimeout(()=>{const e=`https://i.ytimg.com/vi_webp/${this.videoId}/sddefault.webp`,t=new Image;t.fetchPriority="low",t.referrerpolicy="origin",t.src=e,t.onload=a=>{a.target.naturalHeight==90&&a.target.naturalWidth==120||(this.style.backgroundImage=`url("${e}")`)}},100)}}customElements.define("lite-youtube",s);class i extends HTMLElement{constructor(){super(...arguments),this.videoId=encodeURIComponent(this.dataset.id)}static{this.preconnected=!1}connectedCallback(){this.addEventListener("pointerover",i.warmConnections,{once:!0}),this.addEventListener("click",t=>this.addIframe(t));const e=this.querySelector("a");if(e){const t=document.createElement("button");t.classList.add(...e.classList.values()),t.setAttribute("aria-label",e.getAttribute("aria-label")),e.replaceWith(t)}}static addPrefetch(e,t){const a=document.createElement("link");a.rel=e,a.href=t,document.head.append(a)}static warmConnections(){i.preconnected||(i.addPrefetch("preconnect","https://player.vimeo.com"),i.addPrefetch("preconnect","https://i.vimeocdn.com"),i.addPrefetch("preconnect","https://f.vimeocdn.com"),i.addPrefetch("preconnect","https://fresnel.vimeocdn.com"),i.preconnected=!0)}addIframe(e){if(this.classList.contains("ltv-activated"))return;e.preventDefault(),this.classList.add("ltv-activated");const t=encodeURIComponent(this.dataset.t||"0m"),a=new URLSearchParams(this.dataset.params||[]),n=document.createElement("iframe");n.width="640",n.height="360",n.allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",n.allowFullscreen=!0,n.src=`https://player.vimeo.com/video/${this.videoId}?${a.toString()}#t=${t}`,this.append(n)}}customElements.get("lite-vimeo")||customElements.define("lite-vimeo",i);
