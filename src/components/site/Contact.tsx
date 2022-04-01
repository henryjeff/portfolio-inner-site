import React from 'react';
import VerticalNavbar from './VerticalNavbar';

export interface ContactProps {}

const Contact: React.FC<ContactProps> = (props) => {
    return (
        <div className="site-page">
            <VerticalNavbar />
            <div className="site-page-content">
                <h1>Contact</h1>
                <div className="text-block">
                    <p>
                        I'm currently looking for a full-time position, if you
                        see anything you like please reach out, I would be happy
                        to chat!
                    </p>
                    <form style={styles.form}>
                        <label>
                            <p>
                                <b>Your name:</b>
                            </p>
                        </label>
                        <input
                            style={styles.formItem}
                            type="text"
                            name="name"
                            placeholder="Name"
                            required
                        />
                        <label>
                            <p>
                                <b>Email:</b>
                            </p>
                        </label>
                        <input
                            style={styles.formItem}
                            type="email"
                            name="email"
                            placeholder="Email"
                            required
                        />
                        <label>
                            <p>
                                <b>Company (optional):</b>
                            </p>
                        </label>
                        <input
                            style={styles.formItem}
                            type="company"
                            name="company"
                            placeholder="Company"
                            required
                        />
                        <label>
                            <p>
                                <b>Message:</b>
                            </p>
                        </label>
                        <textarea
                            name="message"
                            placeholder="Message"
                            required
                            style={styles.formItem}
                        />
                        <div style={styles.buttons}>
                            <button className="site-button" type="submit">
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

const styles: StyleSheetCSS = {
    form: {
        display: 'flex',
        flexDirection: 'column',
        marginTop: 32,
    },
    formItem: {
        marginTop: 4,
        marginBottom: 16,
    },
    buttons: {
        display: 'flex',
        justifyContent: 'flex-start',
    },
};

export default Contact;
