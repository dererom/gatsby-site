import * as React from 'react'
import Layout from '../../components/layout'
import Seo from '../../components/seo'
import { useEffect, useRef, useState } from "react";
import HCaptcha from "@hcaptcha/react-hcaptcha";
import {
    formStyle,
    nameStyle,
    nameInput,
    emailStyle,
    emailInput,
    subjectStyle,
    subjectInput,
    messageStyle,
    messageInput,
    sendButton,
    clearButton
} from './contact.module.css'
// Step 2: Define your component
const ContactPage = () => {
    const [token, setToken] = useState(null);
    const captchaRef = useRef(null);

    const onLoad = () => {
        // this reaches out to the hCaptcha JS API and runs the
        // execute function on it. you can use other functions as
        // documented here:
        // https://docs.hcaptcha.com/configuration#jsapi
        captchaRef.current.execute();
    };

    useEffect(() => {

        if (token)
            console.log(`hCaptcha Token: ${token}`);

        }, [token]);

    return (
        <Layout pageTitle="Contact">
            <form method="post" action="https://eoy22wh670q3v9t.m.pipedream.net" className={formStyle}>
                <label className={nameStyle}>
                    <span>Name:</span>
                    <input type="text" name="name" id="name" className={nameInput}/>
                </label>
                <label className={emailStyle}>
                    <span>Email:</span>
                    <input type="email" name="_replyto" className={emailInput}/>
                </label>
                <label className={subjectStyle}>
                    <span>Subject:</span>
                    <input type="text" name="subject" id="subject" className={subjectInput}/>
                </label>
                <label className={messageStyle}>
                    <span>Message:</span>
                    <textarea name="message" id="message" rows="5" className={messageInput}/>
                </label>
                <HCaptcha
                    sitekey="3498896e-4896-4422-9ad3-945180775c4a"
                    onLoad={onLoad}
                    onVerify={setToken}
                    ref={captchaRef}
                />
                <button type="submit" className={sendButton}>Send</button>
                <input type="reset" value="Clear" className={clearButton}/>
            </form>
        </Layout>
        )
}

export const Head = () => <Seo title="Contact"/>

// Step 3: Export your component
export default ContactPage



