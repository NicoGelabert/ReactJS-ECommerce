(this["webpackJsonpecommerce-ngelabert"]=this["webpackJsonpecommerce-ngelabert"]||[]).push([[0],{32:function(e,t,c){},45:function(e,t,c){},57:function(e,t,c){},58:function(e,t,c){},61:function(e,t,c){},62:function(e,t,c){},63:function(e,t,c){},64:function(e,t,c){"use strict";c.r(t);var a=c(3),n=c.n(a),s=c(38),i=c.n(s),r=(c(45),c(8)),o=c(11),l=c(19),d=c(12),j=c(25),b=(c(51),j.a.initializeApp({apiKey:"AIzaSyAw1Oih5_kOYpx1CUf5NkjPS6Ray-JHU5s",authDomain:"ecommerce-ng-16155.firebaseapp.com",projectId:"ecommerce-ng-16155",storageBucket:"ecommerce-ng-16155.appspot.com",messagingSenderId:"135556538165",appId:"1:135556538165:web:bab9650edcc9ce979fb67c"}));function m(){return j.a.firestore(b)}var u=c(35),h=c(2),x=Object(a.createContext)(),O=function(){return Object(a.useContext)(x)};var p=function(e){var t=e.children,c=Object(a.useState)([]),n=Object(d.a)(c,2),s=n[0],i=n[1],r=Object(a.useState)(0),o=Object(d.a)(r,2),l=o[0],j=o[1];return Object(h.jsx)(x.Provider,{value:{cart:s,addItem:function(e,t){if(a=e.id,s.find((function(e){return e.item.id===a}))){var c=Object(u.a)(s);c.forEach((function(c){c.item.id===e.id&&(c.qty=c.qty+t)})),i(c)}else i([].concat(Object(u.a)(s),[{item:e,qty:t}])),j(l+t);var a},clearCart:function(){i([]),j(0)},cantItems:l,removeItem:function(e,t){i(s.filter((function(t){return t.item.id!==e}))),j(l-t)}},children:t})},f=function(){var e=O().cantItems;return Object(h.jsx)("div",{children:Object(h.jsxs)(r.b,{to:"/cart",className:"nav-link text-white",children:[0!==e&&Object(h.jsx)("span",{className:"position-absolute start-65-15 translate-middle badge rounded-pill widget-carrito",children:e}),Object(h.jsx)("i",{className:"bi-basket",role:"img",width:"24",height:"24","aria-label":"Carrito"}),Object(h.jsx)("p",{children:"Carrito"})]})})},g=(c(57),function(){var e=Object(a.useState)([]),t=Object(d.a)(e,2),c=t[0],n=t[1],s=Object(o.f)().category;return Object(a.useEffect)((function(){m().collection("categorias").get().then((function(e){0!==e.size&&n(e.docs.map((function(e){return Object(l.a)({id:e.id},e.data())})))})).catch((function(e){return console.log(e)})).finally()}),[s]),Object(h.jsx)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-navbar",children:Object(h.jsxs)("div",{className:"container-fluid",children:[Object(h.jsxs)(r.b,{to:"/",className:"d-flex align-items-center my-2 my-lg-0 me-lg-auto text-white text-decoration-none",children:[Object(h.jsx)("i",{className:"bi-tornado",role:"img",width:"32",height:"32","aria-label":"E-commerce",id:"brand"}),Object(h.jsx)("span",{className:"fs-4 brandName",children:"Tornado E-Commerce"})]}),Object(h.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"offcanvas","data-bs-target":"#offcanvasNavbar","aria-controls":"offcanvasNavbar",children:Object(h.jsx)("span",{className:"navbar-toggler-icon"})}),Object(h.jsxs)("div",{className:"offcanvas offcanvas-end",tabindex:"-1",id:"offcanvasNavbar","aria-labelledby":"offcanvasNavbarLabel",children:[Object(h.jsxs)("div",{className:"offcanvas-header",children:[Object(h.jsx)("i",{className:"bi-tornado",role:"img",width:"32",height:"32","aria-label":"E-commerce",id:"brand"}),Object(h.jsx)("h5",{className:"offcanvas-title text-white",id:"offcanvasNavbarLabel",children:"Tornado E-Commerce"}),Object(h.jsx)("button",{type:"button",className:"btn-close btn-close-white text-reset","data-bs-dismiss":"offcanvas","aria-label":"Close"})]}),Object(h.jsx)("div",{className:"offcanvas-body",children:Object(h.jsxs)("ul",{className:"navbar-nav justify-content-end flex-grow-1 pe-3",children:[Object(h.jsx)("li",{className:"nav-item",children:Object(h.jsxs)(r.b,{to:"/",className:"nav-link text-white",children:[Object(h.jsx)("i",{className:"bi-house-door",role:"img",width:"24",height:"24","aria-label":"Home"}),Object(h.jsx)("p",{children:"Home"})]})}),Object(h.jsxs)("li",{className:"nav-item dropdown",children:[Object(h.jsxs)(r.b,{to:"/",className:"nav-link dropdown-toggle text-white",id:"offcanvasNavbarDropdown",role:"button","data-bs-toggle":"dropdown","aria-expanded":"false",children:[Object(h.jsx)("i",{className:"bi-list-check",role:"img",width:"24",height:"24","aria-label":"Products"}),Object(h.jsx)("br",{}),"Categor\xedas"]}),Object(h.jsx)("ul",{className:"dropdown-menu","aria-labelledby":"offcanvasNavbarDropdown",children:c.map((function(e){return Object(h.jsx)("li",{children:Object(h.jsx)(r.b,{to:"/categoria/".concat(e.slug),className:"dropdown-item",children:e.name})})}))})]}),Object(h.jsx)("li",{className:"nav-item",children:Object(h.jsx)(f,{})})]})})]})]})})}),v=(c(58),function(){return Object(h.jsxs)("div",{children:[Object(h.jsx)("i",{className:"bi-tornado d-block mx-auto mb-4",role:"img","aria-label":"E-commerce",id:"hero-brand"}),Object(h.jsx)("h1",{className:"greeting",children:"Bienvenido a Tornado E-Commerce"}),Object(h.jsxs)("div",{className:"col-lg-6 mx-auto",children:[Object(h.jsx)("p",{className:"lead mb-4",children:"Una plataforma pensada para maximizar tu experiencia en la compra de art\xedculos de todo tipo. Comenz\xe1 tu recorrido y llevate todo."}),Object(h.jsx)("div",{className:"d-grid gap-2 d-sm-flex justify-content-sm-center",children:Object(h.jsx)(r.b,{to:"/cart",children:Object(h.jsx)("button",{type:"button",className:"btn btn-carrito btn-lg px-4",children:"Ir al carrito"})})})]})]})}),N=c(20),y=c(18),w=function(e){var t=e.product;return Object(h.jsxs)("div",{className:"card product row margin",children:[Object(h.jsx)("img",{src:t.pictureUrl,className:"card-img-top",alt:t.name}),Object(h.jsxs)("div",{className:"card-body",children:[Object(h.jsx)("h4",{className:"card-title",children:t.name}),Object(h.jsx)(r.b,{to:"/categoria/".concat(t.slug),children:Object(h.jsx)("span",{children:t.category})}),Object(h.jsx)("p",{className:"card-text",children:t.description}),Object(h.jsxs)("h5",{children:["$ ",t.price]}),Object(h.jsx)(r.b,{to:"/animales/".concat(t.id),className:"btn btn-productos",children:Object(h.jsx)(N.a,{icon:y.b})})]})]})},k=function(e){var t=e.products;return Object(h.jsx)("div",{className:"row products",children:t.map((function(e){return Object(h.jsx)(w,{product:e},e.id)}))})},C=(c(32),c(61),function(){return Object(h.jsx)("div",{class:"no-freeze-spinner",children:Object(h.jsx)("div",{id:"no-freeze-spinner",children:Object(h.jsxs)("div",{children:[Object(h.jsx)("i",{class:"material-icons",children:"flutter_dash"}),Object(h.jsx)("i",{class:"material-icons",children:"pets"}),Object(h.jsx)("i",{class:"material-icons",children:"cruelty_free"}),Object(h.jsx)("div",{})]})})})}),S=function(){var e=Object(a.useState)([]),t=Object(d.a)(e,2),c=t[0],n=t[1],s=Object(o.f)().slug,i=Object(a.useState)(!0),r=Object(d.a)(i,2),j=r[0],b=r[1];return Object(a.useEffect)((function(){var e=m().collection("items");(s?e.where("slug","==",s):e).get().then((function(e){n(e.docs.map((function(e){return Object(l.a)({id:e.id},e.data())}))),b(!1)})).catch((function(e){return console.log(e)})).finally((function(){b(!1)}))}),[s]),Object(h.jsxs)("div",{className:"px-4 my-5 text-center",children:[Object(h.jsx)(v,{}),j?Object(h.jsx)(C,{}):Object(h.jsx)(k,{products:c})]})},E=function(e){e.item;var t=e.stock,c=e.onAdd,n=Object(a.useState)(1),s=Object(d.a)(n,2),i=s[0],r=s[1],o=function(e){return function(){e&&i<t?r(i+1):!e&&i>1&&r(i-1)}};return Object(h.jsx)("div",{children:Object(h.jsxs)("div",{className:"row",children:[Object(h.jsxs)("div",{className:"d-grid gap-2 d-md-block itemcount col-lg-4 col-md-6",children:[Object(h.jsx)("button",{onClick:o(!1),className:"btncount btn-productos",type:"button",children:Object(h.jsx)(N.a,{icon:y.c})}),Object(h.jsx)("h5",{children:i}),Object(h.jsx)("button",{onClick:o(!0),className:"btncount btn-productos",type:"button",children:Object(h.jsx)(N.a,{icon:y.d})})]}),Object(h.jsx)("div",{className:"col-lg-8 col-md-6",children:Object(h.jsx)("button",{onClick:c(i),className:"btn btn-productos btn-lg px-4 gap-3 margintop btn-endshop",children:"A\xf1adir al carrito"})})]})})},I=(c(62),function(e){var t=e.count;return Object(h.jsxs)("div",{children:[Object(h.jsx)(r.b,{to:"/cart",children:Object(h.jsx)("button",{className:"btn btn-carrito btn-lg px-4 gap-3 btn-endshop",children:"ir al carrito"})}),Object(h.jsx)(r.b,{to:"/",children:Object(h.jsx)("button",{className:"btn btn-productos btn-lg px-4 mx-3 gap-3 btn-endshop",children:"Seguir comprando"})}),Object(h.jsxs)("div",{class:"alert alert-success d-flex align-items-center",role:"alert",children:[Object(h.jsx)(N.a,{icon:y.a}),Object(h.jsx)("div",{children:Object(h.jsxs)("p",{children:["A\xf1adiste ",t," \xedtem/s al carrito"]})}),Object(h.jsx)("button",{type:"button",class:"btn-close","data-bs-dismiss":"alert","aria-label":"Close"})]})]})}),D=function(e){var t=e.animalDetail,c=e.initial,a=e.categories,n=e.onAdd,s=e.clicked;return Object(h.jsx)("div",{className:"card mb-3 productDetail margin container mb-3",children:Object(h.jsxs)("div",{className:"row g-0",children:[Object(h.jsxs)("div",{className:"col-md-3 col-lg-2 card-body",children:[Object(h.jsx)("h5",{children:"CATEGOR\xcdAS"}),Object(h.jsx)("ul",{className:"productDetail productList",children:Object(h.jsx)("div",{children:a.map((function(e){return Object(h.jsx)("li",{className:"productList",children:Object(h.jsx)(r.b,{to:"/categoria/".concat(e.slug),children:e.name})},e.slug)}))})})]}),Object(h.jsx)("div",{className:"col-md-4 col-lg-5 padding-side",children:Object(h.jsx)("img",{src:t.pictureUrl,className:"img-fluid rounded-start",alt:t.name})}),Object(h.jsx)("div",{className:"col-md-5 col-lg-5",children:Object(h.jsxs)("div",{className:"card-body",children:[Object(h.jsx)("h4",{className:"card-title",children:t.name}),Object(h.jsx)("p",{className:"card-text",children:t.description}),Object(h.jsxs)("h3",{children:["$ ",t.price]}),Object(h.jsxs)("p",{className:"productDetailStock",children:["Stock disponible: ",t.stock]}),Object(h.jsx)("div",{className:"row countrow",children:s?Object(h.jsx)(I,{}):Object(h.jsx)(E,{initial:c,stock:t.stock,onAdd:n,clicked:s})})]})})]})})},T=function(e){e.item;var t=Object(a.useState)(!0),c=Object(d.a)(t,2),n=c[0],s=c[1],i=Object(a.useState)({}),r=Object(d.a)(i,2),j=r[0],b=r[1],u=Object(a.useState)([]),x=Object(d.a)(u,2),p=x[0],f=x[1],g=Object(o.f)().id,v=O().addItem,N=Object(a.useState)(!1),y=Object(d.a)(N,2),w=y[0],k=y[1];return Object(a.useEffect)((function(){m().collection("items").doc(g).get().then((function(e){b(Object(l.a)({id:e.id},e.data())),s(!1)})).catch((function(e){return console.log(e)})).finally((function(){s(!1)}))}),[g]),Object(a.useEffect)((function(){m().collection("categorias").get().then((function(e){0!==e.size&&(f(e.docs.map((function(e){return Object(l.a)({id:e.id},e.data())}))),s(!1))})).catch((function(e){return console.log(e)})).finally((function(){s(!1)}))}),[]),Object(h.jsx)("div",{className:"container px-4 my-5 text-center",children:n?Object(h.jsx)(C,{}):Object(h.jsx)(D,{animalDetail:j,categories:p,onAdd:function(e){return function(){v(j,e),k(!0)}},clicked:w})})},A=(c(63),function(){var e=O(),t=e.clearCart,c=e.cart,a=e.removeItem,n=0;return Object(h.jsxs)("div",{children:[Object(h.jsxs)("table",{class:"table table-striped table-hover cartlistcontainer",children:[Object(h.jsx)("thead",{children:Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{scope:"col",children:"#"}),Object(h.jsx)("th",{scope:"col",children:"Nombre"}),Object(h.jsx)("th",{scope:"col",children:"Cantidad"}),Object(h.jsx)("th",{scope:"col",children:"Precio"}),Object(h.jsx)("th",{scope:"col",children:"Total por unidad"}),Object(h.jsx)("th",{scope:"col"})]})}),Object(h.jsx)("tbody",{children:c.map((function(e){return Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:Object(h.jsx)("img",{src:e.item.pictureUrl,alt:e.item.name})}),Object(h.jsx)("td",{children:e.item.name}),Object(h.jsx)("td",{children:e.qty}),Object(h.jsx)("td",{children:e.item.price}),Object(h.jsx)("td",{children:e.item.price*e.qty}),Object(h.jsx)("td",{children:Object(h.jsx)("button",{className:"btn-trash",onClick:function(){return a(e.item.id,e.qty)},children:Object(h.jsx)(N.a,{icon:y.e})})})]})}))}),Object(h.jsx)("tfoot",{children:Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{scope:"col"}),Object(h.jsx)("th",{scope:"col"}),Object(h.jsx)("th",{scope:"col",children:Object(h.jsx)("div",{className:"d-print-none",children:c.map((function(e){return n=e.item.price*e.qty+n}))})}),Object(h.jsx)("th",{scope:"col",children:"Total"}),Object(h.jsxs)("th",{scope:"col",children:["$ ",n]}),Object(h.jsx)("th",{scope:"col"})]})})]}),Object(h.jsxs)("div",{className:"d-flex justify-content-evenly",children:[Object(h.jsx)("div",{children:Object(h.jsx)("button",{type:"button",onClick:t,className:"btn btn-carrito btn-lg px-4 gap-3 centrar","data-bs-container":"body","data-bs-toggle":"popover","data-bs-placement":"top","data-bs-content":"Top popover",children:"Borrar productos"})}),Object(h.jsx)("div",{children:Object(h.jsx)(r.b,{to:"/",children:Object(h.jsx)("button",{type:"button",className:"btn btn-productos btn-lg px-4 gap-3 centrar","data-bs-container":"body","data-bs-toggle":"popover","data-bs-placement":"top","data-bs-content":"Top popover",children:"seguir comprando"})})})]})]})}),B=function(){var e=O().cart;return Object(h.jsxs)(h.Fragment,{children:[0===e.length&&Object(h.jsxs)("div",{className:"row cart",children:[Object(h.jsx)("img",{src:"https://i.gifer.com/XSNt.gif",alt:"No hay nada en tu carrito"}),Object(h.jsx)("h3",{children:"No hay nada en tu carrito"}),Object(h.jsx)(r.b,{to:"/",children:Object(h.jsx)("button",{type:"button",className:"btn btn-productos btn-lg px-4 gap-3","data-bs-container":"body","data-bs-toggle":"popover","data-bs-placement":"top","data-bs-content":"Top popover",children:"Ver productos"})})]}),e.length>0&&Object(h.jsxs)("div",{className:"container",children:[Object(h.jsx)(A,{}),Object(h.jsx)(r.b,{to:"/checkout",children:Object(h.jsx)("button",{className:"btn btn-productos btn-lg px-4 gap-3",children:"completar compra"})})]})]})},q=c(27),z=function(e){var t=e.formData,c=e.setFormData,a=e.inputs,n=e.handleSubmit;return Object(h.jsx)("div",{className:"form",children:Object(h.jsxs)("form",{onSubmit:n,onChange:function(e){c(Object(l.a)(Object(l.a)({},t),{},Object(q.a)({},e.target.name,e.target.value)))},children:[a.map((function(e){return Object(h.jsxs)("div",{className:"mt-3",children:[Object(h.jsx)("label",{children:e.label}),Object(h.jsx)("input",{className:"form-control",id:e.id,type:e.type,name:e.name,placeholder:e.placeholder,value:e.value})]})})),Object(h.jsx)("div",{className:"mt-5",children:Object(h.jsx)("button",{id:"purchase",className:"btn btn-productos",children:"confirmar compra"})})]})})},F=function(){var e=Object(a.useState)({}),t=Object(d.a)(e,2),c=t[0],n=t[1],s=O(),i=s.clearCart,o=s.cart,l=Object(a.useState)([]),b=Object(d.a)(l,2),u=b[0],x=b[1],p=0,f=Object(a.useState)(P),g=Object(d.a)(f,2),v=g[0],N=g[1],y=[{type:"text",id:"name",name:"name",placeholder:"ingrese su nombre",value:v.name,label:"Nombre"},{type:"text",id:"lastname",name:"lastname",placeholder:"ingrese su apellido",value:v.lastname,label:"Apellido"},{type:"text",id:"phone",name:"phone",placeholder:"ingrese su telefono",value:v.phone,label:"N\xfamero de tel\xe9fono"},{type:"email",id:"email",name:"email",placeholder:"ingrese su email",value:v.email,label:"Email"},{type:"email",id:"emailconfirmation",name:"emailconfirmation",placeholder:"reingrese su email",label:"Confirm\xe1 tu email"}];return Object(h.jsxs)("div",{children:[o.length>0&&Object(h.jsx)(z,{formData:v,setFormData:N,initialState:P,total:0,inputs:y,handleSubmit:function(e){if(e.preventDefault(),document.getElementById("email").value===document.getElementById("emailconfirmation").value&&""!==document.getElementById("name").value&&""!==document.getElementById("lastname").value&&""!==document.getElementById("phone").value){var t={date:j.a.firestore.Timestamp.fromDate(new Date),buyer:v,item:o,total:0};m().collection("order").add(t).then((function(e){return n(e)})).catch((function(e){return console.log(e)})).finally(N(P),x(o),i())}else alert("Por favor revise los datos")}}),0===o.length&&Object(h.jsx)("div",{className:"cartlistcontainer",children:Object(h.jsxs)("div",{children:[Object(h.jsx)("h1",{children:"Gracias por tu compra."}),Object(h.jsx)("h2",{children:"Tu n\xfamero de orden es:"}),Object(h.jsx)("h3",{children:c.id}),Object(h.jsx)("h4",{className:"mt-5",children:"Resumen de compra"}),u.map((function(e){return Object(h.jsxs)("div",{className:"centrar mt-3",children:[Object(h.jsx)("div",{children:Object(h.jsx)("p",{children:e.qty})}),Object(h.jsx)("div",{className:"mx-3",children:Object(h.jsx)("p",{children:e.item.name})}),Object(h.jsx)("div",{children:Object(h.jsx)("p",{children:e.item.price})})]})})),Object(h.jsx)("div",{className:"d-print-none",children:u.map((function(e){return p=e.item.price*e.qty+p}))}),Object(h.jsxs)("h3",{className:"mt-3",children:["Total: $",p]}),Object(h.jsx)("div",{className:"mt-5",children:Object(h.jsx)(r.b,{to:"/",children:Object(h.jsx)("button",{type:"button",className:"btn btn-productos btn-lg px-4 gap-3 centrar","data-bs-container":"body","data-bs-toggle":"popover","data-bs-placement":"top","data-bs-content":"Top popover",children:"volver al inicio"})})})]})})]})},P={name:"",lastname:"",phone:"",emai:""};var L=function(){return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)(p,{children:Object(h.jsxs)(r.a,{children:[Object(h.jsx)(g,{}),Object(h.jsxs)(o.c,{children:[Object(h.jsx)(o.a,{exact:!0,path:"/",component:S}),Object(h.jsx)(o.a,{exact:!0,path:"/categoria/:slug",component:S}),Object(h.jsx)(o.a,{exact:!0,path:"/animales/:id",component:T}),Object(h.jsx)(o.a,{exact:!0,path:"/cart",component:B}),Object(h.jsx)(o.a,{exact:!0,path:"/checkout",component:F})]})]})})})},U=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,65)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,s=t.getLCP,i=t.getTTFB;c(e),a(e),n(e),s(e),i(e)}))};i.a.render(Object(h.jsx)(n.a.StrictMode,{children:Object(h.jsx)(L,{})}),document.getElementById("root")),U()}},[[64,1,2]]]);
//# sourceMappingURL=main.185216ad.chunk.js.map