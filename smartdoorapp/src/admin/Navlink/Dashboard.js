//admin graph
import AdminGraph from '../AdminGraph';
import OrderMain from '../Navlink/OrderMain';
import TopProduct from '../TopProduct';

//css
import '../../style/aadmin.css'

//navbar
import AdminNavbar from '../AdminNavbar'
//footer
import AdminTop from '../AdminTop'

function Dashboard(){
    return(
        <div>
                <div className="row row-admin">
                <AdminNavbar></AdminNavbar>
                <div className="col-md-10 col-sm-12 admin-main">
                        <AdminTop></AdminTop>
                        {/* ====graph===== */}
                        <AdminGraph></AdminGraph>   

                        {/* =====order-main===== */}
                        <OrderMain></OrderMain>

                        {/* ========topproduct====== */}
                        <TopProduct></TopProduct>
                </div>
                </div>
        </div>

    )
}

export default Dashboard;