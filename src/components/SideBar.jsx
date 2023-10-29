import { Card, IconButton, Typography } from "@material-tailwind/react";

import { SIDE_BAR } from "../consts";

function SideBar() {
    return (
        <Card className="min-h-screen w-full bg-[#17494D] text-gray-300 max-w-[7rem] py-4  rounded-none flex items-center gap-4">
            {SIDE_BAR.map((item) => (
                <div
                    key={item.title}
                    className={`flex flex-col justify-center items-center ${item.active ? "opacity-100" : "opacity-50"
                        }`}
                >
                    <IconButton
                        variant="text"
                        className={` ${item.active ? "bg-[#266065]" : ""}`}
                    >
                        <img src={item.icon} alt="" />
                    </IconButton>
                    <Typography variant="small" className="font-semibold pt-1">
                        {item.title}
                    </Typography>
                </div>
            ))}
        </Card>
    );
}

export default SideBar;
