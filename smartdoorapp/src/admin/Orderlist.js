
//css
import '../style/aadmin.css'

//navbar
import AdminNavbar from './AdminNavbar'
//footer
import AdminTop from './AdminTop'

//order
import OrderMain from './Navlink/OrderMain'

function Orderlist (){
    return(
        <div>
             <div className="row row-admin">
              <AdminNavbar></AdminNavbar>
              <div className="col-md-10 col-sm-12 admin-main">
                <AdminTop></AdminTop>
                    <OrderMain></OrderMain>
              </div>
          </div>
        </div>
    )
}

export default Orderlist;