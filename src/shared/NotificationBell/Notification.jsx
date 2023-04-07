import { Badge, IconButton, Tooltip } from '@mui/material'
import React from 'react'
import NotificationsIcon from '@mui/icons-material/Notifications';
import BaiscMenu from '../Menu/BaiscMenu';
const notificationData = [
    {
        id: 0,
        label: "First notification "
    },
    {
        id: 1,
        label: "Second notification"
    }
]
const Notification = ({ iconsColor}) => {
    const newNotification = `you have ${notificationData.length} new notification`
    const notification = `No new notification`
    const [open, setOpen] = React.useState(false);
    const [anchorEl, setAnchorEl] = React.useState(null)
    const handleOpen = (event) => {
        setAnchorEl(event.currentTarget)
        setOpen(true)
    }
    const handleClose = () => {
        setOpen(false);
    }
    
    return (
        <>
            <Tooltip title={notificationData.length ? newNotification : notification}>
                <IconButton
                    color={iconsColor}
                    onClick={(e) => { notificationData.length ? handleOpen(e) : null }}
                    anchorEl={anchorEl}
                >
                    <Badge badgeContent={notificationData.length} color='primary'>
                        <NotificationsIcon />
                    </Badge>
                </IconButton>
            </Tooltip>
            <BaiscMenu
                open={open}
                anchorEl={anchorEl}
                handleClose={handleClose}
                notification={notificationData}
            />
        </>
    )
}

export default Notification