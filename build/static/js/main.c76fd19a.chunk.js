(this["webpackJsonpzhukai-fe"]=this["webpackJsonpzhukai-fe"]||[]).push([[0],{184:function(e,t,a){e.exports=a(410)},189:function(e,t,a){},221:function(e,t,a){},410:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(4),i=a.n(r),o=(a(189),a(190),a(177)),c=(a(411),a(176)),s=(a(196),a(56)),m=(a(199),a(118)),u=(a(201),a(178)),d=(a(409),a(93)),p=(a(208),a(168)),f=(a(71),a(23)),h=(a(210),a(5)),E=(a(412),a(119)),b=(a(125),a(55)),v=(a(215),a(121)),g=a(163),y=a(164),S=a(179),k=a(165),w=a(180),x=(a(217),a(120)),C=(a(219),a(68)),I=(a(221),C.a.Header),z=C.a.Content,M=C.a.Footer,j=x.a.Step,O={labelCol:{xs:{span:24},sm:{span:8}},wrapperCol:{xs:{span:24},sm:{span:16}}},D={wrapperCol:{xs:{span:24,offset:0},sm:{span:16,offset:8}}},T="127.0.0.1:323",q={name:"file",action:"http://".concat(T,"/upload"),headers:{authorization:"authorization-text"}},F=[{label:"\u5bb6\u5177",value:"furniture",breadcrumbs:["\u4e3b\u9875","\u5217\u8868"]},{label:"\u5176\u4ed6",value:"other",breadcrumbs:["\u4e3b\u9875","\u5176\u4ed6"]}],H=function(e){function t(e){var a;return Object(g.a)(this,t),(a=Object(S.a)(this,Object(k.a)(t).call(this,e))).onChange=function(e){e.file.status,"done"===e.file.status?(console.log(e.file.response),a.setState({currentStep:2}),v.a.success("\u6210\u529f")):"error"===e.file.status&&v.a.error("".concat(e.file.name," file upload failed."))},a.changeMenu=function(e){var t=F.find((function(t){return e.key===t.value}));a.setState({breadcrumbs:t.breadcrumbs})},a.showModal=function(){a.setState({visible:!0})},a.hideModal=function(){a.setState({visible:!1,currentStep:0,detail:{}})},a.handleSubmit=function(e){e.preventDefault(),a.props.form.validateFieldsAndScroll((function(e,t){e||(console.log("Received values of form: ",t),a.setState({currentStep:1,detail:t}))}))},a.renderTabs=function(){var e=a.state,t=e.breadcrumbs,n=e.loading,r=e.listData;return l.a.createElement(C.a,null,l.a.createElement(I,{style:{position:"fixed",zIndex:1,width:"100%"}},l.a.createElement("div",{className:"logo"}),l.a.createElement(b.a,{theme:"dark",mode:"horizontal",defaultSelectedKeys:[F[0].value],style:{lineHeight:"64px"},onClick:a.changeMenu},F.map((function(e){return l.a.createElement(b.a.Item,{key:e.value},e.label)})))),l.a.createElement(z,{style:{padding:"0 50px",marginTop:64}},l.a.createElement("div",{className:"breadcrumbbox"},l.a.createElement(E.a,{style:{margin:"16px 0"}},t.map((function(e){return l.a.createElement(E.a.Item,{key:e},e)}))),l.a.createElement(f.a,{onClick:a.showModal,type:"primary"},l.a.createElement(h.a,{type:"plus-square"}),"\u65b0\u589e")),l.a.createElement("div",{style:{background:"#fff",padding:24,minHeight:730}},l.a.createElement(d.a,{className:"demo-loadmore-list",itemLayout:"horizontal",dataSource:r,renderItem:function(e,t){var a=e.name,r=e.des,i=e.filename;return console.log("".concat(T,"/").concat(i)),l.a.createElement(d.a.Item,{actions:[l.a.createElement("span",{key:"list-loadmore-edit"},"\u7f16\u8f91"),l.a.createElement("span",{key:"list-loadmore-more"},"\u5220\u9664")]},l.a.createElement(u.a,{avatar:!0,title:!1,loading:n,active:!0},l.a.createElement("div",null,t),l.a.createElement(d.a.Item.Meta,{avatar:l.a.createElement(p.a,{size:"large",src:"http://".concat(T,"/").concat(i)}),title:l.a.createElement("span",null,a),description:r})))}}))),l.a.createElement(M,{style:{textAlign:"center"}},"\u8ba9\u751f\u6d3b\u66f4\u7f8e\u597d !"))},a.state={breadcrumbs:F[0].breadcrumbs,visible:!1,currentStep:0,detail:{},loading:!1,listData:[]},a}return Object(w.a)(t,e),Object(y.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.setState({loading:!0},(function(){fetch("http://".concat("127.0.0.1:323","/data")).then((function(e){return e.json()})).then((function(t){e.setState({loading:!1,listData:t}),console.log(t)}))}))}},{key:"render",value:function(){var e=this.props.form.getFieldDecorator,t=this.state,a=t.visible,n=t.currentStep,r=t.detail;return l.a.createElement("div",null,this.renderTabs(),a?l.a.createElement(o.a,{title:"\u4e0a\u4f20\u4fe1\u606f",visible:a,onCancel:this.hideModal,footer:l.a.createElement(f.a,{onClick:this.hideModal,type:"primary"},"\u786e\u5b9a")},l.a.createElement(x.a,{current:n,size:"small"},l.a.createElement(j,{title:"\u586b\u5199\u4fe1\u606f"}),l.a.createElement(j,{title:"\u4e0a\u4f20\u56fe\u7247"}),l.a.createElement(j,{title:"\u6210\u529f!"})),l.a.createElement("div",null,0===n?l.a.createElement("div",null,l.a.createElement(s.a,Object.assign({},O,{onSubmit:this.handleSubmit}),l.a.createElement(s.a.Item,{label:"\u540d\u79f0"},e("name",{rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u540d\u79f0!"}]})(l.a.createElement(m.a,null))),l.a.createElement(s.a.Item,{label:"\u63cf\u8ff0"},e("des",{rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u63cf\u8ff0!"}]})(l.a.createElement(m.a,null))),l.a.createElement(s.a.Item,D,l.a.createElement(f.a,{type:"primary",htmlType:"submit"},"\u4e0b\u4e00\u6b65")))):null,1===n?l.a.createElement("div",null,l.a.createElement(c.a,Object.assign({},q,{onChange:this.onChange,data:r}),l.a.createElement(f.a,null,l.a.createElement(h.a,{type:"upload"})," \u4e0a\u4f20"))):null,2===n?l.a.createElement("div",null,"11123"):null)):null)}}]),t}(n.Component),N=s.a.create({name:"register"})(H);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(l.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[184,1,2]]]);
//# sourceMappingURL=main.c76fd19a.chunk.js.map