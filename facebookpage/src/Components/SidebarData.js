import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import MailIcon from '@mui/icons-material/Mail';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import DashboardIcon from '@mui/icons-material/Dashboard';
import GroupIcon from '@mui/icons-material/Group';
import ImageSearchIcon from '@mui/icons-material/ImageSearch';


export const SidebarData = [
{
    title: "Home",
    icon: <HomeIcon color="white"/>,
    link: "/home",

},
{
    title: "Mail",
    icon: <MailIcon />,
    link: "/mail",

},
{
    title: "Analytics",
    icon: <TrendingUpIcon />,
    link: "/analytics",

},
{
    title: "Dashboard",
    icon: <DashboardIcon />,
    link: "/dashboard",

},
{
    title: "Friends",
    icon: <GroupIcon />,
    link: "/friends",

},
{
    title: "Images",
    icon: <ImageSearchIcon />,
    link: "/images",

},

]


