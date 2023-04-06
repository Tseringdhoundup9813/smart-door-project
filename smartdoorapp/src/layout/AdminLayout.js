import { Outlet, NavLink } from "react-router-dom";

//css
import '../style/aadmin.css'

//navbar
import AdminNavbar from '../admin/AdminNavbar'
//footer
import AdminTop from '../admin/AdminTop'


export default function RootLayout() {
  return (
      
      <div id="admin">
          <div className="row row-admin">
              <AdminNavbar></AdminNavbar>
              <div className="col-md-10 col-sm-12 admin-main">
                  <AdminTop></AdminTop>
                  <Outlet></Outlet>
              </div>
          </div>
         
      </div>
  )
}