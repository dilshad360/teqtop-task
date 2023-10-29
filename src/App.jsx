import { useEffect, useState } from "react";
import SideBar from "./components/SideBar";
import { Button, Typography } from "@material-tailwind/react";

import LeftIcon from "./assets/icons/leftarrow.svg";
import RightIcon from "./assets/icons/rightarrow.svg";

import Table from "./components/Table";

function App() {
  const [data, setData] = useState(null);

  const [page, setPage] = useState(1);
  const limit = 8;
  const offset = (page - 1) * limit;

  const nextPage = () => {
    setPage(page + 1);
  };

  const prevPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          `https://api.slingacademy.com/v1/sample-data/users?limit=${limit}&offset=${offset}`
        );
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setData(data);
        console.log("Fetched data:", data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, [page]);

  return (
    <div className="bg-[#f8f9f9] flex ">
      <SideBar />

      <div className="w-full my-8 mx-7">
        <Table data={data} />

        <div className="flex items-center justify-between">
          <Typography variant="small" className="text-gray-500">
            Showing results {page} - {offset + limit} of{" "}
            {data !== null ? data.total_users : "0"}
          </Typography>
          <div className="flex gap-2">
            <Button size="sm" onClick={prevPage} variant="text">
              <img src={LeftIcon} alt="" />
            </Button>

            <Button size="sm" onClick={nextPage} variant="text">
              <img src={RightIcon} alt="" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
