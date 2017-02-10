import React from 'react';

export const TodoForm = (props) => (
    <form onSubmit={props.handleSubmit}>
        <input type="text" onChange={props.handleChange} value={props.currentTodo}/>
    </form>
)

TodoForm.propTypes = {
    currentTodo: React.PropTypes.string.isRequired,
    handleChange: React.PropTypes.func.isRequired,
}
