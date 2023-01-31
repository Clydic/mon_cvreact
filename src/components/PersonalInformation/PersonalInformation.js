import './PersonalInformation.css'
export default function PersonalInformation(props) {
    const intern_props = props.data;
    return (
        <div className="personalinformation">
            <h3>
                Information Personnel
            </h3>
            <img src='' alt='une belle image' /><br />
            <h5>Nom : {intern_props.lastname}</h5>
            <h5>Prénom : {intern_props.firstname}</h5>
            <h5>age : {intern_props.age}</h5>
            <h5>email : {intern_props.email}</h5>

        </div>

    )

}

