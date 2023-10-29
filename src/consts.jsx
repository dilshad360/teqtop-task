import HomeIcon from "./assets/icons/home.svg";
import ProfileIcon from "./assets/icons/profile.svg";
import PinProfileIcon from "./assets/icons/pinprofile.svg";
import GroupIcon from "./assets/icons/group.svg";
import CityIcon from "./assets/icons/city.svg";
import StackIcon from "./assets/icons/stack.svg";
import MessageIcon from "./assets/icons/message.svg";
import GearIcon from "./assets/icons/gear.svg";




export const SIDE_BAR = [
    {
        title : "Dashboard",
        icon : HomeIcon,
        active: false
    },
    {
        title : "Sub Admin",
        icon : ProfileIcon,
        active: true
    },
    {
        title : "Expert",
        icon : PinProfileIcon,
        active: false
    },
    {
        title : "Customers",
        icon : GroupIcon,
        active: false
    },
    {
        title : "Countries",
        icon : CityIcon,
        active: false
    },
    {
        title : "Categories",
        icon : StackIcon,
        active: false
    },
    {
        title : "Messages",
        icon : MessageIcon,
        active: false
    },
    {
        title : "Settings",
        icon : GearIcon,
        active: false
    }
]


export const TABLE_HEAD = ["Name", "Email", "Phone", "Country", "Date of Birth", "Action"];