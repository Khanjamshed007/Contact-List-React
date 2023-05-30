import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const AddContact = () => {

  // Using Stae for name,email and nubmer
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");

  //selector to use contact list
  const contacts = useSelector((state) => state);

  const dispatch = useDispatch();
  const navigate = useNavigate();


  //submit event to submit the form 
  const handleSubmit = (e) => {
    e.preventDefault();

    //checking email exist or not
    const checkEmail = contacts.find(
      (contact) => contact.email === email && email
    );

     //checking number exist or not
    const checkNumber = contacts.find(
      (contact) => contact.number === parseInt(number) && number
    );

    //if the form is empty then
    if (!email || !number || !name) {
      return toast.warning("Please fill in all fields!");
    }

    //if the email is already used
    if (checkEmail) {
      return toast.error("This email already exists!");
    }

     //if the email is already used
    if (checkNumber) {
      return toast.error("This number already exists!");
    }

    const data = {
      id: contacts[contacts.length - 1].id + 1,
      name,
      email,
      number,
    };

    dispatch({ type: "ADD_CONTACT", payload: data });
    toast.success("Contact added successfully");
    navigate("/");
  };

  return (

    //container to display the form
    <div className="container">
      <h1 className="display-3 text-center fw-bold mt-4 text-uppercase fs-1">
        Add Contact
      </h1>
      <div className="row">
        <div className="col-md-6 shadow mx-auto p-5">
          <form className="text-start" onSubmit={handleSubmit}>
            <label className="mb-2">Enter Your name:</label>
            <div className="form-group mb-3">
              <input
                type="text"
                placeholder="Name"
                className="form-control py-2"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <label className="mb-2">Enter Your Email:</label>
            <div className="form-group mb-3">
              <input
                type="email"
                placeholder="Email"
                className="form-control py-2"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <label className="mb-2">Enter Your Phone:</label>
            <div className="form-group mb-3">
              <input
                type="number"
                placeholder="Phone Number"
                className="form-control py-2"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
              />
            </div>
            <div className="form-group mb-3 text-center">
              <input
                type="submit"
                value="Add Contact"
                className="btn btn-block btn-info"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddContact;
