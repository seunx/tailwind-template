import React from 'react';

import Card from '../components/Card';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Form from '../components/Forms/Form';

const Home = () => {
	return (
		<div>
			<Header />
			<div className="flex">
				<Card
					name="James Mac"
					description="Full Stack Engineer"
					tags={['One', 'Two', 'Three', 'Four']}
				/>
				<Form />
			</div>
			<Footer />
		</div>
	);
};

export default Home;
