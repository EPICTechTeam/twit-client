import React from 'react'

class SignIn extends React.Component {

	componentDidMount() {
		this._username.focus()
	}

	render() {
		return (
			<section id='sign-in'>
				<h2>Sign in</h2>
				<form onSubmit={this._onSubmit.bind(this)}>
					<input type='text' placeholder='Username' ref={input => this._username = input} />
					<button type='submit'>Sign in</button>
				</form>
			</section>
		)
	}

	_onSubmit(event) {
		event.preventDefault()

		if (!this._username.value)
			return

		this.props.onSignIn(this._username.value)
	}

}

export default SignIn
