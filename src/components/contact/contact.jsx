import { useState, useRef } from "react"
import emailjs from "@emailjs/browser"
import { motion } from "framer-motion";
import AnimatedText from "../animated-text/animated-text"

import "./contact.scss"

const defaultFormFields = {
    name: "",
    email: "",
    message: ""
}


const Contact = () => {

    const form = useRef()

    const [formFields, setFormFields] = useState(defaultFormFields)
    const [success, setSuccess] = useState(false)
    const [error, setError] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const { name, email, message } = formFields


    const sendEmail = (e) => {

        e.preventDefault()

        setIsLoading(true)
        setSuccess(false)
        setError(false)

        emailjs.sendForm(
            process.env.REACT_APP_EMAILJS_SERVICE_ID,
            process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
            form.current, {
            publicKey: process.env.REACT_APP_EMAILJS_PUBLIC_KEY
        }
        ).then(() => {
            setSuccess(true)
            setError(false)
            setIsLoading(false)
            setFormFields(defaultFormFields)

            setTimeout(() => {
                setSuccess(false)
            }, 3000)
        },
            (error) => {
                console.log(error)
                setError(true)
                setSuccess(false)
                setIsLoading(false)
                setTimeout(() => {
                    setError(false)
                }, 3000)
            }
        )
    }



    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormFields({ ...formFields, [name]: value })
    }

    return (
        <section id="contact">
            <div className="title">
                <h1>Contact me</h1>
            </div>
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
                variants={{
                    hidden: {},
                    visible: { transition: { staggerChildren: 0.6 } }
                }}

                className="contact-container">
                <motion.div
                    variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
                    }}
                    className="contact-info">
                    <p>
                        Based in <strong>Athens, Greece</strong>
                    </p>
                    <p> Feel free to send me a message.</p>

                </motion.div>
                <motion.div
                    variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
                    }}
                    className="contact-form">
                    <form ref={form} onSubmit={sendEmail}>
                        <input
                            type="text"
                            placeholder="Name*"
                            name="name"
                            value={name}
                            onChange={handleChange}
                            required
                        />
                        <input
                            type="email"
                            placeholder="Email*"
                            name="email"
                            value={email}
                            onChange={handleChange}
                            required
                        />
                        <textarea
                            placeholder="Message*"
                            name="message"
                            value={message}
                            onChange={handleChange}
                            required
                        >
                        </textarea>
                        <button className="submit-button" disabled={isLoading}> {isLoading ? "Sending" : <AnimatedText text="Submit" />}</button>
                        {success && <p className="success-message">Message sent successfully</p>}
                        {error && <p className="error-message">Failed to send message. Please try again!</p>}
                    </form>
                </motion.div>
            </motion.div>
        </section>
    )
}

export default Contact