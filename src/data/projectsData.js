import seven from '../assets/svg/projects/seven.svg'
import gcp from '../assets/svg/projects/gcp.png'
import unityGame from '../assets/svg/projects/unity-game.png'


export const projectsData = [
    {
        id: 1,
        projectName: 'Contributing to the Construction of a Data Warehouse Using GCP',
        projectDesc: 'As a project team member, I contributed to building a data warehouse for a financial company utilizing GCP. The project leveraged GCP services such as BigQuery and Cloud Composer. I was also involved in constructing a data pipeline using Airflow.',
        tags: ['Python','GCP'],
        code: '',
        demo: 'https://',
        image: gcp
    },
    {
        id: 2,
        projectName: 'Development of a Web Application for Advertising Report Generation',
        projectDesc: 'As a project team member, I participated in the development of a web application for automated advertising report generation. The frontend was built using React, the backend was developed with Golang, and the infrastructure was set up using AWS and Terraform.',
        tags: ['React', 'Golang', 'AWS'],
        code: '',
        demo: 'https://',
        image: seven
    },
    {
        id: 3,
        projectName: 'Development of a Multi-Player Game Using Unity and Photon',
        projectDesc: 'Developed a first-person shooter (FPS) game from scratch using Unity and Photon. Additionally, I worked on developing a login feature utilizing a database. For more details, please refer to the demo video.',
        tags: ['Unity', 'Photon', 'MySQL'],
        code: '',
        demo: 'https://www.youtube.com/watch?v=DhmeP3MkOqM',
        image: unityGame
    }
]