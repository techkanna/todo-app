import React from 'react';
import TodoItem from './TodoItem';

class Todos extends React.Component{
	render(){
		const { todos, change, delTodo } = this.props;
		return todos.map((todo) => (
			  <TodoItem key={todo.id} todo={todo} change={change} delTodo={delTodo}/>
			));
	}
}

export default Todos;