import { connect } from 'react-redux';
import { todo_insert } from '../actions/actions.js';
import Todo from '../components/todoComponent.js';

const mapStateToProps = (state) => {
    return {
        ...state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onAdd: (x) => {
            console.log('Hello Todo containers', x);
            dispatch(todo_insert(x));
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Todo);