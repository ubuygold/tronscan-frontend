(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{3454:function(e,t,a){"use strict";a.r(t);var n=a(1363),c=a.n(n),r=a(30),l=a(2),o=a.n(l),s=a(4),i=a(15),d=a(16),m=a(22),u=a(21),p=a(23),h=a(0),f=a.n(h),g=a(33),b=a(20),E=a(3),v=a(10),_=a(18),k=a(81),N=a(14),y=a.n(N),w=a(11),O=a(181),j=a(6),S=a(13),T=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(m.a)(this,Object(u.a)(t).call(this))).loadAccounts=Object(s.a)(o.a.mark(function t(){var a,n,c,r,l,s,i,d,m,u,p,h,f=arguments;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return m=function(e){return function(t,a){return t[e]>a[e]?1:t[e]<a[e]?-1:0}},a=f.length>0&&void 0!==f[0]?f[0]:1,n=f.length>1&&void 0!==f[1]?f[1]:20,e.setState({loading:!0}),t.next=6,S.a.getlistdonators();case 6:return c=t.sent,r=c.list,l=Math.random(),t.next=11,y.a.get("".concat(j.e,'/api/fund?random="').concat(l,"&page_index=").concat(a,"&per_page=").concat(n));case 11:return s=t.sent,t.next=14,S.a.getFundsSupply();case 14:for(p in i=t.sent,d=i.funds,s.data.data.data.sort(m("key")),u=s.data.data.data)for(h in r)u[p].address===r[h]&&(u[p].isPlan=!0);e.setState({loading:!1,accounts:u,total:d.fundSumBalance/j.E,tronicsPlanTRX:d.donateBalance/j.E,foundationTRX:d.fundTrx,planAddress:r});case 20:case"end":return t.stop()}},t)})),e.state={loading:!0,searchString:"",accounts:[],total:1e3,tronicsPlanTRX:0,foundationTRX:0},e}return Object(p.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){this.loadAccounts()}},{key:"handleHover",value:function(e){this.setState(function(t,a){return Object(r.a)({},e,!t[e])})}},{key:"componentDidUpdate",value:function(){}},{key:"renderAccounts",value:function(){var e=this,t=this.state,a=t.accounts,n=t.total,l=(t.loadAccounts,t.open,this.props.intl),o=l.formatMessage({id:"view_total"})+" 1000 "+l.formatMessage({id:"address_unit"}),s=[{title:"#",dataIndex:"key",key:"key",width:100,align:"left"},{title:l.formatMessage({id:"address"}),dataIndex:"address",key:"address",align:"left",render:function(t,a,n){return a.isPlan?f.a.createElement("div",null,f.a.createElement("div",{className:"d-flex",style:{width:300},id:"Tronics-Support-Plan_"+a.key,onMouseOver:function(t,n){return e.setState(Object(r.a)({},a.key,!0))},onMouseOut:function(){return e.setState(Object(r.a)({},a.key,!1))}},f.a.createElement("i",{className:"fas fa-heart",style:{color:"#C23631",marginTop:3,marginRight:5}}),f.a.createElement(_.a,{address:t,truncate:!1})),f.a.createElement(w.g,{placement:"top",target:"Tronics-Support-Plan_"+a.key,isOpen:e.state[a.key]}," ",f.a.createElement("span",{className:"text-capitalize"},Object(E.c)("tronics_support_plan_recipient_address")))):f.a.createElement(_.a,{address:t})}},{title:l.formatMessage({id:"balance"}),dataIndex:"balance",key:"balance",width:200,align:"right",render:function(e,t,a){return f.a.createElement(O.b,{amount:e/j.E})}}];return f.a.createElement("div",{className:"token_black"},0===a.length?f.a.createElement("div",{className:"card",style:{background:"white"}},f.a.createElement(k.b,null,Object(E.c)("loading"))):f.a.createElement("div",{className:"card table_pos"},n?f.a.createElement("div",{className:"table_pos_info d-none d-md-block",style:{left:"auto"}},o," \xa0\xa0",f.a.createElement("a",{href:"zh"==l.locale?"https://tron.network/donation?lng=zh":"https://tron.network/donation?lng=en",target:"_blank",style:{color:"#C23631"}},Object(E.c)("tronics_support_plan"),">")):"",f.a.createElement(c.a,{bordered:!0,columns:s,dataSource:a,rowClassName:function(e,t){return e.isPlan?"ant_table_plan":""},onChange:function(t){e.loadAccounts(t.current,t.pageSize)},pagination:{position:"both",showSizeChanger:!0,defaultPageSize:20,total:1e3}})))}},{key:"render",value:function(){var e=this.props,t=(e.match,e.intl),a=this.state,n=a.total,c=a.tronicsPlanTRX,r=a.foundationTRX;a.loading,a.planAddress;return f.a.createElement("main",{className:"container header-overlap pb-3 token_black"},f.a.createElement("div",{className:"row foundation_title"},f.a.createElement("div",{className:"col-md-3 mt-3 mt-md-0 pr-0"},f.a.createElement("div",{className:"card h-100 widget-icon"},f.a.createElement("div",{className:"card-body pl-4 bg-image_book"},f.a.createElement("h3",null,f.a.createElement(v.c,{value:n})),Object(E.c)("total_number_frozenTRX")))),f.a.createElement("div",{className:"col-md-3 mt-3 mt-md-0 position-relative pr-0"},f.a.createElement("a",{href:"zh"==t.locale?"https://tron.network/donation?lng=zh":"https://tron.network/donation?lng=en",target:"_blank",className:"tronics_plan_link"},f.a.createElement("div",{className:"card h-100 widget-icon"},f.a.createElement("div",{className:"card-body pl-4"},f.a.createElement("h3",null,f.a.createElement("span",{className:"tronics_plan_title"},f.a.createElement(v.c,{value:c}))),f.a.createElement("span",{className:"tronics_plan_dec"},Object(E.c)("tronics_support_planTRX")))))),f.a.createElement("div",{className:"col-md-3 mt-3 mt-md-0 pr-0"},f.a.createElement("div",{className:"card h-100 widget-icon"},f.a.createElement("div",{className:"card-body pl-4 bg-image_home"},f.a.createElement("h3",null,f.a.createElement(v.c,{value:r})),Object(E.c)("frozen_by_the_foundationTRX")))),f.a.createElement("div",{className:"col-md-3 mt-3 mt-md-0"},f.a.createElement("div",{className:"card h-100 widget-icon bg-line_green"},f.a.createElement("div",{className:"card-body pl-4 bg-image_frozen"},f.a.createElement("h3",null,"2020/01/01"),Object(E.c)("unfreeze_time"))))),f.a.createElement("div",{className:"row mt-2"},f.a.createElement("div",{className:"col-md-12"},f.a.createElement("div",{className:"mt-1"},this.renderAccounts()))))}}]),t}(h.Component);var z={loadAccounts:b.r};t.default=Object(g.connect)(function(e){return{accounts:e.app.accounts}},z)(Object(v.h)(T))}}]);