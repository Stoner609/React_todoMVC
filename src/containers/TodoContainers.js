import { connect } from 'react-redux';
import { todo_insert } from '../actions/actions.js';
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
            console.log('Hello Todo containers', name, price);
            dispatch(todo_insert(name, price));
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Todo);