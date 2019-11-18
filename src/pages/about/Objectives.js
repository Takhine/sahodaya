import React from 'react';
import {
    Grid,
    Paper
} from '@material-ui/core';
import Icon from 'static/images/cbse-logo.png';

const objectives = [
    {
        id: 1,
        content: 'To act as liaison between C.B.S.E. and member schools',
    },
    {
        id: 2,
        content: 'To Share among members the best practices and innovative strategies in education',
    },
    {
        id: 3,
        content: 'To organize regular capacity building exercises for Students, Staff, Principals &amp; Managers of CBSE schools in MMR and OMR'
    },
    {
        id: 4,
        content: 'To engage parents &amp; leaders in the community to build partnership & network for a larger cause'
    },
    {
        id: 5,
        content: 'To enable the sharing of experiences and facilities for promoting inter school collaboration'
    },
    {
        id: 6,
        content: 'To encourage professionalism among teachers and educational innovativeness among member schools'
    },
    {
        id: 7,
        content: 'To promote academic collaboration through teacher exchange, joint seminars, workshops'
    },
    {
        id: 8,
        content: 'To ensure observance of norms and conduct as prescribed by C.B.S.E. from time to time'
    },
    {
        id: 9,
        content: 'To solicit, obtain or accept subscription, donation, grants, gifts and trusts from any person, firm, bank or local authority/any institution/the union/state government'
    },
    {
        id: 10,
        content: 'To open and operate accounts in bank or to deal with bank in any manner whatsoever required, for the furtherance of all or any of the objects of the association'
    },
    {
        id: 11,
        content: 'To do all other lawful things incidental or conducive to attainment of any of the objects of the association'
    },
    {
        id: 12,
        content: 'To function purely with not for profit making objective, any surplus (i.e. excess of income over expenditure) shall be retained with association and be utilized for the purpose of attaining the core objective of the association'
    },
    {
        id: 13,
        content: 'To organize empowerment and capacity building programmes at regular intervals for the teachers and principals to equip them with the competencies such as using technology tools effectively'
    },
    {
        id: 14,
        content: 'Applying appropriate pedagogical techniques to make learning process connected with real life, stress-free and joyful; Improving their Life skills such as active communication skills to deal with the needs of learners and the society effectively'
    },
    {
        id: 15,
        content: 'To carry out need analysis to plan and organize capacity building and empowerment programmes for principals and teachersto ensure the effective implementation of various policies of the Board'
    },
    {
        id: 16,
        content: 'To collaborate with and empanel national/international institutes of repute to provide quality teacher/principal training programmes'
    },
    {
        id: 17,
        content: 'To strengthen the leadership skills, conflict resolution, interpersonal relations and management of values and ethics to promote managerial excellence of head teachers, administrators and managers of schools'
    },
    {
        id: 18,
        content: 'To undertake action research for development of innovative methods, processes and practices for improving of teaching-learning environment in schools'
    },
    {
        id: 19,
        content: 'To conduct effectively Induction, Mentoring and Capacity Building Programmes for head and other teachers'
    },
    {
        id: 20,
        content: 'To organize National Annual Sahodaya Conferences and provide other interactive platforms for Teacher, Students and Heads to freely interact'
    },
    {
        id: 21,
        content: 'To create opportunities for teachers and students to participate in conferences, summits and exchanges for sharing'
    },
    {
        id: 22,
        content: 'Any other activity in collaboration with CBSE for the overall improvement of CBSE Schools and the education system'
    }
]
const Objectives = () => {
    return (
        <div className="objectives-section">
            <h2 className="objectives-title">Objectives</h2>
            <Grid container spacing={4}>
                {objectives.map((objective => {
                    return (
                        <Grid key={objective.id} item xs={12} sm={6}>
                            <Paper className="objectives-card">
                                {/* <div className="icon-container">
                                    <img src={Icon} alt="Objectives Icon" />
                                </div> */}
                                {/* <hr /> */}
                                <p>{objective.content}</p>
                            </Paper>
                        </Grid>
                    )
                }))}
            </Grid>
        </div>
    )
}

export default Objectives;