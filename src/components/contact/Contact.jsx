import React from 'react';
import Wrapper from './Contact.styles';

function Contact() {
    return (
        <Wrapper>
            <div className="section-center">
                <h3>Join our news letter and get 20% off!</h3>
                <div className="content">
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae impedit
                        corporis est reiciendis tenetur a culpa suscipit repellat minus at.
                    </p>
                    <form
                        className="contact-form"
                        action="https://formspree.io/f/xeqvpqpe"
                        method="POST"
                    >
                        <input
                            type="email"
                            className="form-input"
                            placeholder="Enter your email"
                            name="_replyto"
                        />
                        <button type="submit" className="submit-btn">
                            Subscribe
                        </button>
                    </form>
                </div>
            </div>
        </Wrapper>
    );
}

export default Contact;
