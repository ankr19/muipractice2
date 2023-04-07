import PeopleIcon from '@mui/icons-material/People';
import DnsIcon from '@mui/icons-material/Dns';
import PublicIcon from '@mui/icons-material/Public';
import SettingsEthernetIcon from '@mui/icons-material/SettingsEthernet';
import SettingsInputCompositeIcon from '@mui/icons-material/SettingsInputComposite';
import StorageIcon from '@mui/icons-material/Storage';

export const NavbarData = [
    {
        id: 1,
        icon: <PeopleIcon/>,
        label: "Autentification",
        route: "authentifcation",
    },
    {
        id: 2,
        icon: <DnsIcon/>,
        label: "Database",
        route: "database",
    },
    // {
    //     id: 3,
    //     icon: <PublicIcon/>,
    //     label: "Hosting",
    //     route: "hosting",
    // },
    // {
    //     id: 4,
    //     icon: <SettingsEthernetIcon/>,
    //     label: "Functions",
    //     route: "functions",
    // },
    // {
    //     id: 5,
    //     icon: <SettingsInputCompositeIcon/> ,
    //     label: "Machine Learning",
    //     route: "machine-learning",
    // },
    // {
    //     id: 6,
    //     icons: <StorageIcon />,
    //     label: "Storage",
    //     route: "storage"
    // }
]