import { connect } from 'react-redux';
import { cart_insert } from '../actions/actions.js';
import Cart from '../components/Cart.js'

const mapStateToProps = (state) => {
    return {
        ...state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onAdd: (x) => {
            console.log('Hello Cart containers', x);
            dispatch(cart_insert(x));
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Cart);