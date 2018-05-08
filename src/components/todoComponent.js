import React from 'react';
import Add from './todo/add';
import Item from './todo/item';

const todo = ({ value, onInsert, onEditSubmit, onDelete }) => {
	return (
		<div>
			<Add onInsert={onInsert} />
			{
				value.map(product => {
					return (
						<Item
							key={product.name}
							{...product}
							onEditSubmit={onEditSubmit}
							onDelete={onDelete}
						/>
					)
				})
			}
		</div>
	)
}

// class todo extends React.Component {
// 	render() {
// 		return (
// 			<div>
// 				<Add
// 					onInsert={this.props.onInsert}
// 				/>
// 				{
// 					this.props.value.map(product => {
// 						return (
// 							<Item
// 								key={product.name}
// 								{...product}
// 								onEditSubmit={this.props.onEditSubmit}
// 								onDelete={this.props.onDelete}
// 							/>
// 						)
// 					})
// 				}
// 			</div>
// 		)
// 	}
// }

export default todo;