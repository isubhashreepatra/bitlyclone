import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';

import { Links } from '../../imports/collections/links';
import RowDisplay from './row_display';

class LinkList extends Component {
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
              {this.props.links.map(item =>
                <RowDisplay row={item} key={item._id}/>
              )}
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
