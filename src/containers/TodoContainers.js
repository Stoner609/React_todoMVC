import { connect } from 'react-redux';
import { todo_insert, todo_edit } from '../actions/actions.js';
import Todo from '../components/todoComponent.js';

const mapStateToProps = (state) => {
    console.log('mapStateToProps', state);
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
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Todo);