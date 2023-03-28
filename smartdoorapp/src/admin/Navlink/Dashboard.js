//admin graph
import AdminGraph from '../AdminGraph';
import Orderlist from '../Orderlist';
import TopProduct from '../TopProduct';

function Dashboard(){
    return(
            <div>
                    {/* ====graph===== */}
                    <AdminGraph></AdminGraph>   

                    {/* =====order-list===== */}
                    <Orderlist></Orderlist>

                    {/* ========topproduct====== */}
                    <TopProduct></TopProduct>
            </div>

    )
}

export default Dashboard;