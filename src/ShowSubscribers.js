import React, { Component } from "react";
import Header from "./Header";
import "./ShowSubscribers.css";
import { Link } from "react-router-dom";
import './common/common.css';

 // let subscribers = [
    //   {
    //     id : 1,
    //     name : "Shipla",
    //     phone : "8888888888"
    //   },
    //   {
    //     id : 2,
    //     name : "Srishti",
    //     phone : "9999999999"
    //   }
    // ]

class ShowSubscribers extends Component {
  onDeletedClick = (subscriberId) =>{
    this.props.deleteSubscriberHandler(subscriberId);
  }
  render() {
   
    return (
      <div>
         <Header title="Phone Directory" />       {/* Using props */}
        <div className="component-body-container">
          <Link to="/add"><button className="custom-btn add-btn">Add</button></Link>

          <div className="grid-container heading-container">
            <span className="grid-item name-heading">Name</span>
            <span className="grid-item phone-heading">Phone</span>
          </div>
            
          {
            this.props.subscriberList.map(sub =>{
              return <div className="grid-container" key={sub.id} >
                <span className="grid-item">{sub.name}</span>
                <span className="grid-item">{sub.phone}</span>
                <span className="grid-item action-btn-container">
                <button className="custom-btn delete-btn" onClick={this.onDeletedClick.bind(this, sub.id)}>Delete</button>
                </span>

              </div>
            })
          }
            

            
        </div>
      </div>
    );
  }
}

export default ShowSubscribers;
