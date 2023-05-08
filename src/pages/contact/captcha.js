import * as React from 'react'
import { useEffect, useRef, useState } from "react";
import HCaptcha from "@hcaptcha/react-hcaptcha";

export default function Form() {
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
        <form> 
            <HCaptcha  
                sitekey="3498896e-4896-4422-9ad3-945180775c4a"
                onLoad={onLoad}
                onVerify={setToken}
                ref={captchaRef}
            /> 
        </form> 
        );
}