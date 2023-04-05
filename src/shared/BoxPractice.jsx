import { Box, Button } from '@mui/material'
import React from 'react'

const BoxPractice = () => {
  const boxStyle = {
    root: {

    }
  }
  return (
    <Box
      sx={
        {
          marginBlockStart: '1px',
          width: '100%',
          height: 200,
          backgroundColor: 'secondary.dark',
          // '&:hover': {
          //   backgroundColor: 'secondary.main',
          //   opacity: [0.9, 0.8, 0.7],
          // },
          // p: "100%",
          marginTop: "12px",
          alignContent: 'center'
        }
      }>
      <Button 
      variant='contained'
      sx={{
        width: "10%",
        backgroundColor: "maroon",
        '&:hover':{
          backgroundColor: 'maroon',
          opacity: [0.9, 0.8, 0.7]
        }
      }}
      >Hello</Button>
    </Box>
  );
}

export default BoxPractice