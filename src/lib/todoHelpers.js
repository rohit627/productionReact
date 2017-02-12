export const addTodo = (todoList, newTodo) => [...todoList, newTodo]

export const generateId = () => {
    var d = new Date().getTime();
    var randomNumber = 'xxxx1yxx'.replace(/[xy]/g, function(c) {
        var r = Math.floor( d + Math.random()*16)%16 | 0;
        d /= 16;
        return r;
    });
    return parseInt(randomNumber, 10);
};
