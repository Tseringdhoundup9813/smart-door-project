import React, { useEffect, useState } from "react";
import "../Navlink/style/OrderMain.css";
import axios from "axios";

export default function OrderMain() {
  const [orderlist, setorderlist] = useState();
  const[order_status,set_order_status] = useState();
  console.log(order_status);

  async function OrderList() {
    try {
      const orderlist = await axios.get(`http://localhost:3001/customerorder`);
      console.log(orderlist.data.data);
      setorderlist(orderlist.data.data);
    } catch (err) {}
  }

  async function confirm_order(order_id){
    try {
      const orderlist = await axios.get(`http://localhost:3001/orderstatus/${order_id}/${order_status}`);
      console.log(orderlist.data.data);
      setorderlist(orderlist.data.data);
    } catch (err) {}
  }

  useEffect(() => {
    console.log("1");
    OrderList();
  }, []);
  return (
    <div>
      <div className="row row-order-list">
        <h3 className="text-capitalize">order list</h3>
        <div className="col-12 main-ol">
          <div className="order-list ol-head">
            <div className="ol-name fw-bolder text-capitalize">customer</div>
            <div className="ol-name fw-bolder text-capitalize">date</div>
            <div className="ol-name fw-bolder text-capitalize">status</div>
            <div className="ol-name fw-bolder text-capitalize">
              confirmation
            </div>
          </div>
          {orderlist &&
            orderlist.map((order, key) => {
              return (
                <div key={key}>
                  <div className="order-list customer-cus align-items-center justify-content-start">
                    <div className="cus-detail">
                      <div className="cus-name">
                        {order.mainuser[0].username}
                      </div>
                      <div className="cus-email">{order.mainuser[0].email}</div>
                    </div>

                    {/* <div className="cus-date">{moment(order.createdAt.slice(0,order.createdAt.indexOf("T")), "YYYYMMDD").fromNow()}</div> */}
                    <div className="cus-date">{order.createdAt}</div>

                    <div className="cus-status">
                      <div>
                        <select name="status" id="" onChange={(e)=>set_order_status(e.target.value)}>
                          <option value="0">pending</option>
                          <option value="1">shipped</option>
                          <option value="3">canceled</option>
                          <option value="2">delivered</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <span className="cus-confirm" onClick={()=>confirm_order(order._id)}>confirm order</span>
                    </div>
                  </div>
                  <div className="row row-cart-head">
                    <div className="order-cart-head">
                      <div className="order-sn">S.No.</div>
                      <div className="order-detail">Product detail</div>
                      <div className="order-rate">Rate</div>
                      <div className="orer-qty">QTY</div>
                      <div className="orer-total">Total Price</div>
                    </div>
                    {order.productId.map((product) => {
                      return (
                        <div className="order-cart">
                          <div className="sn-number">1</div>
                          {product.mainproduct.map((mainproduct) => {
                            return (
                              <div className="order-detail">
                                <div className="od-img">
                                  <img src={mainproduct.img[0]} alt="product" />
                                </div>
                                <div className="od-cat">
                                  <span>{mainproduct.name}</span> <br />
                                  <span>{mainproduct.categories}</span>
                                </div>
                              </div>
                            );
                          })}
                          <div className="order-rate">Rs.25</div>
                          <div className="orer-qty">{product.quantity}</div>
                          <div className="orer-rate">Rs.{product.amount}/-</div>
                        </div>
                      );
                    })}
                    <div className="order-cart-total">
                      <div className="total-sn">2</div>
                      <div className="c-total">Total</div>
                      <div className="total-price">Rs. 100</div>
                      <div className="total-qty">4</div>
                      <div className="total-amount">Rs.400</div>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}
