import React from 'react';

const Card = ({ name, description, tags }) => {
	return (
		<div className="max-w-sm rounded overflow-hidden shadow-lg">
			<img className="w-full" src={require('../profile.png')} alt="Display" />
			<div className="px-6 py-4">
				<div className="font-bold text-purple-500 text-xl mb-2">{name}</div>
				<p className="text-gray-700 text-base">{description}</p>
			</div>
			<div className="px-6 py-4">
				{tags.map((tag) => (
					<span
						key={tag}
						className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
					>
						{tag}
					</span>
				))}
			</div>
		</div>
	);
};

export default Card;
