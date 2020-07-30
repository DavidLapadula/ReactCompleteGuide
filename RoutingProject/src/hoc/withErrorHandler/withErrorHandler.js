import React, { Component } from "react";
import Modal from "../../components/UI/Modal/Modal";
import Aux from "../_Aux/_Aux"; 

const withErrorHandler = (WrappedComponent, axios) => {
    return class extends Component {
        state ={
            error: null
        }

        componentDidMount() {
            axios.interceptors.request.use(req => {
                this.reqInterceptor = this.setState({ error: null }); 
                return req; 
            })
                this.resInterceptor = axios.interceptors.response.use(res => res, error => {
                this.setState({ error: error }); 
            }); 
        }

        componentWillUnmount() {
            axios.interceptors.request.eject(this.reqInterceptor); 
            axios.interceptors.response.eject(this.resInterceptor); 
        }

        errorConfirmedHandler = () => {
            this.setState({ error: null }); 
        }; 
 
        render() {
            return (
                <Aux>
                    <Modal 
                        show={this.state.error}
                        modalClosed={this.errorConfirmedHandler}
                    >
                        {this.state.error && this.state.error.message}
                    </Modal>
                    <WrappedComponent {...this.props} />
                </Aux>
            ); 
        }
    }
}; 

export default withErrorHandler; 