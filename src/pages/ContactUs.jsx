import emailjs from '@emailjs/browser'
import { useState } from 'react'
import Modal from '../components/Modal';
import Loading from '../components/Loading';
import './ContactUs.css'

const ContactUs = () => {
    const [onClose, setOnClose] = useState(false);
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const [name, setName] = useState('');

    const sendEmail = async (e) => {
        e.preventDefault();
        setName(e.target.name.value);
        setLoading(true);
        const response = await emailjs.sendForm('service_s25lns8', 'template_wopc3lb', e.target, 'OMzn91tFGyx7WH2_k');
        document.getElementById("contact-container").classList.add("hide");
        setLoading(false);
        if (response.status === 200) {
            setOnClose(true);
            setMessage('Thank you for contacting us. We will get back to you soon.');
        } else {
            setOnClose(true);
            setMessage('Something went wrong. Please try again later.');
        }
        document.getElementById("contact-us-form").reset();
    }

    return (
        <>
            <div className="contact" id='contact-container'>
                <div className="contact-form">
                    <form onSubmit={sendEmail} id="contact-us-form">
                        <h1>Contact Us</h1>
                        <label htmlFor="name">Name</label>
                        <input type="text" name="user_name" id="name" placeholder="Your name.." required/>

                        <label htmlFor="email-id">Email Address</label>
                        <input type="email" name="user_email" id="email-id" placeholder="Your Email Address.." required/>

                        <label htmlFor="subject">Subject</label>
                        <textarea id="subject" name="message" placeholder="Write something.." required></textarea>

                        <input type="submit" value="Submit" />
                    </form>
                </div>
            </div>
            {loading && <Loading loading={loading}/>}
            {onClose && <Modal title={"Hello " + name} result={message} setOnClose={setOnClose} hidingId={"contact-container"} />}
        </>
    )
}

export default ContactUs;