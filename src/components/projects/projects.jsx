import { useState } from "react";
import { PROJECTS } from "../../data/projects";
import ProjectCard from "../project-card/project-card";
import AnimatedText from "../animated-text/animated-text";
import { motion } from "framer-motion";

import "./projects.scss";

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.5,
        },
    },
};

const projectVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: "easeOut" },
    },
};

const Projects = () => {
    const [latestProject, ...remainingProjects] = PROJECTS;
    const [showRemaining, setShowRemaining] = useState(false);

    const handleToggle = () => {
        setShowRemaining(prev => !prev);
    };

    return (
        <section id="projects">
            <div className="title">
                <h1>My Latest Work</h1>
            </div>
            <div className="projects-container">

                {/* Latest Project (scroll in view like About) */}
                <motion.div
                    className="latest-project-container"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.3 }}
                    variants={containerVariants}
                >
                    {latestProject && (
                        <motion.div variants={projectVariants}>
                            <ProjectCard project={latestProject} />
                        </motion.div>
                    )}
                </motion.div>

                {/* Remaining Projects (same stagger logic) */}
                {showRemaining && (
                    <motion.div
                        className="remaining-projects-container"
                        initial="hidden"
                        animate="visible"
                        variants={containerVariants}
                    >
                        {remainingProjects.map((project, index) => (
                            <motion.div key={index} variants={projectVariants}>
                                <ProjectCard project={project} />
                            </motion.div>
                        ))}
                    </motion.div>
                )}

                {/* Explore Button */}
                <div className="explore-button-container">
                    <button onClick={handleToggle}>
                        {showRemaining ? (
                            <AnimatedText text="Show Less" />
                        ) : (
                            <AnimatedText text="Explore More" />
                        )}
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Projects;
