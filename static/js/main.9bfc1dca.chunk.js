(this.webpackJsonpqwe=this.webpackJsonpqwe||[]).push([[0],{11:function(e,t,a){e.exports={buttonWraper:"Button_buttonWraper__2rZ43",button:"Button_button__lN7K2"}},12:function(e,t,a){e.exports={ImageGalleryItem:"ImageGalleryItem_ImageGalleryItem__999y6",ImageGalleryItemImage:"ImageGalleryItem_ImageGalleryItemImage__1uHzh",ImageGalleryItemIimage:"ImageGalleryItem_ImageGalleryItemIimage__28iQd"}},13:function(e,t,a){e.exports={Overlay:"Modal_Overlay__3xI7R",Modal:"Modal_Modal__3XecV"}},24:function(e,t,a){e.exports={container:"Container_container__2dZ3b"}},32:function(e,t,a){},74:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),o=a(8),c=a.n(o),l=(a(31),a(32),a(15)),i=a(4),s=a(5),u=a(7),m=a(6),h=a(11),d=a.n(h),g=a(0),b=function(e){var t=e.onClick;return Object(g.jsx)("div",{className:d.a.buttonWraper,children:Object(g.jsx)("button",{className:d.a.button,type:"button",onClick:t,children:"Load more"})})},p=a(24),j=a.n(p),y=function(e){var t=e.children;return Object(g.jsx)("div",{className:j.a.container,children:t})},f=a(12),O=a.n(f),v=function(e){var t=e.webformatURL,a=e.onImgClick;return Object(g.jsx)("li",{className:O.a.ImageGalleryItem,children:Object(g.jsx)("img",{src:t,alt:"img",className:O.a.ImageGalleryItemImage,onClick:a})})},I=function(e){var t=e.showGallery,a=e.onImgClick;return Object(g.jsx)("ul",{className:"ImageGallery",children:t.map((function(e){var t=e.id,n=e.webformatURL,r=e.largeImageURL;return Object(g.jsx)(v,{webformatURL:n,onImgClick:function(){return a(r)}},t)}))})},x=a(25),w=a.n(x),C=(a(54),function(){return Object(g.jsx)("div",{className:"Button-wraper",children:Object(g.jsx)(w.a,{type:"TailSpin",color:"#00BFFF",height:100,width:100,timeout:3e3})})}),k=a(13),_=a.n(k),S=document.querySelector("#modal-root"),G=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).handleKeyDown=function(t){"Escape"===t.code&&e.props.onClose()},e.handleOverlayClick=function(t){t.target===t.currentTarget&&e.props.onClose()},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){return Object(o.createPortal)(Object(g.jsx)("div",{className:_.a.Overlay,onClick:this.handleOverlayClick,children:Object(g.jsx)("div",{className:_.a.Modal,children:this.props.children})}),S)}}]),a}(r.a.Component),q=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={query:""},e.handleSubmit=function(t){t.preventDefault(),e.props.onSubmit(e.state.query),e.setState({query:""})},e.handleChange=function(t){e.setState({query:t.currentTarget.value})},e}return Object(s.a)(a,[{key:"render",value:function(){return Object(g.jsx)("header",{className:"Searchbar",children:Object(g.jsxs)("form",{className:"SearchForm",onSubmit:this.handleSubmit,children:[Object(g.jsx)("button",{type:"submit",className:"SearchForm-button",children:Object(g.jsx)("span",{className:"SearchForm-button-label",children:"Search"})}),Object(g.jsx)("input",{className:"SearchForm-input",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",value:this.state.query,onChange:this.handleChange})]})})}}]),a}(r.a.Component),N=a(14),M=a.n(N),L=a(26),F=a(9),U=a.n(F);U.a.defaults.baseURL="https://pixabay.com/api",U.a.defaults.params={key:"21690029-4e3c1e0e912ed1ce10e7f026d",image_type:"photo",orientation:"horizontal",per_page:12};var D={fetchPixabayImgs:function(){var e=Object(L.a)(M.a.mark((function e(t){var a,n;return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.q,n=t.page,e.next=3,U.a.get("",{params:{q:a,page:n}});case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},R=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={gallery:[],page:1,largeImage:"",showModal:!1,q:"",isLoading:!1,error:null},e.onChangeQuery=function(t){e.setState({q:t,page:1,gallery:[],error:null})},e.fetchGallery=function(){var t=e.state,a={q:t.q,page:t.page};e.setState({isLoading:!0}),D.fetchPixabayImgs(a).then((function(t){var a=t.data;e.setState((function(e){return{gallery:[].concat(Object(l.a)(e.gallery),Object(l.a)(a.hits)),page:e.page+1}}))})).catch((function(t){return e.setState({error:t})})).finally((function(){e.setState({isLoading:!1}),window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})}))},e.imgClick=function(t){e.setState({largeImage:t}),e.toggleModal()},e.toggleModal=function(){e.setState((function(e){return{showModal:!e.showModal}}))},e}return Object(s.a)(a,[{key:"componentDidUpdate",value:function(e,t){t.q!==this.state.q&&this.fetchGallery()}},{key:"render",value:function(){var e=this.state,t=e.showModal,a=e.gallery,n=e.isLoading,r=e.error,o=e.largeImage,c=a.length>0&&!n;return Object(g.jsxs)(y,{children:[r&&Object(g.jsx)("h1",{children:"Try again!"}),Object(g.jsx)(q,{onSubmit:this.onChangeQuery}),Object(g.jsx)(I,{showGallery:a,onImgClick:this.imgClick}),n&&Object(g.jsx)(C,{}),c&&Object(g.jsx)(b,{onClick:this.fetchGallery}),t&&Object(g.jsx)(G,{onClose:this.imgClick,children:Object(g.jsx)("img",{src:o,alt:""})})]})}}]),a}(r.a.Component);c.a.render(Object(g.jsx)(r.a.StrictMode,{children:Object(g.jsx)(R,{})}),document.getElementById("root"))}},[[74,1,2]]]);
//# sourceMappingURL=main.9bfc1dca.chunk.js.map