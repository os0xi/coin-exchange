(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{19:function(e,t,n){e.exports=n(32)},27:function(e,t,n){},29:function(e,t,n){},32:function(e,t,n){"use strict";n.r(t);var a,c,r,l,i,o=n(0),s=n.n(o),h=n(14),u=n.n(h),p=(n(27),n(18)),m=n(1),b=n(2),f=n(4),d=n(3),g=n(5),j=(n(29),n(8)),E=n(6),O=n(7),v=O.a.section(a||(a=Object(E.a)(["\n  color: white;\n  font-size: 2rem;\n  text-align: left;\n  padding: 1.5rem 0 1.5rem 5rem;\n"]))),B=function(e){function t(e){var n;return Object(m.a)(this,t),(n=Object(f.a)(this,Object(d.a)(t).call(this,e))).toggleBalance=n.toggleBalance.bind(Object(j.a)(Object(j.a)(n))),n}return Object(g.a)(t,e),Object(b.a)(t,[{key:"toggleBalance",value:function(){this.props.toggleBalance()}},{key:"render",value:function(){var e=this.props.showBalance?"Hide balance":"Show balance",t=this.props.showBalance?this.props.amount:"*****";return s.a.createElement(v,null,"Balance: $",t,s.a.createElement("button",{onClick:this.toggleBalance},e))}}]),t}(o.Component),k=O.a.td(c||(c=Object(E.a)(["\n  border: 1px solid white;\n  width: 25vh;\n"]))),w=function(e){function t(){var e,n;Object(m.a)(this,t);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(n=Object(f.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(c)))).handleClick=function(e){e.preventDefault(),console.log("refresh pressed"),n.props.handleCoinRefresh(n.props.ticker)},n}return Object(g.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){return s.a.createElement("tr",null,s.a.createElement(k,null,this.props.name),s.a.createElement(k,null,this.props.ticker),s.a.createElement(k,null,"$",this.props.price),s.a.createElement(k,null,s.a.createElement("form",{action:"#",method:"GET"},s.a.createElement("button",{onClick:this.handleClick},"Refresh"))),s.a.createElement(k,null,"$",this.props.balance))}}]),t}(o.Component),C=function(e){function t(){return Object(m.a)(this,t),Object(f.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){var e=this;return s.a.createElement("table",{className:"coin-prices"},s.a.createElement("thead",null,s.a.createElement("tr",null,s.a.createElement("th",null,"Name"),s.a.createElement("th",null,"Ticker"),s.a.createElement("th",null,"Price"))),s.a.createElement("tbody",null,this.props.coins.map(function(t){var n=t.name,a=t.ticker,c=t.price,r=t.balance,l=e.props.showBalance?r:"*****";return s.a.createElement(w,{key:a,name:n,ticker:a,price:c,balance:l,handleCoinRefresh:e.props.handleCoinRefresh})})))}}]),t}(o.Component),y=function(e){function t(){return Object(m.a)(this,t),Object(f.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){return s.a.createElement(R,null,s.a.createElement(x,{src:T,alt:""}),s.a.createElement(D,null,"Coin Exchange"))}}]),t}(o.Component),R=O.a.header(r||(r=Object(E.a)(["\n  background-color: black;\n  min-height: 40vh;\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  font-size: calc(10px + 2vmin);\n  color: white;\n"]))),x=O.a.img(l||(l=Object(E.a)(["\n  height: 8rem;\n  width: 8rem;\n  pointer-events: none;\n  margin: 1rem 3rem;\n  animation: App-logo-spin infinite 20s linear;\n"]))),D=O.a.h1(i||(i=Object(E.a)(["\n  font-size: 4rem;\n"]))),T="https://imgs.search.brave.com/-rLo6GB3uMWXa_2Wwn_2V-zPN1WKzvbBDUs8JfIF6Iw/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9jcnlw/dG9sb2dvcy5jYy9s/b2dvcy9zb2xhbmEt/c29sLWxvZ28ucG5n",z=function(e){function t(){var e,n;Object(m.a)(this,t);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(n=Object(f.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(c)))).state={balance:1e4,showBalance:!0,coinData:[{name:"Bitcoin",ticker:"BTC",price:3e4,balance:1},{name:"Tether",ticker:"USDC",price:1,balance:1e4},{name:"Ethereum",ticker:"ETH",price:2e3,balance:1},{name:"Ripple",ticker:"XRP",price:.4,balance:10},{name:"Binance Coin",ticker:"BNB",price:300,balance:10}]},n.toggleBalance=function(){n.setState({showBalance:!n.state.showBalance})},n.handleCoinRefresh=function(e){var t=n.state.coinData.find(function(t){return t.ticker===e}),a=n.state.coinData.map(function(n){var a=Object(p.a)({},n);if(t.ticker===e){var c=.994+.01*Math.random();a.price*=c}return a});n.setState({coinData:a})},n}return Object(g.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"App"},s.a.createElement(y,null),s.a.createElement(B,{amount:this.state.balance,toggleBalance:this.toggleBalance,showBalance:this.state.showBalance}),s.a.createElement(C,{coins:this.state.coinData,handleCoinRefresh:this.handleCoinRefresh,showBalance:this.state.showBalance}))}}]),t}(s.a.Component),S=function(e){e&&e instanceof Function&&n.e(1).then(n.bind(null,33)).then(function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,l=t.getTTFB;n(e),a(e),c(e),r(e),l(e)})};u.a.createRoot(document.getElementById("root")).render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(z,null))),S()}},[[19,3,2]]]);
//# sourceMappingURL=main.d1b2bac6.chunk.js.map