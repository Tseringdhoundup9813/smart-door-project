import React, { useEffect, useState } from "react";
import "../Navlink/style/OrderMain.css";
import axios from "axios";

export default function OrderMain() {
  const [orderlist, setorderlist] = useState();

  async function OrderList() {
    try {
      const orderlist = await axios.get(`http://localhost:3001/customerorder`);
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
            <div className="ol-name fw-bolder text-capitalize">Quantity</div>
            <div className="ol-name fw-bolder text-capitalize">totalamount</div>
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

                    <div className="cus-product">
                      <div className="cusp-model">{order.totalquantity}</div>
                      <div className="cus-color">Antrek</div>
                    </div>

                    <div className="cus-order-number">{order.totalamount}</div>

                    {/* <div className="cus-date">{moment(order.createdAt.slice(0,order.createdAt.indexOf("T")), "YYYYMMDD").fromNow()}</div> */}
                    <div className="cus-date">{order.createdAt}</div>

                    <div className="cus-status">
                      <div>
                        <select name="status" id="">
                          <option value="pending">pending</option>
                          <option value="shipped">shipped</option>
                          <option value="canceled">canceled</option>
                          <option value="delivery">delivered</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <span className="cus-confirm">confirm order</span>
                    </div>
                  </div>
                  <div className="row row-cart-head">
                    <div className="order-cart-head">
                      <div className="order-detail">Product detail</div>
                      <div className="order-rate">Rate</div>
                      <div className="orer-qty">QTY</div>
                      <div className="orer-total">Total Price</div>
                    </div>
                    {order.productId.map((product) => {
                      return (
                        <div className="order-cart">
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
                          <div className="order-rate">25%</div>
                          <div className="orer-qty">{product.quantity}</div>
                          <div className="orer-rate">rs.{product.amount}/-</div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}
