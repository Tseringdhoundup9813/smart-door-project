

import React from 'react'

export default function OrderMain() {
  return (
    <div>
        <div className="row row-order-list">
            <h3 className="text-capitalize">order list</h3>
            <div className="col-12 main-ol">
                <div className="order-list ol-head">

                <div className="ol-name fw-bolder text-capitalize">customer</div>
                <div className="ol-name fw-bolder text-capitalize">product</div>
                <div className="ol-name fw-bolder text-capitalize">order number</div>
                <div className="ol-name fw-bolder text-capitalize">date</div>
                <div className="ol-name fw-bolder text-capitalize">status</div>
                <div className="ol-name fw-bolder text-capitalize">confirmation</div>
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

                    <div className="cus-order-number">
                        #9dfad767
                    </div>

                    <div className="cus-date">
                        10 march 2023
                    </div>

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

                <div className="order-list customer-cus align-items-center justify-content-start">
                    <div className="cus-detail">
                        <div className="cus-name">Ram shah</div>
                        <div className="cus-email">ramshah123@gmail.com</div>
                    </div>

                    <div className="cus-product">
                        <div className="cusp-model">SD102</div>
                        <div className="cus-color">Antrek</div>
                    </div>

                    <div className="cus-order-number">
                        #9dfad767
                    </div>

                    <div className="cus-date">
                        10 march 2023
                    </div>

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
            </div>
        </div>
    </div>
  )
}
