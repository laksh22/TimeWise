export default (state, action) => {
  switch (action.type) {
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
      console.log(action.payload);
      oldTasks = state.tasks;
      oldTasks.push(action.payload);
      return {
        ...state,
        tasks: oldTasks
      };
    default:
      return state;
  }
};