import {
    Button,
    Chip,
    Drawer,
    IconButton,
    Input,
    Option,
    Select,
    Typography,
} from "@material-tailwind/react";
import PropTypes from 'prop-types'



function Filter({ open, setOpen }) {

    const closeDrawer = () => {
        document.body.style.overflow = 'auto';
        setOpen(false);
    }

    return (
        <Drawer open={open} size={450} onClose={closeDrawer} placement="right" >
            <div className="flex items-center justify-between px-6 py-2 border-b">
                <Typography variant="h6" color="blue-gray">
                    Filter
                </Typography>
                <IconButton variant="text" color="blue-gray" onClick={closeDrawer} >
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
            <form className="flex flex-col gap-6 p-6">
                <Typography variant="small" color="blue-gray" className="-mb-3">
                    Country
                </Typography>
                <div>
                <Select label="Select">
                    <Option>India</Option>
                    <Option>US</Option>
                    <Option>UK</Option>
                    <Option>China</Option>
                    <Option>Russia</Option>
                </Select>
                <Chip className="w-fit mt-2" value="India" variant="ghost" onClose={()=>{}} />
                </div>
                <div className="flex items-center justify-between gap-1 ">
                <Input  type="date" label="From"  />
                <Input type="date" label="To"  />
                </div>
                <div className="flex justify-between border-t pt-4">
                <Button className="bg-gray-400" onClick={closeDrawer} >Reset</Button>
                <Button color="light-green">Apply</Button>
            </div>
            </form>
            
        </Drawer>
    );
}

Filter.propTypes = {
    open: PropTypes.bool,
    setOpen: PropTypes.func
}


export default Filter;
