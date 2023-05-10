import * as React from "react"
import { Link } from "gatsby"

const pageStyles = {
    color: "#232129",
    padding: "96px",
    fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
    marginTop: 0,
    marginBottom: 64,
    maxWidth: 320,
}

const paragraphStyles = {
    marginBottom: 48,
}

const FormSuccess = () => {
    return (
        <main style={pageStyles}>
            <h1 style={headingStyles}>Success</h1>
            <p style={paragraphStyles}>
                Successfully sent a message.
                <br />
                <br />
                <Link to="/contact">Go back</Link>.
                <br />
                <br />
                <Link to="/">Home</Link>.
            </p>
        </main>
        )
}

export default FormSuccess

export const Head = () => <title>Success</title>