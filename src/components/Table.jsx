import {
    Avatar,
    Button,
    Card,
    CardHeader,
    IconButton,
    Input,
    Typography,
} from "@material-tailwind/react";
import PropTypes from "prop-types";

import { TABLE_HEAD } from "../consts";
import { useState } from "react";

import Filter from "../components/drawers/Filter";
import AddNew from "../components/drawers/AddNew";

import ViewIcon from "../assets/icons/eye.jsx";
import EditIcon from "../assets/icons/pencil.jsx";
import DeleteIcon from "../assets/icons/bin.jsx";
import AddIcon from "../assets/icons/plus.jsx";
import FilterIcon from "../assets/icons/filter.jsx";
import SearchIcon from "../assets/icons/search.jsx";

function Table({ data }) {
    const [openFilter, setOpenFilter] = useState(false);
    const [openAddNew, setOpenAddNew] = useState(false);

    const openDrawer = (param) => () => {
        if (param === "Filter") setOpenFilter(true);
        if (param === "AddNew") setOpenAddNew(true);
        document.body.style.overflow = "hidden";
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <>
            {/* Drawers */}
            <Filter open={openFilter} setOpen={setOpenFilter} />
            <AddNew open={openAddNew} setOpen={setOpenAddNew} />

            <Card className=" border-2 shadow-none mb-4">
                <CardHeader
                    floated={false}
                    shadow={false}
                    className="rounded-b-none m-0 px-4 py-3 flex justify-between border-b items-center"
                >
                    <Typography variant="h6">
                        Total({data !== null ? data.total_users : "0"})
                    </Typography>
                    <div className="flex gap-2">
                        <div className="w-64 px-3">
                            <Input
                                label="Search by name"
                                variant="standard"
                                icon={<SearchIcon/>}
                            />
                        </div>
                        <Button
                            size="sm"
                            className="bg-[#17494D] flex items-center gap-2"
                            onClick={openDrawer("Filter")}
                        >
                            <FilterIcon/>
                            Filter
                        </Button>
                        <Button
                            size="sm"
                            color="light-green"
                            className="flex items-center gap-2"
                            onClick={openDrawer("AddNew")}
                        >
                            <AddIcon/>Add New
                        </Button>
                    </div>
                </CardHeader>

                <table className="w-full min-w-max table-auto text-left">
                    <thead>
                        <tr>
                            {TABLE_HEAD.map((head) => (
                                <th key={head} className="border-b border-blue-gray-100  p-4 ">
                                    <Typography
                                        variant="small"
                                        color="black"
                                        className="font-semibold leading-none opacity-70"
                                    >
                                        {head}
                                    </Typography>
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {data ? (
                            <>
                                {data.users.map(
                                    ({
                                        first_name,
                                        last_name,
                                        email,
                                        phone,
                                        country,
                                        date_of_birth,
                                        profile_picture,
                                    }) => (
                                        <tr key={first_name} className="even:bg-blue-gray-50/50">
                                            <td className="p-4">
                                                <Typography
                                                    variant="small"
                                                    color="blue-gray"
                                                    className="font-normal"
                                                >
                                                    <Avatar
                                                        size="sm"
                                                        src={profile_picture}
                                                        className="mr-2"
                                                        alt="avatar"
                                                    />
                                                    {first_name} {last_name}
                                                </Typography>
                                            </td>
                                            <td className="p-4">
                                                <Typography
                                                    variant="small"
                                                    color="blue-gray"
                                                    className="font-normal"
                                                >
                                                    {email}
                                                </Typography>
                                            </td>
                                            <td className="p-4">
                                                <Typography
                                                    variant="small"
                                                    color="blue-gray"
                                                    className="font-normal"
                                                >
                                                    {phone}
                                                </Typography>
                                            </td>

                                            <td className="p-4">
                                                <Typography
                                                    variant="small"
                                                    color="blue-gray"
                                                    className="font-normal"
                                                >
                                                    {country}
                                                </Typography>
                                            </td>
                                            <td className="p-4">
                                                <Typography
                                                    variant="small"
                                                    color="blue-gray"
                                                    className="font-normal"
                                                >
                                                    {date_of_birth}
                                                </Typography>
                                            </td>

                                            <td className="p-4">
                                                <div className="flex gap-2">
                                                    <IconButton
                                                        variant="outlined"
                                                        size="sm"
                                                        color="yellow"
                                                    >
                                                        <ViewIcon />
                                                    </IconButton>
                                                    <IconButton
                                                        variant="outlined"
                                                        size="sm"
                                                        color="light-green"
                                                    >
                                                        <EditIcon />
                                                    </IconButton>
                                                    <IconButton variant="outlined" size="sm" color="red">
                                                        <DeleteIcon />
                                                    </IconButton>
                                                </div>
                                            </td>
                                        </tr>
                                    )
                                )}
                            </>
                        ) : (
                            <p className="p-5">Loading data...</p>
                        )}
                    </tbody>
                </table>
            </Card>
        </>
    );
}

Table.propTypes = {
    data: PropTypes.object,
};

export default Table;
