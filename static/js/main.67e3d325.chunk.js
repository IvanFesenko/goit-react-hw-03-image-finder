(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{11:function(e,a,t){e.exports={ImageGallery:"ImageGallery_ImageGallery__3MoqS",ImageGalleryItem:"ImageGallery_ImageGalleryItem__1TNKF",ImageGalleryItem_image:"ImageGallery_ImageGalleryItem_image__YNPLK"}},14:function(e,a,t){e.exports={Overlay:"Modal_Overlay__BQ1jY",Modal:"Modal_Modal__3EG1h"}},24:function(e,a,t){e.exports={container:"App_container__186Xt",App:"App_App__3-ca2"}},26:function(e,a,t){e.exports={Button:"LoadMoreButton_Button__QVjmS"}},28:function(e,a,t){e.exports={wrapper:"Preloader_wrapper__EwCMJ"}},35:function(e,a,t){},76:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t(1),o=t.n(n),c=t(12),s=t.n(c),i=(t(34),t(35),t(4)),l=t.n(i),u=t(15),h=t(10),m=t(5),p=t(6),d=t(8),g=t(7),b=t(24),j=t.n(b),f=t(25),v=t.n(f),y="key=18267918-a545f4b922b3d8b59313b99e1",_="https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=";function O(){return(O=Object(h.a)(l.a.mark((function e(a,t){var r,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v.a.get("".concat(_).concat(a,"&page=").concat(t,"&per_page=12&").concat(y));case 3:return r=e.sent,n=r.data,e.abrupt("return",n);case 8:throw e.prev=8,e.t0=e.catch(0),new Error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}var S=function(e,a){return O.apply(this,arguments)},x=t(9),w=t.n(x),k=function(e){Object(d.a)(t,e);var a=Object(g.a)(t);function t(){var e;Object(m.a)(this,t);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(e=a.call.apply(a,[this].concat(n))).state={query:""},e.handleChange=function(a){e.setState({query:a.target.value})},e.handleSubmit=function(a){a.preventDefault();var t=e.state.query;(0,e.props.onSearch)(t)},e}return Object(p.a)(t,[{key:"render",value:function(){return Object(r.jsx)("header",{className:w.a.Searchbar,children:Object(r.jsxs)("form",{className:w.a.SearchForm,onSubmit:this.handleSubmit,children:[Object(r.jsx)("button",{type:"submit",className:w.a.SearchFormButton,children:Object(r.jsx)("span",{className:w.a.SearchFormButtonLabel,children:"Search"})}),Object(r.jsx)("input",{className:w.a.SearchFormInput,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",onChange:this.handleChange})]})})}}]),t}(n.Component),C=t(11),I=t.n(C);var N=function(e){var a=e.imageSrc,t=e.imageUrl,n=e.handler;return Object(r.jsx)("li",{className:I.a.ImageGalleryItem,children:Object(r.jsx)("img",{src:a,alt:"","data-url":t,className:I.a.ImageGalleryItem_image,onClick:n})})};var F=function(e){var a=e.images,t=e.onImageClick;return Object(r.jsx)("ul",{className:I.a.ImageGallery,children:a.map((function(e){var a=e.webformatURL,n=e.largeImageURL,o=e.id;return Object(r.jsx)(N,{imageSrc:a,imageUrl:n,handler:t},o)}))})},M=t(26),L=t.n(M);var P=function(e){var a=e.onClickHandler;return Object(r.jsx)("button",{className:L.a.Button,onClick:a,children:"Load more..."})},B=t(27),G=t.n(B),D=(t(75),t(28)),q=t.n(D);var A=function(){return Object(r.jsx)("div",{className:q.a.wrapper,children:Object(r.jsx)(G.a,{type:"ThreeDots",color:"#00BFFF",height:100,width:100,timeout:3e3})})},E=t(14),U=t.n(E),H=document.querySelector("#modal-root"),T=function(e){Object(d.a)(t,e);var a=Object(g.a)(t);function t(){var e;Object(m.a)(this,t);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(e=a.call.apply(a,[this].concat(n))).handlerKeyDown=function(a){"Escape"===a.code&&e.props.onCloseModal()},e.onOverlayClick=function(a){a.currentTarget===a.target&&e.props.onCloseModal()},e}return Object(p.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handlerKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handlerKeyDown)}},{key:"render",value:function(){return Object(c.createPortal)(Object(r.jsx)("div",{className:U.a.Overlay,onClick:this.onOverlayClick,children:Object(r.jsx)("div",{className:U.a.Modal,children:this.props.children})}),H)}}]),t}(n.Component),K=function(e){Object(d.a)(t,e);var a=Object(g.a)(t);function t(){var e;Object(m.a)(this,t);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(e=a.call.apply(a,[this].concat(n))).state={query:"",pageNumber:1,isLoading:!1,error:!1,images:[],totalPages:0,newPageCords:0,modalSrc:""},e.fetchData=Object(h.a)(l.a.mark((function a(){var t,r,n,o;return l.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return t=e.state,r=t.query,n=t.pageNumber,a.prev=1,a.next=4,S(r,n);case 4:o=a.sent,e.setState((function(e){return{images:[].concat(Object(u.a)(e.images),Object(u.a)(o.hits)),isLoading:!1,totalPages:e.totalPages>0?e.totalPages:Math.ceil(o.totalHits/12)}})),a.next=11;break;case 8:a.prev=8,a.t0=a.catch(1),e.setState({error:!0,isLoading:!1});case 11:case"end":return a.stop()}}),a,null,[[1,8]])}))),e.scrollToNextPage=function(){var a=e.state.newPageCords;window.scrollTo({top:a,behavior:"smooth"})},e.onSearch=function(a){e.setState({query:a,pageNumber:1,isLoading:!0,error:!1,images:[],totalPages:0,newPageCords:0})},e.loadMore=function(){var a=document.documentElement.scrollHeight-170;e.setState((function(e){return{isLoading:!0,newPageCords:a,pageNumber:e.pageNumber+1}}))},e.onImageClick=function(a){var t=a.target.dataset.url;e.setState({modalSrc:t})},e.onCloseModal=function(){e.setState({modalSrc:""})},e}return Object(p.a)(t,[{key:"componentDidUpdate",value:function(){var e=Object(h.a)(l.a.mark((function e(a,t){var r,n,o;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=this.state,n=r.query,o=r.pageNumber,t.query!==n&&this.fetchData(),!(t.pageNumber!==o&&t.pageNumber<o)){e.next=6;break}return e.next=5,this.fetchData();case 5:this.scrollToNextPage();case 6:case"end":return e.stop()}}),e,this)})));return function(a,t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,a=e.images,t=e.pageNumber,n=e.totalPages,o=e.isLoading,c=e.modalSrc;return Object(r.jsxs)("div",{className:j.a.App,children:[Object(r.jsx)(k,{onSearch:this.onSearch}),a.length>0&&Object(r.jsx)(F,{images:a,onImageClick:this.onImageClick}),o&&Object(r.jsx)(A,{}),t<n&&Object(r.jsx)(P,{onClickHandler:this.loadMore}),c&&Object(r.jsx)(T,{onCloseModal:this.onCloseModal,children:Object(r.jsx)("img",{src:c,alt:""})})]})}}]),t}(n.Component);s.a.render(Object(r.jsx)(o.a.StrictMode,{children:Object(r.jsx)(K,{})}),document.getElementById("root"))},9:function(e,a,t){e.exports={Searchbar:"Searchbar_Searchbar__12J3h",SearchForm:"Searchbar_SearchForm__gyHDp",SearchFormButton:"Searchbar_SearchFormButton__23jDf",SearchFormButtonLabel:"Searchbar_SearchFormButtonLabel__ewtUF",SearchFormInput:"Searchbar_SearchFormInput__35Hys"}}},[[76,1,2]]]);
//# sourceMappingURL=main.67e3d325.chunk.js.map