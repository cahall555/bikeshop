export default Form;
declare class Form extends Component<any, any, any> {
    constructor(props: any);
    handleSubmit(event: any): void;
    createRecord(date: any, fname: any, lname: any, time: any, city: any): void;
}
import { Component } from "react";
