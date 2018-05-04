import { connect } from 'react-redux';
import InputValue from '../components/InputValue';
import { insert } from '../actions/actions.js';

const mapStateToProps = (state) => {
    return {
        value: state.valueinput.context
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onChangeValue: (x) => {
            //console.log(x.value);
            dispatch(insert(x.value));
        }   
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(InputValue);