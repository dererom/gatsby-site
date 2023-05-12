import * as React from 'react'
import Layout from '../../components/layout'
import Seo from '../../components/seo'
import { useEffect, useRef, useState } from "react";
import HCaptcha from "@hcaptcha/react-hcaptcha";
import {
    nameStyle,
    emailStyle,
    subjectStyle,
    emailInput,
    messageStyle,
    messageInput
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
        <Layout pageTitle="About Me">
            <form method="post" action="https://eoy22wh670q3v9t.m.pipedream.net">
                <label>
                    Name
                    <input type="text" name="name" id="name" className={nameStyle}/>
                </label>
                <label className={emailStyle}>
                    Email
                    <input type="email" name="_replyto" className={emailInput}/>
                </label>
                <label>
                    Subject
                    <input type="text" name="subject" id="subject" className={subjectStyle}/>
                </label>
                <label className={messageStyle}>
                    Message
                    <textarea name="message" id="message" rows="5" className={messageInput}/>
                </label>
                <HCaptcha
                    sitekey="3498896e-4896-4422-9ad3-945180775c4a"
                    onLoad={onLoad}
                    onVerify={setToken}
                    ref={captchaRef}
                />
                <button type="submit">Send</button>
                <input type="reset" value="Clear"/>
            </form>
        </Layout>
        )
}

export const Head = () => <Seo title="Contact"/>

// Step 3: Export your component
export default ContactPage



