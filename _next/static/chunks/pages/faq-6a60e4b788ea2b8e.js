(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[746],{5641:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/faq",function(){return i(5107)}])},5813:function(e,t){"use strict";t.Z={src:"/_next/static/media/logo.9fc5c374.png",height:1e3,width:1e3,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA+klEQVR42h3Kv0rDUBQH4N+5uTFRTHWQkiGLD+DsE6hBJd19AIuToFj8two+h4Obg60Uig/gorh0c1IQi4ZcorVoknOuttO3fAQAp/E9jYL5ExJOIAwr0qHcnAEQ2m2NyBt8dG3FMSwDIgAzCNLznc917byZo+ydYjAV1RdpVIDrUfXvWhDWjrXj6WRly0c6KPVqI1CKLHpXmV4IFR5uh4kyKcGf0Wju1+E4CiCF7VaE6VkX2Qusnqvr685lsfx4l/Jzv4QtGYtLxK/9QtUit00AcLBjbn6+ecObEkAYv0OG70s3v3janIS9Zg5FfCilNMZBQdomCs8B2D9xcGuDxn2zJAAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:8}},3877:function(e,t,i){"use strict";var n=i(1527);i(959);var r=i(3838),a=i.n(r);t.Z=e=>{let t=a().base;e.cta&&(t=a().cta),e.cta2&&(t=a().ctaSecondary),e.square&&(t+=" ".concat(a().square)),e.size&&(t+=" ".concat(a()[e.size])),e.icon&&(t+=" ".concat(a().icon));let i=(0,n.jsxs)(n.Fragment,{children:[e.prefix?(0,n.jsx)("div",{className:a().prefix,children:e.prefix}):(0,n.jsx)(n.Fragment,{}),(0,n.jsx)("div",{children:e.children})]});return e.asDiv?(0,n.jsx)("div",{className:t,"aria-label":e["aria-label"],children:i}):(0,n.jsx)("button",{className:t,onClick:e.onClick,"aria-label":e["aria-label"],children:i})}},8218:function(e,t,i){"use strict";var n=i(1527);i(959);var r=i(3877),a=i(9783),s=i(7325),o=i(936),l=i.n(o),c=i(4443);let d=[{key:"github",name:"GitHub",link:"https://github.com/ferdium/ferdium-app",icon:s.LcO},{key:"discord",name:"Discord",link:"https://discord.gg/jVv4Qns8pP",icon:s.Vrx},{key:"reddit",name:"Reddit",link:"https://www.reddit.com/r/ferdium",icon:s.J1f},{key:"twitter",name:"Twitter",link:"https://twitter.com/ferdiumteam",icon:s.SGh}];t.Z=e=>e.icons?(0,n.jsx)("div",{className:l().links,children:(0,n.jsx)(n.Fragment,{children:e.services.map(e=>{let t=d.find(t=>t.key===e);return t?(0,n.jsx)(c.Z,{href:t.link,"aria-label":"".concat(t.name," link"),neutral:!0,children:(0,n.jsx)(a.Z,{size:1,icon:t.icon})},e):(0,n.jsx)(n.Fragment,{})})})}):(0,n.jsx)("div",{className:l().links,children:(0,n.jsx)(n.Fragment,{children:e.services.map(e=>{let t=d.find(t=>t.key===e);return t?(0,n.jsx)(c.Z,{href:t.link,neutral:!0,children:(0,n.jsx)(r.Z,{asDiv:!0,prefix:(0,n.jsx)(a.Z,{icon:t.icon,size:1}),children:t.name})},e):(0,n.jsx)(n.Fragment,{})})})})},4443:function(e,t,i){"use strict";var n=i(1527);i(959);var r=i(9699),a=i.n(r);t.Z=e=>(0,n.jsx)("a",{href:e.href,target:"_blank",rel:"noreferrer noopener","aria-label":e["aria-label"],className:e.neutral?a().neutral:"",children:e.children})},9783:function(e,t,i){"use strict";var n=i(1527);i(959);var r=i(880),a=i.n(r);t.Z=e=>(0,n.jsx)("div",{style:{display:"flex",justifyContent:"center",alignContent:"center"},children:(0,n.jsx)(a(),{size:e.size,path:e.icon,style:{margin:"auto"},color:e.color})})},2161:function(e,t,i){"use strict";i.d(t,{Z:function(){return j}});var n=i(1527),r=i(959),a=i(7325),s=i(3868),o=i.n(s),l=i(3877),c=i(8218),d=i(9783),h=i(2956),u=e=>{function t(e){e?(localStorage.setItem("theme","dark"),document.documentElement.setAttribute("data-theme","dark")):(localStorage.setItem("theme","light"),document.documentElement.setAttribute("data-theme","light"))}return(0,r.useEffect)(()=>{document.documentElement.getAttribute("data-theme")&&t("dark"===document.documentElement.getAttribute("data-theme"))},[]),(0,n.jsxs)("footer",{id:o().footer,children:[(0,n.jsx)("div",{className:o().links,children:(0,n.jsx)(c.Z,{services:["discord","github","reddit","twitter"],icons:!0})}),(0,n.jsxs)("div",{className:o().legal,children:[(0,n.jsx)(h.Z,{href:"/terms-of-service",children:"Terms of Service"}),(0,n.jsx)("div",{children:"\xa0&\xa0"}),(0,n.jsx)(h.Z,{href:"/privacy-policy",children:"Privacy Policy"})]}),(0,n.jsx)("div",{className:o().darkmode,children:(0,n.jsx)(l.Z,{onClick:()=>t("dark"!==document.documentElement.getAttribute("data-theme")),icon:!0,"aria-label":"Switch theme",children:(0,n.jsx)(d.Z,{size:1,icon:a.xEd})})})]})},m=i(9913),f=i.n(m),p=i(5813),x=i(9478),b=e=>(0,n.jsx)("header",{id:f().header,children:(0,n.jsxs)("nav",{id:f().nav,children:[(0,n.jsx)(h.Z,{href:"/","aria-label":"Home link",children:(0,n.jsx)("div",{children:(0,n.jsx)(x.Z,{id:f().logo,src:p.Z,alt:"",width:46,height:46})})}),(0,n.jsxs)("div",{className:f().links,children:[(0,n.jsx)(h.Z,{href:"/faq",neutral:!0,children:"FAQ"}),(0,n.jsx)(h.Z,{href:"/download",children:(0,n.jsx)(l.Z,{cta:!0,asDiv:!0,size:"large",children:"Get Ferdium"})})]})]})}),g=i(923),y=i.n(g),j=e=>(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(b,{}),(0,n.jsx)("main",{id:y().main,children:e.children}),(0,n.jsx)(u,{})]})},2956:function(e,t,i){"use strict";var n=i(1527),r=i(3525),a=i.n(r);i(959);var s=i(9930),o=i.n(s);t.Z=e=>(0,n.jsx)(a(),{href:e.href,"aria-label":e["aria-label"],className:e.neutral?o().neutral:void 0,children:e.children})},9478:function(e,t,i){"use strict";i.d(t,{Z:function(){return o}});var n=i(1527),r=i(6826),a=i.n(r);let s=e=>{let{src:t}=e;return t};function o(e){return(0,n.jsx)(a(),{...e,loader:s,unoptimized:!e.width&&!e.height})}},3405:function(e,t,i){"use strict";var n=i(1527);i(959);var r=i(828),a=i.n(r);t.Z=e=>{let t=[a().content,e.className];return e.wide&&t.push(a().wide),(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("section",{className:a().section,children:[e.brand&&(0,n.jsx)("div",{className:a().brand}),(0,n.jsx)("div",{style:{flexDirection:e.row?"row":"column"},className:t.join(" "),children:e.children})]})})}},5107:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return f}});var n=i(1527),r=i(8218),a=i(4443);i(959);var s=i(4750),o=i.n(s),l=e=>(0,n.jsxs)("details",{className:o().entry,children:[(0,n.jsx)("summary",{children:(0,n.jsx)("h3",{style:{display:"inline"},children:e.title})}),(0,n.jsx)("article",{children:e.children})]}),c=i(2161),d=i(3405),h=i(5345),u=i.n(h);let m=e=>(0,n.jsx)("table",{className:u().table,children:e.children});m.Cell=e=>e.header?(0,n.jsx)("th",{className:u().th,children:e.children}):(0,n.jsx)("td",{className:u().td,children:e.children}),m.Row=e=>(0,n.jsx)("tr",{className:u().tr,children:e.children}),m.Head=e=>(0,n.jsx)("thead",{className:u().thead,children:e.children}),m.Body=e=>(0,n.jsx)("tbody",{className:u().tbody,children:e.children}),m.Foot=e=>(0,n.jsx)("tfoot",{className:u().tfoot,children:e.children});var f=function(e){let{}=e;return(0,n.jsxs)(c.Z,{children:[(0,n.jsxs)(d.Z,{brand:!0,wide:!0,children:[(0,n.jsx)("h1",{children:"Need help?"}),(0,n.jsx)("h2",{children:"Find your question below or ask one of our communities"}),(0,n.jsx)(r.Z,{services:["discord","github","reddit"]})]}),(0,n.jsxs)(d.Z,{children:[(0,n.jsx)(l,{title:"My computer warns me when I try to install Ferdium",children:(0,n.jsxs)(n.Fragment,{children:["Even though Ferdium code is signed through the appropriate certificates, some warnings may still appear.",(0,n.jsxs)("details",{children:[(0,n.jsx)("summary",{children:"On MacOS:"}),"Any app that has been downloaded from internet will give you a warning asking you to confirm its opening. You can read on that popup that the app has been checked for malware by Apple which did not find any. This means that the software has been submitted to Apple as part of the build process to be notarized. You can thus safely ignore this warning and open the app."]}),(0,n.jsx)("br",{}),(0,n.jsxs)("details",{children:[(0,n.jsx)("summary",{children:"On Windows:"}),'You might see the Windows SmartScreen appear, telling you that "Windows protected your PC" by preventing an unrecognised app from starting. You have the option to click on "More Info" which will display the app name as well as the publisher name. Verify that the app is indeed "Ferdium" and that Publisher corresponds to "Ambroise Grau" (more details below). You can then safely click on "Run anyway" and use the app. If you inadvertently clicked on "Don\'t run", you won\'t be presented with SmartScreen another time. You can however right-click on the executable to go into the file\'s properties and tick the "Unblock" box at the bottom of the window, which will allow its execution by double-click once again.']})]})}),(0,n.jsx)(l,{title:'Why do I see the name "Ambroise Grau" as publisher instead of "Ferdium"?',children:(0,n.jsx)(n.Fragment,{children:'Since Ferdium is not recognised as a legal entity, it is not possible to obtain certificates under the organisation\'s name. For this reason, the certificates to sign releases for both MacOS and Windows have been taken under the personal name of one of the project maintainers, namely "Ambroise Grau". This is the name that should appear when verifying the certificate or the publisher name of the software.'})}),(0,n.jsx)(l,{title:"Which asset should I download?",children:(0,n.jsxs)(n.Fragment,{children:["All the assets are named under the following convention: `Ferdium-<target_os>[-<os_option>]-<version_with_channel>[-<target_arch>].<extension>`. More precisely for the different OS, you should choose the file appropriately as follows:",(0,n.jsxs)("details",{children:[(0,n.jsx)("summary",{children:"For MacOS:"}),"You first need to know if you are using a computer running one of the intel chip or one of the more recent arm chip (developed only by Apple and called M1 or M2). If you do not know it, check the value in `Menu->About this Mac`. If you have an arm chip you need to look for the assets that contain `arm64` in their name. There are then two choices: the first one is to download the appropriate file named `Ferdium-mac-bundle-6.x.x*.zip` which will unzip to give you the application directly; whilst the second choice is to get the file `Ferdium-mac-6.x.x*.dmg` which will mount and allow you to drag the application into your `Applications` folder. Both options are valid (though using the dmg is recommended) as long as you make sure to take the asset corresponding to your processor."]}),(0,n.jsx)("br",{}),(0,n.jsxs)("details",{children:[(0,n.jsx)("summary",{children:"For Windows:"}),"There are 2 types of assets that can be downloaded to get Ferdium on Windows:",(0,n.jsxs)("ol",{children:[(0,n.jsx)("li",{children:"The automatic installer (recommended): assets named `Ferdium-win-AutoSetup-6.x.x*.exe`. These executables will install Ferdium and all its configuration into the AppData\\Local folder without prompt. "}),(0,n.jsx)("li",{children:"The portable version: corresponds to the asset named `Ferdium-win-Portable-6.x.x*.exe`. This is a standalone application that will create the configuration folder in the folder where the executable lies instead of storing it into AppData. "})]}),"For both of these, there are assets corresponding to the specific architectures (names ending with `-ia32.exe` for 32bits, `-x64.exe` for 64bits, or `-arm64.exe` for arm) which only contain the given architecture. If you are unsure which one is best for you, you can download the universal version (the asset name which does not include architecture tag between the version and `.exe`). This executable includes everything to run on all architectures, which means it will be heavier, but will always work as expected. If you are running the installer, it will install only for the correct architecture, and you will be able to delete the installer file afterwards."]}),(0,n.jsx)("br",{}),(0,n.jsxs)("details",{children:[(0,n.jsx)("summary",{children:"For Linux:"}),"The `Ferdium-6.x.x-*.AppImage` is a binary that can be executed immediately and that does not necessitate any installation. Alongside this, there are multiple package files for different types of Linux distributions, such as `.freebsd`, `.rpm` and `.deb` (the latter having multiple available architecture). All of these configure their local configuration into the home folder."]}),(0,n.jsx)("br",{}),"For any developer that wants to build from source, the code is also directly available for each release the app can be built simply by running the appropriate scripts found in the `script` folder (assuming that the environment has been set up correctly)."]})}),(0,n.jsx)(l,{title:"Can I run the beta/nightly version alongside the stable one?",children:(0,n.jsx)(n.Fragment,{children:"In short, no! This is due to the fact that the executables have the same name and are installed in the same place, which means that when you install a version it will write over the previously installed one, whichever it was previously. This means that you can upgrade, downgrade, change the channel you are on by simply installing the version you want; but you cannot have the stable release and a development release installed at the same time."})}),(0,n.jsx)(l,{title:"Will I lose my configuration by installing a different release?",children:(0,n.jsx)(n.Fragment,{children:"When you install a release, the configuration folder will not be modified. You can then safely install a nightly/beta version to test them and then install the stable, or the other way around, and all your services and settings will come with you. (Notice that you cannot have multiple releases installed as explained above.)"})}),(0,n.jsx)(l,{title:"I can't find the menu bar anymore",children:(0,n.jsxs)(n.Fragment,{children:['Not seeing the menu bar (File, Edit, View, Etc.) might mean that it is hidden, and it can be found by pressing "Alt".',(0,n.jsx)("br",{}),"If you want to prevent it from auto-hiding again, un-tick the option:",(0,n.jsx)("br",{}),' "View > auto-hide menu bar"']})}),(0,n.jsx)(l,{title:"I can't find the service I'm looking for",children:(0,n.jsxs)(n.Fragment,{children:['The "Custom Website" service allows you to add your own website and with the icon of your choosing!',(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),"If you want to help the and add your service to the official Ferdium services, you can do so by contributing to"," ",(0,n.jsx)(a.Z,{href:"https://github.com/ferdium/ferdium-recipes",children:"Ferdium Recipes."})]})}),(0,n.jsx)(l,{title:"I want to sync my services and workspaces but I don't want a Ferdium account",children:(0,n.jsxs)(n.Fragment,{children:["You can host your own server with"," ",(0,n.jsx)(a.Z,{href:"https://github.com/ferdium/ferdium-server",children:"Ferdium Server,"})," ","which allows you to create your own account. If you chose the accountless option when signing up in Ferdium for the first time, you can follow"," ",(0,n.jsx)(a.Z,{href:"https://github.com/ferdium/ferdium-app/blob/develop/docs/INTERNAL_SERVER.md#exporting-backups",children:"these steps"})," ","to create backups manually."]})}),(0,n.jsx)(l,{title:"I want to switch from a Franz/Ferdi/Ferdium account to the accountless option",children:(0,n.jsx)(n.Fragment,{children:"This is a great idea since it looks like you don't want your data to be stored on someone else's cloud. It also means that you can be shielded from any outages (both voluntary and involuntary) of the server in question. All you will need to do is to take a backup of your settings from your current server (answered in the above faq), and then logout in Ferdium, and choose the appropriate button in the login page. Once you get into the accountless option, you can follow the similar instructions as above to import your configurations, services and workspaces."})}),(0,n.jsx)(l,{title:"Where can I report a bug?",children:(0,n.jsxs)(n.Fragment,{children:["First, see if your problem has already been reported by searching for it in our Issue Tracker.",(0,n.jsx)("br",{}),"If you can't find it, report it below!",(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),(0,n.jsxs)(m,{children:[(0,n.jsx)(m.Head,{children:(0,n.jsxs)(m.Row,{children:[(0,n.jsx)(m.Cell,{header:!0,children:"Ferdium Client"}),(0,n.jsx)(m.Cell,{header:!0,children:"Ferdium Server"})]})}),(0,n.jsxs)(m.Body,{children:[(0,n.jsxs)(m.Row,{children:[(0,n.jsx)(m.Cell,{children:(0,n.jsx)(a.Z,{href:"https://github.com/ferdium/ferdium-app/issues",children:"Issue Tracker"})}),(0,n.jsx)(m.Cell,{children:(0,n.jsx)(a.Z,{href:"https://github.com/ferdium/ferdium-server/issues",children:"Issue Tracker"})})]}),(0,n.jsxs)(m.Row,{children:[(0,n.jsx)(m.Cell,{children:(0,n.jsx)(a.Z,{href:"https://github.com/ferdium/ferdium-app/issues/new/choose",children:"Report"})}),(0,n.jsx)(m.Cell,{children:(0,n.jsx)(a.Z,{href:"https://github.com/ferdium/ferdium-server/issues/new",children:"Report"})})]})]})]})]})}),(0,n.jsx)(l,{title:"Can I move my data from Ferdi to Ferdium?",children:(0,n.jsxs)(n.Fragment,{children:["Yes you can! Follow"," ",(0,n.jsx)(a.Z,{href:"https://github.com/ferdium/ferdium-app/blob/develop/docs/MIGRATION.md",children:"this"})," ","guide."]})}),(0,n.jsx)(l,{title:"Where can I find the Ferdium profile folder on my local machine?",children:(0,n.jsx)(n.Fragment,{children:"Windows: %APPDATA%/Ferdium Mac: ~/Library/Application\\ Support/Ferdium Linux: ~/.config/Ferdium/"})}),(0,n.jsx)(l,{title:"My Discord service is not showing properly. What should I do?",children:(0,n.jsxs)(n.Fragment,{children:["This is because of the User Agent within the service. Discord thinks you are on a mobile site instead of a desktop site.",(0,n.jsx)("br",{}),"It can be solved by right-clicking on the discord service that you are using from the sidebar and choosing `Edit`. Scroll down and update the `User Agent`. A full list of User Agents can be found"," ",(0,n.jsx)(a.Z,{href:"https://developers.whatismybrowser.com/useragents/explore/",children:"here."})," "]})}),(0,n.jsx)(l,{title:"Can multiple services use the same profile such that login information is shared amongst them?",children:(0,n.jsx)(n.Fragment,{children:"No, this is not planned in Ferdium since that can open the pandora's box related to session hijacking."})})]})]})}},3838:function(e){e.exports={ctaSecondary:"Button_ctaSecondary__ncnmd",cta:"Button_cta___4KTX",base:"Button_base__7_tCN",large:"Button_large__chkvi",huge:"Button_huge__cFxyv",icon:"Button_icon__71oEZ",prefix:"Button_prefix__kkXiw",square:"Button_square__4QPYs"}},936:function(e){e.exports={links:"CommunityLinks_links___6PtI"}},9699:function(e){e.exports={neutral:"ExternalLink_neutral__GSVpj"}},4750:function(e){e.exports={entry:"FAQEntry_entry__tRBxm"}},3868:function(e){e.exports={footer:"Footer_footer__lD3vi",links:"Footer_links__C0oRR",legal:"Footer_legal__3uAQy",darkmode:"Footer_darkmode__rij5T"}},9913:function(e){e.exports={header:"Header_header__nSemd",links:"Header_links__6NhQ_",nav:"Header_nav__Fn39o",logo:"Header_logo__m4H7B"}},923:function(){},9930:function(e){e.exports={neutral:"Link_neutral__2yL07"}},828:function(e){e.exports={section:"Section_section__Eq0Zc",brand:"Section_brand__W0fM9",content:"Section_content__btQE_",wide:"Section_wide__jb0oQ"}},5345:function(e){e.exports={table:"Table_table__JRZ51",td:"Table_td__aDmOn",th:"Table_th__mur7A",thead:"Table_thead__vOmdn"}}},function(e){e.O(0,[928,580,774,888,179],function(){return e(e.s=5641)}),_N_E=e.O()}]);