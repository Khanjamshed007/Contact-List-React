import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";


const Edit = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");

  const { id } = useParams();

  const contacts = useSelector((state) => state);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const currentContact = contacts.find(
    (contact) => contact.id === parseInt(id)
  );

  //using effect hook to search the exist name,email and number
  useEffect(() => {
    if (currentContact) {
      setName(currentContact.name);
      setEmail(currentContact.email);
      setNumber(currentContact.number);
    }
  }, [currentContact]);

  //submit event for update process
  const handleSubmit = (e) => {
    const checkEmail = contacts.find(contact => contact.id !== parseInt(id) && contact.email === email);
        const checkNumber = contacts.find(contact => contact.id !== parseInt(id) && contact.number === parseInt(number));

        if (!email || !number || !name) {
            return toast.warning("Please fill in all fields!");
        }

        if (checkEmail) {
            return toast.error("This email already Exists!");
        }

        if (checkNumber) {
            return toast.error("This number already Exists!");
        }

        const data = {
            id: parseInt(id),
            name,
            email,
            number
        }

        dispatch({ type: 'UPDATE_CONTACT', payload: data });
        
        //react toast notification
        toast.success("Contact updated successfully!!")
        navigate('/');
  };

  return (

    //container for update form
    <div className="container">
      {
        <>
          <h1 className="display-3 text-center fw-bold mt-4 text-uppercase fs-1">
            Edit Contact
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
                    value={name} onChange={e => setName(e.target.value)}
                  />
                </div>
                <label className="mb-2">Enter Your Email:</label>
                <div className="form-group mb-3">
                  <input
                    type="email"
                    placeholder="Email"
                    className="form-control py-2"
                    value={email} onChange={e => setEmail(e.target.value)}
                  />
                </div>
                <label className="mb-2">Enter Your Phone:</label>
                <div className="form-group mb-3">
                  <input
                    type="number"
                    placeholder="Phone Number"
                    className="form-control py-2"
                    value={number} onChange={e => setNumber(e.target.value)}
                  />
                </div>
                <div className="form-group mb-3 text-center">
                  <input
                    type="submit"
                    value="Update Contact"
                    className="btn btn-info"
                  />
                  <Link to="/" className="btn btn-danger ms-3 ">
                    Cancel
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </>
      }
    </div>
  );
};

export default Edit;
