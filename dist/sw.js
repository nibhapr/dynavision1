if(!self.define){let e,i={};const n=(n,a)=>(n=new URL(n+".js",a).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(a,r)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(i[c])return;let o={};const f=e=>n(e,c),s={module:{uri:c},exports:o,require:f};i[c]=Promise.all(a.map((e=>s[e]||f(e)))).then((e=>(r(...e),o)))}}define(["./workbox-b584cb72"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"_astro/BannerSlider.BOz6B7SF.js",revision:null},{url:"_astro/client.DhWWtesa.js",revision:null},{url:"_astro/digiimpact.DFfa_OMQ.png",revision:null},{url:"_astro/digitech.BIUrm2CW.png",revision:null},{url:"_astro/dobot.BELTDBV1.png",revision:null},{url:"_astro/dso.DW6aeujc.png",revision:null},{url:"_astro/dso3.BieZSrYk.png",revision:null},{url:"_astro/Faq.03zSKKba.js",revision:null},{url:"_astro/GoogleMap.DDSXSdkQ.js",revision:null},{url:"_astro/hoisted.Cd-RZ9pN.js",revision:null},{url:"_astro/hoisted.dfAKsGXM.js",revision:null},{url:"_astro/index.B2xXvapE.css",revision:null},{url:"_astro/index.B78kqCuL.js",revision:null},{url:"_astro/index.BTPH3Un7.js",revision:null},{url:"_astro/index.DKYEyLr-.css",revision:null},{url:"_astro/jsx-runtime.D4yicUPj.js",revision:null},{url:"_astro/logodigi.DcVR02YZ.jpg",revision:null},{url:"_astro/meter.CyRbEWE-.png",revision:null},{url:"_astro/motion.Bu6d2pGL.js",revision:null},{url:"_astro/Service.C1trusp1.js",revision:null},{url:"_astro/ServiceRound.BdKx5SIA.js",revision:null},{url:"_astro/Slider.DMwjC_k9.js",revision:null},{url:"_astro/StatsReact.0cqY8DxT.js",revision:null},{url:"_astro/use-animation.Dm-y0-1E.js",revision:null},{url:"_astro/use-in-view.Bb6_2qrO.js",revision:null},{url:"_astro/Whatsapp.BHhfYdnw.js",revision:null},{url:"_astro/work.ClBhAv5_.png",revision:null},{url:"_astro/work1.Ykbtn_G7.png",revision:null},{url:"_astro/work2.4f-_Glt4.png",revision:null},{url:"banner1.jpg",revision:"cd27849a4a95d71c5190a2ca2cc1303a"},{url:"banner2.jpg",revision:"01162f20a5cd9a123ada75277774b63d"},{url:"banner4.jpg",revision:"1eafde4d8f662f554a2ce2a3dc22ccce"},{url:"banner5.jpg",revision:"a12dcbef0ce4c3af3be85173b29f3b01"},{url:"banner6.jpg",revision:"f62f85e96a1a2f6ba206e8530785ecc4"},{url:"CUSTOM.png",revision:"9d6c2fb5581d4796fa16dc99ed9e1d2e"},{url:"demo.jpg",revision:"7734f9f929b53cba6895438e556784f7"},{url:"demo.png",revision:"c880dd39e047399e16ec98b3ecec28db"},{url:"demo1.jpg",revision:"54cd8c8282a4c8e52fea1a6f55151754"},{url:"digi.jpg",revision:"3003052d514df65cfc12ae67ca8758e6"},{url:"digi.webp",revision:"0fba9ff33459aeb503ec2e023c84812e"},{url:"digib.jpg",revision:"8ab2f871a37e4e951661525e38b047cc"},{url:"digiimpact.jpg",revision:"567ac0315fe99f33a2912d564e6b9974"},{url:"digitalmulty.jpg",revision:"07d3af32bb5a20a8a994527d6381f348"},{url:"DOBOT-CONVEYER.webp",revision:"47390fcd561927ec5198dfb9379b0ede"},{url:"dobotconveyerr.jpg",revision:"79a385dd05ec66c1ed799a6219496849"},{url:"dobotmagician.jpg",revision:"8917c537cbb6bf0168829ccad780b723"},{url:"dso2.jpg",revision:"ea557527a86b5feadc0abe23c4db4955"},{url:"dso2.png",revision:"f9c1eaccf2edae38d89ca1007c95e3a5"},{url:"educational_kit.webp",revision:"81229c02b9e916c6a1851a888e2530ac"},{url:"ELECTRICAL (1).png",revision:"bcfde44a6e8d2f51e79c6dca0254de0f"},{url:"ELECTRICAL.png",revision:"bcfde44a6e8d2f51e79c6dca0254de0f"},{url:"eletrical.png",revision:"8b26283c6b2d2fe496e5a629187b1f8d"},{url:"favicon.png",revision:"c3b8667017309905cb0edaa29cffb060"},{url:"favicons/favicon-114x114.png",revision:"e0e6fd0a793dc1f91758036a171d1f90"},{url:"favicons/favicon-120x120.png",revision:"f8b4521b67143a1b3d90c36ca3293c02"},{url:"favicons/favicon-128x128.png",revision:"16cc7700e66031c8841e3487d1212b09"},{url:"favicons/favicon-144x144.png",revision:"ece7e137b9d526e9f09eb8dee9453595"},{url:"favicons/favicon-150x150.png",revision:"d7716e86b4dd99322e71bbff69586fb9"},{url:"favicons/favicon-152x152.png",revision:"513367491ba224d792363ce525d83a94"},{url:"favicons/favicon-16x16.png",revision:"a51180b434038cd765149a8f9708790f"},{url:"favicons/favicon-180x180.png",revision:"bfc4afcb577b075272e383cf058c86e2"},{url:"favicons/favicon-192x192.png",revision:"74b98baab1c5ef856789476096ba3a04"},{url:"favicons/favicon-310x310.png",revision:"16231a5eaf1b8efd76c85168e78c7137"},{url:"favicons/favicon-32x32.png",revision:"bc689f90529fc78bcab6ee88e46ecdca"},{url:"favicons/favicon-384x384.png",revision:"dd4523fa0a39f129e9c6b441f34cf620"},{url:"favicons/favicon-512x512.png",revision:"7889b08bd21b55a1a67d839a9e8a478e"},{url:"favicons/favicon-57x57.png",revision:"9e346c3a05b3d1f62c47ead33612b4e8"},{url:"favicons/favicon-60x60.png",revision:"e4571db1fa74548cc2b3528371331a3b"},{url:"favicons/favicon-70x70.png",revision:"0e201bb6c4ae7110cf4c54cb4fa00459"},{url:"favicons/favicon-72x72.png",revision:"63465de2135ced6d246cefeb5db5b2a4"},{url:"favicons/favicon-76x76.png",revision:"c12cf4c82f15cebb3299fe3bc8676a06"},{url:"favicons/favicon-96x96.png",revision:"639518f5c9324e97bcadf9f725adbaf1"},{url:"favicons/favicon.ico",revision:"3c91be682e5624c07bfcd0e2026bbbc8"},{url:"favicons/safari-pinned-tab.svg",revision:"7790cf4677cdbb3c49af5a3027940cb6"},{url:"faviconsw/favicon-114x114.png",revision:"1454050fa8fa097192ab1a8765965152"},{url:"faviconsw/favicon-120x120.png",revision:"6971243e414d8f5cc1fdb3031bf1b788"},{url:"faviconsw/favicon-128x128.png",revision:"c5de7e3b3dd04ea8ec7cdcf15d238357"},{url:"faviconsw/favicon-144x144.png",revision:"e4e54a8f08a3fd481fa95d8421b4ee82"},{url:"faviconsw/favicon-150x150.png",revision:"83cf35d83e8cb97069b19d00391ba0f7"},{url:"faviconsw/favicon-152x152.png",revision:"67e64a02cb48f76f323dd4cd5e117f4f"},{url:"faviconsw/favicon-16x16.png",revision:"e30ad43cd87d37c518a798d693133814"},{url:"faviconsw/favicon-180x180.png",revision:"832e2e8a66a214d216febf56884f3d98"},{url:"faviconsw/favicon-192x192.png",revision:"14f615d469e15fd097dbfb96cff00c68"},{url:"faviconsw/favicon-310x310.png",revision:"24c7125d375de1b13a73611cf33ac9f8"},{url:"faviconsw/favicon-32x32.png",revision:"b3528c9a3c7ae9e171f3db7be5b5ebf6"},{url:"faviconsw/favicon-384x384.png",revision:"5762cf9e2670d3e1d53d3219fff1fc1e"},{url:"faviconsw/favicon-512x512.png",revision:"43bbd0bc6f2df0d48fc711b941f1124e"},{url:"faviconsw/favicon-57x57.png",revision:"acd83078add362626c975d54c95dbb09"},{url:"faviconsw/favicon-60x60.png",revision:"a71b84f634ab0ee7ddc97ad1beeaf67c"},{url:"faviconsw/favicon-70x70.png",revision:"e2242d7b3f04f3ccb59d1028229a8fbd"},{url:"faviconsw/favicon-72x72.png",revision:"fd83a4d10b908d06bf3273914ad9509d"},{url:"faviconsw/favicon-76x76.png",revision:"0cb6c86382fca1e9b5984f46401b81b7"},{url:"faviconsw/favicon-96x96.png",revision:"6b358aaa1ed74d91fbaa180bca25fd23"},{url:"faviconsw/favicon.ico",revision:"87fa938c1eff256c180c4a861d70ddd2"},{url:"gafoor.png",revision:"97185a6eb960e17e0f60dae10c1e98ff"},{url:"ghh.jpeg",revision:"de1170994c155b9e039a345da4fb8a16"},{url:"log.svg",revision:"797bb3689f2760bfdd192ee58b815d7d"},{url:"logodigi.jpg",revision:"51473461edb771aedda7da80749ccf8b"},{url:"meter.jpg",revision:"74010955d72b86c1eec78c05c93a8d9d"},{url:"meter.webp",revision:"249e4a61f553781b552527e6f05b0a7b"},{url:"oscilloscope.webp",revision:"f366d3eb197ff01ca20080f8a7e373c9"},{url:"pos.png",revision:"a6a46876e86b419e871f602487477cd9"},{url:"rashid.png",revision:"b47e83cc513e7a9ea44a539cd28fa50f"},{url:"register.svg",revision:"993f7d292006f5b823f666d3fcb0733b"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"robotics.jpg",revision:"555421b43b22a0ff5e04426c7067c7fd"},{url:"scripts/form.js",revision:"989f4a6428b404037951aca116cfce78"},{url:"slider/dso.png",revision:"c56e9839dafc8be283a4427a280e9e06"},{url:"slider/dso3.png",revision:"ac409fbbc3e3b1a9e6d3b2c2d1b13c56"},{url:"slider/meter.png",revision:"41913ace7eedae74e2887010d186bb8a"},{url:"slider/work.png",revision:"90116b1cd6506901931229f9ffdcb91e"},{url:"slider/work1.png",revision:"e7410957b6aa70c30531ae4ccfb2aa2d"},{url:"slider/work2.png",revision:"def55b82a38edf0d744a12ffc8cc316d"},{url:"Untitled-1.png",revision:"75a614c27e88c4399e960ff3735f435c"},{url:"yy.jpg",revision:"06685a269660a4e9cf80045ed1a45fb4"},{url:"favicons/favicon-192x192.png",revision:"74b98baab1c5ef856789476096ba3a04"},{url:"favicons/favicon-512x512.png",revision:"7889b08bd21b55a1a67d839a9e8a478e"},{url:"manifest.webmanifest",revision:"a45ab5fea01cf749a04d201beb9f5424"}],{}),e.cleanupOutdatedCaches()}));