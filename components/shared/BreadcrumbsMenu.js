import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
// import Link from '@material-ui/core/Link';
import Link from 'next/link';
import HomeIcon from '@material-ui/icons/Home';
import { useRouter } from 'next/router';
import { getLink, getBreadcrumbName } from '../../includes/sidebarMenu'

const useStyles = makeStyles((theme) => ({
    link: {
        display: 'flex',
    },
    icon: {
        marginRight: theme.spacing(0.5),
        width: 20,
        height: 20,
    },
}));

const BreadcrumbLinkItem = (props) => {
    const { link, icon } = props
    const classes = useStyles()
    // console.log(link)
    return (
        link ? (<Link href={link} >
            <Button className={classes.link}
                startIcon={icon ? icon : null}>
                {props.children}
            </Button>
        </Link>) :
            (<Typography className={classes.link} color="primary" variant="body2">{props.children}</Typography>)
    )
}

const BreadcrumbMenu = () => {
    const router = useRouter()
    const pathNameArray = router.pathname.split('/').filter(p => !p.includes("["))

    return (
        <Breadcrumbs separator="›" aria-label="breadcrumb">
            {pathNameArray.map((p, index, array) => {
                    if (p == "" && index == 0) {
                        return (<BreadcrumbLinkItem key={index} link="/" icon={<HomeIcon />}>หน้าหลัก</BreadcrumbLinkItem>)
                    } else {
                        const link = getLink(index, array)
                        const breadcrumbName = getBreadcrumbName(link, p)
                        if (index == array.length - 1) {
                            // last item
                            return (<BreadcrumbLinkItem key={index}>{breadcrumbName}</BreadcrumbLinkItem>)
                        } else {
                            return (<BreadcrumbLinkItem key={index} link={link}>{breadcrumbName}</BreadcrumbLinkItem>)
                        }
                    }
                })
            }
        </Breadcrumbs>
    )
}

export default BreadcrumbMenu
