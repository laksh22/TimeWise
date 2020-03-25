export default (state, action) => {
  switch (action.type) {
    case 'GET_TASKS':
      return {
        ...state,
        tasks: action.payload
      };
    case 'CHANGE_CURRENT_TASK':
      return {
        ...state,
        task: state.tasks.find(task => task.name == action.payload)
      };
    case 'COMPLETE_TASK':
    case 'DELETE_TASK':
      return {
        ...state,
        tasks: state.tasks.filter(task => task.name != action.payload)
      };
    case 'ADD_NEW_TASK':
      oldTasks = state.tasks;
      oldTasks.push(action.payload);
      return {
        ...state,
        tasks: oldTasks
      };
    default:
      return state;
    case 'EDIT_TASK':
      return {
        ...state
      };
  }
};
