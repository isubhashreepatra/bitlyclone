import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';

import { Links } from '../../imports/collections/links';

class LinkList extends Component {

  renderRows() {
    var linkCollection = this.props.links;

    return linkCollection.map(item => {
      const shortURL = `http://localhost:3000/${item.token}`;
      return (
        <tr>
          <td>{item.url}</td>
          <td>
            <a href={ shortURL }>{ shortURL }</a>
          </td>
          <td>{item.clicks}</td>
        </tr>
      );
    });
  }

  render() {
    return(
        <div>
          <table className="table">
            <thead className="thead-dark">
              <tr>
                <th scope="col">URL</th>
                <th scope="col">Shortend URL</th>
                <th scope="col">Clicks</th>
              </tr>
            </thead>
            <tbody>
              {this.renderRows()}
            </tbody>
          </table>
        </div>
    );
  }
};


export default withTracker(() => {
  Meteor.subscribe('links');
  return { links: Links.find({}).fetch() };

})(LinkList);
