import React from 'react'

import SignIn from './SignIn'
import Twits from './Twits'

class App extends React.Component {

	constructor(props) {
		super(props)

		this.state = { username: null }
	}

	render() {
		let content
		if (this.state.username == null) {
			content = <SignIn onSignIn={this._onSignIn.bind(this)} />
		}
		else {
			content = <Twits username={this.state.username} />
		}

		return (
			<>
				<nav>
					<span>Twit</span>
				</nav>
				{content}
			</>
		)
	}

	_onSignIn(username) {
		this.setState({ username: username })
	}

}

export default App
