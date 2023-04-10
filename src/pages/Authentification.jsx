import React from 'react'
import BasicCard from '../shared/BasicCard/BasicCard'
import Search from '../shared/Search/Search'
import GridWrapper from '../shared/GridWrapper/GridWrapper'
import { Box, IconButton, Typography } from '@mui/material'
import Cbutton from '../shared/Cbutton/Cbutton'
import RefreshIcon from '@mui/icons-material/Refresh';

const cardHeaderStyles = {
  wrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: '20px',
    paddingRight: '20px',
    height: '65px',
    backgroundColor: '#f5f5f5',
    borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
  },
  addUserButton: {
    fontSize: '1.05rem',
  },
}

const Authentification = () => {
  const getHeader = () => {
    const handleChange = (value) => {
      console.log(value);
    };

    const addUser = () => {
      console.log('click')
    };

    return (
      <Box sx={cardHeaderStyles.wrapper}>
        <Search
          placeholder="Search by email address, phone number, or user UID"
          onChange={(event) => handleChange(event.target.value)}
          searchBarWidth='720px'
        />
        <Box>
          <Cbutton
            variant="contained"
            onClick={addUser}
            size="large"
            sx={cardHeaderStyles.addUserButton}
          >
            Add user
          </Cbutton>
          <IconButton>
            <RefreshIcon />
          </IconButton>
        </Box>
      </Box>
    )
  };

  const getContent = () => (
    <Typography
      align="center"
      sx={{ 
        margin: '40px 16px', 
        color: 'rgba(0, 0, 0, 0.6)', 
        fontSize: '1.3rem' 
    }}
    >
      No users for this project yet
    </Typography>
  );

  return (
    <GridWrapper>
      <BasicCard
        header={getHeader()}
        content={getContent()}
      />
    </GridWrapper>
  )
}

export default Authentification