(this["webpackJsonpproject-five"]=this["webpackJsonpproject-five"]||[]).push([[0],{13:function(e,t,a){e.exports=a.p+"static/media/juno-logo.86172252.svg"},14:function(e,t,a){e.exports=a.p+"static/media/safiEmoji.9c4a16e7.png"},15:function(e,t,a){e.exports=a(26)},20:function(e,t,a){},25:function(e,t,a){},26:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),o=a(12),r=a.n(o),l=(a(20),a(1)),i=a(2),c=a(4),m=a(3),u=a(13),h=a.n(u),p=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return s.a.createElement("header",null,s.a.createElement("div",{className:"title"},s.a.createElement("img",{src:h.a,alt:"Juno Logo"}),s.a.createElement("h1",null,"Yearbook!")),s.a.createElement("p",{className:"cohort26"},"Cohort 26, Winter II 2020"),s.a.createElement("p",{className:"covidCohort"},'\ud83d\ude37"The Covid Cohort"\ud83e\udda0'))}}]),a}(n.Component),d=a(7),g=a.n(d);a(22);g.a.initializeApp({apiKey:"AIzaSyClv1sxb2aGdLblCtPESRKcyg9HN4z9Bf4",authDomain:"yearbook-7c442.firebaseapp.com",databaseURL:"https://yearbook-7c442.firebaseio.com",projectId:"yearbook-7c442",storageBucket:"yearbook-7c442.appspot.com",messagingSenderId:"282236459809",appId:"1:282236459809:web:a0a28c52659ea7d9803c60"});var f=g.a,v=function(e){return s.a.createElement("div",{className:"form-group"},s.a.createElement("label",{for:e.name,className:"form-label"},e.title),s.a.createElement("input",{id:e.name,name:e.name,type:e.inputType,value:e.value,onChange:e.onChange,placeholder:e.placeholder,uniqueKey:e.uniqueKey}))},b=function(e){return s.a.createElement("button",{style:e.style,className:"submitBtn",onClick:e.action},"Submit")},E=a(14),k=a.n(E),y=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).incrementLikes=function(t){var a=e.props.likes+1;console.log("likes "+e.props.likes);var n=e.props.uniqueKey;f.database().ref(n).update({likes:a})},e.state={likes:0},e}return Object(i.a)(a,[{key:"render",value:function(){return s.a.createElement("button",{type:"image",className:"likes",onClick:this.incrementLikes},s.a.createElement("img",{src:k.a,alt:"an emoji pic of Safi - the most ridiculous, yet beloved and very handsome instructor at Juno"}),this.props.likes)}}]),a}(n.Component),C=(a(25),function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).handleChange=function(t){e.setState({message:t.target.value})},e.handleToChange=function(t){e.setState({messageTo:t.target.value})},e.handleFromChange=function(t){e.setState({messageFrom:t.target.value})},e.handleFormSubmit=function(t){t.preventDefault();var a=f.database().ref();if(!(e.state.messageTo&&e.state.messageFrom&&e.state.message))return e.setState({error:"You must fill out all fields!"});document.getElementById("postsBoard").scrollIntoView({block:"start",behaviour:"smooth"}),a.push({message:e.state.message,messageTo:e.state.messageTo,messageFrom:e.state.messageFrom,likes:0}),e.setState({message:"",messageTo:"",messageFrom:""})},e.state={allMesssages:[],messageTo:"",messageFrom:"",message:""},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;f.database().ref().on("value",(function(t){var a=[],n=t.val();for(var s in n){n[s].id=s,a.unshift(n[s])}e.setState({allMesssages:a})}))}},{key:"render",value:function(){return s.a.createElement("div",{className:"App"},s.a.createElement(p,null),s.a.createElement("form",{action:"",className:"form-container",onSubmit:this.handleFormSubmit},s.a.createElement(v,{placeholder:"To:",type:"text",onChange:this.handleToChange,value:this.state.messageTo}),s.a.createElement(v,{placeholder:"From:",type:"text",onChange:this.handleFromChange,value:this.state.messageFrom}),s.a.createElement("textarea",{placeholder:"Leave a message, joke or jibe for your belove student or mentor",type:"text",id:"newMessage",onChange:this.handleChange,value:this.state.message}),s.a.createElement(b,{onClick:this.handleClick})),this.state.error&&s.a.createElement("p",{className:"errorMessage"},this.state.error),s.a.createElement("div",{className:"postsBoard",id:"postsBoard"},this.state.allMesssages.map((function(e){return s.a.createElement("div",{className:"posts",key:e.id},s.a.createElement("p",{className:"toPrefix"},"Yo, ",e.messageTo),s.a.createElement("p",null,'"',e.message,'"'),s.a.createElement("p",{className:"fromPrefix"},"Hugs, ",e.messageFrom),s.a.createElement(y,{uniqueKey:e.id,likes:e.likes}))}))),s.a.createElement("footer",null,s.a.createElement("p",null,"Edith Werbel 2020")))}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(C,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[15,1,2]]]);
//# sourceMappingURL=main.4a83f530.chunk.js.map