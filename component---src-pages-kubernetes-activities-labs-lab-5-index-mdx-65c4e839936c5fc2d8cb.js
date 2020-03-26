(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{"013z":function(e,t,a){"use strict";a("KKXr"),a("pIFo");var n=a("pOBw"),r=a("q1tI"),i=a.n(r),l=a("NmYn"),b=a.n(l),c=a("OKom"),o=a("k4MR"),s=a("TSYQ"),p=a.n(s),u=a("QH2O"),d=a("qKvR"),O=function(e){var t,a=e.title,n=e.tabs,r=void 0===n?[]:n;return Object(d.b)("div",{className:p()(u.pageHeader,(t={},t[u.withTabs]=r.length,t))},Object(d.b)("div",{className:"bx--grid"},Object(d.b)("div",{className:"bx--row"},Object(d.b)("div",{className:"bx--col-lg-12"},Object(d.b)("h1",{id:"page-title",className:u.text},a)))))},m=a("pEPl"),h=a("BAC9"),j=function(e){var t=e.relativePagePath,a=e.repository,n=m.data.site.siteMetadata.repository,r=a||n,i=r.baseUrl,l=r.subDirectory,b=i+"/edit/"+r.branch+l+"/src/pages"+t;return i?Object(d.b)("div",{className:"bx--row "+h.row},Object(d.b)("div",{className:"bx--col"},Object(d.b)("a",{className:h.link,href:b},"Edit this page on GitHub"))):null},v=a("FCXl"),g=(a("Oyvg"),a("Wbzz")),y=a("I8xM");var f=function(e){var t,a;function n(){return e.apply(this,arguments)||this}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){var e=this.props,t=e.tabs,a=e.slug,n=a.split("/").filter(Boolean).slice(-1)[0],r=t.map((function(e){var t,r=b()(e,{lower:!0}),i=r===n,l=new RegExp(n+"(?!-)"),c=a.replace(l,r);return Object(d.b)("li",{key:e,className:p()((t={},t[y.selectedItem]=i,t),y.listItem)},Object(d.b)(g.Link,{className:y.link,to:""+c},e))}));return Object(d.b)("div",{className:y.tabsContainer},Object(d.b)("div",{className:"bx--grid"},Object(d.b)("div",{className:"bx--row"},Object(d.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(d.b)("nav",null,Object(d.b)("ul",{className:y.list},r))))))},n}(i.a.Component),N=a("MjG9");t.a=function(e){var t=e.pageContext,a=e.children,r=e.location,i=e.Title,l=t.frontmatter,s=void 0===l?{}:l,p=t.relativePagePath,u=t.titleType,m=s.tabs,h=s.title,g=s.theme,y=s.description,w=s.keywords,k=n.data.site.pathPrefix,x=k?r.pathname.replace(k,""):r.pathname,C=m?x.split("/").slice(-1)[0]||b()(m[0],{lower:!0}):"";return Object(d.b)(o.a,{tabs:m,homepage:!1,theme:g,pageTitle:h,pageDescription:y,pageKeywords:w,titleType:u},Object(d.b)(O,{title:i?Object(d.b)(i,null):h,label:"label",tabs:m}),m&&Object(d.b)(f,{slug:x,tabs:m,currentTab:C}),Object(d.b)(N.a,{padded:!0},a,Object(d.b)(j,{relativePagePath:p})),Object(d.b)(v.a,{pageContext:t,location:r,slug:x,tabs:m,currentTab:C}),Object(d.b)(c.a,null))}},VVsH:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return l})),a.d(t,"default",(function(){return o}));a("91GP"),a("rGqo"),a("yt8O"),a("Btvt"),a("RW0V"),a("q1tI");var n=a("7ljp"),r=a("013z");a("qKvR");function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var l={},b={_frontmatter:l},c=r.a;function o(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,["components"]);return Object(n.b)(c,i({},b,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h2",null,"Problem"),Object(n.b)("p",null,"The Hyper Drive isn’t working and we need to find out why. Let’s debug the ",Object(n.b)("inlineCode",{parentName:"p"},"hyper-drive")," deployment so that we can reach light speed again."),Object(n.b)("p",null,"Here are some tips to help you solve the Hyper Drive:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Check the description of the ",Object(n.b)("inlineCode",{parentName:"li"},"deployment"),"."),Object(n.b)("li",{parentName:"ul"},"Get the logs of one of the broken ",Object(n.b)("inlineCode",{parentName:"li"},"pods"),"."),Object(n.b)("li",{parentName:"ul"},"Are the correct ",Object(n.b)("inlineCode",{parentName:"li"},"ports")," assigned."),Object(n.b)("li",{parentName:"ul"},"Make sure your ",Object(n.b)("inlineCode",{parentName:"li"},"labels")," and ",Object(n.b)("inlineCode",{parentName:"li"},"selectors")," are correct."),Object(n.b)("li",{parentName:"ul"},"Check to see if the ",Object(n.b)("inlineCode",{parentName:"li"},"Probes")," are correctly working.")),Object(n.b)("p",null,"Reset the environment:"),Object(n.b)("pre",null,Object(n.b)("code",i({parentName:"pre"},{}),"minikube delete\nminikube start\n")),Object(n.b)("p",null,"Setup the environment:"),Object(n.b)("pre",null,Object(n.b)("code",i({parentName:"pre"},{}),"kubectl apply -f https://raw.githubusercontent.com/ibm-cloud-architecture/learning-cloudnative-101/master/lab-setup/lab-5-debug-k8s-setup.yaml\n")),Object(n.b)("h2",null,"Validate"),Object(n.b)("p",null,"Once you get the Hyper Drive working again. Verify it by checking the endpoints."),Object(n.b)("pre",null,Object(n.b)("code",i({parentName:"pre"},{}),"kubectl get ep hyper-drive\n")))}o.isMDXComponent=!0},pEPl:function(e){e.exports=JSON.parse('{"data":{"site":{"id":"Site","siteMetadata":{"repository":{"baseUrl":"https://github.com/ibm-cloud-architecture/learning-cloudnative-101","subDirectory":"/","branch":"master"}}}}}')},pOBw:function(e){e.exports=JSON.parse('{"data":{"site":{"id":"Site","pathPrefix":"/learning-cloudnative-101"}}}')}}]);
//# sourceMappingURL=component---src-pages-kubernetes-activities-labs-lab-5-index-mdx-65c4e839936c5fc2d8cb.js.map