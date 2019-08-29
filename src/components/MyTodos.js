import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Todos from './Todos';
import Header from './Header';
import FormAdd from './FormAdd';
import About from './About';
import axios from 'axios';


class MyTodos extends React.Component{
	state = {
		todos: []
	}
	componentDidMount(){
		axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
		  .then(res =>{
		  	this.setState({ todos: res.data });
		  });
	}
	change = (id) => {
		this.setState({ todos: this.state.todos.map((todo) => {
			if(todo.id === id){
				todo.completed = !todo.completed;
			}
			return todo;
		}) });
	}

	delTodo = (id) => {
		axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
		.then(res => this.setState({todos: this.state.todos.filter((todo) => todo.id !== id)}));
	}

	addTodo = (title) => {
		if(title !==''){
			axios.post('https://jsonplaceholder.typicode.com/todos',{
		title,
		completed: false
	  })
	  .then(res => this.setState({ todos: [...this.state.todos,res.data] }));
		}
  }
	render(){
		return (
			<Router>
				<React.Fragment>
				<div className='container'>
				<Header />
				<Route
					exact 
				  path='/'
				  render={() => <React.Fragment> 
				  	<FormAdd todo={this.addTodo}/>
				    <Todos todos={this.state.todos} change={this.change} delTodo={this.delTodo}/>
				  	</React.Fragment>}
				/>
				<Route 
				path='/about' 
				component={About}
				/>
				</div>
				</React.Fragment>
			</Router>
		);
	}
}

export default MyTodos;