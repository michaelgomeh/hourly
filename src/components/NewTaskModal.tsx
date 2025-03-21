// components/NewTaskModal.tsx
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTask, closeModal } from '../features/tasks/tasksSlice';
import { RootState } from '../app/store';

const NewTaskModal: React.FC = () => {
	const dispatch = useDispatch();
	const hours = useSelector((state: RootState) => state.tasks.hours);

	// Controlled fields
	const [taskName, setTaskName] = useState('');
	const [startTime, setStartTime] = useState(hours[0]); // Default to '00:00'
	const [endTime, setEndTime] = useState(hours[1]); // Default to '01:00'

	const handleAddTask = () => {
		if (!taskName || !startTime || !endTime) return; // Basic validation

		dispatch(
			addTask({
				id: Math.random().toString(),
				name: taskName,
				startTime,
				endTime,
			})
		);

		// Reset fields after adding task
		setTaskName('');
		setStartTime(hours[0]);
		setEndTime(hours[1]);
	};

	return (
		<div className="modal-overlay">
			<div className="modal">
				<h2>Add Task</h2>
				<input
					type="text"
					placeholder="Task name"
					value={taskName}
					onChange={(e) => setTaskName(e.target.value)}
				/>
				<div className="time-range">
					<label htmlFor="start-time">Start Time</label>
					<select
						id="start-time"
						value={startTime}
						onChange={(e) => setStartTime(e.target.value)}
					>
						{hours.map((hour) => (
							<option key={hour} value={hour}>
								{hour}
							</option>
						))}
					</select>
					<label htmlFor="end-time">End Time</label>
					<select
						id="end-time"
						value={endTime}
						onChange={(e) => setEndTime(e.target.value)}
					>
						{hours.map((hour) => (
							<option key={hour} value={hour}>
								{hour}
							</option>
						))}
					</select>
				</div>
				<button onClick={handleAddTask}>Add Task</button>
				<button onClick={() => dispatch(closeModal())}>Cancel</button>
			</div>
		</div>
	);
};

export default NewTaskModal;
