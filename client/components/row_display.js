import React from 'react';

const RowDisplay = (props) => {

  console.log('props', props);

  const {url, clicks, token} = props.row;
  const shortURL = `http://localhost:3000/${token}`;

  return (
         <tr>
            <td>{url}</td>
            <td>
              <a href={ shortURL }>{ shortURL }</a>
            </td>
            <td>{clicks}</td>
          </tr>
      );
};

export default RowDisplay;
