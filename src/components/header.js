import React from 'react';
import AppBar from 'material-ui/AppBar';

const header = () => {
  return (
    <AppBar
     title="Title"
     iconClassNameRight="muidocs-icon-navigation-expand-more"
     style={{
        backgroundColor: '#4DB6AC'
    }}
   />
 );
}

export default header;
