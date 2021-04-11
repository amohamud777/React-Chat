import React, {Component} from 'react';
import MessagingPanel from './MessagingPanel';
class DisplayConvo extends Component {

  displayMessage = () => this.props.messages.map(message => <div>{message.username}: {message.message}</div>)


  render() {
    return (
      <div id = "displayConvo">
        {this.displayMessage()}

      </div>
    );
  }
}
export default DisplayConvo;
