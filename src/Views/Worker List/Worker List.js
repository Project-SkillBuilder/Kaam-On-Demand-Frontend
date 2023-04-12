import React, { useState } from "react";
import "./workerlist.css";
import WorkerCard from "../../Components/Worker Card/Worker Card";
import SFpane from "../../Components/Sort-Filter Pane/Sort-Filter Pane";
import SearchBar from "../../Components/Search Bar/Search Bar";
import kod from "../Category Page/logo.jpg";
import { baseURL, getAllWorkersByCategory } from "../../util/api";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

let WorkerList = [];

const Workerlist = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  const { Category } = useParams();
  console.log("routeparams >>>>", Category);
  const getWorker = async () => {
    
    const res = await fetch(baseURL + getAllWorkersByCategory + Category);
    const body = await res.json();
    WorkerList = body.data;
    console.log("workerlist >>>", WorkerList);
    setIsLoaded(true);
  };

  useEffect(() => {
    getWorker();
  }, []);

  return (
    <div className="Worker_list_main">
      <img id="bg" src={kod} alt="background" />
      <div className="main-body">
        <div className="Worker_list_sbar">
          <SearchBar />
        </div>
        <div className="Worker_list_container">
          {isLoaded ? (
            <div>
              {WorkerList.map((item) => {
                return <WorkerCard fname={item.fname} lname={item.lname} number={item.number} services={item.services} />;
              })}
            </div>
          ) : ""}
        </div>
        {/* <div className="Worker_list_pane">
          <SFpane />
        </div> */}
      </div>
    </div>
  );
};
export default Workerlist;
