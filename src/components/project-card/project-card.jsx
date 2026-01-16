
import AnimatedText from "../animated-text/animated-text"
import "./project-card.scss"

const ProjectCard = ({ project }) => {

    const { image, name, githubLink, liveLink } = project

    return (
        <div className="project-card-container">
            <div className="project-card-image-container">
                <img className="latest-project-image" src={image} alt="Project Banner" />
                <div className="overlay">
                    <p>
                        {name}
                    </p>
                </div>
            </div>
            <div className="project-card-links">
                <a href={githubLink} target="_blank" rel="noopener noreferrer"><AnimatedText text="GitHub" /></a>
                <a href={liveLink} target="_blank" rel="noopener noreferrer"><AnimatedText text="Watch Live" /></a>
            </div>
        </div>
    )
}

export default ProjectCard