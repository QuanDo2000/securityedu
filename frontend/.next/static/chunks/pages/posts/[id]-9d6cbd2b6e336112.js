(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[646],{7411:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/posts/[id]",function(){return t(5695)}])},1770:function(e,n,t){"use strict";t.d(n,{Z:function(){return c}});var i=t(5893),r=t(8420),s=t(6159);function c(e){var n=e.dateString,t=(0,r.Z)(n);return(0,i.jsx)("time",{dateTime:n,children:(0,s.Z)(t,"LLLL d, yyyy")})}},7376:function(e,n,t){"use strict";t.d(n,{y:function(){return m}});var i=t(7568),r=t(655),s=t(5893),c=t(9008),l=t.n(c),a=t(1664),h=t.n(a),d=t(8721),u=t.n(d),o=t(5794),_=t.n(o),x=t(4519),f=t(7294),g=t(1163),j=t(7357),m="SecurityEdu",p=function(e){var n,t=e.children,c=e.home,a=e.admin,d=(0,g.useRouter)(),o=(0,f.useState)(!1),p=o[0],v=o[1];(0,f.useEffect)(function(){(0,x.X)().then(function(e){v(e)}).catch(function(){v(!1)})});var y=(n=(0,i.Z)(function(e){var n,t,i;return(0,r.__generator)(this,function(e){switch(e.label){case 0:return e.trys.push([0,2,,3]),[4,fetch("".concat(x.z,"/auth/logout"),{method:"POST",credentials:"include"})];case 1:return t=(n=e.sent()).json(),200===n.status?d.push("/"):console.log(t),[3,3];case 2:return i=e.sent(),console.log(i),[3,3];case 3:return[2]}})}),function(e){return n.apply(this,arguments)});return(0,s.jsxs)("div",{className:u().container,children:[(0,s.jsx)(l(),{children:(0,s.jsx)("meta",{name:"og:title",content:m})}),(0,s.jsx)("header",{className:u().header,children:c?(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)("h1",{className:_().heading2Xl,children:[m," ",a&&"Admin Page"]})}):(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("h1",{className:_().heading2Xl,children:(0,s.jsx)(h(),{href:a?"/admin":"/",children:(0,s.jsxs)("a",{className:_().colorInherit,children:[m," ",a&&"Admin Page"]})})})})}),(0,s.jsx)("main",{children:t}),(0,s.jsxs)("div",{className:u().footer,children:[!c&&!a&&(0,s.jsx)(h(),{href:"/",children:"← Back to home"}),!c&&a&&(0,s.jsx)(h(),{href:"/",children:"← Back to main site"}),!a&&(0,s.jsxs)(j.Z,{sx:{display:"flex"},children:[(0,s.jsx)(j.Z,{children:(0,s.jsx)(h(),{href:"/faq",children:"FAQ"})}),(0,s.jsx)(j.Z,{sx:{ml:"1rem"},children:(0,s.jsx)(h(),{href:"/search",children:"Search"})})]}),c&&p&&!a&&(0,s.jsx)(h(),{href:"/admin",children:"Admin"}),p&&a&&(0,s.jsx)(h(),{legacyBehavior:!1,href:"#",onClick:y,children:"Logout"}),c&&!p&&(0,s.jsx)(h(),{href:"/login",children:"Login"})]})]})};n.Z=p},4519:function(e,n,t){"use strict";t.d(n,{X:function(){return l},z:function(){return c}});var i,r=t(7568),s=t(655),c="http://20.185.25.136:8000",l=(i=(0,r.Z)(function(){var e,n;return(0,s.__generator)(this,function(e){switch(e.label){case 0:return e.trys.push([0,2,,3]),[4,fetch("".concat(c,"/auth/user"),{method:"GET",credentials:"include"})];case 1:if(200===e.sent().status)return[2,!0];return[2,!1];case 2:return n=e.sent(),console.log(n),[2,!1];case 3:return[2]}})}),function(){return i.apply(this,arguments)})},5695:function(e,n,t){"use strict";t.r(n),t.d(n,{__N_SSP:function(){return u}});var i=t(5893),r=t(9008),s=t.n(r),c=t(7376),l=t(5794),a=t.n(l),h=t(1770),d=function(e){var n=e.postData;return n.content?(0,i.jsxs)(c.Z,{children:[(0,i.jsx)(s(),{children:(0,i.jsx)("title",{children:n.title})}),(0,i.jsxs)("article",{children:[(0,i.jsx)("h1",{className:a().headingXl,children:n.title}),(0,i.jsx)("div",{className:a().lightText,children:(0,i.jsx)(h.Z,{dateString:n.date})}),(0,i.jsx)("div",{dangerouslySetInnerHTML:{__html:n.content}})]})]}):(0,i.jsxs)(c.Z,{children:[(0,i.jsx)(s(),{children:(0,i.jsx)("title",{children:n.title})}),(0,i.jsxs)("article",{children:[(0,i.jsx)("h1",{className:a().headingXl,children:n.title}),(0,i.jsx)("div",{className:a().lightText,children:(0,i.jsx)(h.Z,{dateString:n.date})}),(0,i.jsx)("p",{children:"Page without content."})]})]})},u=!0;n.default=d},8721:function(e){e.exports={container:"layout_container__fbLkO",header:"layout_header__kY0Lt",footer:"layout_footer__dka_2"}},5794:function(e){e.exports={heading2Xl:"utils_heading2Xl___9fFP",headingXl:"utils_headingXl__u25Y2",headingLg:"utils_headingLg__5535D",headingMd:"utils_headingMd__gD1Ok",borderCircle:"utils_borderCircle__s2nTm",colorInherit:"utils_colorInherit__mSH_x",padding1px:"utils_padding1px__PWQKR",margin1rem:"utils_margin1rem__wJACA",list:"utils_list__4Mu4l",listItem:"utils_listItem__s2m6i",lightText:"utils_lightText__eUzGY"}}},function(e){e.O(0,[767,358,774,888,179],function(){return e(e.s=7411)}),_N_E=e.O()}]);