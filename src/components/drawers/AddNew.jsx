import {
    Button,
    Drawer,
    IconButton,
    Input,
    Option,
    Select,
    Typography,
} from "@material-tailwind/react";
import PropTypes from "prop-types";

import ProfileImage from "../../assets/noProfile.jsx";
import UploadIcon from "../../assets/icons/upload.jsx"

function AddNew({ open, setOpen }) {

    const closeDrawer = () => {
        document.body.style.overflow = "auto";
        setOpen(false);
    };

    return (
        <Drawer open={open} size={450} onClose={closeDrawer} placement="right">
            <div className="flex items-center justify-between px-6 py-2 border-b">
                <Typography variant="h6" color="blue-gray">
                    Add sub admin
                </Typography>
                <IconButton variant="text" color="blue-gray" onClick={closeDrawer}>
                <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="h-5 w-5"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>

                </IconButton>
            </div>
            <div className="p-6 flex items-center gap-1">
                <ProfileImage/>
                <Button className="flex items-center gap-2" variant="text" color="light-green" size="sm">
                    <UploadIcon/>
                    Upload Photo
                </Button>
            </div>
            <form className="flex flex-col gap-5 p-6">
                <Typography variant="small" color="blue-gray" className="-mb-3">
                    Name
                </Typography>
                <Input placeholder="Enter Name" />
                <Typography variant="small" color="blue-gray" className="-mb-3">
                    Email
                </Typography>
                <Input placeholder="abd@domain.com" type="email" />
                <Typography variant="small" color="blue-gray" className="-mb-3">
                    Phone Number
                </Typography>
                <Input placeholder="99145 78063 " type="email" />
                <Typography variant="small" color="blue-gray" className="-mb-3">
                    Assign Country
                </Typography>
                <div>
                    <Select label="Select">
                        <Option>India</Option>
                        <Option>US</Option>
                        <Option>UK</Option>
                        <Option>China</Option>
                        <Option>Russia</Option>
                    </Select>
                </div>
                <div className="flex justify-between border-t pt-4">
                    <Button className="bg-gray-400" onClick={closeDrawer}>
                        Reset
                    </Button>
                    <Button color="light-green">Apply</Button>
                </div>
            </form>
        </Drawer>
    );
}

AddNew.propTypes = {
    open: PropTypes.bool,
    setOpen: PropTypes.func,
};

export default AddNew;
