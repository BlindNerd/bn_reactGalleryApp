import React from 'react';

const NotFound = props => {

const iconStyles = {
  fontSize: '165px',
  color: 'red',
  margin: 'auto'
}

const divStyles = {
  margin: 'auto'
}

return (
<div className="not-found-page" style={divStyles}>

  <i className="material-icons" style={iconStyles}>report </i>
    <p>I'm Sorry that is the page you are looking for is not here TRY AGIAN</p>
</div>
)};
export default NotFound;
