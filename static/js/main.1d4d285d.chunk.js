(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{11:function(e,a,t){e.exports={ImageGallery:"ImageGallery_ImageGallery__3MoqS",ImageGalleryItem:"ImageGallery_ImageGalleryItem__1TNKF",ImageGalleryItem_image:"ImageGallery_ImageGalleryItem_image__YNPLK"}},14:function(e,a,t){e.exports={Overlay:"Modal_Overlay__BQ1jY",Modal:"Modal_Modal__3EG1h"}},23:function(e,a,t){e.exports={container:"App_container__186Xt",App:"App_App__3-ca2"}},25:function(e,a,t){e.exports={Button:"LoadMoreButton_Button__QVjmS"}},27:function(e,a,t){e.exports={wrapper:"Preloader_wrapper__EwCMJ"}},34:function(e,a,t){},75:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t(1),o=t.n(n),c=t(12),s=t.n(c),i=(t(33),t(34),t(4)),l=t.n(i),u=t(10),m=t(5),h=t(6),p=t(8),d=t(7),b=t(23),g=t.n(b),j=t(24),f=t.n(j),y="key=18267918-a545f4b922b3d8b59313b99e1",v="https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=";function S(){return(S=Object(u.a)(l.a.mark((function e(a,t){var r,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.a.get("".concat(v).concat(a,"&page=").concat(t,"&per_page=12&").concat(y));case 3:return r=e.sent,n=r.data,e.abrupt("return",n);case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",{isError:!0,description:e.t0});case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}var _=function(e,a){return S.apply(this,arguments)},O=t(9),x=t.n(O),w=function(e){Object(p.a)(t,e);var a=Object(d.a)(t);function t(){var e;Object(m.a)(this,t);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(e=a.call.apply(a,[this].concat(n))).state={query:""},e.handleChange=function(a){e.setState({query:a.target.value})},e.handleSubmit=function(a){a.preventDefault();var t=e.state.query;(0,e.props.onSearch)(t)},e}return Object(h.a)(t,[{key:"render",value:function(){return Object(r.jsx)("header",{className:x.a.Searchbar,children:Object(r.jsxs)("form",{className:x.a.SearchForm,onSubmit:this.handleSubmit,children:[Object(r.jsx)("button",{type:"submit",className:x.a.SearchFormButton,children:Object(r.jsx)("span",{className:x.a.SearchFormButtonLabel,children:"Search"})}),Object(r.jsx)("input",{className:x.a.SearchFormInput,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",onChange:this.handleChange})]})})}}]),t}(n.Component),I=t(11),k=t.n(I);var C=function(e){var a=e.imageSrc,t=e.imageUrl,n=e.handler;return Object(r.jsx)("li",{className:k.a.ImageGalleryItem,children:Object(r.jsx)("img",{src:a,alt:"","data-url":t,className:k.a.ImageGalleryItem_image,onClick:n})})};var N=function(e){var a=e.images,t=e.onImageClick;return Object(r.jsx)("ul",{className:k.a.ImageGallery,children:a.map((function(e){var a=e.webformatURL,n=e.largeImageURL,o=e.id;return Object(r.jsx)(C,{imageSrc:a,imageUrl:n,handler:t},o)}))})},F=t(25),M=t.n(F);var L=function(e){var a=e.onClickHandler;return Object(r.jsx)("button",{className:M.a.Button,onClick:a,children:"Load more..."})},B=t(26),G=t.n(B),q=(t(74),t(27)),A=t.n(q);var D=function(){return Object(r.jsx)("div",{className:A.a.wrapper,children:Object(r.jsx)(G.a,{type:"ThreeDots",color:"#00BFFF",height:100,width:100,timeout:3e3})})},E=t(14),P=t.n(E),H=document.querySelector("#modal-root"),U=function(e){Object(p.a)(t,e);var a=Object(d.a)(t);function t(){var e;Object(m.a)(this,t);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(e=a.call.apply(a,[this].concat(n))).handlerKeyDown=function(a){"Escape"===a.code&&e.props.onCloseModal()},e.onOverlayClick=function(a){a.currentTarget===a.target&&e.props.onCloseModal()},e}return Object(h.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handlerKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handlerKeyDown)}},{key:"render",value:function(){return Object(c.createPortal)(Object(r.jsx)("div",{className:P.a.Overlay,onClick:this.onOverlayClick,children:Object(r.jsx)("div",{className:P.a.Modal,children:this.props.children})}),H)}}]),t}(n.Component),K=function(e){Object(p.a)(t,e);var a=Object(d.a)(t);function t(){var e;Object(m.a)(this,t);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(e=a.call.apply(a,[this].concat(n))).state={query:"",pageNumber:1,isLoading:!1,error:!1,images:[],totalPages:0,modalSrc:""},e.onSearch=function(){var a=Object(u.a)(l.a.mark((function a(t){var r;return l.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return e.setState({query:t,pageNumber:1,isLoading:!0,error:!1}),a.next=3,_(t,1);case 3:(r=a.sent).hasOwnProperty("error")?e.setState({error:!0}):(console.log(r),e.setState({images:r.hits,isLoading:!1,totalPages:Math.ceil(r.totalHits/12)}));case 5:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}(),e.loadMore=Object(u.a)(l.a.mark((function a(){var t,r,n,o,c;return l.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return t=e.state,r=t.query,n=t.pageNumber,o=document.documentElement.scrollHeight-170,e.setState({isLoading:!0}),a.next=5,_(r,n+1);case 5:c=a.sent,e.setState((function(e){return{images:e.images.concat(c.hits),pageNumber:e.pageNumber+1,isLoading:!1}})),window.scrollTo({top:o,behavior:"smooth"});case 8:case"end":return a.stop()}}),a)}))),e.onImageClick=function(a){var t=a.target.dataset.url;e.setState({modalSrc:t})},e.onCloseModal=function(){e.setState({modalSrc:""})},e}return Object(h.a)(t,[{key:"render",value:function(){var e=this.state,a=e.images,t=e.pageNumber,n=e.totalPages,o=e.isLoading,c=e.modalSrc;return Object(r.jsxs)("div",{className:g.a.App,children:[Object(r.jsx)(w,{onSearch:this.onSearch}),a.length>0&&Object(r.jsx)(N,{images:a,onImageClick:this.onImageClick}),o&&Object(r.jsx)(D,{}),t<n&&Object(r.jsx)(L,{onClickHandler:this.loadMore}),c&&Object(r.jsx)(U,{onCloseModal:this.onCloseModal,children:Object(r.jsx)("img",{src:c,alt:""})})]})}}]),t}(n.Component);s.a.render(Object(r.jsx)(o.a.StrictMode,{children:Object(r.jsx)(K,{})}),document.getElementById("root"))},9:function(e,a,t){e.exports={Searchbar:"Searchbar_Searchbar__12J3h",SearchForm:"Searchbar_SearchForm__gyHDp",SearchFormButton:"Searchbar_SearchFormButton__23jDf",SearchFormButtonLabel:"Searchbar_SearchFormButtonLabel__ewtUF",SearchFormInput:"Searchbar_SearchFormInput__35Hys"}}},[[75,1,2]]]);
//# sourceMappingURL=main.1d4d285d.chunk.js.map