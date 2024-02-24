export default{
    name: 'project',
    type: 'document',
    title: 'Projects',
    fields: [
        {
            name: 'projectName',
            type: 'string',
            title: 'Project Name',
        },
        {
            name: 'projectImage',
            type: 'image',
            title: 'Project Image',
        },
        {
            name: 'projectUrl',
            type: 'url',
            title: 'Project Url',
        },
        {
            name: 'githubUrl',
            type: 'url',
            title: 'Github Url',
        },
    ]
}