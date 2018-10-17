import axios from 'axios'
import React from 'react'

const Twit = (props) => (
	<div className='twit'>
		<div className='username'>@{props.username}</div>
		<div className='content'><pre>{props.content}</pre></div>
	</div>
)

class Twits extends React.Component {

	constructor(props) {
		super(props)

		this.state = {
			submitting: false,
			twits: null
		}
	}

	componentWillMount() {
		axios.get('http://localhost:7777/twits')
			.then((response) => {
				if (response.status === 200) {
					this.setState({ twits: response.data })
				}
			})
	}

	render() {
		let content
		if (this.state.twits === null) {
			content = (
				<div id='loading'>
					<div />
				</div>
			)
		}
		else {
			const twits = this.state.twits.map(twit => <Twit key={twit.id} username={twit.username} content={twit.content} />)

			content = (
				<>
					<div className='twee'>
						<form onSubmit={this._onTwee.bind(this)}>
							<textarea maxLength={140} placeholder="It's freezing and snowing in New York--we need global warming!" ref={textarea => this._twit = textarea} />
							<button type='submit' disabled={this.state.submitting}>Twee</button>
						</form>
					</div>
					<div className='twits'>{twits}</div>
				</>
			)
		}

		return <section id='twits'>{content}</section>
	}

	_onTwee(event) {
		event.preventDefault()

		if (!this._twit.value || this.state.submitting)
			return

		this.setState({ submitting: true })
		axios.post('http://localhost:7777/twee', {
			username: this.props.username,
			content: this._twit.value
		}).then((response) => {
			let twits
			if (response.status === 200) {
				twits = [response.data].concat(this.state.twits)
			}
			else {
				twits = this.state.twits
			}

			this.setState({
				submitting: false,
				twits: twits
			})

			this._twit.value = ''
		})
	}

}

export default Twits
