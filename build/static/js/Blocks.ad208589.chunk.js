(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{1331:function(e,t,a){"use strict";a.d(t,"a",function(){return p});var n=a(15),r=a(16),o=a(22),i=a(21),s=a(23),l=a(0),c=a.n(l),u=a(183),d=a(12),m=a(3),p=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(o.a)(this,Object(i.a)(t).call(this,e))).state={open:!1,id:Object(u.a)(24)},a}return Object(s.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.open,n=t.id,r=this.props,o=r.text,i=r.placement,s=r.testSecond,l=void 0===s?"":s,u=r.className,p=void 0===u?"":u,f=r.info,b=void 0===f?"":f;return c.a.createElement("div",{className:"d-inline-block"},c.a.createElement("div",{className:"question-mark",id:n,onMouseOver:function(){return e.setState({open:!0})},onMouseOut:function(){return e.setState({open:!1})}},c.a.createElement("i",null,"?")),c.a.createElement(d.g,{placement:i,isOpen:a,target:n,className:p,innerClassName:"w-100"},o?Object(m.b)(o):"",l?c.a.createElement("span",null,c.a.createElement("br",null)," ",Object(m.b)(l)):"",b||""))}}]),t}(c.a.Component)},1346:function(e,t,a){"use strict";a.d(t,"a",function(){return C});var n=a(1358),r=a.n(n),o=a(126),i=a.n(o),s=a(1343),l=a.n(s),c=a(1338),u=a.n(c),d=a(2),m=a.n(d),p=a(30),f=a(4),b=a(15),h=a(16),g=a(22),v=a(21),O=a(23),E=a(0),j=a.n(E),k=a(3),y=a(13);function w(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function _(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?w(a,!0).forEach(function(t){Object(p.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):w(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var C=function(e){function t(e){var a;return Object(b.a)(this,t),(a=Object(g.a)(this,Object(v.a)(t).call(this,e))).loadDatas=Object(f.a)(m.a.mark(function e(){var t,n,r,o,i=arguments;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=i.length>0&&void 0!==i[0]?i[0]:1,n=i.length>1&&void 0!==i[1]?i[1]:40,r=a.state.filter,e.next=5,y.a.getTokens(_({sort:"rank",limit:n,start:(t-1)*n},r));case 5:return o=e.sent,e.abrupt("return",o);case 7:case"end":return e.stop()}},e)})),a.handleTableChange=function(e,t,n){var r=_({},a.state.pagination);r.current=e.current,a.setState({pagination:r}),a.fetch(_({pageSize:e.pageSize,page:e.current,sortField:n.field,sortOrder:n.order},t))},a.fetch=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};a.setState({loading:!0}),a.props.onPageChange?(a.props.onPageChange(e.page,e.pageSize),a.setState({loading:!1})):a.setState({loading:!1})},a.onInputChange=function(e){a.setState({searchText:e.target.value})},a.onReset=function(){a.setState({searchText:""},function(){a.onSearch()})},a.onSearch=function(){var e=a.props.tableData,t=a.state.searchText,n=new RegExp(t,"gi");a.setState({filterDropdownVisible:!1,filtered:!!t,data:e.map(function(e){return e.name.match(n)?_({},e,{name:j.a.createElement("span",null," ",e.name.split(new RegExp("(?<=".concat(t,")|(?=").concat(t,")"),"i")).map(function(e,a){return e.toLowerCase()===t.toLowerCase()?j.a.createElement("span",{key:a,className:"highlight"}," ",e," "):e})," ")}):null}).filter(function(e){return!!e})})},a.setColumn=function(e){function t(e){return function(t,a){return t[e]>a[e]?1:t[e]<a[e]?-1:0}}var n={filterDropdown:j.a.createElement("div",{className:"custom-filter-dropdown"},j.a.createElement(u.a,{ref:function(e){return a.searchInput=e},placeholder:"Search name",value:a.state.searchText,onChange:a.onInputChange,onPressEnter:a.onSearch})," ",j.a.createElement(l.a,{type:"primary",onClick:a.onSearch}," ",Object(k.c)("search")," ")," ",j.a.createElement(l.a,{className:"btn-secondary ml-1",onClick:a.onReset}," ",Object(k.c)("reset")," ")," "),filterIcon:j.a.createElement(i.a,{type:"filter",style:{color:a.state.filtered?"#108ee9":"#aaa"}}),filterDropdownVisible:a.state.filterDropdownVisible,onFilterDropdownVisibleChange:function(e){a.setState({filterDropdownVisible:e},function(){a.searchInput&&a.searchInput.focus()})}},r=[],o=!0,s=!1,c=void 0;try{for(var d,m=e[Symbol.iterator]();!(o=(d=m.next()).done);o=!0){var p=d.value;if(p.sorter&&!p.filterDropdown){var f={sorter:t(p.key)};r.push(_({},p,{},f))}else if(!p.sorter&&p.filterDropdown){var b=_({},n);r.push(_({},p,{},b))}else if(p.sorter&&p.filterDropdown){var h=_({sorter:t(p.key)},n);r.push(_({},p,{},h))}else r.push(p)}}catch(g){s=!0,c=g}finally{try{o||null==m.return||m.return()}finally{if(s)throw c}}return r},a.state={filterDropdownVisible:!1,data:[],searchText:"",filtered:!1,pagination:{showQuickJumper:!0,position:e.position||"both",showSizeChanger:!0,defaultPageSize:20,current:e.current||1},loading:!1},a}return Object(O.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){}},{key:"componentDidUpdate",value:function(e){var t=this.props.current,a=this.state.pagination;e.current!=t&&this.setState({pagination:_({},a,{current:t})})}},{key:"render",value:function(){var e=this.props,t=e.total,a=e.loading,n=e.data,o=e.column,i=e.bordered,s=e.pagination,l=void 0===s||s,c=e.scroll,u=e.locale,d=e.addr,m=e.transfers,p=(e.contractAddress,e.isPaddingTop,this.setColumn(o)),f=l?_({total:t},this.state.pagination):l;return j.a.createElement("div",null," ",d?j.a.createElement("div",{className:"card table_pos table_pos_addr "+(0==n.length?"table_pos_addr_data":"")+("address"==m?" transfer-mt-100":" transfer-pt-100")},j.a.createElement(r.a,{bordered:i,columns:p,rowKey:function(e,t){return t},dataSource:n,locale:u,scroll:c,pagination:f,loading:a,onChange:this.handleTableChange})," "):j.a.createElement("div",{className:"card table_pos"},j.a.createElement(r.a,{bordered:i,columns:p,rowKey:function(e,t){return t},dataSource:n,locale:u,scroll:c,pagination:f,loading:a,onChange:this.handleTableChange})," ")," ")}}]),t}(E.Component)},1370:function(e,t,a){"use strict";var n=a(15),r=a(16),o=a(22),i=a(21),s=a(23),l=a(0),c=a.n(l),u=a(10),d=a(1379),m=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(o.a)(this,Object(i.a)(t).call(this,e))).state={time:e.time,newTime:Object(d.b)(e.time),timer:null},a}return Object(s.a)(t,e),Object(r.a)(t,[{key:"componentWillMount",value:function(){this.updateTime()}},{key:"updateTime",value:function(){var e=this,t=setInterval(function(){e.setState({newTime:Object(d.b)(e.props.time)})},1e3);this.setState({timer:t})}},{key:"componentWillUnmount",value:function(){clearInterval(this.state.timer)}},{key:"render",value:function(){var e=this.state.newTime;return c.a.createElement("div",{className:"token_black table_pos"},c.a.createElement("div",null,e))}}]),t}(c.a.Component);t.a=Object(u.h)(m)},1379:function(e,t,a){"use strict";a.d(t,"a",function(){return o}),a.d(t,"b",function(){return s});var n=a(241),r=a.n(n);function o(e){var t=e.indexOf("T"),a=e.indexOf("Z"),n=e.substr(0,t),r=e.substr(t+1,a-t-1),o=n.replace(/\-/g,"/")+" "+r,i=new Date(Date.parse(o));return i=i.getTime(),i/=1e3,i+=28800,new Date(1e3*parseInt(i)).toLocaleDatetimeObj()+" "+new Date(1e3*parseInt(i)).totimeObj().match(/\d{2}:\d{2}:\d{2}/)[0]}function i(e,t,a,n){var r=t[n[a+1]]-e[n[a]].unit*t[n[a]],o=t[n[a]]>1?e[n[a]].plural:e[n[a]].odd,i=r>1?e[n[a+1]].plural:e[n[a+1]].odd,s=t[n[a]],l=r;return{firstTime:s,secondTime:l,firstUnit:o,secondUnit:i,string:l&&l>0?"".concat(s).concat(o," ").concat(l).concat(i):"".concat(s," ").concat(o)}}function s(e){return function(e){var t=r()(e),a=r()(),n="",o={day:{key:"days",plural:"days",odd:"day",unit:24},hour:{key:"hours",plural:"hrs",odd:"hr",unit:60},minute:{key:"minutes",plural:"mins",odd:"min",unit:60},second:{key:"seconds",plural:"secs",odd:"sec"}},s={};for(var l in o)s[l]=a.diff(t,o[l].key);var c=["day","hour","minute","second"],u="",d="";return s[c[0]]>=1?n=i(o,s,0,c):s[c[1]]>=1?n=i(o,s,1,c):s[c[2]]>=1?n=i(o,s,2,c):(u=s[c[3]]>1?o[c[3]].plural:o[c[3]].odd,n={firstTime:d=s[c[3]],secondTime:0,firstUnit:u,secondUnit:null,string:"".concat(d).concat(u)}),n}(e).string+" ago"}},1391:function(e,t,a){"use strict";var n=a(15),r=a(16),o=a(22),i=a(21),s=a(23),l=a(0),c=a.n(l),u=a(10),d=a(3),m=a(1331),p=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(o.a)(this,Object(i.a)(t).call(this,e))).state={},a}return Object(s.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this.props,t=e.total,a=e.rangeTotal,n=e.typeText,r=e.common,o=void 0!==r&&r,i=e.intl,s=e.markName,u=void 0===s?"table-question-mark":s,p=e.top,f=void 0===p?"26px":p,b=e.isQuestionMark,h=void 0===b||b,g=e.selected,v=i.formatMessage({id:"view_total"})+" "+a+" "+i.formatMessage({id:n}),O=i.formatMessage({id:"view_total"})+" "+a+" "+i.formatMessage({id:n})+"<br/>("+i.formatMessage({id:"table_info_big"})+")",E=a>1e4?O:v,j=i.formatMessage({id:"table_info_new_tip"});return c.a.createElement(l.Fragment,null,g?c.a.createElement("div",{className:"table_pos_info d-none d-md-block",style:{left:"auto",top:f}},0!==t?c.a.createElement("div",null,Object(d.c)("a_totle")," ",t," ",Object(d.c)(n),h?c.a.createElement("span",{className:"ml-1"},c.a.createElement(m.a,{placement:"top",info:i.formatMessage({id:"select_tip"})})):"",c.a.createElement("br",null),c.a.createElement("span",null,Object(d.d)("date_number_tip",{total:a}),a>2e3?c.a.createElement("span",null,", ",Object(d.c)("date_list_tip")):"")):c.a.createElement("span",null,Object(d.c)("a_totle")," ",t," ",Object(d.c)(n))):o?c.a.createElement("div",{className:"table_pos_info d-none d-md-block",style:{left:"auto",top:f}},E,c.a.createElement("span",null,c.a.createElement(m.a,{placement:"top",text:"to_provide_a_better_experience"}))):c.a.createElement("div",{className:"table_pos_info d-none d-md-block",style:{left:"auto",top:f}},a>1e4?c.a.createElement("div",null,Object(d.c)("view_total")," ",a," ",Object(d.c)(n),h?c.a.createElement(m.a,{placement:"top",info:j}):"",c.a.createElement("br",null)," ",c.a.createElement("span",null,"(",Object(d.c)("table_info_big1")),c.a.createElement("span",null,t),c.a.createElement("span",null,Object(d.c)("table_info_big2"),")")):c.a.createElement("span",null,Object(d.c)("view_total")," ",a," ",Object(d.c)(n)),c.a.createElement("span",{className:a>1e4?u:"table-question-mark-small"})))}}]),t}(c.a.Component);t.a=Object(u.h)(p)},1668:function(e,t,a){"use strict";var n=a(1372),r=a.n(n),o=a(30),i=a(15),s=a(16),l=a(22),c=a(21),u=a(23),d=a(0),m=a.n(d),p=a(10),f=a(241),b=a.n(f),h=a(74),g=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(c.a)(t).call(this,e))).disabledStartDate=function(e){var t=a.state.endValue;return e&&t?e.valueOf()>t.valueOf()||e.valueOf()<b()([2018,5,25]).valueOf():e.valueOf()>b()().valueOf()||e.valueOf()<b()([2018,5,25]).valueOf()},a.disabledEndDate=function(e){var t=a.state.startValue;return e&&t&&e.valueOf()<=t.valueOf()||e.valueOf()>b()().valueOf()},a.onChange=function(e,t){a.setState(Object(o.a)({},e,t))},a.onStartChange=function(e){a.onChange("startValue",e)},a.onEndChange=function(e){a.onChange("endValue",e)},a.handleStartOpenChange=function(e){e||a.setState({endOpen:!0})},a.handleEndOpenChange=function(e){a.setState({endOpen:e})},a.handleOk=function(e,t){var n=a.props,r=n.onDateOk,o=n.intl;e?t?r(e,t):h.toastr.warning(o.formatMessage({id:"warning"}),o.formatMessage({id:"select_end_time"})):h.toastr.warning(o.formatMessage({id:"warning"}),o.formatMessage({id:"select_start_time"}))},a.state={startValue:b()([2018,5,25]).startOf("day"),endValue:b()(),endOpen:!1},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.startValue,n=t.endValue,o=t.endOpen,i=this.props.dateClass,s=void 0===i?"date-range-box":i;return m.a.createElement("div",{className:s},m.a.createElement(r.a,{disabledDate:this.disabledStartDate,showTime:!0,format:"YYYY-MM-DD HH:mm:ss",value:a,placeholder:"Start",onChange:this.onStartChange,onOpenChange:this.handleStartOpenChange}),"\xa0\xa0~\xa0\xa0",m.a.createElement(r.a,{disabledDate:this.disabledEndDate,showTime:!0,format:"YYYY-MM-DD HH:mm:ss",value:n,placeholder:"End",onChange:this.onEndChange,open:o,onOpenChange:this.handleEndOpenChange,onOk:function(){return e.handleOk(a,n)}}))}}]),t}(m.a.Component);t.a=Object(p.h)(g)},3460:function(e,t,a){"use strict";a.r(t);var n=a(242),r=a.n(n),o=a(2),i=a.n(o),s=a(83),l=a(4),c=a(15),u=a(16),d=a(22),m=a(21),p=a(23),f=a(1372),b=a.n(f),h=a(0),g=a.n(h),v=a(351),O=a(33),E=(a(241),a(10)),j=a(13),k=a(18),y=a(1346),w=a(81),_=a(1391),C=(a(1668),a(1370)),S=(a(14),b.a.RangePicker,function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(d.a)(this,Object(m.a)(t).call(this))).onChange=function(t,a){e.loadBlocks(t,a)},e.loadBlocks=Object(l.a)(i.a.mark(function t(){var a,n,r,o,l,c,u,d,m,p,f=arguments;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a=f.length>0&&void 0!==f[0]?f[0]:1,n=f.length>1&&void 0!==f[1]?f[1]:20,r=e.props,r.location,o=r.match,o.params.date,parseInt(o.params.date)-864e5,e.setState({loading:!0,page:a,pageSize:n}),t.next=8,Promise.all([j.a.getBlocks({limit:n,start:(a-1)*n,sort:"-number",start_timestamp:e.start,end_timestamp:e.end}),j.a.getBlocks({limit:0})]).catch(function(e){console.log("error:"+e)});case 8:l=t.sent,c=Object(s.a)(l,2),u=c[0].blocks,d=c[1],m=d.total,p=d.rangeTotal,e.setState({loading:!1,blocks:u,total:m,rangeTotal:p});case 11:case"end":return t.stop()}},t)})),e.setProducedName=function(e){return e.witnessName?g.a.createElement("span",null,e.witnessName):e.number?g.a.createElement("span",null,e.witnessAddress):g.a.createElement("span",null)},e.customizedColumn=function(){var t=e.props.intl;return[{title:r()(t.formatMessage({id:"height"})),dataIndex:"number",key:"number",align:"center",className:"ant_table",width:"12%",render:function(e,t,a){return g.a.createElement(k.b,{number:e})}},{title:r()(t.formatMessage({id:"age"})),dataIndex:"timestamp",key:"timestamp",align:"left",className:"ant_table",render:function(e,t,a){return g.a.createElement(C.a,{time:e})}},{title:r()(t.formatMessage({id:"transactions"})),dataIndex:"nrOfTrx",key:"nrOfTrx",align:"center",render:function(e,t,a){return g.a.createElement(E.c,{value:e})}},{title:r()(t.formatMessage({id:"produced_by"})),dataIndex:"witnessName",key:"witnessName",align:"left",width:"40%",className:"ant_table",render:function(t,a,n){return g.a.createElement(k.a,{address:a.witnessAddress},e.setProducedName(a))}},{title:r()(t.formatMessage({id:"bytes"})),dataIndex:"size",key:"size",align:"center",className:"ant_table",render:function(e,t,a){return g.a.createElement(E.c,{value:e})}}]},e.start="",e.end="",e.state={loading:!1,blocks:[],total:0},e}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.loadBlocks()}},{key:"componentDidUpdate",value:function(){}},{key:"onDateOk",value:function(e,t){this.start=e.valueOf(),this.end=t.valueOf();var a=this.state,n=a.page,r=a.pageSize;this.loadBlocks(n,r)}},{key:"render",value:function(){var e=this,t=this.state,a=t.blocks,n=t.total,r=t.rangeTotal,o=t.loading,i=(t.page,t.pageSize,this.props),s=(i.match,i.intl,this.customizedColumn());return g.a.createElement("main",{className:"container header-overlap pb-3 token_black"},o&&g.a.createElement("div",{className:"loading-style"},g.a.createElement(w.b,null)),g.a.createElement("div",{className:"row"},g.a.createElement("div",{className:"col-md-12 table_pos"},n?g.a.createElement(_.a,{total:n,rangeTotal:r,isQuestionMark:!1,typeText:"block_unit"}):"",g.a.createElement(y.a,{bordered:!0,loading:o,column:s,data:a,total:n,onPageChange:function(t,a){e.loadBlocks(t,a)}}))))}}]),t}(g.a.Component));var D={loadTokens:v.b};t.default=Object(O.connect)(function(e){return{}},D)(Object(E.h)(S))}}]);