import React from 'react'

const Contact = (props) => (
    <section id="contact">
        <div className="inner">
            <section>
                <form method="post" action="#">
                    <div className="field half first">
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" id="name" />
                    </div>
                    <div className="field half">
                        <label htmlFor="email">Email</label>
                        <input type="text" name="email" id="email" />
                    </div>
                    <div className="field">
                        <label htmlFor="message">Message</label>
                        <textarea name="message" id="message" rows="6"></textarea>
                    </div>
                    <ul className="actions">
                        {/*<li><input type="submit" value="Send Message" className="special" /></li>*/}
                        <li><input type="reset" value="Clear" /></li>
                    </ul>
                </form>
            </section>
            <section className="split">
                <section>
                    <div className="contact-method">
                        <span className="icon alt fa-envelope"></span>
                        <h3>Email</h3>
                        <a href="#">danilozeka93@gmail.com</a>
                    </div>
                </section>
                {/* <section>
                    <div className="contact-method">
                        <span className="icon alt fa-phone"></span>
                        <h3>Phone</h3>
                        <span>RS: (+381) 64-234-7616</span><br/>
                        <span>Note: this phone number is a Serbian area number. So if you want to avoid international phone call charges you can use that number to find me on <a href="https://www.viber.com/" target="_blank">Viber</a> or <a href="https://www.whatsapp.com/" target="_blank">WhatsApp</a>.</span>
                    </div>
                </section> */}
                <section>
                    <div className="contact-method">
                        <span className="icon alt fa-home"></span>
                        <h3>Address</h3>
                        <span>Novi Sad<br />
                        Serbia</span>
                    </div>
                </section>
            </section>
        </div>
    </section>
)

export default Contact
