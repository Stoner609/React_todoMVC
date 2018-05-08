import React from 'react';
import Add from './Add';
import Item from './Item';

class todo extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Add
                    onInsert={this.props.onInsert}
                />
                {
                    this.props.value.map(product => {
                        return (
                            <Item 
                                key={product.name}
                                {...product}
                                onEditSubmit={this.props.onEditSubmit}
                                onDelete={this.props.onDelete}
                            />
                        )
                    })
                }
            </div>
        )
    }
}

export default todo;