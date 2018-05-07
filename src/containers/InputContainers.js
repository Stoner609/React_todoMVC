import { connect } from 'react-redux';
import { insert } from '../actions/actions.js';
import Input from '../components/inputComponent';

const mapStateToProps = (state) => {
    console.log('來自 containers', state);
    return {
        value: state.inputReducer.context
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onChangeValue: (x) => {
            // console.log(x);
            dispatch(insert(x));
        }   
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Input);