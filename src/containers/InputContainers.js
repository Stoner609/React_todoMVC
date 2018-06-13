import { connect } from 'react-redux';
import { insert, getAllUsers } from '../actions/actions.js';
import Input from '../components/inputComponent';

const mapStateToProps = (state) => {
    return {
        value: state.inputReducer.context
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onChangeValue: (todoItem) => {
            dispatch(insert(todoItem));
        },   
        AllUsers: () => {
            dispatch(getAllUsers());
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Input);