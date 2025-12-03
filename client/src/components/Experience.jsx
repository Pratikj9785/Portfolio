import SectionWrapper from './SectionWrapper';
import Card from './Card';

const Experience = ({ data }) => {
    if (!data) return null;

    return (
        <SectionWrapper id="experience" className="bg-slate-900/50">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                <span className="text-gradient">Experience</span>
            </h2>
            <div className="space-y-8">
                {data.map((exp, index) => (
                    <Card
                        key={index}
                        title={exp.role}
                        subtitle={exp.company}
                        date={exp.period}
                        description={exp.description}
                        delay={index * 0.1}
                    />
                ))}
            </div>
        </SectionWrapper>
    );
};

export default Experience;
