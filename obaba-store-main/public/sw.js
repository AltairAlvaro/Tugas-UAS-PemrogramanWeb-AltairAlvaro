if(!self.define){let e,a={};const s=(s,n)=>(s=new URL(s+".js",n).href,a[s]||new Promise((a=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=a,document.head.appendChild(e)}else e=s,importScripts(s),a()})).then((()=>{let e=a[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(n,i)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(a[c])return;let o={};const r=e=>s(e,c),t={module:{uri:c},exports:o,require:r};a[c]=Promise.all(n.map((e=>t[e]||r(e)))).then((e=>(i(...e),o)))}}define(["./workbox-81180080"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/RAn78SNlJRKbycYWlkYC8/_buildManifest.js",revision:"da53f4ef383b576c6d4587ac94243673"},{url:"/_next/static/RAn78SNlJRKbycYWlkYC8/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/198-8ad925d2f1d4a628.js",revision:"8ad925d2f1d4a628"},{url:"/_next/static/chunks/20-d9f1706e3abf9ae6.js",revision:"d9f1706e3abf9ae6"},{url:"/_next/static/chunks/503-4da022addac97e90.js",revision:"4da022addac97e90"},{url:"/_next/static/chunks/727-7fa489dbcc72e900.js",revision:"7fa489dbcc72e900"},{url:"/_next/static/chunks/75fc9c18-e61c2e0d9c9a0957.js",revision:"e61c2e0d9c9a0957"},{url:"/_next/static/chunks/853-92b09ce3bd752754.js",revision:"92b09ce3bd752754"},{url:"/_next/static/chunks/framework-4556c45dd113b893.js",revision:"4556c45dd113b893"},{url:"/_next/static/chunks/main-b882e00e6d39c1af.js",revision:"b882e00e6d39c1af"},{url:"/_next/static/chunks/pages/%5Bslug%5D-08bf900d547ca02e.js",revision:"08bf900d547ca02e"},{url:"/_next/static/chunks/pages/404-f02505d3f4c5751d.js",revision:"f02505d3f4c5751d"},{url:"/_next/static/chunks/pages/_app-496cb7bfaa26f95a.js",revision:"496cb7bfaa26f95a"},{url:"/_next/static/chunks/pages/_error-a4ba2246ff8fb532.js",revision:"a4ba2246ff8fb532"},{url:"/_next/static/chunks/pages/account-3fcdd3ec0b20f4e3.js",revision:"3fcdd3ec0b20f4e3"},{url:"/_next/static/chunks/pages/components/loader-199d6888abdedb39.js",revision:"199d6888abdedb39"},{url:"/_next/static/chunks/pages/history-40c6e012441b3f2a.js",revision:"40c6e012441b3f2a"},{url:"/_next/static/chunks/pages/index-2846dd09c674425b.js",revision:"2846dd09c674425b"},{url:"/_next/static/chunks/pages/isr-test-d4454d437014b7b3.js",revision:"d4454d437014b7b3"},{url:"/_next/static/chunks/pages/waiting-bbdf77100ddd71a2.js",revision:"bbdf77100ddd71a2"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-eeb1e4a6befe36e1.js",revision:"eeb1e4a6befe36e1"},{url:"/_next/static/css/21d0dd935eec6044.css",revision:"21d0dd935eec6044"},{url:"/favicon.ico",revision:"c30c7d42707a47a3f4591831641e50dc"},{url:"/favicons/android-icon-144x144.png",revision:"d7a4b5dc352ba44bbb5dd7a7a10e4a5f"},{url:"/favicons/android-icon-192x192.png",revision:"cce630845849c457e5ea03ce3f534041"},{url:"/favicons/android-icon-36x36.png",revision:"aec2d6cb6c3af2d7b18a8e764aafc3f5"},{url:"/favicons/android-icon-48x48.png",revision:"96ee2d769498c0e1cbc3b8ab0b017a81"},{url:"/favicons/android-icon-72x72.png",revision:"18b3781a00aa04b32e41bdc3e0d686e5"},{url:"/favicons/android-icon-96x96.png",revision:"d8b77665c0a43eebcc6d9156d4e81c26"},{url:"/favicons/apple-icon-114x114.png",revision:"a1e55018168604fdd27d0c1228f48199"},{url:"/favicons/apple-icon-120x120.png",revision:"391cff714c6567fa2e885d25e9d288e9"},{url:"/favicons/apple-icon-144x144.png",revision:"d7a4b5dc352ba44bbb5dd7a7a10e4a5f"},{url:"/favicons/apple-icon-152x152.png",revision:"a64744f6fad208ea56bc2657dd9b3aee"},{url:"/favicons/apple-icon-180x180.png",revision:"9c6f5a71ef9573057ac6a88b6430099a"},{url:"/favicons/apple-icon-57x57.png",revision:"a3f21534adc7071a4598452b8991ecc4"},{url:"/favicons/apple-icon-60x60.png",revision:"6c963a289beeaeb5d7f43ef025378d4f"},{url:"/favicons/apple-icon-72x72.png",revision:"18b3781a00aa04b32e41bdc3e0d686e5"},{url:"/favicons/apple-icon-76x76.png",revision:"8d1cd9c0e6a29dce1dc083db07a73349"},{url:"/favicons/apple-icon-precomposed.png",revision:"8716a445fb0e7c64e32844028708aaf2"},{url:"/favicons/apple-icon.png",revision:"8716a445fb0e7c64e32844028708aaf2"},{url:"/favicons/browserconfig.xml",revision:"653d077300a12f09a69caeea7a8947f8"},{url:"/favicons/favicon-16x16.png",revision:"3b07642f2afe9da8a3b76ef2e256b170"},{url:"/favicons/favicon-32x32.png",revision:"b2b7a0976a0b1fedb33b74a42831a8a8"},{url:"/favicons/favicon-96x96.png",revision:"48a43bdda01789ec2d6be83afb421e3d"},{url:"/favicons/favicon.ico",revision:"72f8812354ab8610fb631999c463f6cd"},{url:"/favicons/manifest.json",revision:"b58fcfa7628c9205cb11a1b2c3e8f99a"},{url:"/favicons/ms-icon-144x144.png",revision:"d7a4b5dc352ba44bbb5dd7a7a10e4a5f"},{url:"/favicons/ms-icon-150x150.png",revision:"6cd8ad81d5af5b2b9b14ef5667b7d6e5"},{url:"/favicons/ms-icon-310x310.png",revision:"7eea6b875680cc82a3ac4c9c2af1e25e"},{url:"/favicons/ms-icon-70x70.png",revision:"b88a54853bf163eba010cf429f819435"},{url:"/generated/products.json",revision:"89f8dd374421051cc9f3e08f3fc78cae"},{url:"/icons/social-facebook.svg",revision:"4a2202fd3ced49b3d050fa14d6c874e7"},{url:"/icons/social-instagram.svg",revision:"dc2d2cf77f9d3421075a96ee59314706"},{url:"/icons/social-tiktok.svg",revision:"c247b5894d68ee2040eb914271705c35"},{url:"/icons/social-whatsapp.svg",revision:"e045f55d9eb0475df692d2ab46e25672"},{url:"/icons/social-youtube.svg",revision:"8d2e5f9f657e3d00536849fa70b3640a"},{url:"/images/banner-home.png",revision:"67850891a28d67ef8077d9cea691273e"},{url:"/images/banner-slug-1.png",revision:"8dc75cb61efaac974af9060a20facf8f"},{url:"/images/logo-transparent-footer.png",revision:"6bbb03ce2480d51ac1ba90375f26e1e6"},{url:"/images/logo-transparent.png",revision:"cb09983ca0a837ea809f5d976c5951dc"},{url:"/images/maybank-3043.png",revision:"9d306cf079e139af208cb1672691f620"},{url:"/images/obabastore-logo-black.png",revision:"ef4ae1fb82d1bccf50d1a2f3c000bab0"},{url:"/images/obabastore-logo-transparent.png",revision:"9a813e049dcb157c3edb2c37b30e0505"},{url:"/images/obabastore-logo-white.png",revision:"c52d614ae8e47995f0d0109db94fe2bb"},{url:"/images/obabastore-logo.png",revision:"54a2fbdbd96fe623e2ba026c648f00c2"},{url:"/images/sampoerna-c2f1.png",revision:"ac73f032418fea5aef853fd6d99feeb1"},{url:"/manifest.json",revision:"06b4a66532ee2129576d7f8c59c56220"},{url:"/robots.txt",revision:"cc82fea14a75a25eedc657dcbf93163e"},{url:"/sitemap-0.xml",revision:"0e7656c37ef7010e441aaef93b85afd5"},{url:"/sitemap.xml",revision:"d6bf0336c97af28283652fe889e5af61"},{url:"/vercel.svg",revision:"26bf2d0adaf1028a4d4c6ee77005e819"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:a,event:s,state:n})=>a&&"opaqueredirect"===a.type?new Response(a.body,{status:200,statusText:"OK",headers:a.headers}):a}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:20,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:20,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.CacheFirst({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:100,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.CacheFirst({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.CacheFirst({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:100,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:100,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{const{pathname:a}=e;return a.startsWith("/api/anime")}),new e.CacheFirst({cacheName:"anime-api",plugins:[new e.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:604800})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const{pathname:a}=e;return!a.startsWith("/api/auth/")&&!!a.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:50,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const{pathname:a}=e;return!a.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:50,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:50,maxAgeSeconds:3600})]}),"GET")}));