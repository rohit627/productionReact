export const addTodo = (todoList, newTodo) => [...todoList, newTodo]

export const generateId = () => {
    return Math.floor(Math.random() * 10000000);
};
