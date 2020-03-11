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
    default:
      return state;
    case 'ADD_NEW_TASK':
      return {
        ...state,
        tasks: state.tasks.push(action.payload)
      };
    case 'EDIT_TASK':
  }
};
