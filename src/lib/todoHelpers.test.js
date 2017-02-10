import {addTodo, generateId} from './todoHelpers';

test('generateId should create a unique number', () => {
    const result = 1;
    const newNumber = generateId();
    expect(newNumber).not.toBe(result);
});

test('addtodo should add a passed todo to the list', () => {
    const initialTodos = [
        {id: 1, name: 'one', isComplete: false},
        {id: 2, name: 'two', isComplete: true},
    ];

    const newTodo = {id: 3, name: 'three', isComplete: false};

    const expected = [
        {id: 1, name: 'one', isComplete: false},
        {id: 2, name: 'two', isComplete: true},
        {id: 3, name: 'three', isComplete: false},
    ];

    const result = addTodo(initialTodos, newTodo);

    expect(result).toEqual(expected);
});

test('addtodo should not mutate the exsisting list', () => {
    const initialTodos = [
        {id: 1, name: 'one', isComplete: false},
        {id: 2, name: 'two', isComplete: true},
    ];

    const newTodo = {id: 3, name: 'three', isComplete: false};

    const expected = [
        {id: 1, name: 'one', isComplete: false},
        {id: 2, name: 'two', isComplete: true},
        {id: 3, name: 'three', isComplete: false},
    ];

    const result = addTodo(initialTodos, newTodo);

    expect(result).not.toBe(initialTodos);
})
