(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(7),i=n.n(o),c=(n(13),n(1)),s=n(2),l=n(3),h=n(5),u=n(4),m=function(e){var t=e.name,n=e.email,a=e.id;return r.a.createElement("div",{className:"bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5"},r.a.createElement("img",{src:"https://robohash.org/".concat(a,"?200x200"),alt:"Description goes here"}),r.a.createElement("div",null,r.a.createElement("h2",null,t),r.a.createElement("p",null,n)))},d=function(e){var t=e.robots.map((function(e){return r.a.createElement(m,{key:e.id,id:e.id,email:e.email,name:e.name})}));return r.a.createElement("div",null,t)},b=function(e){Object(h.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).state={hasError:!1},a}return Object(s.a)(n,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?r.a.createElement("h1",null,"Oooops. That is not good."):this.props.children}}]),n}(a.Component),g=function(e){var t=e.onSearchFieldChange;return r.a.createElement("div",{className:"pa2"},r.a.createElement("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search robots",onChange:t}))},f=function(e){var t=e.children;return r.a.createElement("div",{style:{overflowY:"scroll",height:"calc(100vh - 187px)"}},t)},v=(n(14),function(e){Object(h.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).originalRobots=[],a.state={robots:[],searchField:""},a.onSearchFieldChange=a.onSearchFieldChange.bind(Object(l.a)(a)),a}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){e.originalRobots=t,e.setState({robots:t})}))}},{key:"onSearchFieldChange",value:function(e){var t=e.target.value.toLowerCase(),n=this.originalRobots;("string"===typeof t||t instanceof String)&&(t.length>this.state.searchField.length&&(n=this.state.robots),t.length>0&&(n=n.filter((function(e){return e.name.toLowerCase().includes(t)})))),this.setState({robots:n,searchField:t})}},{key:"render",value:function(){return 0===this.originalRobots?r.a.createElement("h1",{className:"tc f1"},"Loading"):r.a.createElement("div",{className:"tc"},r.a.createElement("h1",{className:"f1"},"RoboFriends"),r.a.createElement(g,{onSearchFieldChange:this.onSearchFieldChange}),r.a.createElement(f,null,r.a.createElement(b,null,r.a.createElement(d,{robots:this.state.robots}))))}}]),n}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(15);i.a.render(r.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,t,n){e.exports=n(16)}},[[8,1,2]]]);
//# sourceMappingURL=main.3434f6e6.chunk.js.map