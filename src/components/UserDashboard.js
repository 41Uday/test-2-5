import React, { useState, useEffect } from "react";
import axios from "axios";

import { url } from "../config";
import Cookies from "js-cookie";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
const userId = Cookies.get("id");

const UserDashboard = () => {
  const [countTicketsData, setCountTicketsData] = useState({});
  const [secondData, setSecondData] = useState([]);
  const data = [];
  data.push(countTicketsData);
  console.log(data);
  // console.log(countUserData);

  useEffect(() => {
    axios
      .get(url.API + "api/" + userId + "/countByStatus")
      .then((res) => {
        console.log(res);
        setCountTicketsData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    axios
      .get(url.API + "api/user/" + userId + "/count/last5days")
      .then((res) => {
        console.log(res);
        setSecondData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const d = [
    { id: 3, name: "Alice", age: 25 },
    { id: 1, name: "Bob", age: 30 },
    { id: 2, name: "Charlie", age: 20 },
  ];

  const sortedData = d.slice().sort((a, b) => a.id - b.id);
  console.log(sortedData);

  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <div className="flex flex-row  justify-around align-center mb-10">
        <div className="shadow-slate-800 md:h-40 md:w-80 border-blue-500 border-2 p-6 flex flex-col justify-center align-center rounded-xl">
          <h1 className="md:text-2xl">Open Tickets</h1>
          <p className="mt-4 text-blue-700 text-4xl">{data[0].open_count}</p>
        </div>
        <div className="ml-6 md:h-40 md:w-80 border-blue-500 border-2 p-6 rounded-xl flex flex-col justify-center align-center">
          <h1 className="md:text-2xl">Inprogress Tickets</h1>
          <p className="mt-4 text-blue-700 text-4xl">
            {data[0].inprogress_count}
          </p>
        </div>
        <div className="ml-6 md:h-40 md:w-80 border-blue-500 border-2 p-6 rounded-xl flex flex-col justify-center align-center">
          <h1 className="md:text-2xl">Closed Tickets</h1>
          <p className="mt-4 text-blue-700 text-4xl">{data[0].closed_count}</p>
        </div>
      </div>
      <div className="flex  justify-center align-center ">
        <BarChart
          width={500}
          height={300}
          data={secondData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="count" fill="#8884d8" />
        </BarChart>
      </div>
    </div>
  );
};

export default UserDashboard;
