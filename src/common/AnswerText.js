import React from 'react';
import { Box, Typography } from '@mui/material';

const AnswerText = ({ children }) => {
  return (
    <Box
      sx={{
        paddingRight: '8px',
        paddingLeft: '8px',
        display: 'inline-block',
        width:'100%',
      }}
    >
      <Typography variant="body1" component="p">
        {children}
      </Typography>
    </Box>
  );
};

export default AnswerText;
