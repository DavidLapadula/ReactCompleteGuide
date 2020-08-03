import React, { Component } from "react";

import Button from "../../../components/UI/Button/Button";
import Spinner from "../../../components/UI/Spinner";
import classes from "./ContactData.css";
import axios from "../../axios-order";

class ContactData extends Component {
    state = {
        name: "",
        email: "",
        address: {
            street: "",
            postalCode: ""
        },
        loading: false
    };

    orderHandler = (event) => {
        event.preventDefault();
        this.setState({ loading: true }); 
        const order = {
            ingredients: this.props.ingredients,
            price: this.state.totalPrice,
            customer: {
                name: "David",
                address: {
                    street: "Street 1",
                    zipCode: "9878",
                    country: "Canada"
                },
                email: "david@mail.com"
            },
            deliveryMethod: "fastest"
        };
        axios
            .post("/orders.json", order)
            .then(response => console.log('response :>> ', response))
            .catch(error => console.log('error :>> ', error))
            .finally(() => this.setState({ loading: false, purchasing: false }));
    }

    render() {
        let form = (
            <form className={classes.ContactData}>
                <input className={classes.Input} type="text" name="name" placeholder="Your Name" />
                <input className={classes.Input} type="email" name="email" placeholder="Your Email" />
                <input className={classes.Input} type="text" name="street" placeholder="Street" />
                <input className={classes.Input} type="text" name="postal" placeholder="Postal Code" />

                <Button btnType="Success" clicked={this.orderHandler}>Order</Button>
            </form>
        ); 
        if (this.state.loading) {
            form = <Spinner />; 
        }
        return (
            <div>
                <h4>Enter your Contact Data</h4>
                {form}
            </div>
        );
    };
};


export default ContactData; 