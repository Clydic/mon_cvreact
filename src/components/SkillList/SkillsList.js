export default function SkillsList(props) {
    const listItem = props.skills.map((skill) => {

        return (<div key={skill.id}>
            Compétences : {skill.skill}
        </div>);
    }

    )
    return (
        <>
            <h3>Compétences</h3>
            <h5>{listItem}</h5>
        </>
    )

}