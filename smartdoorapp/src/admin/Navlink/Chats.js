import React from 'react'
//css
import '../../style/aadmin.css'

//navbar
import AdminNavbar from '../AdminNavbar'
//footer
import AdminTop from '../AdminTop'

export default function Chats() {
  return (
    <div>
       <div className="row row-admin">
              <AdminNavbar></AdminNavbar>
              <div className="col-md-10 col-sm-12 admin-main">
                  <AdminTop></AdminTop>
                  chats
              </div>
          </div>
    </div>
  )
}
