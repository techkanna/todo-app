import React from 'react';

class TodoItem extends React.Component{
	getstyle = () => {
		const { todo } = this.props;
		return {
			display: "grid",
			gridTemplateColumn: '1fr',
			padding: '5px',
			backgroundColor: '#f4f4f4',
			borderBottom: '1px dashed #888',
			textDecoration: todo.completed ? 'line-through' : 'none'
		}
	}
	render(){
		const { todo, change, delTodo } = this.props;
		return (
				<React.Fragment>
				<div style={this.getstyle()}>
				<p>
					<input 
						type='checkbox'
						onChange={change.bind(this,todo.id)}
				  />{' '}
				  {todo.title}
				  <button
				  	style={closebtn}
				  	onClick={delTodo.bind(this,todo.id)}
				  >
				  x
				  </button>
				</p>
				</div>
				</React.Fragment>
		);
	}
}

const closebtn = {
	backgroundColor: '#ff0000',
	padding: '5px 8px',
	border: 'none',
	borderRadius: '50%',
	float: 'right',
	color: '#fff',
}
export default TodoItem;