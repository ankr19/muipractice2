import React from 'react'
import Button from '@mui/material/Button';
const Cbutton = ({ children, color, size, disabled,variant,sx }) => {
    return (
        <Button
            color={color}
            size={size}
            disabled={disabled}
            sx={sx}
            variant={variant}
        >
            {children}
        </Button>
    )
}

export default Cbutton