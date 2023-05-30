import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressBook } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-info bg-info py-2">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand ml-5">
        <FontAwesomeIcon icon={faAddressBook} /> Contact List App
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
