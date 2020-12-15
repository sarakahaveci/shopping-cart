(this["webpackJsonpshopping-cart"]=this["webpackJsonpshopping-cart"]||[]).push([[0],{10:function(e,t,a){e.exports=a(22)},15:function(e,t,a){},22:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(3),l=a.n(c),o=(a(15),a(2)),u=Object(o.b)((function(e){return{amount:e.amount}}))((function(e){var t=e.amount;return r.a.createElement("nav",null,r.a.createElement("div",{className:"nav-center"},r.a.createElement("h3",null,"Shopping bag"),r.a.createElement("div",{className:"nav-container"},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},r.a.createElement("path",{d:"M16 6v2h2l2 12H0L2 8h2V6a6 6 0 1 1 12 0zm-2 0a4 4 0 1 0-8 0v2h8V6zM4 10v2h2v-2H4zm10 0v2h2v-2h-2z"})),r.a.createElement("div",{className:"amount-container"},r.a.createElement("p",{className:"total-amount"},t)))))})),i=Object(o.b)(null,(function(e,t){var a=t.id,n=t.amount;return{remove:function(){return e(function(e){return{type:"REMOVE",payload:{id:e}}}(a))},increase:function(){return e({type:"INCREASE",payload:{id:a}})},decrease:function(){return e({type:"DECREASE",payload:{id:a,amount:n}})},toggle:function(t){return e({type:"TOGGLE_AMOUNT",payload:{id:a,toggle:t}})}}}))((function(e){var t=e.thumbnail,a=e.title,n=e.price,c=e.format,l=e.shipping,o=e.amount,u=e.remove,i=(e.increase,e.decrease,e.toggle);return r.a.createElement("div",{className:"cart-item"},r.a.createElement("img",{src:t,alt:a}),r.a.createElement("div",null,r.a.createElement("h4",null,a),r.a.createElement("h4",{className:"item-price"},"$",n),r.a.createElement("h4",null,c),r.a.createElement("h4",null,l),r.a.createElement("button",{className:"remove-btn",onClick:function(){return u()}},"remove")),r.a.createElement("div",null,r.a.createElement("button",{className:"amount-btn",onClick:function(){return i("inc")}},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},r.a.createElement("path",{d:"M10.707 7.05L10 6.343 4.343 12l1.414 1.414L10 9.172l4.243 4.242L15.657 12z"}))),r.a.createElement("p",{className:"amount"},o),r.a.createElement("button",{className:"amount-btn",onClick:function(){return 1===o?u():i("dec")}},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},r.a.createElement("path",{d:"M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"})))))}));var m=Object(o.b)((function(e){return{cart:e.cart,total:e.total}}))((function(e){var t=e.cart,a=void 0===t?[]:t,n=e.total,c=e.dispatch;return r.a.useEffect((function(){c({type:"GET_TOTALS"})}),[a,c]),0===a.length?r.a.createElement("section",{className:"cart"},r.a.createElement("header",null,r.a.createElement("h2",null,"your bag"),r.a.createElement("h4",{className:"empty-cart"},"is currently empty"))):r.a.createElement("section",{className:"cart"},r.a.createElement("header",null,r.a.createElement("h2",null,"your bag")),r.a.createElement("article",null,a.map((function(e){return r.a.createElement(i,Object.assign({key:e.id},e))}))),r.a.createElement("footer",null,r.a.createElement("hr",null),r.a.createElement("div",{className:"cart-total"},r.a.createElement("h4",null,"total ",r.a.createElement("span",null,"$",n))),r.a.createElement("button",{className:"btn clear-btn",onClick:function(){return c({type:"CLEAR_CART"})}},"clear cart")))})),s=a(4),E=a(1),p={cart:[{id:28397290283,name:"Thinking, Fast and Slow",author:"Daniel Kahneman",thumbnail:"https://kbimages1-a.akamaihd.net/ec0ea1e4-af21-4129-91d4-f3c78766af67/180/1000/False/thinking-fast-and-slow.jpg",format:"Digital",price:9.99,shipping:0,amount:1},{id:38293817381,name:"Homo Deus: A Brief History of Tomorrow",author:"Yuval Noah Harari",thumbnail:"https://i.ebayimg.com/images/g/SkAAAOSwCEFdyN1W/s-l640.jpg",format:"Paperback",price:13.5,shipping:2.99,amount:1}],total:0,amount:0};var d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;if("CLEAR_CART"===t.type)return Object(E.a)(Object(E.a)({},e),{},{cart:[]});if("DECREASE"===t.type){var a=e.cart.map((function(e){return e.id===t.payload.id&&(e=Object(E.a)(Object(E.a)({},e),{},{amount:e.amount-1})),e}));return Object(E.a)(Object(E.a)({},e),{},{cart:a})}if("INCREASE"===t.type){var n=e.cart.map((function(e){return e.id===t.payload.id&&(e=Object(E.a)(Object(E.a)({},e),{},{amount:e.amount+1})),e}));return Object(E.a)(Object(E.a)({},e),{},{cart:n})}if("REMOVE"===t.type)return Object(E.a)(Object(E.a)({},e),{},{cart:e.cart.filter((function(e){return e.id!==t.payload.id}))});if("GET_TOTALS"===t.type){var r=e.cart.reduce((function(e,t){var a=t.price,n=t.amount,r=a*n;return e.total+=r,e.amount+=n,e}),{total:0,amount:0}),c=r.total,l=r.amount;return c=parseFloat(c.toFixed(2)),Object(E.a)(Object(E.a)({},e),{},{total:c,amount:l})}return"TOGGLE_AMOUNT"===t.type?Object(E.a)(Object(E.a)({},e),{},{cart:e.cart.map((function(e){if(e.id===t.payload.id){if("inc"===t.payload.toggle)return Object(E.a)(Object(E.a)({},e),{},{amount:e.amount+1});if("dec"===t.payload.toggle)return Object(E.a)(Object(E.a)({},e),{},{amount:e.amount-1})}return e}))}):e},b=Object(s.b)(d,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());var h=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(o.a,{store:b},r.a.createElement(u,null),r.a.createElement(m,null)))};l.a.render(r.a.createElement(h,null),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.d2cde4f8.chunk.js.map