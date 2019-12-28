import React from 'react';

export class AddPlayerForm extends React.Component {
  state = {
    value: ''
  }

  handleValueChange = (e) => {
    console.log(e);
    this.setState({ value: e.target.value})
  }

  render() {
    return (
      <form className="form">
        <input type="text" className="input" placeholder="enter a player name"
               value={this.state.value} onChange={this.handleValueChange}/>
        <input type="submit" className="input" value="Add"></input>
      </form>
    );
  }
}
