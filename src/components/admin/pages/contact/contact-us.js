
import React, { useEffect, useState } from 'react';
import { ref, onValue, remove } from 'firebase/database';
import { db } from '../../../../firebase/firebaseConfig';
import Header from '../../common/Header';
import Sidebar from '../../common/Sidebar';

const ContactUs = () => {

    const [contacts, setContacts] = useState([]);

    useEffect(() => {
      // Create a reference to the 'contacts' node in Realtime Database
      const contactsRef = ref(db, 'contacts');
  
      // Fetch data from Firebase
      onValue(contactsRef, (snapshot) => {
        const data = snapshot.val();
        if (data) {
          const formattedData = Object.keys(data).map((key) => ({
            id: key,
            ...data[key],
          }));
          setContacts(formattedData);
        }
      });
    }, []);

    const handleDelete = (id) => {
        const contactRef = ref(db, `contacts/${id}`);
        remove(contactRef)
          .then(() => {
            console.log(`Contact with id ${id} deleted successfully`);
            // Update the state after deleting
            setContacts(contacts.filter(contact => contact.id !== id));
          })
          .catch((error) => {
            console.error('Error deleting contact:', error);
          });
      };

  return (
    <>
    <Header />
    <Sidebar />
    <main id="main" class="main">

        <div class="pagetitle">
        <h1>Data Tables</h1>
        <nav>
            <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="index.html">Home</a></li>
            <li class="breadcrumb-item">Tables</li>
            <li class="breadcrumb-item active">Data</li>
            </ol>
        </nav>
        </div>

        <section className='section'>
        <div class="row">
            <div class="col-lg-12">

            <div class="card">
                <div class="card-body">
                <h5 class="card-title">Datatables</h5>
                <p>Add lightweight datatables to your project with using the <a href="https://github.com/fiduswriter/Simple-DataTables" target="_blank">Simple DataTables</a> library. Just add <code>.datatable</code> class name to any table you wish to conver to a datatable. Check for <a href="https://fiduswriter.github.io/simple-datatables/demos/" target="_blank">more examples</a>.</p>

            
                <div className="container">
                        <div className="table-responsive">
                            <table className="table table-bordered table-striped">
                            <thead>
                                <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Message</th>
                                <th>Actions</th> {/* Add an Actions column */}
                                </tr>
                            </thead>
                            <tbody>
                                {contacts.length > 0 ? (
                                contacts.map((contact, index) => (
                                    <tr key={contact.id}>
                                    <td>{index + 1}</td>
                                    <td>{contact.name}</td>
                                    <td>{contact.email}</td>
                                    <td>{contact.message}</td>
                                    <td>
                                        <button
                                        className="btn btn-danger"
                                        onClick={() => handleDelete(contact.id)} // Call handleDelete on click
                                        >
                                        Delete
                                        </button>
                                    </td>
                                    </tr>
                                ))
                                ) : (
                                <tr>
                                    <td colSpan="5" className="text-center">No contacts found</td>
                                </tr>
                                )}
                            </tbody>
                            </table>
                        </div>
                </div>
            

                </div>
            </div>

            </div>
        </div>
        </section>

        </main>
    </>
  );
};

export default ContactUs;
