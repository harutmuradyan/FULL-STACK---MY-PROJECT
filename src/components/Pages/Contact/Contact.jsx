/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
import './Contact.scss'

const Contact = () => {
    return (
        <div className="contact">
            <div className="contact-info">
                <div className="contact-info__block">
                    <p>Tel +374 99 99 99</p>
                    <p>Email : MoviesFree@gmail.com</p>
                </div>
            </div>
            <div className="contact-mapouter">
                <div className="contact-gmap_canvas">
                    <iframe 
                            id="gmap_canvas" 
                            src="https://maps.google.com/maps?q=erevan&t=&z=13&ie=UTF8&iwloc=&output=embed" 
                            >
                    </iframe>
                </div>
            </div>
        </div>
    )
}

export default Contact;