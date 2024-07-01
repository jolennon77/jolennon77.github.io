import React from 'react';
import { Box, Typography } from '@mui/material';

const HighlightedText = ({ children }) => {
  return (
    <Box
      sx={{
        backgroundColor: 'rgba(255, 255, 255, 0.3)', // 원하는 색상과 불투명도
        paddingRight: '8px',
        paddingLeft: '8px',
        display: 'inline-block',
        width:'100%',
        marginBottom: '8px',
      }}
    >
      <Typography component="span" fontWeight="bold">
        {children}
      </Typography>
    </Box>
  );
};

export default HighlightedText;
