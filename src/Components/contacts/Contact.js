import React, { Component } from "react";
import propTypes from "prop-types";
import { Consumer } from "../../context";
import axios from "axios";
import { Link } from "react-router-dom";

class Contact extends Component {
  state = {
    show: false
  };
  deleteClick = async (id, dispatch) => {
    await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
    dispatch({ type: "DELETE_CONTACT", payload: id });
  };
  render() {
    const { show } = this.state;
    const { id, name, email, phone } = this.props.contact;
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card card-body mb-3">
              <h1>
                Name : {name}{" "}
                <i
                  className="fas fa-angle-down"
                  style={{ cursor: "pointer" }}
                  onClick={() => this.setState({ show: !this.state.show })}
                ></i>
                <i
                  className="fas fa-times"
                  style={{ cursor: "pointer", color: "red", float: "right" }}
                  onClick={this.deleteClick.bind(this, id, dispatch)}
                ></i>
                <Link to={`/edit/${id}`}>
                  <i
                    className="fas fa-pencil-alt"
                    style={{
                      cursor: "pointer",
                      color: "black",
                      float: "right",
                      marginRight: "1rem"
                    }}
                  ></i>
                </Link>
              </h1>
              {show ? (
                <ul className="list-group">
                  <li className="list-group-item">Email : {email}</li>
                  <li className="list-group-item">Tel : {phone}</li>
                </ul>
              ) : null}
            </div>
          );
        }}
      </Consumer>
    );
  }
}

Contact.defaultProps = {
  name: "Miloud",
  email: "miloud@esi.dz",
  phone: "333-333-3333"
};

Contact.propTypes = {
  contact: propTypes.object.isRequired
};

export default Contact;
