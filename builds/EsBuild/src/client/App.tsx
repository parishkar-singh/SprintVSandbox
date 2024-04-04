import React, { useState, useEffect } from 'react';

const App: React.FC = () => {
	const [data, setData] = useState<string>('');

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch('http://localhost:8080/api/hello');
				const responseData = await response.json();
				setData(responseData.message);
			} catch (error) {
				console.error('[fetch error]', error);
			}
		};

		fetchData();
	}, []);

	return (
		<div>
			<div className="client">Hello {data}</div>
		</div>
	);
};

export default App;
