// features/tasks/tasksSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Task {
	id: string;
	name: string;
	startTime: string;
	endTime: string;
}

interface TasksState {
	tasks: Task[];
	modalOpen: boolean;
	hours: string[]; // Will be constant from '00:00' to '23:00'
}

// Generate hours from '00:00' to '23:00'
const hours = Array.from({ length: 24 }, (_, i) => {
	return `${String(i).padStart(2, '0')}:00`;
});

const initialState: TasksState = {
	tasks: [],
	modalOpen: false,
	hours, // Use the constant hours array
};

const tasksSlice = createSlice({
	name: 'tasks',
	initialState,
	reducers: {
		addTask: (state, action: PayloadAction<Task>) => {
			state.tasks.push(action.payload);
			console.log(action.payload);
		},
		openModal: (state) => {
			state.modalOpen = true;
		},
		closeModal: (state) => {
			state.modalOpen = false;
		},
	},
});

export const { addTask, openModal, closeModal } = tasksSlice.actions;
export default tasksSlice.reducer;
