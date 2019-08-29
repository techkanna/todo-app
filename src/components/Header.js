import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
	return (
		<React.Fragment>
			<header style={style}>
			  <h2>My todo list</h2>
			  <Link to="/">Home </Link> |   
			  <Link to='/about'> About </Link>
			</header>
		</React.Fragment>
	);
}
const style = {
	backgroundColor: '#235fae',
	color: '#fff',
	textAlign: 'center'
}
export default Header;