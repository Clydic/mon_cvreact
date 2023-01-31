import Abstract from "../Abstract/Abstract"
import PersonalInformation from "../PersonalInformation/PersonalInformation"
import FormationList from "../FormationList/FormationList"
import ExperienceList from "../ExperirenceList/ExperienceList"
import SkillsList from "../SkillList/SkillsList"
import { useState } from 'react';
import { Container } from "react-bootstrap"
import { Row } from "react-bootstrap"
import { Col } from "react-bootstrap"
import './Resume.css'

export default function Resume() {

    const [data, setData] = useState({
        person: {
            lastname: 'Paimblanc',
            firstname: 'Cédric',
            age: '31',
            email: 'uneardresse@email.com'
        },
        formationsList: [
            { id: 1, titre: 'licence de maths', annee: '2010-2015' },
            { id: 2, titre: 'Titre Pro Développeur web', annee: '2021-2022' }

        ],
        experiencesList: [
            { id: 1, poste: 'Développeur', company: 'Acome', times: '2022-today' },
            { id: 2, poste: 'Equipier', company: 'Mcdonald\'s', times: '2012-2020' },
        ],
        skillsList: [
            { id: 1, skill: 'Langage : Abap, js' },
            { id: 2, skill: 'Programmation Orienté Objet' },
        ]
    });
    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <PersonalInformation data={data.person} />
                    </Col>
                    <Col>
                        <Abstract title='Développeur full-stack' />
                        <FormationList formations={data.formationsList} />
                        <ExperienceList experiences={data.experiencesList} />
                        <SkillsList skills={data.skillsList} />
                    </Col>
                </Row>
            </Container>

        </div>
    )
}


