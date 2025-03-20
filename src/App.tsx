import React from 'react';
import dayjs from 'dayjs';
import './App.css';

const App: React.FC = () => {
	const hours = Array.from({ length: 16 }, (_, i) => {
		return dayjs()
			.startOf('day')
			.add(i + 6, 'hour')
			.format('h:mm A');
	});

	return (
		<div className="app">
			<h1>Hourly</h1>
			<div className="hour-column">
				{hours.map((hour) => (
					<div key={hour} className="hour-block">
						<div className="hour-label">{hour}</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default App;
