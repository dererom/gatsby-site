import * as React from 'react'
import Layout from '../../components/layout'
import Seo from '../../components/seo'
import Form from './captcha'

// Step 2: Define your component
const ContactPage = () => {
    return (
        <Layout pageTitle="About Me">
            <form method="post" action="https://formspree.io/f/xpzebyvq">
                <span>
                    Name
                    <input type="text" name="name" id="name"/>
                </span>
                <label>
                    Email
                    <input type="email" name="_replyto"/>
                </label>
                <label>
                    Subject
                    <input type="text" name="subject" id="subject"/>
                </label>
                <label>
                    Message
                    <textarea name="message" id="message" rows="5"/>
                </label>
                <button type="submit">Send</button>
                <input type="reset" value="Clear"/>
            </form>
        </Layout>
        )
}

export const Head = () => <Seo title="Contact"/>

// Step 3: Export your component
export default ContactPage

console.log(Form)


