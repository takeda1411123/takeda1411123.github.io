import gcp from '../assets/svg/projects/gcp.png'
import a from '../assets/png/A.jpg'
import stepFunction from '../assets/png/StepFunction.jpg'

export const projectsData = [
    {
        id: 1,
        projectName: 'Contributing to the Construction of a Data Warehouse Using GCP',
        projectDesc: 'As a project team member, I contributed to building a data warehouse for a financial company utilizing GCP. ' 
                   + 'The project leveraged GCP services such as BigQuery and Cloud Composer. I was also involved in constructing a data pipeline using Airflow.',
        tags: ['Python','GCP'],
        code: '',
        demo: 'https://',
        image: gcp
    },
    {
        id: 2,
        projectName: 'Development of a Web Application for Advertising Report Generation',
        projectDesc: 'As a project team member, I participated in the development of a web application for automated advertising report generation. ' 
                    +'The frontend was built using React, the backend was developed with Golang, and the infrastructure was set up using AWS and Terraform.',
        tags: ['React', 'Golang', 'AWS'],
        code: '',
        demo: 'https://',
        image: a
    },
    {
        id: 3,
        projectName: 'Development of a data processing system using AWS',
        projectDesc: 'As a lead engineer, I contributed to building a data processing system utilizing AWS.' 
                   + 'The project leveraged AWS services such as Step Function, Lambda, and CDK. I was involved in constructing infrastructure and lambda function with Golang and Python.',
        tags: ['Python','Golang', 'AWS'],
        code: '',
        demo: 'https://',
        image: stepFunction
    }
]