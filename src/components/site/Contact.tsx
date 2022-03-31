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
                        <label style={styles.formItem}>
                            <input
                                type="text"
                                name="name"
                                placeholder="Name"
                                required
                            />
                        </label>
                        <label style={styles.formItem}>
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                required
                            />
                        </label>
                        <label style={styles.formItem}>
                            <textarea
                                name="message"
                                placeholder="Message"
                                required
                            />
                        </label>
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
        marginBottom: 16,
    },
    buttons: {
        display: 'flex',
        justifyContent: 'center',
    },
};

export default Contact;
