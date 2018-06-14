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
    render() {
      return <div>
                <div className="form" name="rent" action="#" onsubmit="return validateForm()">
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
                                <option value="1hour">1 Hour</option>
                                <option value="2hours">2 Hours</option>
                                <option value="3hours">3 Hours</option>
                            </select>
                        </div>
                        <div className="col-33">
                            <select id="city" name="city">
                                <option value="select">Select...</option>
                                <option value="boulder">Boulder</option>
                                <option value="coloradosprings">Colorado Springs</option>
                                <option value="denver">Denver</option>
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
                </div>
            </div>;
    }
  }
export default Form;  