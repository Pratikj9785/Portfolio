import SectionWrapper from './SectionWrapper';
import Card from './Card';

const Education = ({ data }) => {
    if (!data) return null;

    return (
        <SectionWrapper id="education">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                <span className="text-gradient">Education</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
                {data.map((edu, index) => (
                    <Card
                        key={index}
                        title={edu.institution}
                        subtitle={edu.degree}
                        date={edu.period}
                        description={[
                            edu.location,
                            edu.cgpa ? `CGPA: ${edu.cgpa}` : `Percentage: ${edu.percentage}`
                        ]}
                        delay={index * 0.1}
                    />
                ))}
            </div>
        </SectionWrapper>
    );
};

export default Education;
