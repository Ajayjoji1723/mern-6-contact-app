import React from 'react';
import {useState} from 'react';
import { v4 as uuidv4 } from 'uuid';
import ContactItem from './ContactItem';

const initialContactsList = [
    {
      id: uuidv4(),
      name: 'Ram',
      mobileNo: 9999988888,
      isFavorite: false,
    },
    {
      id: uuidv4(),
      name: 'Pavan',
      mobileNo: 8888866666,
      isFavorite: true,
    },
    {
      id: uuidv4(),
      name: 'Nikhil',
      mobileNo: 9999955555,
      isFavorite: false,
    },
  ]
  

export default function Contacts() {
    const [contactsList, setContactList] = useState(initialContactsList);
    const [name, setName] = useState("");
    const [number, setNumber] = useState("");

    console.log(name, number);

    const addContact=()=>{
       if(name==='' || number === ''){
        alert('please enter name & number')
       }else{
        const newContact = {
            id:uuidv4(),
            name:name,
            mobileNo: number,
            isFavorite:false
    
        }
        setContactList([...contactsList, newContact]);
        alert('contact added...')
        setName("");
        setNumber("");
       }
       
    };

    const toggleIsFavorite = id =>{
        setContactList(prevState=>(
            prevState.map(contact=>
                contact.id === id ? {...contact, isFavorite: !contact.isFavorite} : contact 

            )
        ))
            
    }


  return (
    <div className='container'>
        <div className='row'>
            <h1 className='col-12 text-center mb-5 mt-5'>Contacts</h1>
            <div className='col-md-4'>
                <input type='text' placeholder='Enter Name' value={name} className='form-control' onChange={(e)=>setName(e.target.value)}/>
            </div>
            <div className='col-md-4'>
                 <input type='text' placeholder='Enter Number' value={number} className='form-control' onChange={(e)=>setNumber(e.target.value)}/>
            </div>
            <div className='col-md-4'>
                <button className='btn btn-primary w-100' onClick={addContact}>Add</button>
            </div>

            <table className='mt-5'>
            <tr>
                <th>Name</th>
                <th>Number</th>
            </tr>
           {contactsList.map(contact=>(
            <ContactItem contact={contact} key={contact.id} toggleIsFavorite={toggleIsFavorite}/>
           ))}
           
            </table>
            

        </div>
    </div>
  )
}
