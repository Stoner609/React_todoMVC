import React from 'react';

// const InputValue = ({ value, onChangeValue }) => {
//     let context;
//     return (
//         <div>
//             <h1>{value}</h1>
//             <input defaultValue={value} onChange={() => onChangeValue(context)} ref={value => context = value} />
//         </div>
//     )
// }

class Input extends React.Component {
    constructor(props) {
        super(props);
        this.Hello = this.Hello.bind(this);
    }

    Hello(preElement) {
        this.props.onChangeValue(preElement.target.value);
    }

    render() {
        return (
            <div>
                <h1>{this.props.value}</h1>
                <input 
                    defaultValue={this.props.value} 
                    onChange={() => this.props.onChangeValue(this.context.value)} ref={value => this.context = value} 
                />
                <input 
                    defaultValue={this.props.value} 
                    onChange={this.Hello}
                />
            </div>
        )
    }
}

export default Input;