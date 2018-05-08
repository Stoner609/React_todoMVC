import React from 'react';
import Add from './Add';
import List from './List';

class todo extends React.Component {
    constructor(props) {
        super(props);
        console.log('來自 components', props);
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
                            // <div key={product.name}>{product.name}</div>
                            // <ProductItem
                            //     key={product.name}
                            //     {...product}
                            //     onDelete={this.onDelete}
                            //     onEditSubmit={this.onEditSubmit}
                            // />
                            <List 
                                key={product.name}
                                {...product}
                            />
                        )
                    })
                }
            </div>
        )
    }
}

export default todo;