import "./footer.scss"

const Footer = () => {
    return (
        <footer>
            <div className="footer-container">
                <div className="footer-links">
                    <a className="footer-link" href="https://github.com/v-georgakopoulos" target="_blank" rel="noopener noreferrer">GitHub</a>
                    <a
                        className="footer-link"
                        href="mailto:v.georgakopoulos.dev@outlook.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Mail
                    </a>

                    <a className="footer-link" href="https://www.linkedin.com/in/vasilisgeorgakopoulos/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                </div>
                <p>©Vasilis Georgakopoulos {new Date().getFullYear()} | All rights reserved</p>
            </div>

        </footer>
    )
}

export default Footer