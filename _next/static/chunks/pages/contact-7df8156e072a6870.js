(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[335],{1958:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/contact",function(){return n(3027)}])},9526:function(e,t){"use strict";t.Z={src:"/_next/static/media/logo.9fc5c374.png",height:1e3,width:1e3,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA+klEQVR42h3Kv0rDUBQH4N+5uTFRTHWQkiGLD+DsE6hBJd19AIuToFj8two+h4Obg60Uig/gorh0c1IQi4ZcorVoknOuttO3fAQAp/E9jYL5ExJOIAwr0qHcnAEQ2m2NyBt8dG3FMSwDIgAzCNLznc917byZo+ydYjAV1RdpVIDrUfXvWhDWjrXj6WRly0c6KPVqI1CKLHpXmV4IFR5uh4kyKcGf0Wju1+E4CiCF7VaE6VkX2Qusnqvr685lsfx4l/Jzv4QtGYtLxK/9QtUit00AcLBjbn6+ecObEkAYv0OG70s3v3janIS9Zg5FfCilNMZBQdomCs8B2D9xcGuDxn2zJAAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:8}},3367:function(e,t,n){"use strict";var i=n(1527);n(959);var r=n(3145),s=n.n(r);t.Z=e=>{let t=s().base;e.cta&&(t=s().cta),e.cta2&&(t=s().ctaSecondary),e.square&&(t+=" ".concat(s().square)),e.size&&(t+=" ".concat(s()[e.size])),e.icon&&(t+=" ".concat(s().icon));let n=(0,i.jsxs)(i.Fragment,{children:[e.prefix?(0,i.jsx)("div",{className:s().prefix,children:e.prefix}):(0,i.jsx)(i.Fragment,{}),(0,i.jsx)("div",{children:e.children})]});return e.asDiv?(0,i.jsx)("div",{className:t,"aria-label":e["aria-label"],children:n}):(0,i.jsx)("button",{className:t,onClick:e.onClick,"aria-label":e["aria-label"],children:n})}},6269:function(e,t,n){"use strict";var i=n(1527);n(959);var r=n(3367),s=n(7099),a=n(7325),o=n(5605),c=n.n(o),l=n(1297);let d=[{key:"github",name:"GitHub",link:"https://github.com/ferdium/ferdium-app",icon:a.LcO},{key:"discord",name:"Discord",link:"https://discord.gg/jVv4Qns8pP",icon:a.Vrx},{key:"reddit",name:"Reddit",link:"https://www.reddit.com/r/ferdium",icon:a.J1f},{key:"twitter",name:"Twitter",link:"https://twitter.com/ferdiumteam",icon:a.SGh}];t.Z=e=>e.icons?(0,i.jsx)("div",{className:c().links,children:(0,i.jsx)(i.Fragment,{children:e.services.map(e=>{let t=d.find(t=>t.key===e);return t?(0,i.jsx)(l.Z,{href:t.link,"aria-label":"".concat(t.name," link"),neutral:!0,children:(0,i.jsx)(s.Z,{size:1,icon:t.icon})},e):(0,i.jsx)(i.Fragment,{})})})}):(0,i.jsx)("div",{className:c().links,children:(0,i.jsx)(i.Fragment,{children:e.services.map(e=>{let t=d.find(t=>t.key===e);return t?(0,i.jsx)(l.Z,{href:t.link,neutral:!0,children:(0,i.jsx)(r.Z,{asDiv:!0,prefix:(0,i.jsx)(s.Z,{icon:t.icon,size:1}),children:t.name})},e):(0,i.jsx)(i.Fragment,{})})})})},1297:function(e,t,n){"use strict";var i=n(1527);n(959);var r=n(2602),s=n.n(r);t.Z=e=>(0,i.jsx)("a",{href:e.href,target:"_blank",rel:"noreferrer noopener","aria-label":e["aria-label"],className:e.neutral?s().neutral:"",children:e.children})},3075:function(e,t,n){"use strict";var i=n(1527),r=n(2507),s=n.n(r);n(959),t.Z=e=>(0,i.jsxs)(s(),{children:[(0,i.jsx)("title",{children:e.title||"Ferdium | The home for all your services"}),(0,i.jsx)("meta",{name:"description",content:"Introducing a great productivity tool to keep all messaging, productivity, and online services in one place"})]})},7099:function(e,t,n){"use strict";var i=n(1527);n(959);var r=n(6882),s=n.n(r);t.Z=e=>(0,i.jsx)("div",{style:{display:"flex",justifyContent:"center",alignContent:"center"},children:(0,i.jsx)(s(),{size:e.size,path:e.icon,style:{margin:"auto"},color:e.color})})},5689:function(e,t,n){"use strict";n.d(t,{Z:function(){return components_Layout}});var i=n(1527),r=n(959),s=n(7325),a=n(7810),o=n.n(a),c=n(3367),l=n(6269),d=n(7099),u=n(7248),components_Footer=e=>{function switchTheme(e){e?(localStorage.setItem("theme","dark"),document.documentElement.setAttribute("data-theme","dark")):(localStorage.setItem("theme","light"),document.documentElement.setAttribute("data-theme","light"))}return(0,r.useEffect)(()=>{document.documentElement.getAttribute("data-theme")&&switchTheme("dark"===document.documentElement.getAttribute("data-theme"))},[]),(0,i.jsxs)("footer",{id:o().footer,children:[(0,i.jsx)("div",{className:o().links,children:(0,i.jsx)(l.Z,{services:["discord","github","reddit","twitter"],icons:!0})}),(0,i.jsxs)("div",{className:o().legal,children:[(0,i.jsx)(u.Z,{href:"/terms-of-service",children:"Terms of Service"}),(0,i.jsx)("div",{children:"\xa0&\xa0"}),(0,i.jsx)(u.Z,{href:"/privacy-policy",children:"Privacy Policy"})]}),(0,i.jsx)("div",{className:o().darkmode,children:(0,i.jsx)(c.Z,{onClick:()=>switchTheme("dark"!==document.documentElement.getAttribute("data-theme")),icon:!0,"aria-label":"Switch theme",children:(0,i.jsx)(d.Z,{size:1,icon:s.xEd})})})]})},h=n(5675),m=n.n(h),f=n(9526),x=n(9829),components_Header=e=>(0,i.jsx)("header",{id:m().header,children:(0,i.jsxs)("nav",{id:m().nav,children:[(0,i.jsx)(u.Z,{href:"/","aria-label":"Home link",children:(0,i.jsx)("div",{children:(0,i.jsx)(x.Z,{id:m().logo,src:f.Z,alt:"",width:46,height:46})})}),(0,i.jsxs)("div",{className:m().links,children:[(0,i.jsx)(u.Z,{href:"/faq",neutral:!0,children:"FAQ"}),(0,i.jsx)(u.Z,{href:"/download",children:(0,i.jsx)(c.Z,{cta:!0,asDiv:!0,size:"large",children:"Get Ferdium"})})]})]})}),_=n(3260),p=n.n(_),components_Layout=e=>(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(components_Header,{}),(0,i.jsx)("main",{id:p().main,children:e.children}),(0,i.jsx)(components_Footer,{})]})},7248:function(e,t,n){"use strict";var i=n(1527),r=n(4320),s=n.n(r);n(959);var a=n(5873),o=n.n(a);t.Z=e=>(0,i.jsx)(s(),{href:e.href,"aria-label":e["aria-label"],className:e.neutral?o().neutral:void 0,children:e.children})},9829:function(e,t,n){"use strict";n.d(t,{Z:function(){return NonOptimizedImage}});var i=n(1527),r=n(2186),s=n.n(r);let customLoader=e=>{let{src:t}=e;return t};function NonOptimizedImage(e){return(0,i.jsx)(s(),{...e,loader:customLoader,unoptimized:!e.width&&!e.height})}},3292:function(e,t,n){"use strict";var i=n(1527);n(959);var r=n(8307),s=n.n(r);t.Z=e=>{let t=[s().content,e.className];return e.wide&&t.push(s().wide),(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)("section",{className:s().section,children:[e.brand&&(0,i.jsx)("div",{className:s().brand}),(0,i.jsx)("div",{style:{flexDirection:e.row?"row":"column"},className:t.join(" "),children:e.children})]})})}},3027:function(e,t,n){"use strict";n.r(t);var i=n(1527),r=n(3075),s=n(5689),a=n(3292);n(959),t.default=e=>(0,i.jsxs)(s.Z,{children:[(0,i.jsx)(r.Z,{title:"Ferdium | Contact and support"}),(0,i.jsx)(a.Z,{children:(0,i.jsxs)("div",{children:[(0,i.jsx)("div",{children:(0,i.jsx)("h1",{children:"Contact and support"})}),(0,i.jsx)("h3",{children:(0,i.jsx)("strong",{children:"Having issues with Ferdium? We can help you out!"})}),(0,i.jsxs)("p",{children:["Ferdium, like any open source project, is maintained by a bunch of volunteers. If you are having some issues with the software, you can always try to contact the team. The easiest way to do this, is by"," ",(0,i.jsx)("a",{href:"https://discord.com/invite/jVv4Qns8pP",children:"joining our Discord server"}),"."]}),(0,i.jsxs)("p",{children:["If you have found a bug in the Ferdium application itself, or have an idea for a possible improvement, open an issue on the"," ",(0,i.jsx)("a",{href:"https://github.com/ferdium/ferdium-app/issues",children:"GitHub bug tracker"}),". When doing so, be sure to follow the guidelines in the description of the new issue when creating it. In case of any questions, come and chat in"," ",(0,i.jsx)("a",{href:"https://discord.gg/jVv4Qns8pP",children:"Discord"})," and we'll gladly help you."]}),(0,i.jsxs)("p",{children:["If you wish to participate in the Ferdium project, you are always welcome to join. We can use help in the areas of application development, website design and development, or even just people willing to test Ferdium and report issues they've found. You are free to create a"," ",(0,i.jsx)("a",{href:"https://github.com/ferdium/ferdium-app/pulls",children:"pull request on GitHub"})," and we will evaluate it."]})]})})]})},3145:function(e){e.exports={ctaSecondary:"Button_ctaSecondary__ncnmd",cta:"Button_cta___4KTX",base:"Button_base__7_tCN",large:"Button_large__chkvi",huge:"Button_huge__cFxyv",icon:"Button_icon__71oEZ",prefix:"Button_prefix__kkXiw",square:"Button_square__4QPYs"}},5605:function(e){e.exports={links:"CommunityLinks_links___6PtI"}},2602:function(e){e.exports={neutral:"ExternalLink_neutral__GSVpj"}},7810:function(e){e.exports={footer:"Footer_footer__lD3vi",links:"Footer_links__C0oRR",legal:"Footer_legal__3uAQy",darkmode:"Footer_darkmode__rij5T"}},5675:function(e){e.exports={header:"Header_header__nSemd",links:"Header_links__6NhQ_",nav:"Header_nav__Fn39o",logo:"Header_logo__m4H7B"}},3260:function(){},5873:function(e){e.exports={neutral:"Link_neutral__2yL07"}},8307:function(e){e.exports={section:"Section_section__Eq0Zc",brand:"Section_brand__W0fM9",content:"Section_content__btQE_",wide:"Section_wide__jb0oQ"}},2507:function(e,t,n){e.exports=n(8517)}},function(e){e.O(0,[928,471,774,888,179],function(){return e(e.s=1958)}),_N_E=e.O()}]);