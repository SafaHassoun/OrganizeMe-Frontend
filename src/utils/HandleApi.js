import axios from "axios";

const base_URL = "http://localhost:5000";

const getAllToDo = (setToDo) => {
  axios.get(base_URL).then(({ data }) => {
    console.log("data:", data);
    setToDo(data);
  });
};

const addToDo = (text, setText, setToDo) => {
  axios.post(`${base_URL}/save`, { text }).then((data) => {
    console.log(data);
    setText("");
    getAllToDo(setToDo);
  });
};

const updateToDo = (toDoId, text, setText, setToDo, setIsUpdating) => {
  axios.post(`${base_URL}/update`, { _id: toDoId, text }).then((data) => {
    console.log(data);
    setText("");
    setIsUpdating(false);
    getAllToDo(setToDo);
  });
};

const deleteToDo = (toDoId, setToDo) => {
  axios.post(`${base_URL}/delete`, { _id: toDoId }).then((data) => {
    console.log(data);
    getAllToDo(setToDo);
  });
};

export { getAllToDo, addToDo, updateToDo, deleteToDo };
