import React, { Component } from 'react';
import './form.css';


function validateForm() {
    var date = document.forms["rent"]["date"].value;
    var fname = document.forms["rent"]["fname"].value;
    if (date == "") {
        alert("Please select a date.");
        return false;
    }
    if (fname=="") {
        alert("Please fill in your name");
        return false;
    }
}

class Form extends React.Component {

    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            cities: [],
        };
    }

    componentDidMount() {
        let initialCities = [];
        fetch('/api/v1/cities')
            .then(response => {
                return response.json();
            }).then(data => {
                console.log(data)
            initialCities = data.data.map((city) => {
                return city
            });
            console.log(initialCities);
            this.setState({
                cities: initialCities,
            });
        });
    }

    handleSubmit(event){
        console.log(event);
        event.preventDefault();
        const date = document.forms["rent"]["date"].value;
        const fname = document.forms["rent"]["fname"].value;
        const lname = document.forms["rent"]["lname"].value; 
        const time = document.forms["rent"]["time"].value; 
        const city = document.forms["rent"]["city"].value; 
        this.createRecord(date, fname, lname, time, city)
    }
    createRecord(date, fname, lname, time, city) {
        fetch(`/api/v1/rentals`,
        {
          method: 'POST',
          headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ pickupdate:date, rentaltime:time, city, firstname:fname, lastname:lname })
        
        })
        .then(async (response) => {
            if (response.ok) {
              alert("Reservation Successful!")
            }
          })
    };

    /* Render form*/
    render() {
        let optionItems = this.state.cities.map((city)=>{
            return (<option value = {city.id}>{city.city} </option>)
        })

      return <div>
                <form onSubmit={this.handleSubmit} className="form" name="rent" action="#" >
                    <div className="row">
                        <div className="col-33">
                            <label for="date">Date Picking Up</label>
                        </div>
                        <div className="col-33">
                            <label for="time">Time</label>
                        </div>
                        <div className="col-33">
                            <label for="city">City</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-33">
                            <input type="date" id="date" name="datepickup"></input>
                        </div>
                        <div className="col-33">
                            <select id="time" name="time">
                                <option value="select">Select...</option>
                                <option value="01:00:00">1 Hour</option>
                                <option value="02:00:00">2 Hours</option>
                                <option value="03:00:00">3 Hours</option>
                            </select>
                        </div>
                        <div className="col-33">
                            <select id="city" name="city">
                               {optionItems}
                            </select> 
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-50">
                            <label for="fname">First Name</label>
                            <input type="text" id="fname" name="firstname" placeholder="First name.."></input> 
                        </div>
                        <div className="col-50">
                            <label for="lname">Last Name</label>
                            <input type="text" id="lname" name="lastname" placeholder="Last name.."></input>
                        </div>
                    </div>
                    <input type="submit" value="Submit"></input>
                </form>
            </div>;
    }
  }
export default Form;  