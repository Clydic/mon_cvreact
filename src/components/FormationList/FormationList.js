export default function FormationList(props) {
    const listItem = props.formations.map((form) => {

        return (<div key={form.id}>
            Titre : {form.titre}, Année : {form.annee};
        </div>);
    }

    )
    return (
        <>
            <h3>Formations</h3>
            <h5>{listItem}</h5>
        </>
    )
}