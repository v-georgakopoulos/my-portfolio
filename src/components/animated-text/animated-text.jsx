import { motion, useAnimation } from "framer-motion";

const AnimatedText = ({ text }) => {
    const controls = useAnimation();

    const letterVariants = {
        roll: {
            y: ["0%", "-100%", "0%"],
            transition: { duration: 0.5, ease: "easeOut" },
        },
    };

    const containerVariants = {
        roll: {
            transition: {
                staggerChildren: 0.05,
            },
        },
    };

    const handleHoverStart = () => {
        controls.start("roll");
    };

    return (
        <motion.span
            style={{ display: "inline-block", overflow: "hidden" }}
            variants={containerVariants}
            animate={controls}
            onHoverStart={handleHoverStart}
        >
            {text.split("").map((letter, index) => (
                <motion.span
                    key={index}
                    style={{
                        display: "inline-block",
                        whiteSpace: letter === " " ? "pre" : "normal",
                    }}
                    variants={letterVariants}
                >
                    {letter === " " ? "\u00A0" : letter}
                </motion.span>
            ))}
        </motion.span>
    );
};

export default AnimatedText;
