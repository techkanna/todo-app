import React from 'react';

function About() {
	return (
		<React.Fragment>
			<p style={about}> This is learning purpuse application.
			app version 1.0.0 .inspired by Brad Traversy </p>
		</React.Fragment>
	);
}

const about = {
	marginTop: '1rem'
}

export default About;