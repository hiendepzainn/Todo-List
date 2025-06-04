export var addTask = (content) => {
  return {
    type: "ADD",
    content: content,
  };
};

export var deleteTask = (id) => {
  return {
    type: "DELETE",
    id: id,
  };
};

export var toggleTask = (id) => {
  return {
    type: "TOGGLE",
    id: id,
  };
};
