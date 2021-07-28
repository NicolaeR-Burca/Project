import React from 'react';
import firebase from './Firebase';
import Card from './Card';




export default function Home() {
    const [clients, setClients] = React.useState([]);


    React.useEffect(() => {
        const fetchData = async () => {
            const db = firebase.firestore();
            const data = await db.collection("users").get();
            setClients(data.docs.map(doc => (doc.data())));
        };
        fetchData();
    }, []);

    return (
        <div >
            <h1>Available Clients </h1>
            <ul>
                {clients.map(client => <Card client={client} />)}
            </ul>
        </div>
    )

}