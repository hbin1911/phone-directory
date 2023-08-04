import React, {Component} from 'react';
import AddSubscriber from './AddSubscriber';
import ShowSubscribers from './ShowSubscribers';
// import { render } from "react-dom";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


class PhoneDirectory extends Component{
    constructor(){
        super();
        this.state = {
            subscriberList: [{
                id: 1,
                name: 'Shilpa',
                phone: '9999999999'
            },
            {
                id: 2,
                name: 'Srishti',
                phone: '8888888888'
            }]
        }
    }
    deleteSubscriberHandler = (subscriberId) =>{
        let subscriberList = this.state.subscriberList;
        let subscriberIndex = 0;
        subscriberList.forEach(function(subscriber, index){
            if(subscriber.id === subscriberId){ 
                subscriberIndex = index;
            }
        }, this); 
        let newSubscriber = subscriberList;
        newSubscriber.splice(subscriberIndex, 1);
        this.setState({subscriber : newSubscriber});  
    }
    addSubscriberHandler = (newSubscriber) =>{
        let subscriberList = this.state.subscriberList;
        if(subscriberList.length>0){
            newSubscriber.id = subscriberList[subscriberList.length-1].id+1;
        }
        else{ 
            newSubscriber.id = 1;
        }
        subscriberList.push(newSubscriber);
        this.setState({subscriberList: subscriberList});
        console.log(this.state.subscriberList);
    }
    render(){
        return(
            // <AddSubscriber addSubscriberHandler={this.addSubscriberHandler}/>
            // <ShowSubscribers subscriberList={this.state.subscriberList}/>
            
            
                <div className='main-container'>
                    <Routes>
                        <Route path='/' render={(props) => <ShowSubscribers {... props} subscriberList={this.state.subscriberList} deleteSubscriberHandler={this.deleteSubscriberHandler}/>}/>
                    
                        <Route path="/add" render={({history}, props) => <AddSubscriber history={history} {...props} addSubscriberHandler={this.addSubscriberHandler} />} />
                    </Routes>

                </div>    
            
        )
    }
}
export default PhoneDirectory;
