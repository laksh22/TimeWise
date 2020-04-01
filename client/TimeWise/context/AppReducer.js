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
        task: state.tasks.find(task => task.id == action.payload)
      };
    case 'COMPLETE_TASK':
    case 'DELETE_TASK':
      return {
        ...state,
        tasks: state.tasks.filter(task => task.id != action.payload)
      };
    case 'ADD_NEW_TASK':
      var oldTasks = state.tasks;
      oldTasks.push(action.payload);
      return {
        ...state,
        tasks: oldTasks
      };
    case 'EDIT_TASK':
      var oldTasks = state.tasks;

      for (var i = 0; i < oldTasks.length; i++) {
        if (oldTasks[i].id == action.payload.id) {
          oldTasks[i] = action.payload;
          break;
        }
      }

      return {
        ...state,
        tasks: oldTasks,
        task: action.payload
      };
    case 'CHANGE_USER':
      return {
        ...state,
        email: action.payload
      };
    default:
      return state;
  }
};
