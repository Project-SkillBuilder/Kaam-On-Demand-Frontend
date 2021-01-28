import React from "react";
import './workerlist.css';
import WorkerCard from "../../Components/Worker Card/Worker Card";
import SFpane from "../../Components/Sort-Filter Pane/Sort-Filter Pane";
import SearchBar from "../../Components/Search Bar/Search Bar";

const Workerlist = () => {
    return (
        <div className="Worker_list_main">
            <div className="Worker_list_sbar">
                <SearchBar/>
            </div>
            <div className="Worker_list_container">
                <WorkerCard/>
                <WorkerCard/>
                <WorkerCard/>
                <WorkerCard/>
                <WorkerCard/>
                <WorkerCard/>
                <WorkerCard/>
            </div>
            <div className="Worker_list_pane">
                <SFpane/>
            </div>
        </div>
    );
}
export default Workerlist;