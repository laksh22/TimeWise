/*
 * This is the code for the Reducer part f the Redux architecture
 */

// State is the current Store data. Based on the type of the Action sent, the Store is changed
export default (state, action) => {
  // Baed on Action type, decide what to do
  switch (action.type) {
    case 'GET_TASKS':
      return {
        ...state,
        tasks: action.payload.tasks,
        user: action.payload.user,
      };
    case 'CHANGE_CURRENT_TASK':
      return {
        ...state,
        task: state.tasks.find((task) => task.id == action.payload),
      };
    case 'COMPLETE_TASK':
    case 'DELETE_TASK':
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id != action.payload),
      };
    case 'ADD_NEW_TASK':
      var oldTasks = state.tasks;
      oldTasks.push(action.payload);
      return {
        ...state,
        tasks: oldTasks,
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
        task: action.payload,
      };
    default:
      return state;
  }
};
