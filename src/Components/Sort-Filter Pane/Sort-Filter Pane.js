import React from "react";
import $ from "jquery";
import "./Sort-Filter Pane.css";


class SFpane extends React.Component {

    constructor() {
        super();
        this.state = {
            button : $(window).width()
        }
        this.showSize();
    }

    showSize = () => {
        const width = $(window).width();
        if(width > 500){
            this.setState({
                button : width
            })
        }else if(width <= 500){
            this.setState({
                button : width
            })
        }
    }

    render() {
        window.onresize = this.showSize;
        if (this.state.button > 500) {
            return (
                <div className="Sort_pane shadow-3">
                    <div className="Sort_div">
                        <p>Sort By :</p>
                        <input type="radio" id="location" name="sort" value="location"/>
                        <label htmlFor="location">Location</label><br/>
                        <input type="radio" id="ratings" name="sort" value="ratings"/>
                        <label htmlFor="ratings">Ratings</label><br/>
                    </div>
                    <div className="Sort_div">
                        <p>Working Days</p>
                        <input type="checkbox" id="location" name="filter1" value="location"/>
                        <label htmlFor="location">Six per week</label><br/>
                        <input type="checkbox" id="ratings" name="filter1" value="ratings"/>
                        <label htmlFor="ratings">Seven per week</label><br/>
                    </div>
                    <div className="Sort_div">
                        <p>Work timing</p>
                        <input type="checkbox" id="location" name="filter2" value="location"/>
                        <label htmlFor="location">9:00am - 9:00pm</label><br/>
                        <input type="checkbox" id="ratings" name="filter2" value="ratings"/>
                        <label htmlFor="ratings">All day</label><br/>
                    </div>
                    <div className="Sort_div">
                        <p>stbsbgf</p>
                        <input type="checkbox" id="location" name="filter3" value="location"/>
                        <label htmlFor="location">Location</label><br/>
                        <input type="checkbox" id="ratings" name="filter3" value="ratings"/>
                        <label htmlFor="ratings">Ratings</label><br/>
                    </div>
                </div>
            );
        } else {
            return (
                <div className="Sort_body">
                    <div className="d-flex justify-content-end">
                        <button type="button" className="btn btn-outline-primary bg-white align-self-end" data-toggle="modal" data-target="#exampleModal">
                            Sort/Filter
                        </button>
                    </div>
                    <br/>

                    <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel"
                         aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered">
                            <div className="modal-content">
                                <div className="modal-body">

                                    <div className="row">
                                        <div className="col-3">
                                            <div className="nav flex-column nav-tabs" id="v-tabs-tab" role="tablist"
                                                 aria-orientation="vertical">
                                                <a className="nav-link active" id="v-tabs-sort-tab" data-toggle="pill"
                                                   href="#v-tabs-sort" role="tab" aria-controls="v-tabs-sort"
                                                   aria-selected="true">Sort by</a>
                                                <a className="nav-link" id="v-tabs-days-tab" data-toggle="pill"
                                                   href="#v-tabs-days" role="tab" aria-controls="v-tabs-days"
                                                   aria-selected="false">Working Days</a>
                                                <a className="nav-link" id="v-tabs-hours-tab" data-toggle="pill"
                                                   href="#v-tabs-hours" role="tab" aria-controls="v-tabs-hours"
                                                   aria-selected="false">Work Timing</a>
                                                <a className="nav-link" id="v-tabs-settings-tab" data-toggle="pill"
                                                   href="#v-tabs-settings" role="tab" aria-controls="v-tabs-settings"
                                                   aria-selected="false">Settings</a>
                                            </div>
                                        </div>
                                        <div className="col-9">
                                            <div className="tab-content" id="v-tabs-tabContent">
                                                <div className="tab-pane fade show active" id="v-tabs-sort"
                                                     role="tabpanel"
                                                     aria-labelledby="v-tabs-sort-tab">
                                                    <input type="radio" id="location" name="sort" value="location"/>
                                                    <label htmlFor="location">Location</label><br/>
                                                    <input type="radio" id="ratings" name="sort" value="ratings"/>
                                                    <label htmlFor="ratings">Ratings</label>
                                                </div>
                                                <div className="tab-pane fade" id="v-tabs-days" role="tabpanel"
                                                     aria-labelledby="v-tabs-days-tab">
                                                    <input type="checkbox" id="6days" name="filter1" value="location"/>
                                                    <label htmlFor="location">Six per week</label><br/>
                                                    <input type="checkbox" id="7days" name="filter1" value="ratings"/>
                                                    <label htmlFor="ratings">Seven per week</label>
                                                </div>
                                                <div className="tab-pane fade" id="v-tabs-hours" role="tabpanel"
                                                     aria-labelledby="v-tabs-hours-tab">
                                                    <input type="checkbox" id="12h" name="filter2" value="location"/>
                                                    <label htmlFor="location">9:00am - 9:00pm</label><br/>
                                                    <input type="checkbox" id="24h" name="filter2" value="ratings"/>
                                                    <label htmlFor="ratings">All day</label>
                                                </div>
                                                <div className="tab-pane fade" id="v-tabs-settings" role="tabpanel"
                                                     aria-labelledby="v-tabs-settings-tab">
                                                    <input type="checkbox" id="location1" name="filter3"
                                                           value="location"/>
                                                    <label htmlFor="location">Location</label><br/>
                                                    <input type="checkbox" id="ratings1" name="filter3"
                                                           value="ratings"/>
                                                    <label htmlFor="ratings">Ratings</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close
                                    </button>
                                    <button type="button" className="btn btn-primary" data-dismiss="modal">Apply
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }

    }
}

export default SFpane;