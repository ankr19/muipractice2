import React from 'react'
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
const BaiscMenu = ({anchorEl, handleClose, open, notification}) => {
  return (
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        {notification.map((e, key)=>{
          return(<MenuItem key={key} onClick={()=>{handleClose()}}>{e.label}</MenuItem>)
        })}
        {/* <MenuItem onClick={handleClose}>Profile</MenuItem> */}
      </Menu>)
}

export default BaiscMenu