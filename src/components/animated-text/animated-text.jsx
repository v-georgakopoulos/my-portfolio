import { motion, useAnimation } from "framer-motion";
import { useState } from "react";

const AnimatedText = ({ text }) => {
    const controls = useAnimation();
    const [hovering, setHovering] = useState(false);

    const letterVariants = {
        roll: {
            y: ["0%", "-100%", "0%"],
            transition: { duration: 0.5, ease: "easeOut" },
        },
    };

    const containerVariants = {
        roll: {
            transition: {
                staggerChildren: 0.05, // letters animate one after another
            },
        },
    };

    const handleHoverStart = () => {
        setHovering(true);
        controls.start("roll"); // trigger rolling animation
    };

    const handleHoverEnd = () => {
        setHovering(false);
        // we don’t revert instantly, letters finish animation naturally
    };

    return (
        <motion.span
            style={{ display: "inline-block", overflow: "hidden" }}
            variants={containerVariants}
            animate={controls}
            onHoverStart={handleHoverStart}
            onHoverEnd={handleHoverEnd}
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

export default AnimatedText