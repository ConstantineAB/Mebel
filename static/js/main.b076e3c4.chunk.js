(this["webpackJsonptesla-website"]=this["webpackJsonptesla-website"]||[]).push([[0],{100:function(e,t,c){},101:function(e,t,c){},102:function(e,t,c){"use strict";c.r(t);var i=c(1),n=c.n(i),r=c(22),a=c.n(r),s=(c(76),c(37)),j=c(12),d=c(7),l=c(14),o=c(70),m=c(4),b=c.n(m),g=(c(80),c(2)),p=function(e){var t=e.onClick,c=e.type,i=e.children,n=e.size,r=void 0===n?"s":n,a=b()({btn:!0,"btn--secondary":"secondary"===c,"btn--primary":"primary"===c,"btn--small":"s"===r,"btn--medium":"m"===r});return Object(g.jsx)("button",{className:a,onClick:t,children:i})},u=c(45),h=Object(u.b)({name:"cart",initialState:{itemsInCart:[]},reducers:{setItemInCart:function(e,t){e.itemsInCart.push(t.payload)},deleteItemFromCart:function(e,t){e.itemsInCart=e.itemsInCart.filter((function(e){return e.id!==t.payload}))}}}),O=h.actions,x=O.setItemInCart,f=O.deleteItemFromCart,v=h.reducer,_=c(54),N=(c(82),function(e){var t=e.title,c=e.price,i=e.id,n=Object(l.b)();return Object(g.jsxs)("div",{className:"cart-item",children:[Object(g.jsxs)("span",{children:[t," "]}),Object(g.jsxs)("div",{className:"cart-item__price",children:[Object(g.jsxs)("span",{children:[c," \u0440\u0443\u0431."]}),Object(g.jsx)(_.a,{size:15,className:"cart-item__delete-icon",onClick:function(){n(f(i))}})]})]})}),y=function(e){return e.reduce((function(e,t){return e+t.price}),0)},C=(c(83),function(e){var t=e.onClick,c=Object(l.c)((function(e){return e.cart.itemsInCart}));return Object(g.jsxs)("div",{className:"cart-menu",children:[Object(g.jsx)("div",{className:"cart-menu__games-list",children:c.length>0?c.map((function(e){return Object(g.jsx)(N,{image:e.image,price:e.price,title:e.title,id:e.id},e.image)})):"\u041a\u043e\u0440\u0437\u0438\u043d\u0430 \u043f\u0443\u0441\u0442\u0430"}),c.length>0?Object(g.jsxs)("div",{className:"cart-menu__arrange",children:[Object(g.jsxs)("div",{className:"cart-menu__total-price",children:[Object(g.jsx)("span",{children:"\u0418\u0442\u043e\u0433\u043e:"}),Object(g.jsxs)("span",{children:[y(c)," \u0440\u0443\u0431."]})]}),Object(g.jsx)(p,{type:"primary",size:"m",onClick:t,children:"\u041e\u0444\u043e\u0440\u043c\u0438\u0442\u044c \u0437\u0430\u043a\u0430\u0437"})]}):null]})}),k=(c(84),function(e){var t=e.quantity,c=void 0===t?0:t;return c>0?Object(g.jsx)("div",{color:"#000",className:"items-in-cart",children:c}):null}),I=(c(85),function(){var e=Object(i.useState)(!1),t=Object(d.a)(e,2),c=t[0],n=t[1],r=Object(l.c)((function(e){return e.cart.itemsInCart})),a=Object(j.f)(),s=y(r),m=Object(i.useCallback)((function(){n(!1),a.push("/order")}),[a]);return Object(g.jsxs)("div",{className:"cart-block",children:[Object(g.jsx)(k,{quantity:r.length}),Object(g.jsx)(o.a,{color:"#000",size:25,className:"cart-icon",onClick:function(){return n(!c)}}),s>0?Object(g.jsxs)("span",{className:"total-price",children:[s," \u0440\u0443\u0431."]}):null,c&&Object(g.jsx)(C,{onClick:m})]})}),w=(c(87),function(){return Object(g.jsx)(g.Fragment,{children:Object(g.jsxs)("div",{className:"header",children:[Object(g.jsx)("div",{className:"wrapper",children:Object(g.jsx)(s.b,{to:"/",className:"header__store-title",children:"\u041f\u043e\u043f\u0443\u043b\u044f\u0440\u043d\u044b\u0435 \u0442\u043e\u0432\u0430\u0440\u044b"})}),Object(g.jsx)("div",{className:"wrapper header__cart-btn-wrapper",children:Object(g.jsx)(I,{})})]})})}),z=c(108),F=c(113),B=c(112),L=(c(88),function(e){var t=e.genre,c=void 0===t?"":t;return Object(g.jsx)("span",{className:"game-genre",children:c})}),T=(c(89),function(e){var t=e.game,c=Object(l.b)(),i=Object(l.c)((function(e){return e.cart.itemsInCart})).some((function(e){return e.id===t.id}));return Object(g.jsxs)("div",{className:"game-buy",children:[Object(g.jsxs)("span",{className:"game-buy__price",children:[t.price," \u0440\u0443\u0431."]}),Object(g.jsx)(p,{color:"#000",type:i?"secondary":"primary",onClick:function(e){e.stopPropagation(),c(i?f(t.id):x(t))},children:i?"\u0423\u0431\u0440\u0430\u0442\u044c \u0438\u0437 \u043a\u043e\u0440\u0437\u0438\u043d\u044b":"\u0412 \u041a\u043e\u0440\u0437\u0438\u043d\u0443"})]})}),G=(c(90),function(e){var t=e.image,c=void 0===t?"":t;return Object(g.jsx)("div",{className:"game-cover",style:{backgroundImage:"url(".concat(c,")")}})}),S=Object(u.b)({name:"games",initialState:{currentGame:null},reducers:{setCurrentGame:function(e,t){e.currentGame=t.payload}}}),D=S.actions.setCurrentGame,P=S.reducer,q=(c(91),function(e){var t=e.game,c=Object(j.f)(),i=Object(l.b)();return Object(g.jsx)(g.Fragment,{children:Object(g.jsxs)("div",{className:"game-item",onClick:function(){i(D(t)),c.push("/app/".concat(t.title))},children:[Object(g.jsx)(G,{image:t.image}),Object(g.jsxs)("div",{className:"game-item__details",children:[Object(g.jsx)("span",{className:"game-item__title",children:t.title}),Object(g.jsx)("div",{className:"game-item__genre",children:t.genres.map((function(e){return Object(g.jsx)(L,{genre:e},e)}))}),Object(g.jsx)("div",{className:"game-item__buy",children:Object(g.jsx)(T,{game:t})})]})]})})}),J=(c(36),c(68),c.p+"static/media/vann.4a919722.jpg"),A=c.p+"static/media/meg.823fa3cd.jpg",E=(c.p,c.p+"static/media/of.387b9930.jpg"),M=(c.p,c.p+"static/media/bez.195652db.jpg"),Y=(c(92),function(){return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsxs)(z.a,{children:[Object(g.jsxs)(F.a,{children:[Object(g.jsx)(B.a.Link,{href:"/bath",children:Object(g.jsx)(F.a.Img,{variant:"top",src:J})}),Object(g.jsx)(F.a.Body,{children:Object(g.jsx)(F.a.Title,{children:"\u0422\u0443\u0430\u043b\u0435\u0442, \u0432\u0430\u043d\u043d\u0430"})})]}),Object(g.jsxs)(F.a,{children:[Object(g.jsx)(B.a.Link,{href:"/soft",children:Object(g.jsx)(F.a.Img,{variant:"top",src:A})}),Object(g.jsx)(F.a.Body,{children:Object(g.jsx)(F.a.Title,{children:"\u041c\u044f\u0433\u043a\u0430\u044f \u043c\u0435\u0431\u0435\u043b\u044c"})})]})]}),Object(g.jsxs)(z.a,{children:[Object(g.jsxs)(F.a,{children:[Object(g.jsx)(B.a.Link,{href:"/office",children:Object(g.jsx)(F.a.Img,{variant:"top",src:E})}),Object(g.jsx)(F.a.Body,{children:Object(g.jsx)(F.a.Title,{children:"\u041e\u0444\u0438\u0441\u043d\u0430\u044f \u043c\u0435\u0431\u0435\u043b\u044c"})})]}),Object(g.jsxs)(F.a,{children:[Object(g.jsx)(B.a.Link,{href:"/design",children:Object(g.jsx)(F.a.Img,{variant:"top",src:M})}),Object(g.jsx)(F.a.Body,{children:Object(g.jsx)(F.a.Title,{children:"\u0414\u0438\u0437\u0430\u0439\u043d\u0435\u0440\u0441\u043a\u0430\u044f \u043c\u0435\u0431\u0435\u043b\u044c"})})]})]})]})}),H=(c(95),function(){var e=Object(l.c)((function(e){return e.games.currentGame}));return e?Object(g.jsxs)("div",{className:"game-page",children:[Object(g.jsx)("h1",{className:"game-page__title",children:e.title}),Object(g.jsxs)("div",{className:"game-page__content",children:[Object(g.jsx)("div",{className:"game-page__left",children:Object(g.jsx)("iframe",{width:"90%",height:"400px",src:e.video,title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"})}),Object(g.jsxs)("div",{className:"game-page__right",children:[Object(g.jsx)(G,{image:e.image}),Object(g.jsx)("p",{children:e.description}),Object(g.jsx)("p",{className:"secondary-text",children:"\u041f\u043e\u043f\u0443\u043b\u044f\u0440\u043d\u044b\u0435 \u043c\u0435\u0442\u043a\u0438 \u0434\u043b\u044f \u044d\u0442\u043e\u0433\u043e \u043f\u0440\u043e\u0434\u0443\u043a\u0442\u0430:"}),e.genres.map((function(e){return Object(g.jsx)(L,{genre:e},e)})),Object(g.jsx)("div",{className:"game-page__buy-game",children:Object(g.jsx)(T,{game:e})})]})]})]}):null}),K=(c(96),function(e){var t=e.game,c=Object(l.b)();return Object(g.jsxs)("div",{className:"order-item",children:[Object(g.jsx)("div",{className:"order-item__cover",children:Object(g.jsx)(G,{image:t.image})}),Object(g.jsx)("div",{className:"order-item__title",children:Object(g.jsxs)("span",{children:[" ",t.title," "]})}),Object(g.jsxs)("div",{className:"order-item__price",children:[Object(g.jsxs)("span",{children:[t.price," \u0440\u0443\u0431."]}),Object(g.jsx)(_.a,{size:25,className:"cart-item__delete-icon",onClick:function(){c(f(t.id))}})]})]})}),Q=(c(97),function(){var e,t,c=Object(l.c)((function(e){return e.cart.itemsInCart}));return c.length<1?Object(g.jsx)("h1",{children:"\u0412\u0430\u0448\u0430 \u043a\u043e\u0440\u0437\u0438\u043d\u0430 \u043f\u0443\u0441\u0442\u0430!"}):Object(g.jsxs)("div",{className:"order-page",children:[Object(g.jsx)("div",{className:"order-page__left",children:c.map((function(e){return Object(g.jsx)(K,{game:e})}))}),Object(g.jsx)("div",{className:"order-page__right",children:Object(g.jsx)("div",{className:"order-page__total-price",children:Object(g.jsxs)("span",{children:[c.length," ",(e=c.length,t=["\u0442\u043e\u0432\u0430\u0440","\u0442\u043e\u0432\u0430\u0440\u0430","\u0442\u043e\u0432\u0430\u0440\u043e\u0432"],e>100&&(e%=100),e<=20&&e>=10?t[2]:(e>20&&(e%=10),1===e?t[0]:e>1&&e<5?t[1]:t[2]))," \u043d\u0430 \u0441\u0443\u043c\u043c\u0443 ",y(c)," \u0440\u0443\u0431."]})})})]})}),R=Object(u.a)({reducer:{games:P,cart:v}}),U=c(111),V=c(109),W=c(110),X=function(){return Object(g.jsx)(U.a,{bg:"light",expand:"lg",children:Object(g.jsxs)(V.a,{children:[Object(g.jsx)(U.a.Brand,{href:"/",children:"\u041c\u0435\u0431\u0435\u043b\u044c\u0431\u0435\u0441\u0442"}),Object(g.jsx)(U.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(g.jsx)(U.a.Collapse,{id:"basic-navbar-nav",children:Object(g.jsxs)(B.a,{className:"me-auto",children:[Object(g.jsx)(B.a.Link,{href:"/office",children:"\u041e\u0444\u0438\u0441\u043d\u0430\u044f \u043c\u0435\u0431\u0435\u043b\u044c"}),Object(g.jsx)(B.a.Link,{href:"/soft",children:"\u041c\u044f\u0433\u043a\u0430\u044f \u043c\u0435\u0431\u0435\u043b\u044c"}),Object(g.jsxs)(W.a,{title:"Dropdown",id:"basic-nav-dropdown",children:[Object(g.jsx)(W.a.Item,{href:"/bath",children:"\u0422\u0443\u0430\u043b\u0435\u0442, \u0432\u0430\u043d\u043d\u0430\u044f"}),Object(g.jsx)(W.a.Item,{href:"/design",children:"\u0414\u0438\u0437\u0430\u0439\u043d\u0435\u0440\u0441\u043a\u0430\u044f \u043c\u0435\u0431\u0435\u043b\u044c"}),Object(g.jsx)(W.a.Divider,{}),Object(g.jsx)(W.a.Item,{href:"/",children:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0430"})]})]})})]})})},Z=(c(98),[{image:"/game-covers/meg/_4.jpg",title:"\u041a\u0440\u0435\u0441\u043b\u043e-\u043c\u0435\u0448\u043e\u043a",genres:["\u041c\u044f\u0433\u043a\u0430\u044f \u043c\u0435\u0431\u0435\u043b\u044c"],price:2390,id:1,description:"\u0412\u043c\u0435\u0441\u0442\u0435 \u0441 \u044d\u0442\u0438\u043c \u043a\u0440\u0435\u0441\u043b\u043e\u043c \u043c\u0435\u0448\u043a\u043e\u043c \u0432\u044b \u0432\u0441\u0435\u0433\u0434\u0430 \u043d\u0430 \u043f\u0440\u0438\u0440\u043e\u0434\u0435! \u042d\u0442\u043e \u043f\u0443\u0444 \u0441\u0440\u0435\u0434\u043d\u0435\u0433\u043e, \u0443\u043d\u0438\u0432\u0435\u0440\u0441\u0430\u043b\u044c\u043d\u043e\u0433\u043e \u0440\u0430\u0437\u043c\u0435\u0440\u0430: \u043f\u043e\u0434\u043e\u0439\u0434\u0451\u0442 \u0438 \u0440\u0435\u0431\u0451\u043d\u043a\u0443, \u0438 \u0432\u0437\u0440\u043e\u0441\u043b\u043e\u043c\u0443. \u0422\u0430\u043a\u0438\u0435 \u043a\u0440\u0435\u0441\u043b\u0430 \u043e\u0447\u0435\u043d\u044c \u0443\u0434\u043e\u0431\u043d\u044b, \u0438 \u0432 \u0442\u043e \u0436\u0435 \u0432\u0440\u0435\u043c\u044f, \u043e\u043d\u0438 \u043d\u0435 \u0433\u0440\u043e\u043c\u043e\u0437\u0434\u043a\u0438\u0435."},{image:"/game-covers/meg/7264633.jpg",title:"\u0414\u0438\u0432\u0430\u043d \u0443\u0433\u043b\u043e\u0432\u043e\u0439",genres:["\u041c\u044f\u0433\u043a\u0430\u044f \u043c\u0435\u0431\u0435\u043b\u044c"],price:27900,id:2,description:"\u041f\u043e\u0441\u043b\u0435 \u043a\u043e\u043c\u0444\u043e\u0440\u0442\u043d\u043e\u0433\u043e \u043d\u043e\u0447\u043d\u043e\u0433\u043e \u0441\u043d\u0430 \u0432\u0430\u0448\u0430 \u0441\u043f\u0430\u043b\u044c\u043d\u044f \u0438\u043b\u0438 \u043a\u043e\u043c\u043d\u0430\u0442\u0430 \u0434\u043b\u044f \u0433\u043e\u0441\u0442\u0435\u0439 \u043c\u043e\u0436\u0435\u0442 \u043b\u0435\u0433\u043a\u043e \u043f\u0440\u0435\u0432\u0440\u0430\u0442\u0438\u0442\u044c\u0441\u044f \u0432 \u0433\u043e\u0441\u0442\u0438\u043d\u0443\u044e. \u0412 \u043e\u0442\u0434\u0435\u043b\u0435\u043d\u0438\u0438 \u0434\u043b\u044f \u0445\u0440\u0430\u043d\u0435\u043d\u0438\u044f \u0434\u043e\u0441\u0442\u0430\u0442\u043e\u0447\u043d\u043e \u043c\u0435\u0441\u0442\u0430, \u0447\u0442\u043e\u0431\u044b \u0443\u0431\u0440\u0430\u0442\u044c \u043f\u043e\u0441\u0442\u0435\u043b\u044c\u043d\u044b\u0435 \u043f\u0440\u0438\u043d\u0430\u0434\u043b\u0435\u0436\u043d\u043e\u0441\u0442\u0438."},{image:"/game-covers/meg/i.webp",title:"\u041a\u0440\u0435\u0441\u043b\u043e \u0440\u0430\u0441\u043a\u043b\u0430\u0434\u043d\u043e\u0435",genres:["\u041c\u044f\u0433\u043a\u0430\u044f \u043c\u0435\u0431\u0435\u043b\u044c"],price:15900,id:3,description:"\u041f\u043e\u0441\u043b\u0435 \u043a\u043e\u043c\u0444\u043e\u0440\u0442\u043d\u043e\u0433\u043e \u043d\u043e\u0447\u043d\u043e\u0433\u043e \u0441\u043d\u0430 \u0432\u0430\u0448\u0430 \u0441\u043f\u0430\u043b\u044c\u043d\u044f \u0438\u043b\u0438 \u043a\u043e\u043c\u043d\u0430\u0442\u0430 \u0434\u043b\u044f \u0433\u043e\u0441\u0442\u0435\u0439 \u043c\u043e\u0436\u0435\u0442 \u043b\u0435\u0433\u043a\u043e \u043f\u0440\u0435\u0432\u0440\u0430\u0442\u0438\u0442\u044c\u0441\u044f \u0432 \u0433\u043e\u0441\u0442\u0438\u043d\u0443\u044e. \u0412 \u043e\u0442\u0434\u0435\u043b\u0435\u043d\u0438\u0438 \u0434\u043b\u044f \u0445\u0440\u0430\u043d\u0435\u043d\u0438\u044f \u0434\u043e\u0441\u0442\u0430\u0442\u043e\u0447\u043d\u043e \u043c\u0435\u0441\u0442\u0430, \u0447\u0442\u043e\u0431\u044b \u0443\u0431\u0440\u0430\u0442\u044c \u043f\u043e\u0441\u0442\u0435\u043b\u044c\u043d\u044b\u0435 \u043f\u0440\u0438\u043d\u0430\u0434\u043b\u0435\u0436\u043d\u043e\u0441\u0442\u0438."},{image:"/game-covers/meg/kreslo_shihan_1.png",title:"\u041a\u0440\u0435\u0441\u043b\u043e",genres:["\u041c\u044f\u0433\u043a\u0430\u044f \u043c\u0435\u0431\u0435\u043b\u044c"],price:13900,id:4,description:"\u041f\u0440\u0435\u043a\u0440\u0430\u0441\u043d\u043e \u0441\u043c\u043e\u0442\u0440\u0438\u0442\u0441\u044f \u0441\u043e \u0432\u0441\u0435\u0445 \u0441\u0442\u043e\u0440\u043e\u043d \u2014 \u043c\u043e\u0436\u043d\u043e \u043f\u043e\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u0432 \u0441\u0435\u0440\u0435\u0434\u0438\u043d\u0435 \u043a\u043e\u043c\u043d\u0430\u0442\u044b."},{image:"/game-covers/meg/photo.jpg",title:'\u0414\u0438\u0432\u0430\u043d \u0443\u0433\u043b\u043e\u0432\u043e\u0439 "luxury"',genres:["\u041c\u044f\u0433\u043a\u0430\u044f \u043c\u0435\u0431\u0435\u043b\u044c"],price:47900,id:5,description:"\u041f\u043e\u0441\u043b\u0435 \u043a\u043e\u043c\u0444\u043e\u0440\u0442\u043d\u043e\u0433\u043e \u043d\u043e\u0447\u043d\u043e\u0433\u043e \u0441\u043d\u0430 \u0432\u0430\u0448\u0430 \u0441\u043f\u0430\u043b\u044c\u043d\u044f \u0438\u043b\u0438 \u043a\u043e\u043c\u043d\u0430\u0442\u0430 \u0434\u043b\u044f \u0433\u043e\u0441\u0442\u0435\u0439 \u043c\u043e\u0436\u0435\u0442 \u043b\u0435\u0433\u043a\u043e \u043f\u0440\u0435\u0432\u0440\u0430\u0442\u0438\u0442\u044c\u0441\u044f \u0432 \u0433\u043e\u0441\u0442\u0438\u043d\u0443\u044e."}]),$=function(){return Object(g.jsx)("div",{className:"home-page",children:Z.map((function(e){return Object(g.jsx)(q,{game:e},e.id)}))})},ee=(c(99),[{image:"/game-covers/office-page/table.jpg",title:"\u0421\u0442\u043e\u043b",genres:["\u041e\u0444\u0438\u0441\u043d\u0430\u044f \u043c\u0435\u0431\u0435\u043b\u044c"],price:19800,id:1,description:"..."},{image:"/game-covers/office-page/table-2.jpg",title:"\u0421\u0442\u043e\u043b \u0440\u0430\u0441\u043a\u043b\u0430\u0434\u043d\u043e\u0439",genres:["\u041e\u0444\u0438\u0441\u043d\u0430\u044f \u043c\u0435\u0431\u0435\u043b\u044c"],price:29700,id:2,description:"..."},{image:"/game-covers/office-page/chair.jpg",title:"\u041a\u043e\u043c\u043f\u044c\u044e\u0442\u0435\u0440\u043d\u043e\u0435 \u043a\u0440\u0435\u0441\u043b\u043e",genres:["\u041e\u0444\u0438\u0441\u043d\u0430\u044f \u043c\u0435\u0431\u0435\u043b\u044c"],price:12500,id:3,description:"..."},{image:"/game-covers/office-page/sofa.webp",title:"\u0414\u0438\u0432\u0430\u043d \u043e\u0444\u0438\u0441\u043d\u044b\u0439",genres:["\u041e\u0444\u0438\u0441\u043d\u0430\u044f \u043c\u0435\u0431\u0435\u043b\u044c"],price:25900,id:4,description:"..."},{image:"/game-covers/office-page/chair-2.jpg",title:"\u041e\u0444\u0438\u0441\u043d\u043e\u0435 \u043a\u0440\u0435\u0441\u043b\u043e",genres:["\u041e\u0444\u0438\u0441\u043d\u0430\u044f \u043c\u0435\u0431\u0435\u043b\u044c"],price:17900,id:5,description:"..."}]),te=function(){return Object(g.jsx)("div",{className:"home-page",children:ee.map((function(e){return Object(g.jsx)(q,{game:e},e.id)}))})},ce=(c(100),[{image:"/game-covers/dez/ct.jpg",title:"\u0421\u0442\u0443\u043b",genres:["\u0414\u0438\u0437\u0430\u0439\u043d\u0435\u0440\u0441\u043a\u0430\u044f \u043c\u0435\u0431\u0435\u043b\u044c"],price:20500,id:1,description:"..."},{image:"/game-covers/dez/dfjg.jpg",title:"\u041a\u0440\u043e\u0432\u0430\u0442\u044c \u043a\u0430\u0447\u0430\u043b\u043a\u0430",genres:["\u0414\u0438\u0437\u0430\u0439\u043d\u0435\u0440\u0441\u043a\u0430\u044f \u043c\u0435\u0431\u0435\u043b\u044c"],price:47900,id:2,description:"..."},{image:"/game-covers/dez/dflk.jpg",title:"\u041a\u0440\u0435\u0441\u043b\u043e",genres:["\u0414\u0438\u0437\u0430\u0439\u043d\u0435\u0440\u0441\u043a\u0430\u044f \u043c\u0435\u0431\u0435\u043b\u044c"],price:19900,id:3,description:"..."},{image:"/game-covers/dez/dfpogi.jpg",title:"\u0421\u0442\u043e\u043b\u0438\u043a",genres:["\u0414\u0438\u0437\u0430\u0439\u043d\u0435\u0440\u0441\u043a\u0430\u044f \u043c\u0435\u0431\u0435\u043b\u044c"],price:16900,id:4,description:"..."},{image:"/game-covers/dez/sfoig.jpg",title:"\u041a\u0440\u043e\u0432\u0430\u0442\u044c \u043a\u043e\u0440\u0437\u0438\u043d\u0430",genres:["\u0414\u0438\u0437\u0430\u0439\u043d\u0435\u0440\u0441\u043a\u0430\u044f \u043c\u0435\u0431\u0435\u043b\u044c"],price:45900,id:5,description:"\u041f\u043e\u0441\u043b\u0435 \u043a\u043e\u043c\u0444\u043e\u0440\u0442\u043d\u043e\u0433\u043e \u043d\u043e\u0447\u043d\u043e\u0433\u043e \u0441\u043d\u0430 \u0432\u0430\u0448\u0430 \u0441\u043f\u0430\u043b\u044c\u043d\u044f \u0438\u043b\u0438 \u043a\u043e\u043c\u043d\u0430\u0442\u0430 \u0434\u043b\u044f \u0433\u043e\u0441\u0442\u0435\u0439 \u043c\u043e\u0436\u0435\u0442 \u043b\u0435\u0433\u043a\u043e \u043f\u0440\u0435\u0432\u0440\u0430\u0442\u0438\u0442\u044c\u0441\u044f \u0432 \u0433\u043e\u0441\u0442\u0438\u043d\u0443\u044e."}]),ie=function(){return Object(g.jsx)("div",{className:"home-page",children:ce.map((function(e){return Object(g.jsx)(q,{game:e},e.id)}))})},ne=(c(101),[{image:"/game-covers/vann/cran.jpg",title:"\u041a\u0440\u0430\u043d",genres:["\u041c\u044f\u0433\u043a\u0430\u044f \u043c\u0435\u0431\u0435\u043b\u044c"],price:5390,id:1,description:"..."},{image:"/game-covers/vann/dush.jpg",title:"\u0414\u0443\u0448\u0435\u0432\u0430\u044f \u043a\u0430\u0431\u0438\u043d\u0430",genres:["\u041c\u044f\u0433\u043a\u0430\u044f \u043c\u0435\u0431\u0435\u043b\u044c"],price:19700,id:2,description:"..."},{image:"/game-covers/vann/rak.jpg",title:"\u0420\u0430\u043a\u043e\u0432\u0438\u043d\u0430",genres:["\u041c\u044f\u0433\u043a\u0430\u044f \u043c\u0435\u0431\u0435\u043b\u044c"],price:15500,id:3,description:"..."},{image:"/game-covers/vann/un.jpg",title:"\u0423\u043d\u0438\u0442\u0430\u0437",genres:["\u041c\u044f\u0433\u043a\u0430\u044f \u043c\u0435\u0431\u0435\u043b\u044c"],price:15900,id:4,description:"..."},{image:"/game-covers/vann/vanna.jpg",title:"\u0412\u0430\u043d\u043d\u0430",genres:["\u041c\u044f\u0433\u043a\u0430\u044f \u043c\u0435\u0431\u0435\u043b\u044c"],price:45900,id:5,description:"..."}]),re=function(){return Object(g.jsx)("div",{className:"home-page",children:ne.map((function(e){return Object(g.jsx)(q,{game:e},e.id)}))})};var ae=function(){return Object(g.jsx)(l.a,{store:R,children:Object(g.jsx)(V.a,{children:Object(g.jsx)(s.a,{children:Object(g.jsxs)("div",{className:"App",children:[Object(g.jsx)(X,{}),Object(g.jsx)(w,{}),Object(g.jsxs)(j.c,{children:[Object(g.jsx)(j.a,{exact:!0,path:"/order",children:Object(g.jsx)(Q,{})}),Object(g.jsx)(j.a,{exact:!0,path:"/app/:title",children:Object(g.jsx)(H,{})}),Object(g.jsx)(j.a,{exact:!0,path:"/",children:Object(g.jsx)(Y,{})}),Object(g.jsx)(j.a,{exact:!0,path:"/soft",children:Object(g.jsx)($,{})}),Object(g.jsx)(j.a,{exact:!0,path:"/office",children:Object(g.jsx)(te,{})}),Object(g.jsx)(j.a,{exact:!0,path:"/design",children:Object(g.jsx)(ie,{})}),Object(g.jsx)(j.a,{exact:!0,path:"/bath",children:Object(g.jsx)(re,{})})]})]})})})})},se=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,114)).then((function(t){var c=t.getCLS,i=t.getFID,n=t.getFCP,r=t.getLCP,a=t.getTTFB;c(e),i(e),n(e),r(e),a(e)}))};a.a.render(Object(g.jsx)(n.a.StrictMode,{children:Object(g.jsx)(ae,{})}),document.getElementById("root")),se()},76:function(e,t,c){},80:function(e,t,c){},82:function(e,t,c){},83:function(e,t,c){},84:function(e,t,c){},85:function(e,t,c){},87:function(e,t,c){},88:function(e,t,c){},89:function(e,t,c){},90:function(e,t,c){},91:function(e,t,c){},92:function(e,t,c){},95:function(e,t,c){},96:function(e,t,c){},97:function(e,t,c){},98:function(e,t,c){},99:function(e,t,c){}},[[102,1,2]]]);
//# sourceMappingURL=main.b076e3c4.chunk.js.map