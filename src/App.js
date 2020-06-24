import React from 'react';
import { Router } from '@reach/router';

import Home from './pages/Home';
import Blog from './pages/Blog';
import Contact from './pages/Contact';

const App = () => {
	return (
		<Router>
			<Home path="/" />
			<Blog path="/blog" />
			<Contact path="/contact" />
		</Router>
	);
};

export default App;
