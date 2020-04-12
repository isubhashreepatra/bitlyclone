import React, { Component } from 'react';

class ShortenURL extends Component {
  constructor(props){
    super(props);
    this.state = { error: '' };
  }

  handleClickEvent(event){
    event.preventDefault();
    var inputText = this.refs.inputURL.value;

    console.log('input text', inputText);

    Meteor.call('link.insert', inputText, (error) => {
      if (error) {
        this.setState({ error: 'Enter a valid URL!' });
      } else {
        this.setState({ error: '' });
        inputText = '';
      }
    });
  }

  render(){
    return (
      <div className="jumbotron rounded">
        <form>
          <div className="form-group">
            <label>Enter your URL here</label>
            <input ref="inputURL" type="text" className="form-control form-control-lg" placeholder="Shorten Your Link"/>
          </div>
          <button type="button" className="btn btn-info" onClick={this.handleClickEvent.bind(this)} >Shorten</button>
        </form>
        <div><h6 className="display-4 text-danger">{this.state.error}</h6></div>
      </div>
    );
  }
};

export default ShortenURL;
