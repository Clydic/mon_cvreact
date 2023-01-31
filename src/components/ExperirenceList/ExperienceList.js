export default function ExperienceList(props) {
    const listItem = props.experiences.map((exp) => {

        return (<div key={exp.id}>
            Poste : {exp.poste}, Entreprise : {exp.company}, Durée : {exp.times};
        </div>);
    }

    )
    return (
        <>
            <h3>Expériences</h3>
            <h5>{listItem}</h5>
        </>
    )
}