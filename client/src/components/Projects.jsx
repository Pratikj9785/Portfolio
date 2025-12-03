import SectionWrapper from './SectionWrapper';
import Card from './Card';

const Projects = ({ data }) => {
    if (!data) return null;

    return (
        <SectionWrapper id="projects">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                <span className="text-gradient">Projects</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
                {data.map((project, index) => (
                    <Card
                        key={index}
                        title={project.title}
                        description={project.description}
                        tags={project.techStack}
                        delay={index * 0.1}
                    />
                ))}
            </div>
        </SectionWrapper>
    );
};

export default Projects;
