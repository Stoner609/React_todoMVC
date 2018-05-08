import { connect } from 'react-redux';
import { todo_insert, todo_edit, todo_delete } from '../actions/actions.js';
import Todo from '../components/todoComponent.js';

const mapStateToProps = (state) => {
    return {
        value: state.todoReducer
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onInsert: (name, price) => {
            dispatch(todo_insert(name, price));
        },
        onEditSubmit: (name, price, originalName) => {
            dispatch(todo_edit(name, price, originalName));
        },
        onDelete: (name) => {
            dispatch(todo_delete(name));
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Todo);