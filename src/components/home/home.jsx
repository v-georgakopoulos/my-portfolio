import { motion } from "framer-motion"
import AnimatedText from "../animated-text/animated-text"
import homeImage from "../../assets/profileImg.jpg"
import "./home.scss"

const containerVariants = {
    hidden: {
        opacity: 0,
        y: 200
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            staggerChildren: 0.3,
            duration: 0.8,
            ease: "easeOut"
        }
    }
}

const itemVariants = {
    hidden: {
        opacity: 0,
        y: 30
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: "easeOut"
        }
    }
}

const imageVariants = {
    hidden: {
        opacity: 0,
        y: -200,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: "easeOut"
        }
    }
}

const Home = () => {
    return (
        <section className="home-container">
            <motion.div className="home-info"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <motion.h1 variants={itemVariants}> <span>I’m Vasilis |</span> <span>Web Developer</span> </motion.h1>

                <motion.p variants={itemVariants}>
                    I’m a Frontend Developer focused on building clean, responsive, and
                    user-friendly web interfaces using React, HTML, CSS, and JavaScript.
                </motion.p>
                <motion.div variants={itemVariants} className="home-info-links">
                    <motion.a
                        href="#contact"
                    >
                        <AnimatedText text="Let’s Connect" />
                    </motion.a>

                    <motion.a
                        href="CV.pdf"
                        download
                    >
                        <AnimatedText text="Download CV" />
                    </motion.a>

                </motion.div>
            </motion.div>
            <motion.div className="home-image-container"
                variants={imageVariants}
                initial="hidden"
                animate="visible"
            >
                <img src={homeImage} alt="Vasilis profile Banner" />
            </motion.div>
        </section>
    )
}

export default Home