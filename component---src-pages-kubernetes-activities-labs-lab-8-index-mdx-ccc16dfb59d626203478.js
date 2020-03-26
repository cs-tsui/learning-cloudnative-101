(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{"013z":function(e,t,a){"use strict";a("KKXr"),a("pIFo");var n=a("pOBw"),r=a("q1tI"),i=a.n(r),l=a("NmYn"),c=a.n(l),b=a("OKom"),o=a("k4MR"),s=a("TSYQ"),p=a.n(s),d=a("QH2O"),u=a("qKvR"),m=function(e){var t,a=e.title,n=e.tabs,r=void 0===n?[]:n;return Object(u.b)("div",{className:p()(d.pageHeader,(t={},t[d.withTabs]=r.length,t))},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12"},Object(u.b)("h1",{id:"page-title",className:d.text},a)))))},O=a("pEPl"),j=a("BAC9"),h=function(e){var t=e.relativePagePath,a=e.repository,n=O.data.site.siteMetadata.repository,r=a||n,i=r.baseUrl,l=r.subDirectory,c=i+"/edit/"+r.branch+l+"/src/pages"+t;return i?Object(u.b)("div",{className:"bx--row "+j.row},Object(u.b)("div",{className:"bx--col"},Object(u.b)("a",{className:j.link,href:c},"Edit this page on GitHub"))):null},v=a("FCXl"),y=(a("Oyvg"),a("Wbzz")),N=a("I8xM");var f=function(e){var t,a;function n(){return e.apply(this,arguments)||this}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){var e=this.props,t=e.tabs,a=e.slug,n=a.split("/").filter(Boolean).slice(-1)[0],r=t.map((function(e){var t,r=c()(e,{lower:!0}),i=r===n,l=new RegExp(n+"(?!-)"),b=a.replace(l,r);return Object(u.b)("li",{key:e,className:p()((t={},t[N.selectedItem]=i,t),N.listItem)},Object(u.b)(y.Link,{className:N.link,to:""+b},e))}));return Object(u.b)("div",{className:N.tabsContainer},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(u.b)("nav",null,Object(u.b)("ul",{className:N.list},r))))))},n}(i.a.Component),g=a("MjG9");t.a=function(e){var t=e.pageContext,a=e.children,r=e.location,i=e.Title,l=t.frontmatter,s=void 0===l?{}:l,p=t.relativePagePath,d=t.titleType,O=s.tabs,j=s.title,y=s.theme,N=s.description,w=s.keywords,x=n.data.site.pathPrefix,C=x?r.pathname.replace(x,""):r.pathname,T=O?C.split("/").slice(-1)[0]||c()(O[0],{lower:!0}):"";return Object(u.b)(o.a,{tabs:O,homepage:!1,theme:y,pageTitle:j,pageDescription:N,pageKeywords:w,titleType:d},Object(u.b)(m,{title:i?Object(u.b)(i,null):j,label:"label",tabs:O}),O&&Object(u.b)(f,{slug:C,tabs:O,currentTab:T}),Object(u.b)(g.a,{padded:!0},a,Object(u.b)(h,{relativePagePath:p})),Object(u.b)(v.a,{pageContext:t,location:r,slug:C,tabs:O,currentTab:T}),Object(u.b)(b.a,null))}},R4EZ:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return l})),a.d(t,"default",(function(){return o}));a("91GP"),a("rGqo"),a("yt8O"),a("Btvt"),a("RW0V"),a("q1tI");var n=a("7ljp"),r=a("013z");a("qKvR");function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var l={},c={_frontmatter:l},b=r.a;function o(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,["components"]);return Object(n.b)(b,i({},c,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h2",null,"Problem"),Object(n.b)("p",null,"We have a ",Object(n.b)("inlineCode",{parentName:"p"},"jedi-deployment")," and ",Object(n.b)("inlineCode",{parentName:"p"},"yoda-deployment")," that need to communicate with others.  The ",Object(n.b)("inlineCode",{parentName:"p"},"jedi")," needs to talk to the world(outside the cluster), while ",Object(n.b)("inlineCode",{parentName:"p"},"yoda")," only needs to talk to jedi council(others in the cluster)."),Object(n.b)("h2",null,"Your Task"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Examine the two deployments, and create two services that meet the following criteria:")),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"jedi-svc")),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"The service name is ",Object(n.b)("inlineCode",{parentName:"li"},"jedi-svc"),"."),Object(n.b)("li",{parentName:"ul"},"The service exposes the pod replicas managed by the deployment named ",Object(n.b)("inlineCode",{parentName:"li"},"jedi-deployment"),"."),Object(n.b)("li",{parentName:"ul"},"The service listens on port ",Object(n.b)("inlineCode",{parentName:"li"},"80")," and its targetPort matches the port exposed by the pods."),Object(n.b)("li",{parentName:"ul"},"The service type is ",Object(n.b)("inlineCode",{parentName:"li"},"NodePort"),".")),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"yoda-svc")),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"The service name is ",Object(n.b)("inlineCode",{parentName:"li"},"yoda-svc"),"."),Object(n.b)("li",{parentName:"ul"},"The service exposes the pod replicas managed by the deployment named ",Object(n.b)("inlineCode",{parentName:"li"},"yoda-deployment"),"."),Object(n.b)("li",{parentName:"ul"},"The service listens on port ",Object(n.b)("inlineCode",{parentName:"li"},"80")," and its targetPort matches the port exposed by the pods."),Object(n.b)("li",{parentName:"ul"},"The service type is ",Object(n.b)("inlineCode",{parentName:"li"},"ClusterIP"),".")),Object(n.b)("h3",null,"Setup environment:"),Object(n.b)("pre",null,Object(n.b)("code",i({parentName:"pre"},{}),"kubectl apply -f https://gist.githubusercontent.com/csantanapr/87df4292e94441617707dae5de488cf4/raw/cb515f7bae77a3f0e76fdc7f6aa0f4e89cc5fec7/lab-8-service-setup.yaml\n")))}o.isMDXComponent=!0},pEPl:function(e){e.exports=JSON.parse('{"data":{"site":{"id":"Site","siteMetadata":{"repository":{"baseUrl":"https://github.com/ibm-cloud-architecture/learning-cloudnative-101","subDirectory":"/","branch":"master"}}}}}')},pOBw:function(e){e.exports=JSON.parse('{"data":{"site":{"id":"Site","pathPrefix":"/learning-cloudnative-101"}}}')}}]);
//# sourceMappingURL=component---src-pages-kubernetes-activities-labs-lab-8-index-mdx-ccc16dfb59d626203478.js.map