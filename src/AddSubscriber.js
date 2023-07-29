import React, { Component } from 'react';
import Header from './Header';
import './AddSubscriber.css';

class AddSubscriber extends Component{
    constructor(){
        super();
        this.state = {
            id: 0,
            name: '',
            phone: ''
        }
    }
    inputChangedHandler = (e) =>{
        const state = this.state;
        state[e.target.name] = e.target.value;
        this.setState(state);
        console.log(this.state);   
    }   
    render(){
        const {name, phone} = this.state;
        return(
            <div>
                <Header title="Add Subscriber"/>
                <div className="component-body-container">
                    <button className='custom-btn'>Back</button>
                    <form className='subscriber-form'>
                        <label htmlFor='name' className='label-control'>Name:</label><br/>
                        <input type='text' id='name' name='name' className='input-control' onChange={this.inputChangedHandler}/><br/><br/>
                        <label htmlFor='phone' className='label-control'>Phone:</label><br/>
                        <input type='text' id='phone' name='phone' className='input-control' onChange={this.inputChangedHandler}/><br/><br/>
                        <div className='subscriber-info-container'>
                            <span className='subscriber-to-add-heading'>Subscriber to be added </span><br/>
                            <span className='subscriber-info'>Name: {name}</span><br/>
                            <span className='subscriber-info'>Phone: {phone}</span>


                        </div>
                        <button className='custom-btn add-btn'>Add</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default AddSubscriber;
