import React, { useState } from 'react';
import firebase from './Firebase';
import 'bootstrap/dist/css/bootstrap.min.css';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown'
import './Search.css';



function Search() {
    const [clients, setClients] = React.useState([]);
    const [value, setValue] = useState('');

    React.useEffect(() => {
        const fetchData = async () => {
            const db = firebase.firestore();
            const data = await db.collection("users").get();
            setClients(data.docs.map(doc => (doc.data())));
        };
        fetchData();
    }, [])



    const handleSelect = (e) => {
        console.log(e);
        setValue(e)
    }

    if (value === "")
        setValue("   Search by Criteria   ")




    return (
        <div >
            <h1>Testing Search</h1>
            <DropdownButton
                alignRight
                title={value}
                id="dropdown-menu-align-right"
                onSelect={handleSelect}
            >
                <Dropdown.Item eventKey="First name">First name</Dropdown.Item>
                <Dropdown.Item eventKey="Last name">Last name</Dropdown.Item>
                <Dropdown.Item eventKey="State">State</Dropdown.Item>
                <Dropdown.Item eventKey="City">City</Dropdown.Item>
                <Dropdown.Item eventKey="Street">Street</Dropdown.Item>
                <Dropdown.Item eventKey="Street number">Street number</Dropdown.Item>
                <Dropdown.Item eventKey="Social Security Number">Social Security Number</Dropdown.Item>
                <Dropdown.Item eventKey="Phone">Phone</Dropdown.Item>
                <Dropdown.Item eventKey="License Plate">License Plate</Dropdown.Item>
            </DropdownButton>


        </div>
    );
}

export default Search;