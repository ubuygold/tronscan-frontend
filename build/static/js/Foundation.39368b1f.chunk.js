webpackJsonp([29],{2297:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,a){function n(r,l){try{var o=t[r](l),c=o.value}catch(e){return void a(e)}if(!o.done)return Promise.resolve(c).then(function(e){n("next",e)},function(e){n("throw",e)});e(c)}return n("next")})}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function i(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function u(e){return{accounts:e.app.accounts}}Object.defineProperty(t,"__esModule",{value:!0});var d=a(69),s=n(d),f=a(11),m=n(f),p=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}();a(76);var h=a(0),v=n(h),_=a(18),g=a(92),b=a(14),E=a(12),y=(a(17),a(23)),k=a(21),N=a(29),w=n(N),T=a(56),P=a(41),O=a(20),R=a(16),S=function(e){function t(){var e=this;o(this,t);var a=c(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return a.loadAccounts=function(){var t=l(m.default.mark(function t(){var n,r,l,o,c,i,u,d,s,f,p=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,h=arguments.length>1&&void 0!==arguments[1]?arguments[1]:20;return m.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return u=function(e){return function(t,a){return t[e]>a[e]?1:t[e]<a[e]?-1:0}},a.setState({loading:!0}),e.next=4,R.Client.getlistdonators();case 4:return n=e.sent,r=n.list,l=Math.random(),e.next=9,w.default.get(O.API_URL+'/api/fund?random="'+l+"&page_index="+p+"&per_page="+h);case 9:return o=e.sent,e.next=12,R.Client.getFundsSupply();case 12:c=e.sent,i=c.funds,o.data.data.data.sort(u("key")),d=o.data.data.data;for(s in d)for(f in r)d[s].address===r[f]&&(d[s].isPlan=!0);a.setState({loading:!1,accounts:d,total:i.fundSumBalance/O.ONE_TRX,tronicsPlanTRX:i.donateBalance/O.ONE_TRX,foundationTRX:i.fundTrx,planAddress:r});case 18:case"end":return e.stop()}},t,e)}));return function(){return t.apply(this,arguments)}}(),a.state={loading:!0,searchString:"",accounts:[],total:1e3,tronicsPlanTRX:0,foundationTRX:0},a}return i(t,e),p(t,[{key:"componentDidMount",value:function(){this.loadAccounts()}},{key:"handleHover",value:function(e){this.setState(function(t,a){return r({},e,!t[e])})}},{key:"componentDidUpdate",value:function(){}},{key:"renderAccounts",value:function(){var e=this,t=this.state,a=t.accounts,n=t.total,l=(t.loadAccounts,t.open,this.props.intl),o=l.formatMessage({id:"view_total"})+" 1000 "+l.formatMessage({id:"address_unit"}),c=[{title:"#",dataIndex:"key",key:"key",width:100,align:"left"},{title:l.formatMessage({id:"address"}),dataIndex:"address",key:"address",align:"left",render:function(t,a,n){return a.isPlan?v.default.createElement("div",null,v.default.createElement("div",{className:"d-flex",style:{width:300},id:"Tronics-Support-Plan_"+a.key,onMouseOver:function(t,n){return e.setState(r({},a.key,!0))},onMouseOut:function(){return e.setState(r({},a.key,!1))}},v.default.createElement("i",{className:"fas fa-heart",style:{color:"#C23631",marginTop:3,marginRight:5}}),v.default.createElement(y.AddressLink,{address:t,truncate:!1})),v.default.createElement(T.Tooltip,{placement:"top",target:"Tronics-Support-Plan_"+a.key,isOpen:e.state[a.key]}," ",v.default.createElement("span",{className:"text-capitalize"},(0,b.tu)("tronics_support_plan_recipient_address")))):v.default.createElement(y.AddressLink,{address:t})}},{title:l.formatMessage({id:"balance"}),dataIndex:"balance",key:"balance",width:200,align:"right",render:function(e,t,a){return v.default.createElement(P.TRXPrice,{amount:e/O.ONE_TRX})}}];return v.default.createElement("div",{className:"token_black"},0===a.length?v.default.createElement("div",{className:"card",style:{background:"white"}},v.default.createElement(k.TronLoader,null,(0,b.tu)("loading"))):v.default.createElement("div",{className:"card table_pos"},n?v.default.createElement("div",{className:"table_pos_info d-none d-md-block",style:{left:"auto"}},o," \xa0\xa0",v.default.createElement("a",{href:"zh"==l.locale?"https://tron.network/donation?lng=zh":"https://tron.network/donation?lng=en",target:"_blank",style:{color:"#C23631"}},(0,b.tu)("tronics_support_plan"),">")):"",v.default.createElement(s.default,{bordered:!0,columns:c,dataSource:a,rowClassName:function(e,t){return e.isPlan?"ant_table_plan":""},onChange:function(t){e.loadAccounts(t.current,t.pageSize)},pagination:{position:"both",showSizeChanger:!0,defaultPageSize:20,total:1e3}})))}},{key:"render",value:function(){var e=this.props,t=(e.match,e.intl),a=this.state,n=a.total,r=a.tronicsPlanTRX,l=a.foundationTRX;a.loading,a.planAddress;return v.default.createElement("main",{className:"container header-overlap pb-3 token_black"},v.default.createElement("div",{className:"row foundation_title"},v.default.createElement("div",{className:"col-md-3 mt-3 mt-md-0 pr-0"},v.default.createElement("div",{className:"card h-100 widget-icon"},v.default.createElement("div",{className:"card-body pl-4 bg-image_book"},v.default.createElement("h3",null,v.default.createElement(E.FormattedNumber,{value:n})),(0,b.tu)("total_number_frozenTRX")))),v.default.createElement("div",{className:"col-md-3 mt-3 mt-md-0 position-relative pr-0"},v.default.createElement("a",{href:"zh"==t.locale?"https://tron.network/donation?lng=zh":"https://tron.network/donation?lng=en",target:"_blank",className:"tronics_plan_link"},v.default.createElement("div",{className:"card h-100 widget-icon"},v.default.createElement("div",{className:"card-body pl-4"},v.default.createElement("h3",null,v.default.createElement("span",{className:"tronics_plan_title"},v.default.createElement(E.FormattedNumber,{value:r}))),v.default.createElement("span",{className:"tronics_plan_dec"},(0,b.tu)("tronics_support_planTRX")))))),v.default.createElement("div",{className:"col-md-3 mt-3 mt-md-0 pr-0"},v.default.createElement("div",{className:"card h-100 widget-icon"},v.default.createElement("div",{className:"card-body pl-4 bg-image_home"},v.default.createElement("h3",null,v.default.createElement(E.FormattedNumber,{value:l})),(0,b.tu)("frozen_by_the_foundationTRX")))),v.default.createElement("div",{className:"col-md-3 mt-3 mt-md-0"},v.default.createElement("div",{className:"card h-100 widget-icon bg-line_green"},v.default.createElement("div",{className:"card-body pl-4 bg-image_frozen"},v.default.createElement("h3",null,"2020/01/01"),(0,b.tu)("unfreeze_time"))))),v.default.createElement("div",{className:"row mt-2"},v.default.createElement("div",{className:"col-md-12"},v.default.createElement("div",{className:"mt-1"},this.renderAccounts()))))}}]),t}(h.Component),x={loadAccounts:g.loadAccounts};t.default=(0,_.connect)(u,x)((0,E.injectIntl)(S))}});