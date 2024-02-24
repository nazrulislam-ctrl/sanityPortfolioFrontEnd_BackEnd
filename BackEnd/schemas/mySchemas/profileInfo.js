export default{
    name: 'profileInfo',
    type: 'document',
    title: 'Profile Info',
    fields:[
        {
            name: 'profileName',
            type: 'string',
            title: 'Profile Name',
        },
        {
            name: 'profileImage',
            type: 'image',
            title: 'Profile Image',
        },
        {
            name: 'designation',
            type: 'string',
            title: 'Your Designation',
        },
        {
            name: 'profileDetails',
            type: 'array',
            of:[{type: 'block'}],
            title: 'Profile Details',
        },
        {
            name: 'buttonUrl',
            type: 'url',
            title: 'Button Url',
        },
    ]
}