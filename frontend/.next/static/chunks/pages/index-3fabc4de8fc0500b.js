(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,n,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return s(5075)}])},1770:function(e,n,s){"use strict";s.d(n,{Z:function(){return c}});var i=s(5893),r=s(8420),t=s(6159);function c(e){var n=e.dateString,s=(0,r.Z)(n);return(0,i.jsx)("time",{dateTime:n,children:(0,t.Z)(s,"LLLL d, yyyy")})}},7376:function(e,n,s){"use strict";s.d(n,{y:function(){return j}});var i=s(7568),r=s(655),t=s(5893),c=s(9008),a=s.n(c),l=s(1664),d=s.n(l),h=s(8721),o=s.n(h),u=s(5794),x=s.n(u),_=s(4519),f=s(7294),g=s(1163),m=s(7357),j="SecurityEdu",p=function(e){var n,s=e.children,c=e.home,l=e.admin,h=(0,g.useRouter)(),u=(0,f.useState)(!1),p=u[0],N=u[1];(0,f.useEffect)(function(){(0,_.X)().then(function(e){N(e)}).catch(function(){N(!1)})});var y=(n=(0,i.Z)(function(e){var n,s,i;return(0,r.__generator)(this,function(e){switch(e.label){case 0:return e.trys.push([0,2,,3]),[4,fetch("".concat(_.z,"/auth/logout"),{method:"POST",credentials:"include"})];case 1:return s=(n=e.sent()).json(),200===n.status?h.push("/"):console.log(s),[3,3];case 2:return i=e.sent(),console.log(i),[3,3];case 3:return[2]}})}),function(e){return n.apply(this,arguments)});return(0,t.jsxs)("div",{className:o().container,children:[(0,t.jsx)(a(),{children:(0,t.jsx)("meta",{name:"og:title",content:j})}),(0,t.jsx)("header",{className:o().header,children:c?(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)("h1",{className:x().heading2Xl,children:[j," ",l&&"Admin Page"]})}):(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("h1",{className:x().heading2Xl,children:(0,t.jsx)(d(),{href:l?"/admin":"/",children:(0,t.jsxs)("a",{className:x().colorInherit,children:[j," ",l&&"Admin Page"]})})})})}),(0,t.jsx)("main",{children:s}),(0,t.jsxs)("div",{className:o().footer,children:[!c&&!l&&(0,t.jsx)(d(),{href:"/",children:"← Back to home"}),!c&&l&&(0,t.jsx)(d(),{href:"/",children:"← Back to main site"}),!l&&(0,t.jsxs)(m.Z,{sx:{display:"flex"},children:[(0,t.jsx)(m.Z,{children:(0,t.jsx)(d(),{href:"/faq",children:"FAQ"})}),(0,t.jsx)(m.Z,{sx:{ml:"1rem"},children:(0,t.jsx)(d(),{href:"/search",children:"Search"})})]}),c&&p&&!l&&(0,t.jsx)(d(),{href:"/admin",children:"Admin"}),p&&l&&(0,t.jsx)(d(),{legacyBehavior:!1,href:"#",onClick:y,children:"Logout"}),c&&!p&&(0,t.jsx)(d(),{href:"/login",children:"Login"})]})]})};n.Z=p},4519:function(e,n,s){"use strict";s.d(n,{X:function(){return a},z:function(){return c}});var i,r=s(7568),t=s(655),c="http://securityedu.eastus.cloudapp.azure.com:8000",a=(i=(0,r.Z)(function(){var e,n;return(0,t.__generator)(this,function(e){switch(e.label){case 0:return e.trys.push([0,2,,3]),[4,fetch("".concat(c,"/auth/user"),{method:"GET",credentials:"include"})];case 1:if(200===e.sent().status)return[2,!0];return[2,!1];case 2:return n=e.sent(),console.log(n),[2,!1];case 3:return[2]}})}),function(){return i.apply(this,arguments)})},5075:function(e,n,s){"use strict";s.r(n),s.d(n,{__N_SSP:function(){return f}});var i=s(5893),r=s(9008),t=s.n(r),c=s(1664),a=s.n(c),l=s(1770),d=s(7376),h=s(214),o=s.n(h),u=s(5794),x=s.n(u),_=function(e){var n=e.sortedPostsData;return(0,i.jsxs)(d.Z,{home:!0,children:[(0,i.jsx)(t(),{children:(0,i.jsx)("title",{children:d.y})}),(0,i.jsx)("section",{className:x().headingMd,children:(0,i.jsx)("p",{children:"SecurityEdu is a website to help users to reduce the possibility of information leakage and security issues by introducing information and specific steps to show users how to properly configure the settings using the controllable settings in mobile devices and PCs."})}),(0,i.jsxs)("section",{className:"".concat(x().headingMd," ").concat(x().padding1px),children:[(0,i.jsx)("h2",{className:x().headingLg,children:"Categories"}),(0,i.jsxs)("div",{className:o().grid,children:[(0,i.jsx)(a(),{href:"/category/1",children:(0,i.jsx)("a",{className:o().card,children:(0,i.jsx)("h2",{children:"PCs/Laptops"})})}),(0,i.jsx)(a(),{href:"/category/2",children:(0,i.jsx)("a",{className:o().card,children:(0,i.jsx)("h2",{children:"Mobile Devices"})})}),(0,i.jsx)(a(),{href:"/category/3",children:(0,i.jsx)("a",{className:o().card,children:(0,i.jsx)("h2",{children:"Enterprises"})})})]})]}),(0,i.jsxs)("section",{className:"".concat(x().headingMd," ").concat(x().padding1px),children:[(0,i.jsx)("h2",{className:x().headingLg,children:"Recent Posts"}),(0,i.jsx)("ul",{className:x().list,children:n.slice(0,5).map(function(e){var n=e.id,s=e.date,r=e.title;return(0,i.jsxs)("li",{className:x().listItem,children:[(0,i.jsx)(a(),{href:"/posts/".concat(n),children:(0,i.jsx)("a",{children:r})}),(0,i.jsx)("br",{}),(0,i.jsx)("small",{className:x().lightText,children:(0,i.jsx)(l.Z,{dateString:s})})]},n)})})]}),(0,i.jsxs)("section",{className:"".concat(x().headingMd," ").concat(x().padding1px),children:[(0,i.jsx)("h2",{className:x().headingLg,children:"Security Updates"}),(0,i.jsxs)("div",{className:o().grid,children:[(0,i.jsx)(a(),{href:"/msupdate",children:(0,i.jsx)("a",{className:o().card,children:(0,i.jsx)("h2",{children:"Microsoft"})})}),(0,i.jsx)(a(),{href:"/cvedetail",children:(0,i.jsx)("a",{className:o().card,children:(0,i.jsx)("h2",{children:"CVE Detail"})})})]})]})]})},f=!0;n.default=_},8721:function(e){e.exports={container:"layout_container__fbLkO",header:"layout_header__kY0Lt",footer:"layout_footer__dka_2"}},214:function(e){e.exports={grid:"Home_grid__GxQ85",card:"Home_card___LpL1"}},5794:function(e){e.exports={heading2Xl:"utils_heading2Xl___9fFP",headingXl:"utils_headingXl__u25Y2",headingLg:"utils_headingLg__5535D",headingMd:"utils_headingMd__gD1Ok",borderCircle:"utils_borderCircle__s2nTm",colorInherit:"utils_colorInherit__mSH_x",padding1px:"utils_padding1px__PWQKR",margin1rem:"utils_margin1rem__wJACA",list:"utils_list__4Mu4l",listItem:"utils_listItem__s2m6i",lightText:"utils_lightText__eUzGY"}}},function(e){e.O(0,[767,358,774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);