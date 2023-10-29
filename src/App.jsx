
import { useEffect, useState } from "react";
import SideBar from "./components/SideBar";
import { Avatar, Button, Card, CardHeader, IconButton, Typography } from "@material-tailwind/react";

import Filter from "./components/drawers/Filter";

import ViewIcon from "./assets/icons/eye.svg"
import EditIcon from "./assets/icons/pencil.svg"
import DeleteIcon from "./assets/icons/bin.svg"
import AddIcon from "./assets/icons/plus.svg"
import FilterIcon from "./assets/icons/filter.svg"

import { TABLE_HEAD } from "./consts"
import AddNew from "./components/drawers/AddNew";


function App() {

  const [data, setData] = useState(null);


  const [openFilter, setOpenFilter] = useState(false);
  const [openAddNew, setOpenAddNew] = useState(false);


  const openDrawer = (param) => () => {
    if (param === 'Filter')
      setOpenFilter(true)
    if (param === 'AddNew')
      setOpenAddNew(true)
    document.body.style.overflow = 'hidden';
  };


  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('https://api.slingacademy.com/v1/sample-data/users?limit=10');
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setData(data);
        console.log('Fetched data:', data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, []);




  return (
    <div className="bg-[#f8f9f9] flex ">

      <SideBar />

      <Card className="w-full my-8 mx-7 border-2 shadow-none">

        <CardHeader floated={false} shadow={false} className="rounded-b-none m-0 px-4 py-3 flex justify-between border-b items-center" >
          <Typography variant="h6">Total({data !== null ? data.total_users : '0'})</Typography>
          <div className="flex gap-2">
            <Button size="sm" className="bg-[#17494D] flex items-center gap-2" onClick={openDrawer("Filter")}><img src={FilterIcon} alt="" />Filter</Button>
            <Button size="sm" color="light-green" className="flex items-center gap-2" onClick={openDrawer("AddNew")}><img src={AddIcon} alt=""></img>Add New</Button>
          </div>
        </CardHeader>

        <table className="w-full min-w-max table-auto text-left">
          <thead >
            <tr >
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
                {data.users.map(({ first_name, last_name, email, phone, gender, country, date_of_birth, profile_picture },) => (
                  <tr key={first_name} className="even:bg-blue-gray-50/50">
                    <td className="p-4">
                      <Typography variant="small" color="blue-gray" className="font-normal">
                        <Avatar size="sm" src={profile_picture} className="mr-2" alt="avatar" />
                        {first_name} {last_name}
                      </Typography>
                    </td>
                    <td className="p-4">
                      <Typography variant="small" color="blue-gray" className="font-normal">
                        {email}
                      </Typography>
                    </td>
                    <td className="p-4">
                      <Typography variant="small" color="blue-gray" className="font-normal">
                        {phone}
                      </Typography>
                    </td>
                    <td className="p-4">
                      <Typography variant="small" color="blue-gray" className="font-normal">
                        {gender}
                      </Typography>
                    </td>
                    <td className="p-4">
                      <Typography variant="small" color="blue-gray" className="font-normal">
                        {country}
                      </Typography>
                    </td>
                    <td className="p-4">
                      <Typography variant="small" color="blue-gray" className="font-normal">
                        {date_of_birth}
                      </Typography>
                    </td>

                    <td className="p-4">
                      <div className="flex gap-2">
                        <IconButton variant="outlined" size="sm" color="yellow">
                          <img src={ViewIcon} alt="" />
                        </IconButton>
                        <IconButton variant="outlined" size="sm" color="light-green">
                          <img src={EditIcon} alt="" />
                        </IconButton>
                        <IconButton variant="outlined" size="sm" color="red">
                          <img src={DeleteIcon} alt="" />
                        </IconButton>
                      </div>
                    </td>
                  </tr>
                ))}
              </>
            ) : (
              <p className="p-5">Loading data...</p>
            )}
          </tbody>
        </table>
      </Card>


      {/* Drawers */}
      <Filter open={openFilter} setOpen={setOpenFilter} />
      <AddNew open={openAddNew} setOpen={setOpenAddNew} />

    </div>
  )
}

export default App
