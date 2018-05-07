import { connect } from 'react-redux';
import { add, sub } from '../actions/actions.js';
import Calculator from '../components/calculatorComponent.js';

const mapStateToProps = (state) => {
    return {
        value: state.calculatorReducer.value
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onClickAdd: () => {
            dispatch(add());
        },
        onClickSub: () => {
            dispatch(sub());
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Calculator);