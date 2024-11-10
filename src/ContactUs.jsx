import React, { useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';

function ContactUs() {
    
    return (
        <div style={{ maxWidth: '400px', margin: '50px auto', textAlign: 'center' }}>
            <h2>Contact Us</h2>
            <form>
                <div style={{ marginBottom: '10px' }}>
                    <input
                        type="text"
                        placeholder="Your Name"
                        style={{ width: '100%', padding: '10px' }}
                    />
                </div>
                <div style={{ marginBottom: '10px' }}>
                    <input
                        type="email"
                        placeholder="Email"
                        style={{ width: '100%', padding: '10px' }}
                    />
                </div>
                <div style={{ marginBottom: '10px' }}>
                    <textarea
                        placeholder="Your Message"
                        rows="3"
                        style={{ width: '100%', padding: '10px' }}
                    ></textarea>
                </div>
                <Button type="submit" variant="outline-danger">Submit</Button>
            </form>
        </div>
    );
}

export default ContactUs;