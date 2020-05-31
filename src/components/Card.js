import React from 'react';

const Card = ({ name, description, tags }) => {
	return (
		<div className="max-w-sm rounded overflow-hidden shadow-lg">
			<img className="w-full" src="" alt="Display" />
			<div className="px-6 py-4">
				<div className="font-bold text-purple-500 text-xl mb-2">{name}</div>
				<p className="text-gray-700 text-base">{description}</p>
			</div>
			<div className="px-6 py-4">Tag</div>
		</div>
	);
};

export default Card;
