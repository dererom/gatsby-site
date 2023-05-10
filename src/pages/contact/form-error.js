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

const FormError = () => {
    return (
        <main style={pageStyles}>
            <h1 style={headingStyles}>Error</h1>
            <p style={paragraphStyles}>
                An error occured.
                <br />
                <br />
                <Link to="/contact">Try again</Link>.
                <br />
                <br />
                <Link to="/">Home</Link>.
            </p>
        </main>
        )
}

export default FormError

export const Head = () => <title>Error</title>