(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[715],{262:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/download",function(){return t(163)}])},5813:function(e,n){"use strict";n.Z={src:"/_next/static/media/logo.9fc5c374.png",height:1e3,width:1e3,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA+klEQVR42h3Kv0rDUBQH4N+5uTFRTHWQkiGLD+DsE6hBJd19AIuToFj8two+h4Obg60Uig/gorh0c1IQi4ZcorVoknOuttO3fAQAp/E9jYL5ExJOIAwr0qHcnAEQ2m2NyBt8dG3FMSwDIgAzCNLznc917byZo+ydYjAV1RdpVIDrUfXvWhDWjrXj6WRly0c6KPVqI1CKLHpXmV4IFR5uh4kyKcGf0Wju1+E4CiCF7VaE6VkX2Qusnqvr685lsfx4l/Jzv4QtGYtLxK/9QtUit00AcLBjbn6+ecObEkAYv0OG70s3v3janIS9Zg5FfCilNMZBQdomCs8B2D9xcGuDxn2zJAAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:8}},3877:function(e,n,t){"use strict";var i=t(1527);t(959);var l=t(3838),r=t.n(l);n.Z=e=>{let n=r().base;e.cta&&(n=r().cta),e.cta2&&(n=r().ctaSecondary),e.square&&(n+=" ".concat(r().square)),e.size&&(n+=" ".concat(r()[e.size])),e.icon&&(n+=" ".concat(r().icon));let t=(0,i.jsxs)(i.Fragment,{children:[e.prefix?(0,i.jsx)("div",{className:r().prefix,children:e.prefix}):(0,i.jsx)(i.Fragment,{}),(0,i.jsx)("div",{children:e.children})]});return e.asDiv?(0,i.jsx)("div",{className:n,"aria-label":e["aria-label"],children:t}):(0,i.jsx)("button",{className:n,onClick:e.onClick,"aria-label":e["aria-label"],children:t})}},8218:function(e,n,t){"use strict";var i=t(1527);t(959);var l=t(3877),r=t(9783),a=t(7325),s=t(936),c=t.n(s),o=t(4443);let d=[{key:"github",name:"GitHub",link:"https://github.com/ferdium/ferdium-app",icon:a.LcO},{key:"discord",name:"Discord",link:"https://discord.gg/jVv4Qns8pP",icon:a.Vrx},{key:"reddit",name:"Reddit",link:"https://www.reddit.com/r/ferdium",icon:a.J1f},{key:"twitter",name:"Twitter",link:"https://twitter.com/ferdiumteam",icon:a.SGh}];n.Z=e=>e.icons?(0,i.jsx)("div",{className:c().links,children:(0,i.jsx)(i.Fragment,{children:e.services.map(e=>{let n=d.find(n=>n.key===e);return n?(0,i.jsx)(o.Z,{href:n.link,"aria-label":"".concat(n.name," link"),neutral:!0,children:(0,i.jsx)(r.Z,{size:1,icon:n.icon})},e):(0,i.jsx)(i.Fragment,{})})})}):(0,i.jsx)("div",{className:c().links,children:(0,i.jsx)(i.Fragment,{children:e.services.map(e=>{let n=d.find(n=>n.key===e);return n?(0,i.jsx)(o.Z,{href:n.link,neutral:!0,children:(0,i.jsx)(l.Z,{asDiv:!0,prefix:(0,i.jsx)(r.Z,{icon:n.icon,size:1}),children:n.name})},e):(0,i.jsx)(i.Fragment,{})})})})},4443:function(e,n,t){"use strict";var i=t(1527);t(959);var l=t(9699),r=t.n(l);n.Z=e=>(0,i.jsx)("a",{href:e.href,target:"_blank",rel:"noreferrer noopener","aria-label":e["aria-label"],className:e.neutral?r().neutral:"",children:e.children})},2501:function(e,n,t){"use strict";var i=t(1527),l=t(5561),r=t.n(l);t(959),n.Z=e=>(0,i.jsxs)(r(),{children:[(0,i.jsx)("title",{children:e.title||"Ferdium | The home for all your services"}),(0,i.jsx)("meta",{name:"description",content:"Introducing a great productivity tool to keep all messaging, productivity, and online services in one place"})]})},9783:function(e,n,t){"use strict";var i=t(1527);t(959);var l=t(880),r=t.n(l);n.Z=e=>(0,i.jsx)("div",{style:{display:"flex",justifyContent:"center",alignContent:"center"},children:(0,i.jsx)(r(),{size:e.size,path:e.icon,style:{margin:"auto"},color:e.color})})},2161:function(e,n,t){"use strict";t.d(n,{Z:function(){return k}});var i=t(1527),l=t(959),r=t(7325),a=t(3868),s=t.n(a),c=t(3877),o=t(8218),d=t(9783),u=t(2956),m=e=>{function n(e){e?(localStorage.setItem("theme","dark"),document.documentElement.setAttribute("data-theme","dark")):(localStorage.setItem("theme","light"),document.documentElement.setAttribute("data-theme","light"))}return(0,l.useEffect)(()=>{document.documentElement.getAttribute("data-theme")&&n("dark"===document.documentElement.getAttribute("data-theme"))},[]),(0,i.jsxs)("footer",{id:s().footer,children:[(0,i.jsx)("div",{className:s().links,children:(0,i.jsx)(o.Z,{services:["discord","github","reddit","twitter"],icons:!0})}),(0,i.jsxs)("div",{className:s().legal,children:[(0,i.jsx)(u.Z,{href:"/terms-of-service",children:"Terms of Service"}),(0,i.jsx)("div",{children:"\xa0&\xa0"}),(0,i.jsx)(u.Z,{href:"/privacy-policy",children:"Privacy Policy"})]}),(0,i.jsx)("div",{className:s().darkmode,children:(0,i.jsx)(c.Z,{onClick:()=>n("dark"!==document.documentElement.getAttribute("data-theme")),icon:!0,"aria-label":"Switch theme",children:(0,i.jsx)(d.Z,{size:1,icon:r.xEd})})})]})},h=t(9913),x=t.n(h),f=t(5813),p=t(9478),_=e=>(0,i.jsx)("header",{id:x().header,children:(0,i.jsxs)("nav",{id:x().nav,children:[(0,i.jsx)(u.Z,{href:"/","aria-label":"Home link",children:(0,i.jsx)("div",{children:(0,i.jsx)(p.Z,{id:x().logo,src:f.Z,alt:"",width:46,height:46})})}),(0,i.jsxs)("div",{className:x().links,children:[(0,i.jsx)(u.Z,{href:"/faq",neutral:!0,children:"FAQ"}),(0,i.jsx)(u.Z,{href:"/download",children:(0,i.jsx)(c.Z,{cta:!0,asDiv:!0,size:"large",children:"Get Ferdium"})})]})]})}),g=t(923),j=t.n(g),k=e=>(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(_,{}),(0,i.jsx)("main",{id:j().main,children:e.children}),(0,i.jsx)(m,{})]})},2956:function(e,n,t){"use strict";var i=t(1527),l=t(3525),r=t.n(l);t(959);var a=t(9930),s=t.n(a);n.Z=e=>(0,i.jsx)(r(),{href:e.href,"aria-label":e["aria-label"],className:e.neutral?s().neutral:void 0,children:e.children})},9478:function(e,n,t){"use strict";t.d(n,{Z:function(){return s}});var i=t(1527),l=t(6826),r=t.n(l);let a=e=>{let{src:n}=e;return n};function s(e){return(0,i.jsx)(r(),{...e,loader:a,unoptimized:!e.width&&!e.height})}},3405:function(e,n,t){"use strict";var i=t(1527);t(959);var l=t(828),r=t.n(l);n.Z=e=>{let n=[r().content,e.className];return e.wide&&n.push(r().wide),(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)("section",{className:r().section,children:[e.brand&&(0,i.jsx)("div",{className:r().brand}),(0,i.jsx)("div",{style:{flexDirection:e.row?"row":"column"},className:n.join(" "),children:e.children})]})})}},163:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return T}});var i=t(1527),l=t(959),r=t(7325),a=t(696),s=t.n(a),c=t(3877),o=t(9783),d=e=>{let[n,t]=(0,l.useState)(!1);return(0,l.useEffect)(()=>{n&&setTimeout(()=>{t(!1)},2e3)},[n]),(0,i.jsxs)("div",{className:s().codeblock,children:[(0,i.jsx)("code",{className:s().code,children:e.code}),(0,i.jsx)(c.Z,{icon:!0,onClick:()=>{if(!navigator.clipboard){let n=document.createElement("textarea");n.innerHTML=e.code,n.select(),document.execCommand("copy"),document.removeChild(n),t(!0);return}navigator.clipboard.writeText(e.code).then(()=>{t(!0)}).catch(e=>{console.error("Something went wrong when copying to clipboard",e)})},children:n?(0,i.jsx)("div",{className:s().check,children:(0,i.jsx)(o.Z,{icon:r.k6A,size:1})}):(0,i.jsx)(o.Z,{icon:r.a0Z,size:1})})]})},u=t(3479),m=t.n(u),h=e=>(0,i.jsxs)("article",{className:m().codeblocksection,children:[(0,i.jsx)("h3",{children:e.title}),(0,i.jsx)(d,{code:e.text})]}),x=t(2501),f=t(2161),p=t(3405),_=t(837),g=t.n(_),j=t(3461),k=t.n(j),v=t(4443),b=e=>(0,i.jsx)("article",{className:k().section,children:(0,i.jsx)("div",{className:k().links+" ".concat(e.gridTemplate?k()[e.gridTemplate]:""),style:e.grid?{display:"grid"}:void 0,children:e.downloadTypes.map((n,t)=>{var l,r,a,s;let o;return n.link&&(o=(0,i.jsx)("div",{className:k().link,children:(0,i.jsx)(v.Z,{href:null!==(r=n.link.browser_download_url)&&void 0!==r?r:"",children:(0,i.jsx)(c.Z,{cta2:!0,square:!0,children:n.link.name})})})),n.multipleLinks&&(o=n.multipleLinks.map(e=>(0,i.jsx)("div",{className:k().link,children:(0,i.jsx)(v.Z,{href:null!==(a=e.browser_download_url)&&void 0!==a?a:"",children:(0,i.jsx)(c.Z,{cta2:!0,square:!0,children:e.name})})},e.name))),(0,i.jsxs)("section",{style:{gridArea:null!==(s=null===(l=e.gridTemplateArray)||void 0===l?void 0:l[t])&&void 0!==s?s:"0"},children:[(0,i.jsx)("h3",{children:n.title}),(0,i.jsx)("div",{className:k().content,children:o})]},n.title)})})}),w=t(614),y=t.n(w);let A=e=>(0,i.jsx)("button",{className:y().tab+" ".concat(e.selected?y().selected:""),onClick:()=>e.onClick(),children:e.option.title});var Z=e=>{var n;let[t,r]=(0,l.useState)(),a=null!==(n=e.value)&&void 0!==n?n:null==t?void 0:t.key;return(0,i.jsx)("div",{className:y().tabs,children:e.options.map(n=>(0,i.jsx)(A,{option:n,selected:n.key===a,onClick:()=>{r(n),e.onClick&&e.onClick(n.key)}},n.key))})},S=t(3465),N=t.n(S),D=()=>(0,i.jsxs)("div",{className:N()["lds-ring"],children:[(0,i.jsx)("div",{}),(0,i.jsx)("div",{}),(0,i.jsx)("div",{}),(0,i.jsx)("div",{})]}),F=t(3525),E=t.n(F),C=t(3679);let L=new C.v;var T=e=>{let n;let[t,r]=(0,l.useState)([]),[a,s]=(0,l.useState)(),[o,d]=(0,l.useState)(),[u,m]=(0,l.useState)(!1),[_,j]=(0,l.useState)(!1);(0,l.useEffect)(()=>{w()},[]);let k=async function(){var e;let n,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,i=JSON.parse(null!==(e=localStorage.getItem("cachedRelease"))&&void 0!==e?e:"{}");if(i.cacheExpires&&parseInt(i.cacheExpires)>new Date().getTime())return i.release;try{n=await L.rest.repos.listReleases({owner:"ferdium",repo:"ferdium-app",page:t})}catch(e){j(!0);return}let l=n.data.find(e=>e&&!e.draft&&!e.prerelease);return l?(localStorage.setItem("cachedRelease",JSON.stringify({cacheExpires:new Date().getTime()+6e5,release:l})),l):await k(t+1)},w=async()=>{var e;if(u)return;m(!0);let n=await k();if(!n){j(!0),m(!1);return}let t=n.assets.map(e=>(e.name=e.name.replace(/Ferdium-(linux|mac|win)-/gm,"").replace(n.name,"").replace(/[-]/g," ").replace(/[.]/g," ").replace("  "," ").trim(),e)).filter(e=>!e.name.includes("yml")&&!e.name.includes("blockmap")),i=(null===(e=navigator.userAgent.match(/Mac|Win|Linux/g))||void 0===e?void 0:e[0].toLowerCase())||"win";switch(!0){case i.includes("linux"):s("linux"),d(t.find(e=>e.name.includes("AppImage")));break;case i.includes("mac"):s("mac"),d(t.find(e=>e.name.includes("dmg")&&e.name.includes("x64")));break;case i.includes("win"):s("win"),d(t.find(e=>e.name.includes("exe")&&!e.name.includes("x64")&&!e.name.includes("ia32")&&!e.name.includes("arm64")))}r(t),m(!1)};switch(a){case"linux":n=(0,i.jsx)(b,{grid:!0,gridTemplate:"linux",gridTemplateArray:["deb","rpm","appimage","freebsd","tar"],downloadTypes:[{title:"DEB",multipleLinks:t.filter(e=>e.name.includes("deb"))},{title:"RPM",link:{...t.find(e=>e.name.includes("rpm"))}},{title:"AppImage",link:{...t.find(e=>e.name.includes("AppImage"))}},{title:"FreeBSD",link:{...t.find(e=>e.name.includes("freebsd"))}},{title:"Tar",link:{...t.find(e=>e.name.includes("tar"))}}]});break;case"win":n=(0,i.jsx)(b,{downloadTypes:[{title:"Installer",multipleLinks:t.filter(e=>e.name.includes("exe")&&!e.name.includes("Portable")).reverse()},{title:"Portable Installer",multipleLinks:t.filter(e=>e.name.includes("exe")&&e.name.includes("Portable")).reverse()}]});break;case"mac":n=(0,i.jsx)(b,{downloadTypes:[{title:"Installer",multipleLinks:t.filter(e=>e.name.includes("dmg"))},{title:"Bundle",multipleLinks:t.filter(e=>e.name.includes("bundle"))}]});break;default:n=(0,i.jsx)(i.Fragment,{})}return(0,i.jsxs)(f.Z,{children:[(0,i.jsx)(x.Z,{title:"Ferdium | Download"}),_&&(0,i.jsxs)(p.Z,{children:[(0,i.jsx)("h1",{children:"Download"}),(0,i.jsxs)("div",{className:g().copy,children:[(0,i.jsxs)("p",{children:["Something went wrong when getting the links to the latest Ferdium release. Try again later or follow the link below to download the latest nightly release of Ferdium from our GitHub Releases."," "]}),(0,i.jsxs)("p",{children:['Once there click "Assets" and choose the version for your platform (check the',(0,i.jsx)(E(),{href:"/faq",children:" FAQ "})," if you are unsure which one to get)! We currently have releases for macOS, Windows, Linux (AppImage and DEB) and FreeBSD."]})]}),(0,i.jsx)(v.Z,{href:"https://github.com/ferdium/ferdium-app/releases/latest",children:(0,i.jsx)(c.Z,{cta:!0,size:"huge",children:"Download from GitHub"})})]}),!_&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(p.Z,{children:[(0,i.jsx)("h1",{children:"Download"}),(0,i.jsx)("p",{className:g().copy,children:"Find the installer for your OS below to install Ferdium!"}),!o||u?(0,i.jsx)(D,{}):(0,i.jsx)(v.Z,{href:null==o?void 0:o.browser_download_url,children:(0,i.jsx)(c.Z,{cta:!0,size:"huge",children:"Download"})}),(0,i.jsx)("p",{style:{fontSize:"0.5rem"},children:null==o?void 0:o.name})]}),t&&t.length>0&&!u&&(0,i.jsxs)(p.Z,{children:[(0,i.jsx)("h2",{children:"Alternative Downloads"}),(0,i.jsx)(Z,{options:[{title:"Linux",key:"linux"},{title:"Windows",key:"win"},{title:"Mac",key:"mac"}],onClick:e=>s(e),value:a}),n]})]}),(0,i.jsxs)(p.Z,{children:[(0,i.jsx)("h2",{children:"Using your OS's package manager"}),(0,i.jsx)("p",{className:g().copy,children:"Alternatively, you can use the package manager of your OS to install Ferdium. Use one of the CLI commands below depending on your OS to install the latest binary release of Ferdium. Some package managers (like AUR) also allow you to build the source release yourself."}),(0,i.jsx)(h,{title:"AUR (Arch Linux and derivatives)",text:"yay -S ferdium-bin\n// or, to compile yourself\nyay -S ferdium"}),(0,i.jsx)(h,{title:"Flatpak",text:"flatpak install flathub org.ferdium.Ferdium"}),(0,i.jsx)(h,{title:"Homebrew (macOS)",text:"brew tap ferdium/ferdium\n# to install the last stable release:\nbrew install ferdium\n# or for Beta pre-releases:\nbrew install ferdium-beta\n# or for nightly pre-releases:\nbrew install ferdium-nightly"}),(0,i.jsx)(h,{title:"Scoop (Windows)",text:"scoop bucket add versions\n# to install the last nightly pre-releases:\nscoop install ferdium-nightly"}),(0,i.jsx)(h,{title:"Chocolatey (Windows)",text:"# to install the last stable release:\nchoco install ferdium \n# or for beta pre-releases (when available):\nchoco install ferdium --pre"}),(0,i.jsx)(h,{title:"Winget (Windows)",text:"# to install the last stable release:\nwinget install ferdium\n# or for Beta pre-releases:\nwinget install ferdium-beta\n# or for nightly pre-releases:\nwinget install ferdium-nightly"}),(0,i.jsx)(h,{title:"Snap (Ubuntu linux and derivatives)",text:"snap install --edge ferdium\nsnap connect ferdium:camera\nsnap connect ferdium:audio-record"})]})]})}},3838:function(e){e.exports={ctaSecondary:"Button_ctaSecondary__ncnmd",cta:"Button_cta___4KTX",base:"Button_base__7_tCN",large:"Button_large__chkvi",huge:"Button_huge__cFxyv",icon:"Button_icon__71oEZ",prefix:"Button_prefix__kkXiw",square:"Button_square__4QPYs"}},696:function(e){e.exports={codeblock:"CodeBlock_codeblock__U3Fsg",code:"CodeBlock_code__fwv48",check:"CodeBlock_check__2CsyZ"}},3479:function(e){e.exports={codeblocksection:"CodeBlockSection_codeblocksection__cMU5e"}},936:function(e){e.exports={links:"CommunityLinks_links___6PtI"}},9699:function(e){e.exports={neutral:"ExternalLink_neutral__GSVpj"}},3868:function(e){e.exports={footer:"Footer_footer__lD3vi",links:"Footer_links__C0oRR",legal:"Footer_legal__3uAQy",darkmode:"Footer_darkmode__rij5T"}},9913:function(e){e.exports={header:"Header_header__nSemd",links:"Header_links__6NhQ_",nav:"Header_nav__Fn39o",logo:"Header_logo__m4H7B"}},923:function(){},9930:function(e){e.exports={neutral:"Link_neutral__2yL07"}},3465:function(e){e.exports={"lds-ring":"Loader_lds-ring__D2AVq"}},3461:function(e){e.exports={platformLogo:"PlatformDownloads_platformLogo__Dhu_G",section:"PlatformDownloads_section__ikKJw",links:"PlatformDownloads_links__D9R5Y",link:"PlatformDownloads_link__ko7Vj",linux:"PlatformDownloads_linux__3nUmQ",content:"PlatformDownloads_content__64DP0"}},828:function(e){e.exports={section:"Section_section__Eq0Zc",brand:"Section_brand__W0fM9",content:"Section_content__btQE_",wide:"Section_wide__jb0oQ"}},614:function(e){e.exports={tabs:"Tabs_tabs__FUDDp",tab:"Tabs_tab__950jw",selected:"Tabs_selected__g6TI3"}},837:function(e){e.exports={copy:"Download_copy__34rB8"}}},function(e){e.O(0,[928,580,194,774,888,179],function(){return e(e.s=262)}),_N_E=e.O()}]);