import React, {Component, Fragment} from 'react';
import DisplayConvo from './DisplayConvo';
import MessagingBox from './MessagingBox';


class MessagingPanel extends Component {
  state = {
    messages: []
  }

  connection = new WebSocket('ws://localhost:9090/') //beoadcast

  componentDidMount(){
    this.connection.onmessage = (message) => {
      const data = JSON.parse(message.data)
      this.setState({messages: [...this.state.messages, data]})
    }
  }

  getMessage = (message) => {
    const data = {username: this.props.username, message: message}
    this.connection.send(JSON.stringify(data))//Can only send strings thru internet
  }


  render() {
    return (
        <Fragment>
          <DisplayConvo messages = {this.state.messages} />
          <MessagingBox getMessage={this.getMessage}/>
        </Fragment>
    )
  }
}
export default MessagingPanel;
