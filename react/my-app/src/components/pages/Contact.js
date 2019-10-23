import React from 'react';
import * as firebase from "firebase";
const uuid = require('uuid');

const firebaseConfig = {
    apiKey: "AIzaSyA-CWn3q6_94SEA2HgOZ-NP0P3HlGbtENM",
    authDomain: "react-oppeleht.firebaseapp.com",
    databaseURL: "https://react-oppeleht.firebaseio.com",
    storageBucket: ""
};
firebase.initializeApp(firebaseConfig);

export default class Contact extends React.Component {

    constructor(props) {
        super(props);
        this.state =
            {
                    uid: uuid.v1(),
                    name: "",
                    email: "",
                    message: ""
        };

        this.submitData = this.submitData.bind(this);
        this.inputData = this.inputData.bind(this);
    }

    submitData(event) {
        event.preventDefault();
        firebase
            .database()
            .ref(`Newdata/${this.state.uid}`)
            .set({
                name: this.state.name,
                email: this.state.email,
                message: this.state.message
            })

            .catch(error => console.log(error));
        this.setState({
            name: '',
            email: '',
            message: ''
        })
    }
    inputData(event) {
        const name = this.refs.name.value;
        const email = this.refs.email.value;
        const message = this.refs.message.value;
        this.setState({ name, email, message });
    }

    render(){
        return (
            <section className="contact-section">
                <div className="contact-container">
                <h3 className="heading--2">Tagasiside</h3>
                    <div className="contact">
                        <form onSubmit={this.submitData} id="contactForm">
                            <div className="form-group">
                                {/* <label>Nimi</label> */}
                                <input className="input--1" type="text" name="name" required={true}
                                        placeholder="Nimi" id="name" value={this.state.name} onChange={this.inputData} ref="name" />
                            </div>
                            <div className="form-group">
                                {/* <label>Email</label> */}
                                <input type="email" name="email" required={true}
                                        placeholder="Email" id="email" value={this.state.email} onChange={this.inputData} ref="email" />
                            </div>
                            <div className="text-group">
                                {/* <label>Tagasiside</label> */}
                                <textarea name="message" rows="3" required={true}
                                            placeholder="Kirjuta tagasiside" id="message" value={this.state.message} onChange={this.inputData} ref="message" />
                            </div>
                            <div >
                                <button className="button">Saada</button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        )
    }
}
