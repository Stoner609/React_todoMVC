import React from 'react';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isEdit: false
		}
		console.log('App ', props);

		this.onEdit = this.onEdit.bind(this);
		this.onEditSubmit = this.onEditSubmit.bind(this);
	}

	onEdit() {
		this.setState({
			isEdit: true
		});
	}

	onEditSubmit(event) {
		event.preventDefault();
		this.props.onEditSubmit(this.nameInput.value, this.priceInput.value, this.props.name);
		this.setState({
			isEdit: false
		})
	}

	render() {
		return (
			<div>
				{
					this.state.isEdit
						? (
							<form onSubmit={this.onEditSubmit} >
								<input placeholder="name" ref={nameInput => this.nameInput = nameInput} defaultValue={this.props.name} />
								<input placeholder="price" ref={priceInput => this.priceInput = priceInput} defaultValue={this.props.price} />
								<button>Save</button>
							</form>
						)
						: (
							<div>
								<span>{this.props.name}</span>
								{` | `}
								<span>{this.props.price}</span>
								{` | `}
								<button onClick={this.onEdit}>Edit</button>
								{` | `}
								{/* <button onClick={this.onDelete}>Delete</button> */}
							</div>)
				}
			</div>
		)
	}
}

export default App;