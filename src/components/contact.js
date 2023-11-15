import "../components style/contact.css"
import Button from 'react-bootstrap/Button';
import { useState, useEffect } from 'react';
import axios from "axios";
import Swal from 'sweetalert2';

function Contact() {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    number: '',
    ttc: '',
    message: '',
  });

  const handleChange=(e)=> {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }


  const onSubmit = async (e) => {
    e.preventDefault();

    try {
 
      await axios.post('http://localhost:5000/contact/contactsubmit', formData);


      setFormData({
        name: '',
        email: '',
        number: '',
        timeToContact: '',
        message: '',
      });

      Swal.fire({
        icon: 'success',
        title: 'Success!',
        text: 'Message Sent Successfully! One of our Representative will Contact you Soon!',
      });
  
      console.log('Form submitted successfully!');


    } catch (error) {
     
            Swal.fire({
                  icon: 'error',
                  title: 'Error!',
                  text: 'An error occurred while submitting the form. Please try again.',
            });

            console.error('Error submitting form:', error.message);
    }
  };

  return (
   <section id='Contact' className='Contact-Section'>
        <h2>Contact</h2>
        <div className='contact-form'>
            <form>
                <input type='name' name='name' id='Name' value={formData.name} onChange={handleChange} placeholder='Enter your Name' />
                <input type='email' name='email' id='E_mail' value={formData.email} onChange={handleChange} placeholder='Enter your Email' />
                <input type='number' name='number' id='Number' value={formData.number} onChange={handleChange} placeholder='Enter your Number' />
                <input type='name' name='ttc' id='Ttc' value={formData.ttc} onChange={handleChange} placeholder='Time to Contact' />
                <textarea name='message' id='Message' value={formData.message} onChange={handleChange} placeholder='Message' />
                <Button onClick={onSubmit} className='warning'>Send Message</Button>
            </form>
        </div>
    </section>
  )
}

export default Contact;
