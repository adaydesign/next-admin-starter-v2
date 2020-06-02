import {MoveToInbox, Mail, AssignmentReturn
} from '@material-ui/icons';


export const mainMenu = [
    {
        text:'หน้าหลัก',
        icon:<MoveToInbox />,
        link: '/dashboard',
        key:'1'
    },
    // {
    //     text:'เมนู 1',
    //     icon:<Mail />,
    //     link: '/page1',
    //     key:'2'
    // },
    {
        text:'CRUD Example',
        icon:<AssignmentReturn />,
        key:'3',
        subs:[
            {
                text:'List',
                link: '/users',
                key:'31'
            },
            {
                text:'Add',
                link: '/users/add',
                key:'32'
            },
        ]
    },

]

