var todolistReducer = (
  state = [
    { id: 1, text: "Do housework!", isFinished: false },
    { id: 2, text: "Make some noise!", isFinished: false },
    { id: 3, text: "Playing pickleball!", isFinished: false },
  ],
  action
) => {
  if (action.type === "ADD") {
    let newArray = [
      ...state,
      { id: Date.now(), text: action.content, isFinished: false },
    ];
    return newArray;
  }

  if (action.type === "DELETE") {
    let newArray = state.filter((item) => item.id !== action.id);
    return newArray;
  }

  if (action.type === "TOGGLE") {
    let index = state.findIndex((item) => item.id === action.id);
    console.log(index);
    let copyState = [...state];
    copyState[index].isFinished = !state[index].isFinished;
    return copyState;
  }
  return state;
};

export default todolistReducer;
