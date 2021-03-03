import React from "react";

class TwitterMessage extends React.Component {
  
  state = {
    value: "",
    chars: this.props.maxChars
  }

  handleChange = e => {
    this.setState({
      value: e.target.value
    }, () => this.setState({chars: 280 - this.state.value.length}))
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input 
          onChange={this.handleChange}
          type="text" 
          name="message" 
          id="message" 
          value={this.state.value}/>
        <h2>Chars Left: {this.state.chars}</h2>
      </div>
    );
  }
}

export default TwitterMessage;