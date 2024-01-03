import React from 'react'
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import  './Adpermissionapp.css'
import UnderProgress from 'components/UnderProgress'
const Adpermissionapp = () => {
  return (
    <DashboardLayout>
    <DashboardNavbar />
       <div className='Adpermissionapp_parent'>
        <UnderProgress/>
       </div>
  </DashboardLayout>
  )
}

export default Adpermissionapp;