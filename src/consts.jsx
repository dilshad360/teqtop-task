import HomeIcon from "./assets/icons/home.jsx";
import ProfileIcon from "./assets/icons/profile.jsx";
import PinProfileIcon from "./assets/icons/pinprofile.jsx";
import GroupIcon from "./assets/icons/group.jsx";
import CityIcon from "./assets/icons/city.jsx";
import StackIcon from "./assets/icons/stack.jsx";
import MessageIcon from "./assets/icons/message.jsx";
import GearIcon from "./assets/icons/gear.jsx";



export const SIDE_BAR = [
    {
        title : "Dashboard",
        icon : <HomeIcon/>,
        active: false
    },
    {
        title : "Sub Admin",
        icon : <ProfileIcon/>,
        active: true
    },
    {
        title : "Expert",
        icon : <PinProfileIcon/>,
        active: false
    },
    {
        title : "Customers",
        icon : <GroupIcon/>,
        active: false
    },
    {
        title : "Countries",
        icon : <CityIcon/>,
        active: false
    },
    {
        title : "Categories",
        icon : <StackIcon/>,
        active: false
    },
    {
        title : "Messages",
        icon : <MessageIcon/>,
        active: false
    },
    {
        title : "Settings",
        icon : <GearIcon/>,
        active: false
    }
]


export const TABLE_HEAD = ["Name", "Email", "Phone", "Country", "Date of Birth", "Action"];