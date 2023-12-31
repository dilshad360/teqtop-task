import { Avatar, IconButton, Typography } from "@material-tailwind/react"
import PlusIcon from "../assets/icons/plus.jsx";
import BellIcon from "../assets/icons/bell.jsx";
import Logo from "../assets/logo.png"
import UserImage from "../assets/user.png"


function Nav() {
    return (
        <div className="flex w-full items-center border-2 pr-8 py-1  justify-between shadow-xl">
            <div className="flex items-center">
                <img className="" src={Logo} alt="" />
                <Typography variant="h5" className="">Sub admin</Typography>
            </div>
            <div className="flex gap-2 items-center">
                <IconButton className="rounded-full" color="light-green">
                    <PlusIcon/>
                </IconButton>
                <div className="w-0.5 h-6 bg-black opacity-10 mx-1"></div>
                <IconButton className="rounded-full bg-[#F2F2F2]" >
                    <BellIcon/>
                </IconButton>
                <Avatar src={UserImage} size="md"></Avatar>
            </div>
        </div>
    )
}

export default Nav