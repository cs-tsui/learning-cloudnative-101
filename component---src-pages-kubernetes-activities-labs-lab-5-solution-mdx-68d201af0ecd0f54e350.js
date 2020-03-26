(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{"013z":function(e,t,a){"use strict";a("KKXr"),a("pIFo");var n=a("pOBw"),r=a("q1tI"),b=a.n(r),c=a("NmYn"),o=a.n(c),l=a("OKom"),p=a("k4MR"),s=a("TSYQ"),i=a.n(s),u=a("QH2O"),d=a("qKvR"),m=function(e){var t,a=e.title,n=e.tabs,r=void 0===n?[]:n;return Object(d.b)("div",{className:i()(u.pageHeader,(t={},t[u.withTabs]=r.length,t))},Object(d.b)("div",{className:"bx--grid"},Object(d.b)("div",{className:"bx--row"},Object(d.b)("div",{className:"bx--col-lg-12"},Object(d.b)("h1",{id:"page-title",className:u.text},a)))))},O=a("pEPl"),j=a("BAC9"),g=function(e){var t=e.relativePagePath,a=e.repository,n=O.data.site.siteMetadata.repository,r=a||n,b=r.baseUrl,c=r.subDirectory,o=b+"/edit/"+r.branch+c+"/src/pages"+t;return b?Object(d.b)("div",{className:"bx--row "+j.row},Object(d.b)("div",{className:"bx--col"},Object(d.b)("a",{className:j.link,href:o},"Edit this page on GitHub"))):null},v=a("FCXl"),f=(a("Oyvg"),a("Wbzz")),h=a("I8xM");var y=function(e){var t,a;function n(){return e.apply(this,arguments)||this}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){var e=this.props,t=e.tabs,a=e.slug,n=a.split("/").filter(Boolean).slice(-1)[0],r=t.map((function(e){var t,r=o()(e,{lower:!0}),b=r===n,c=new RegExp(n+"(?!-)"),l=a.replace(c,r);return Object(d.b)("li",{key:e,className:i()((t={},t[h.selectedItem]=b,t),h.listItem)},Object(d.b)(f.Link,{className:h.link,to:""+l},e))}));return Object(d.b)("div",{className:h.tabsContainer},Object(d.b)("div",{className:"bx--grid"},Object(d.b)("div",{className:"bx--row"},Object(d.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(d.b)("nav",null,Object(d.b)("ul",{className:h.list},r))))))},n}(b.a.Component),k=a("MjG9");t.a=function(e){var t=e.pageContext,a=e.children,r=e.location,b=e.Title,c=t.frontmatter,s=void 0===c?{}:c,i=t.relativePagePath,u=t.titleType,O=s.tabs,j=s.title,f=s.theme,h=s.description,N=s.keywords,x=n.data.site.pathPrefix,w=x?r.pathname.replace(x,""):r.pathname,C=O?w.split("/").slice(-1)[0]||o()(O[0],{lower:!0}):"";return Object(d.b)(p.a,{tabs:O,homepage:!1,theme:f,pageTitle:j,pageDescription:h,pageKeywords:N,titleType:u},Object(d.b)(m,{title:b?Object(d.b)(b,null):j,label:"label",tabs:O}),O&&Object(d.b)(y,{slug:w,tabs:O,currentTab:C}),Object(d.b)(k.a,{padded:!0},a,Object(d.b)(g,{relativePagePath:i})),Object(d.b)(v.a,{pageContext:t,location:r,slug:w,tabs:O,currentTab:C}),Object(d.b)(l.a,null))}},Ci2n:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return c})),a.d(t,"default",(function(){return p}));a("91GP"),a("rGqo"),a("yt8O"),a("Btvt"),a("RW0V"),a("q1tI");var n=a("7ljp"),r=a("013z");a("qKvR");function b(){return(b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var c={},o={_frontmatter:c},l=r.a;function p(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,n,r={},b=Object.keys(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,["components"]);return Object(n.b)(l,b({},o,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h2",null,"Solution"),Object(n.b)("p",null,"Check ",Object(n.b)("inlineCode",{parentName:"p"},"STATUS")," column for not Ready"),Object(n.b)("pre",null,Object(n.b)("code",b({parentName:"pre"},{}),"kubectl get pods --all-namespaces\n")),Object(n.b)("p",null,"Pod with most cpu on that namespace"),Object(n.b)("pre",null,Object(n.b)("code",b({parentName:"pre"},{}),"kubectl top pod -n <namespace>\n")),Object(n.b)("p",null,"Save broken pod summary in json format"),Object(n.b)("pre",null,Object(n.b)("code",b({parentName:"pre"},{}),"kubectl get pod <pod name> -n <namespace> -o json > /home/cloud_user/debug/broken-pod-summary.json\n")),Object(n.b)("p",null,"Save logs for broken pod"),Object(n.b)("pre",null,Object(n.b)("code",b({parentName:"pre"},{}),"kubectl logs <pod name> -n <namespace> > /home/cloud_user/debug/broken-pod-logs.log\n")),Object(n.b)("p",null,"Fix broken pod, Check Events"),Object(n.b)("pre",null,Object(n.b)("code",b({parentName:"pre"},{}),"kubectl describe pod <pod name> -n <namespace>\n")),Object(n.b)("p",null,"To fix probe, can’t kubectl edit, need to delete and recreate pod"),Object(n.b)("pre",null,Object(n.b)("code",b({parentName:"pre"},{}),"kubectl get pod <pod name> -n <namespace> -o yaml --export > broken-pod.yml\n")),Object(n.b)("p",null,"Delete pod"),Object(n.b)("pre",null,Object(n.b)("code",b({parentName:"pre"},{}),"kubectl delete pod <pod name> -n <namespace>\n")),Object(n.b)("p",null,"Can also use ",Object(n.b)("inlineCode",{parentName:"p"},"kubectl replace")),Object(n.b)("p",null,"Edit yaml, and apply"),Object(n.b)("pre",null,Object(n.b)("code",b({parentName:"pre"},{}),"kubectl apply -f broken-pod.yml -n <namespace>\n")),Object(n.b)("p",null,"Verify"),Object(n.b)("pre",null,Object(n.b)("code",b({parentName:"pre"},{}),"kubectl get pod <pod name> -n <namespace>\n")))}p.isMDXComponent=!0},pEPl:function(e){e.exports=JSON.parse('{"data":{"site":{"id":"Site","siteMetadata":{"repository":{"baseUrl":"https://github.com/ibm-cloud-architecture/learning-cloudnative-101","subDirectory":"/","branch":"master"}}}}}')},pOBw:function(e){e.exports=JSON.parse('{"data":{"site":{"id":"Site","pathPrefix":"/learning-cloudnative-101"}}}')}}]);
//# sourceMappingURL=component---src-pages-kubernetes-activities-labs-lab-5-solution-mdx-68d201af0ecd0f54e350.js.map