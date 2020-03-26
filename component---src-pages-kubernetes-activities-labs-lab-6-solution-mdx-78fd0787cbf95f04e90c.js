(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{"013z":function(e,t,a){"use strict";a("KKXr"),a("pIFo");var n=a("pOBw"),r=a("q1tI"),l=a.n(r),o=a("NmYn"),b=a.n(o),c=a("OKom"),i=a("k4MR"),s=a("TSYQ"),p=a.n(s),u=a("QH2O"),d=a("qKvR"),O=function(e){var t,a=e.title,n=e.tabs,r=void 0===n?[]:n;return Object(d.b)("div",{className:p()(u.pageHeader,(t={},t[u.withTabs]=r.length,t))},Object(d.b)("div",{className:"bx--grid"},Object(d.b)("div",{className:"bx--row"},Object(d.b)("div",{className:"bx--col-lg-12"},Object(d.b)("h1",{id:"page-title",className:u.text},a)))))},m=a("pEPl"),j=a("BAC9"),h=function(e){var t=e.relativePagePath,a=e.repository,n=m.data.site.siteMetadata.repository,r=a||n,l=r.baseUrl,o=r.subDirectory,b=l+"/edit/"+r.branch+o+"/src/pages"+t;return l?Object(d.b)("div",{className:"bx--row "+j.row},Object(d.b)("div",{className:"bx--col"},Object(d.b)("a",{className:j.link,href:b},"Edit this page on GitHub"))):null},v=a("FCXl"),y=(a("Oyvg"),a("Wbzz")),g=a("I8xM");var f=function(e){var t,a;function n(){return e.apply(this,arguments)||this}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){var e=this.props,t=e.tabs,a=e.slug,n=a.split("/").filter(Boolean).slice(-1)[0],r=t.map((function(e){var t,r=b()(e,{lower:!0}),l=r===n,o=new RegExp(n+"(?!-)"),c=a.replace(o,r);return Object(d.b)("li",{key:e,className:p()((t={},t[g.selectedItem]=l,t),g.listItem)},Object(d.b)(y.Link,{className:g.link,to:""+c},e))}));return Object(d.b)("div",{className:g.tabsContainer},Object(d.b)("div",{className:"bx--grid"},Object(d.b)("div",{className:"bx--row"},Object(d.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(d.b)("nav",null,Object(d.b)("ul",{className:g.list},r))))))},n}(l.a.Component),w=a("MjG9");t.a=function(e){var t=e.pageContext,a=e.children,r=e.location,l=e.Title,o=t.frontmatter,s=void 0===o?{}:o,p=t.relativePagePath,u=t.titleType,m=s.tabs,j=s.title,y=s.theme,g=s.description,N=s.keywords,x=n.data.site.pathPrefix,k=x?r.pathname.replace(x,""):r.pathname,P=m?k.split("/").slice(-1)[0]||b()(m[0],{lower:!0}):"";return Object(d.b)(i.a,{tabs:m,homepage:!1,theme:y,pageTitle:j,pageDescription:g,pageKeywords:N,titleType:u},Object(d.b)(O,{title:l?Object(d.b)(l,null):j,label:"label",tabs:m}),m&&Object(d.b)(f,{slug:k,tabs:m,currentTab:P}),Object(d.b)(w.a,{padded:!0},a,Object(d.b)(h,{relativePagePath:p})),Object(d.b)(v.a,{pageContext:t,location:r,slug:k,tabs:m,currentTab:P}),Object(d.b)(c.a,null))}},HWSL:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return o})),a.d(t,"default",(function(){return i}));a("91GP"),a("rGqo"),a("yt8O"),a("Btvt"),a("RW0V"),a("q1tI");var n=a("7ljp"),r=a("013z");a("qKvR");function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var o={},b={_frontmatter:o},c=r.a;function i(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,["components"]);return Object(n.b)(c,l({},b,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h2",null,"Solution"),Object(n.b)("p",null,"Update the deployment to the new version like so:"),Object(n.b)("pre",null,Object(n.b)("code",l({parentName:"pre"},{}),"kubectl set image deployment/jedi-deployment jedi-ws=bitnamy/nginx:1.18.1 --record\n")),Object(n.b)("p",null,"Check the progress of the rolling update:"),Object(n.b)("pre",null,Object(n.b)("code",l({parentName:"pre"},{}),"kubectl rollout status deployment/jedi-deployment\n")),Object(n.b)("p",null,"In another terminal window"),Object(n.b)("pre",null,Object(n.b)("code",l({parentName:"pre"},{}),"kubectl get pods -w\n")),Object(n.b)("p",null,"Get a list of previous revisions."),Object(n.b)("pre",null,Object(n.b)("code",l({parentName:"pre"},{}),"kubectl rollout history deployment/jedi-deployment\n")),Object(n.b)("p",null,"Undo the last revision."),Object(n.b)("pre",null,Object(n.b)("code",l({parentName:"pre"},{}),"kubectl rollout undo deployment/jedi-deployment\n")),Object(n.b)("p",null,"Check the status of the rollout."),Object(n.b)("pre",null,Object(n.b)("code",l({parentName:"pre"},{}),"kubectl rollout status deployment/jedi-deployment\n")))}i.isMDXComponent=!0},pEPl:function(e){e.exports=JSON.parse('{"data":{"site":{"id":"Site","siteMetadata":{"repository":{"baseUrl":"https://github.com/ibm-cloud-architecture/learning-cloudnative-101","subDirectory":"/","branch":"master"}}}}}')},pOBw:function(e){e.exports=JSON.parse('{"data":{"site":{"id":"Site","pathPrefix":"/learning-cloudnative-101"}}}')}}]);
//# sourceMappingURL=component---src-pages-kubernetes-activities-labs-lab-6-solution-mdx-78fd0787cbf95f04e90c.js.map