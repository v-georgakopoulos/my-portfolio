import "./about.scss";
import { aboutParagraphs } from "../../data/aboutParagraphs";
import { motion } from "framer-motion";

const About = () => {
    return (
        <section id="about">
            <div className="title">
                <h1>About me</h1>
            </div>
            <div className="about-container">
                <motion.div
                    className="about-info"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.3 }}
                    variants={{
                        hidden: {},
                        visible: { transition: { staggerChildren: 0.6 } }
                    }}
                >
                    {aboutParagraphs.map((par, index) => (
                        <motion.p
                            key={index}
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
                            }}
                        >
                            {par}
                        </motion.p>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default About;

