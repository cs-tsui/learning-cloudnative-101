(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{"013z":function(e,t,a){"use strict";a("KKXr"),a("pIFo");var n=a("pOBw"),r=a("q1tI"),i=a.n(r),o=a("NmYn"),s=a.n(o),c=a("OKom"),l=a("k4MR"),b=a("TSYQ"),u=a.n(b),p=a("QH2O"),d=a("qKvR"),g=function(e){var t,a=e.title,n=e.tabs,r=void 0===n?[]:n;return Object(d.b)("div",{className:u()(p.pageHeader,(t={},t[p.withTabs]=r.length,t))},Object(d.b)("div",{className:"bx--grid"},Object(d.b)("div",{className:"bx--row"},Object(d.b)("div",{className:"bx--col-lg-12"},Object(d.b)("h1",{id:"page-title",className:p.text},a)))))},m=a("pEPl"),O=a("BAC9"),j=function(e){var t=e.relativePagePath,a=e.repository,n=m.data.site.siteMetadata.repository,r=a||n,i=r.baseUrl,o=r.subDirectory,s=i+"/edit/"+r.branch+o+"/src/pages"+t;return i?Object(d.b)("div",{className:"bx--row "+O.row},Object(d.b)("div",{className:"bx--col"},Object(d.b)("a",{className:O.link,href:s},"Edit this page on GitHub"))):null},h=a("FCXl"),v=(a("Oyvg"),a("Wbzz")),f=a("I8xM");var y=function(e){var t,a;function n(){return e.apply(this,arguments)||this}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){var e=this.props,t=e.tabs,a=e.slug,n=a.split("/").filter(Boolean).slice(-1)[0],r=t.map((function(e){var t,r=s()(e,{lower:!0}),i=r===n,o=new RegExp(n+"(?!-)"),c=a.replace(o,r);return Object(d.b)("li",{key:e,className:u()((t={},t[f.selectedItem]=i,t),f.listItem)},Object(d.b)(v.Link,{className:f.link,to:""+c},e))}));return Object(d.b)("div",{className:f.tabsContainer},Object(d.b)("div",{className:"bx--grid"},Object(d.b)("div",{className:"bx--row"},Object(d.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(d.b)("nav",null,Object(d.b)("ul",{className:f.list},r))))))},n}(i.a.Component),N=a("MjG9");t.a=function(e){var t=e.pageContext,a=e.children,r=e.location,i=e.Title,o=t.frontmatter,b=void 0===o?{}:o,u=t.relativePagePath,p=t.titleType,m=b.tabs,O=b.title,v=b.theme,f=b.description,w=b.keywords,x=n.data.site.pathPrefix,k=x?r.pathname.replace(x,""):r.pathname,P=m?k.split("/").slice(-1)[0]||s()(m[0],{lower:!0}):"";return Object(d.b)(l.a,{tabs:m,homepage:!1,theme:v,pageTitle:O,pageDescription:f,pageKeywords:w,titleType:p},Object(d.b)(g,{title:i?Object(d.b)(i,null):O,label:"label",tabs:m}),m&&Object(d.b)(y,{slug:k,tabs:m,currentTab:P}),Object(d.b)(N.a,{padded:!0},a,Object(d.b)(j,{relativePagePath:u})),Object(d.b)(h.a,{pageContext:t,location:r,slug:k,tabs:m,currentTab:P}),Object(d.b)(c.a,null))}},"I1Q/":function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return o})),a.d(t,"default",(function(){return l}));a("91GP"),a("rGqo"),a("yt8O"),a("Btvt"),a("RW0V"),a("q1tI");var n=a("7ljp"),r=a("013z");a("qKvR");function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var o={},s={_frontmatter:o},c=r.a;function l(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,["components"]);return Object(n.b)(c,i({},s,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h1",null,"Container Logging"),Object(n.b)("p",null,"Application and systems logs can help you understand what is happening inside your cluster. The logs are particularly useful for debugging problems and monitoring cluster activity."),Object(n.b)("p",null,"Kubernetes provides no native storage solution for log data, but you can integrate many existing logging solutions into your Kubernetes cluster."),Object(n.b)("h2",null,"Resources"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",i({parentName:"li"},{href:"https://kubernetes.io/docs/concepts/cluster-administration/logging/"}),"https://kubernetes.io/docs/concepts/cluster-administration/logging/"))),Object(n.b)("h2",null,"References"),Object(n.b)("pre",null,Object(n.b)("code",i({parentName:"pre"},{className:"language-yaml"}),"apiVersion: v1\nkind: Pod\nmetadata:\n  name: counter\nspec:\n  containers:\n  - name: count\n    image: busybox\n    command: ['sh','-c','i=0; while true; do echo \"$i: $(date)\"; i=$((i+1)); sleep 5; done']\n")),Object(n.b)("pre",null,Object(n.b)("code",i({parentName:"pre"},{}),"kubectl logs\n")),Object(n.b)("pre",null,Object(n.b)("code",i({parentName:"pre"},{}),"brew install stern\nstern . -n default\n")))}l.isMDXComponent=!0},pEPl:function(e){e.exports=JSON.parse('{"data":{"site":{"id":"Site","siteMetadata":{"repository":{"baseUrl":"https://github.com/ibm-cloud-architecture/learning-cloudnative-101","subDirectory":"/","branch":"master"}}}}}')},pOBw:function(e){e.exports=JSON.parse('{"data":{"site":{"id":"Site","pathPrefix":"/learning-cloudnative-101"}}}')}}]);
//# sourceMappingURL=component---src-pages-kubernetes-observability-logs-index-mdx-938e28d600755cdd3342.js.map