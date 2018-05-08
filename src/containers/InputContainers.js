import { connect } from 'react-redux';
import { insert } from '../actions/actions.js';
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
        }   
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Input);