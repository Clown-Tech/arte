import React from "react";
import axios from "axios";
import "./dbCreate.scss";

class DbCreate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      handle: "",
      title: "",
      url: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  submitRequest(event) {
    //event.preventDefault();
    console.log(this.state);

      axios({
        method: "post",
        url: "http://localhost:3852/api/addImage",
        data:{
          handle: this.state.handle,
          title: this.state.title,
          url: this.state.url
        }
      })
        .then(response => {
          console.log("submited!");
        })
        .catch(error => console.error(error));
    }

  handleSubmit(event) {
    event.preventDefault();
    console.log("submit");
    console.log("user Handle:", this.state.handle);
    console.log("user title:", this.state.title);
    console.log("user image:", this.state.url);
      this.submitRequest(this.state);
    }

  render() {
    return (
      <section id="createAccount">
        <div id="create-container">
        <section id="create-title">
          <h2>Add User to DataBase</h2>
        </section>
          <form onSubmit={this.handleSubmit} autoComplete="off">
            <section id="handle">
              <input
                required
                type="text"
                name="handle"
                placeholder = "User's Handle"
                onChange= {async event => {
                  let value = event.target.value;

                  this.setState(state => ({
                    ...state,
                    handle: value
                }))}}
              />
            </section>

            <section id="title">
              <input
                required
                type="text"
                name="title"
                placeholder = "User's Image Title"
                onChange= {async event => {
                  let value = event.target.value;
                  this.setState(state => ({
                    ...state,
                    title: value
                }))}}
              />
            </section>

            <section id="url">
              <input
                required
                type="text"
                name="url"
                placeholder = "User's Image"
                onChange= {async event => {
                  let value = event.target.value;
                  this.setState(state => ({
                    ...state,
                    url: value
                }))}}
              />
            </section>

            <section id="submit">
              <button className="popup" type="submit">
                Submit
              </button>
            </section>
          </form>
        </div>
      </section>
    );
  }
}

export default DbCreate;
