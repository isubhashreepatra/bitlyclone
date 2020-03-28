//Import libraries
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Header from './components/header';
import ShortenURL from './components/link_create';
import LinkList from './components/link_list';

import { Links } from '../imports/collections/links';

//Create App component to load other components
class App extends Component {

  render(){
    return (
      <div>
        <Header />
        <ShortenURL />
        <LinkList />
      </div>
    );
  }

};

Meteor.startup(() => {
  ReactDOM.render(<App />, document.querySelector('.container'));
});
