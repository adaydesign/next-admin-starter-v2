import { MoveToInbox, AssignmentReturn
} from '@material-ui/icons';


export const mainMenu = [
    {
        text:'Dashboard',
        icon:<MoveToInbox />,
        link: '/dashboard',
        key:'1',
        breadcrumb: 'แดชบอร์ด'
    },
    {
        text:'CRUD Example',
        icon:<AssignmentReturn />,
        key:'2',
        subs:[
            {
                text:'List',
                link: '/users',
                key:'21',
                breadcrumb:'รายการบัญชีผู้ใช้งาน'
            },
            {
                text:'Add',
                link: '/users/add',
                key:'22',
                breadcrumb:'เพิ่มบัญชีผู้ใช้งาน'
            },
            {
                text:'Edit',
                link: '/users/edit',
                key:'23',
                breadcrumb:'แก้ไขข้อมูลบัญชีผู้ใช้งาน',
                hide:true
            },
        ]
    },

]

export const getLink = (index, array) => {
    const nexttoIndex = index + 1
    const path = array.slice(0, nexttoIndex).join('/')
    // console.log(`${index} > ${path}`)
    return path
}

export const getBreadcrumbName = (link, defaultName) => {
    // console.log('getItemName of link : ' + link)
    var foundInSubs = false
    mainMenu.forEach(menu => {
        if (menu.subs != undefined) {
            menu.subs.forEach(subMenu => {
                // console.log(`getItemName of link : ${link} - submenu link : ${subMenu.link} || ${subMenu.link == link}`)
                if (subMenu.link == link) {
                    defaultName = subMenu.breadcrumb
                    foundInSubs = true
                    return
                }
            })

            if(foundInSubs) return
        } else {
            if (menu.link == link) {
                defaultName = subMenu.breadcrumb
                return
            }
        }
    })

    return defaultName.toLocaleLowerCase()
}

