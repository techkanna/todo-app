(window["webpackJsonpmy-todo"]=window["webpackJsonpmy-todo"]||[]).push([[0],{34:function(e,t,n){e.exports=n(62)},39:function(e,t,n){},62:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(29),c=n.n(r),l=(n(39),n(33)),i=n(6),d=n(7),u=n(9),s=n(8),p=n(10),m=n(14),f=n(11),h=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(o)))).getstyle=function(){return{display:"grid",gridTemplateColumn:"1fr",padding:"5px",backgroundColor:"#f4f4f4",borderBottom:"1px dashed #888",textDecoration:n.props.todo.completed?"line-through":"none"}},n}return Object(p.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.props,t=e.todo,n=e.change,a=e.delTodo;return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{style:this.getstyle()},o.a.createElement("p",null,o.a.createElement("input",{type:"checkbox",onChange:n.bind(this,t.id)})," ",t.title,o.a.createElement("button",{style:b,onClick:a.bind(this,t.id)},"x"))))}}]),t}(o.a.Component),b={backgroundColor:"#ff0000",padding:"5px 8px",border:"none",borderRadius:"50%",float:"right",color:"#fff"},g=h,y=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.props,t=e.todos,n=e.change,a=e.delTodo;return t.map(function(e){return o.a.createElement(g,{key:e.id,todo:e,change:n,delTodo:a})})}}]),t}(o.a.Component);var E={backgroundColor:"#235fae",color:"#fff",textAlign:"center"},v=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("header",{style:E},o.a.createElement("h2",null,"My todo list"),o.a.createElement(m.b,{to:"/"},"Home ")," |",o.a.createElement(m.b,{to:"/about"}," About ")))},j=n(32),O=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(o)))).state={title:""},n.addState=function(e){n.setState(Object(j.a)({},e.target.name,e.target.value))},n.addItem=function(e){e.preventDefault(),n.props.todo(n.state.title),n.setState({title:""})},n}return Object(p.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("form",{onSubmit:this.addItem,style:{display:"flex"}},o.a.createElement("input",{type:"text",name:"title",style:k,value:this.state.title,onChange:this.addState,placeholder:"Add todo..."}),o.a.createElement("input",{type:"submit",className:"subbtn"})))}}]),t}(o.a.Component),k={flex:"10",padding:"0.5rem",margin:"0.5rem 0"},x=O;var T={marginTop:"1rem"},C=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("p",{style:T}," This is learning purpuse application. app version 1.0.0 .inspired by Brad Traversy "))},w=n(15),S=n.n(w),A=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(o)))).state={todos:[]},n.change=function(e){n.setState({todos:n.state.todos.map(function(t){return t.id===e&&(t.completed=!t.completed),t})})},n.delTodo=function(e){S.a.delete("https://jsonplaceholder.typicode.com/todos/".concat(e)).then(function(t){return n.setState({todos:n.state.todos.filter(function(t){return t.id!==e})})})},n.addTodo=function(e){""!==e&&S.a.post("https://jsonplaceholder.typicode.com/todos",{title:e,completed:!1}).then(function(e){return n.setState({todos:[].concat(Object(l.a)(n.state.todos),[e.data])})})},n}return Object(p.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=this;S.a.get("https://jsonplaceholder.typicode.com/todos?_limit=10").then(function(t){e.setState({todos:t.data})})}},{key:"render",value:function(){var e=this;return o.a.createElement(m.a,null,o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"container"},o.a.createElement(v,null),o.a.createElement(f.a,{exact:!0,path:"/",render:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(x,{todo:e.addTodo}),o.a.createElement(y,{todos:e.state.todos,change:e.change,delTodo:e.delTodo}))}}),o.a.createElement(f.a,{path:"/about",component:C}))))}}]),t}(o.a.Component);var F=function(){return o.a.createElement("div",{className:"App"},o.a.createElement(A,null))};c.a.render(o.a.createElement(F,null),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.eab05ff1.chunk.js.map