
import React from 'react'
import * as AiIcons from 'react-icons/ai'
import * as BsIcons from 'react-icons/bs'


export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: 'Beats',
        path: '/beats',
        icon: <BsIcons.BsFileMusic />, 
        cName: 'nav-text'
    },
    {
        title: 'Pricing',
        path: '/pricing',
        icon: <AiIcons.AiOutlineShoppingCart />,
        cName: 'nav-text'
    },
    {
        title: 'About',
        path: '/about',
        icon: <AiIcons.AiOutlineInfoCircle />,
        cName: 'nav-text'
    },
    {
        title: 'Contact',
        path: '/contact', 
        icon: <AiIcons.AiOutlineContacts />,
        cName: 'nav-text'
    },
]