import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPen } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

const Home = () => {
  const Contacts = useSelector((state) => state);

  const dispatch = useDispatch();

  //To delete the contact from contact list
  const deleteContact = (id) => {
    dispatch({ type: "DELETE_CONTACT", payload: id });
    toast.error("Contact deleted successfully");
  };

  return (
    //container for homepage
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12 my-5  text-end">
          <Link to="/add" className="btn btn-outline-info text-dark me-5">
            Add Contact
          </Link>
        </div>
        <div className="col-md-10 mx-auto">
          <table className="table table-hover">
            <thead className="text-white bg-info bg-gradient text-center">
              <tr>
                <th scope="col">Sr.No</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Number</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody className="text-center">
              {
              Contacts.map((contact, id) => (
                <tr key={id}>
                  <td>{id + 1}</td>
                  <td>{contact.name}</td>
                  <td>{contact.email}</td>
                  <td>{contact.number}</td>
                  <td>
                    <Link
                      to={`/edit/${contact.id}`}
                      className="btn btn-small btn-primary me-2"
                    >
                      {/* Using Fontawasome */}
                      <FontAwesomeIcon icon={faUserPen} />
                    </Link>
                    <button
                      type="button"
                      onClick={() => deleteContact(contact.id)}
                      className="btn btn-small btn-danger"
                    >
                      <FontAwesomeIcon icon={faTrash} />
                    </button>
                  </td>
                </tr>
              ))
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Home;
