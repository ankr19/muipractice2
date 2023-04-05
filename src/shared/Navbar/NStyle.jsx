const drawerWidth = 240;

export default NavbarStyle = {
    app: {
        width: { 
            sm: `calc(100% - ${drawerWidth}px)` 
        },
        ml: { 
            sm: `${drawerWidth}px` 
        },
    },
    iconsB: {
        mr: 2,
        display: { 
            sm: 'none' 
        }
    },
    box1: {
        width: { 
            sm: drawerWidth 
        },
        flexShrink: { 
            sm: 0 
        }
    },
    drawer1: {
        display: { xs: 'block', sm: 'none' },
        '& .MuiDrawer-paper': { 
            boxSizing: 'border-box', 
            width: drawerWidth 
        },
    },
    drawer2: {
        display: { xs: 'none', sm: 'block' },
        '& .MuiDrawer-paper': { 
            boxSizing: 'border-box', 
            width: drawerWidth 
        },
      },
    box2: { 
        flexGrow: 1, 
        p: 3, 
        width: { 
            sm: `calc(100% - ${drawerWidth}px)` 
        } 
    },
    
}