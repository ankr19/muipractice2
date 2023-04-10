import { Box } from '@mui/material'
import React from 'react'
import Cbutton from '../shared/Cbutton/Cbutton'

const Box2 = () => {
    let boxstyle = {
        box: {
            margin: 0,
            width: 400,
            height: 400,
            backgroundColor: 'primary.dark',
            '&:hover': {
              backgroundColor: 'primary.main',
              opacity: [0.9, 0.8, 0.7],
            },
            justifyContent: 'center',
          },
        but: {
            color: "red",
            backgroundColor: "black",
        }
    }
  return (
    <Box sx={boxstyle.box}>
        <Cbutton sx={boxstyle.but}>
            hello
        </Cbutton>
    </Box>
  )
}

export default Box2