
import React from 'react';
import { Toolbar, Typography } from '@mui/material';

class ToolBarComponent extends React.Component {

  render() {
    return (
      <Toolbar>
        <Typography variant="h4" component="div" sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}>
          Notifier
        </Typography>
      </Toolbar>
    )
  }
}

export default ToolBarComponent;





