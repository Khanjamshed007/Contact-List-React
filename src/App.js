import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { useDispatch } from "react-redux";
import { useEffect } from "react";



import AddContact from "./components/AddContact/AddContact";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Edit from "./components/EditContact/Edit";


function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const data = [];
    const promise = async () => {
      // using dummy data from JSON
      await fetch('https://jsonplaceholder.typicode.com/users/')
        .then((response) => response.json())
        .then((json) => {
          json.map((contact) => {
            data.push({
              id: contact.id,
              name: contact.name,
              number: contact.phone,
              email: contact.email
            });
          })
        });
      dispatch({ type: 'FETCH_CONTACTS', payload: data });
    };
    promise();
  }, []);

  
  return (
    <div className="App">

      <Router>
        {/* ToastContainer settings */}
        <ToastContainer
        position="top-right"
        autoClose={800}
        hideProgressBar
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored" />
        <Navbar />
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/add" element={<AddContact />} />
          <Route path="/edit/:id" element={<Edit />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
