import React from 'react';

class FormAdd extends React.Component{
	state = {
		title: ''
	}

	addState = (e) =>{
		this.setState({ [e.target.name]: e.target.value });
	}

	addItem = (e) =>{ 
		e.preventDefault();
		this.props.todo(this.state.title);
		this.setState({ title: '' });

	}

	render(){
		return (
			<React.Fragment>
			<form onSubmit={this.addItem} style={{ display:"flex" }}>
				<input 
					type='text'
					name='title'
					style={input}
					value={this.state.title}
					onChange={this.addState}
					placeholder='Add todo...'
				/>
					<input 
					type='submit'
					className='subbtn'
				/>
			</form>
			</React.Fragment>
		);
	}
}

const input = {
	flex: '10',
	padding: '0.5rem',
	margin: '0.5rem 0'
}

export default FormAdd;