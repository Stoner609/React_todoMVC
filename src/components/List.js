import React from 'react';

class App extends React.Component {
    constructor(props) {
        super(props);
        console.log('App ', props);
    }
    render() {
        return (
            <div>
                <div>
                    <span>{this.props.name}</span>
                    {` | `}
                    <span>{this.props.price}</span>
                    {` | `}
                    {/* <button onClick={this.onEdit}>Edit</button> */}
                    {` | `}
                    {/* <button onClick={this.onDelete}>Delete</button> */}
                </div>
            </div>
        )
    }
}

export default App;