import React from "react";
import productimg from "../../image/products/double/DDGK.jpg";
import "../Navlink/style/OrderMain.css";

export default function OrderMain() {
  return (
    <div>
      <div className="row row-order-list">
        <h3 className="text-capitalize">order list</h3>
        <div className="col-12 main-ol">
          <div className="order-list ol-head">
            <div className="ol-name fw-bolder text-capitalize">customer</div>
            <div className="ol-name fw-bolder text-capitalize">product</div>
            <div className="ol-name fw-bolder text-capitalize">
              order number
            </div>
            <div className="ol-name fw-bolder text-capitalize">date</div>
            <div className="ol-name fw-bolder text-capitalize">status</div>
            <div className="ol-name fw-bolder text-capitalize">
              confirmation
            </div>
          </div>
          <div className="order-list customer-cus align-items-center justify-content-start">
            <div className="cus-detail">
              <div className="cus-name">Ram shah</div>
              <div className="cus-email">ramshah123@gmail.com</div>
            </div>

            <div className="cus-product">
              <div className="cusp-model">SD102</div>
              <div className="cus-color">Antrek</div>
            </div>

            <div className="cus-order-number">#9dfad767</div>

            <div className="cus-date">10 march 2023</div>

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
              <div className="order-detail">Image</div>
              <div className="order-rate">Rate</div>
              <div className="orer-qty">QTY</div>
              <div className="orer-total">Total Price</div>
            </div>
            <div className="order-cart">
              <div className="order-detail">
                <div className="od-img">
                  <img src={productimg} alt="product" />
                </div>
                <div className="od-cat">
                  <span>prduct Name</span> <br />
                  <span>Product category</span>
                </div>
              </div>
              <div className="order-rate">25%</div>
              <div className="orer-qty">10</div>
              <div className="orer-rate">rs.4500/-</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
