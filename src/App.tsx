// App.tsx
import React from 'react';
import './App.css';
import NewTaskModal from './components/NewTaskModal';
import { useSelector, useDispatch } from 'react-redux';
import { openModal } from './features/tasks/tasksSlice';
import { RootState } from './app/store';

const App: React.FC = () => {
	const dispatch = useDispatch();
	const modalOpen = useSelector((state: RootState) => state.tasks.modalOpen);
	const hours = useSelector((state: RootState) => state.tasks.hours);

	return (
		<div className="app">
			<div className="navbar">
				<h1>Hourly</h1>
			</div>
			<div className="hour-column">
				{hours.map((hour) => (
					<div key={hour} className="hour-block">
						<div className="hour-label">{hour}</div>
					</div>
				))}
			</div>

			<button className="fab" onClick={() => dispatch(openModal())}>
				<div>+</div>
			</button>
			{modalOpen && <NewTaskModal />}
		</div>
	);
};

export default App;
