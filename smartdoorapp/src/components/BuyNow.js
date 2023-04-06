import React, { useEffect, useState } from "react";
//css
import "../style/BuyNow.css";

import { NavLink } from "react-router-dom";
//navbar
import Navbar from "../components/Navbar";
//footer
import Footer from "../components/Footer";
import axios from "axios";
export default function BuyNow() {
  const [userId, setUserId] = useState();
  const [product, setProduct] = useState(0);
  const [total_Amount, set_total_Amount] = useState(0);
  const [amount, setamount] = useState();
  const [province, setprovince] = useState();
  const [province_name, setprovince_name] = useState();

  const [district, setdistrict] = useState();

  const [district_name, setdistrict_name] = useState();
  const [district_id, setdistrict_id] = useState();

  const [province_id, setprovince_id] = useState();
  const [city, setcity] = useState();
  const [city_name, setcity_name] = useState();
  const [contact, setContact] = useState();

  useEffect(() => {
    productlistshow();
    getProvince();
    totalproductamount();
    async function totalproductamount() {
      try {
        const totalamount = await axios.get(
          `http://localhost:3001/totalamount/${localStorage.getItem("user_id")}`
        );

        set_total_Amount(totalamount.data.totalamount);
      } catch (err) {
        console.log(err);
      }
    }

    // when province provided then get district value

    if (province_name) {
      getDistrict();
    }
    // end==========================

    // when district value get show city value
    if (district_name) {
      getCity();
    }

    // end===================
  }, [province_name, district_name]);

  // place order=================================================================
  async function placeOrder() {
    let address = `${city_name}/${district_name}/${province_name}`;
    try {
      const payorder = await axios.post(
        `http://localhost:3001/orders/${localStorage.getItem("user_id")}`,
        { address: address, number: contact }
      );
      localStorage.setItem("order_id", payorder.data.order_id);
    } catch (err) {
      console.log(err);
    }
  }

  // END===============================================================

  // get district =========================================
  async function getDistrict() {
    let token = "FF60UFp-JiGvK-hbrvrMNJe9";
    try {
      const res = await axios.get(
        `https://nepallocation.com.np/api/v1/province/${province_id}/district`,
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
      // console.log(res.data.data);

      setdistrict(res.data.data);
    } catch (err) {}
  }
  //  END ===============================================

  //  setallprovincedata====================================================

  function setallprovincedata(e) {
    const province_name = e.target.value.slice(0, e.target.value.indexOf("/"));
    const province_id = e.target.value.slice(e.target.value.indexOf("/") + 1);
    setprovince_name(province_name);
    setprovince_id(province_id);
  }
  // end============

  // setalldistrict data =================================================================

  function setalldistrictdata(e) {
    const district_name = e.target.value.slice(0, e.target.value.indexOf("/"));
    const district_id = e.target.value.slice(e.target.value.indexOf("/") + 1);
    setdistrict_name(district_name);
    setdistrict_id(district_id);
  }
  // ====================================================================

  async function productlistshow() {
    try {
      const product = await axios.get(
        `http://localhost:3001/showCartlist/${localStorage.getItem("user_id")}`
      );
      setProduct(product.data.data);
      setamount(product.data.quantity);
    } catch (err) {
      console.log(err);
    }
  }

  // get province ===========================================
  async function getProvince() {
    let token = "FF60UFp-JiGvK-hbrvrMNJe9";
    try {
      const res = await axios.get(
        "https://nepallocation.com.np/api/v1/province/list",
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
      setprovince(res.data.data.data);
    } catch (err) {
      console.log(err);
    }
  }

  // end ===========================

  async function getCity() {
    let token = "FF60UFp-JiGvK-hbrvrMNJe9";
    try {
      const res = await axios.get(
        `https://nepallocation.com.np/api/v1/district/${district_id}/cities`,
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
      setcity(res.data.data);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div>
      <Navbar></Navbar>
      <div id="buyNow">
        <div className="row row-buy">
          <div className="col-md-7 col-lg-8 col-sm-7 col-xsm-12 p-0">
            <div className="buy-deliver">
              <div className="b-deliver-to mb-1">
                Deliver : {localStorage.getItem("username")}
              </div>
              <div className="b-d-address">
                <div className="bd-address p-2 row ">
                  <div className="col-sm-12 col-md-6">
                    <label htmlFor="number">Mobile No.</label>
                    <div className="bd-address">
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        pattern="+[0-9]{3}-[0-9]{10}"
                        onChange={(e) => setContact(e.target.value)}
                        placeholder="982*******"
                        className="form-control"
                      ></input>
                    </div>

                    {/* ====for address=== */}
                    <label htmlFor="number">Address</label>
                    <div className="br-address">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="house no./Area name"
                      />
                    </div>

                    <label htmlFor="number">Landmark (Optional)</label>
                    <div className="bd-address">
                      <input
                        type="text"
                        onChange={(e) => setContact(e.target.value)}
                        placeholder="EG. Beside rai chowk/"
                        className="form-control"
                      ></input>
                    </div>

                    {/* end====================== */}
                  </div>
                  <div className="col-sm-12 col-md-6">
                    {/* select province ==================================== */}
                    <label htmlFor="number">Province No.</label>
                    <div className="bd-address">
                      <select
                        className="form-control"
                        name="province"
                        id="province"
                        onChange={setallprovincedata}
                      >
                        {province ? (
                          province &&
                          province.map((province, key) => {
                            return (
                              <option
                                key={key}
                                value={[
                                  province.name + "/" + province.province_id,
                                ]}
                              >
                                {province.name}
                              </option>
                            );
                          })
                        ) : (
                          <option value="select your">
                            select your province
                          </option>
                        )}
                      </select>
                    </div>

                    <label htmlFor="number">District</label>
                    {/* select district =========================================== */}
                    <select
                      name="cars"
                      id="cars"
                      className="form-control"
                      onChange={setalldistrictdata}
                    >
                      {province_name ? (
                        district &&
                        district.map((item, key) => {
                          return (
                            <option
                              key={key}
                              value={[item.name + "/" + item.district_id]}
                            >
                              {item.name}
                            </option>
                          );
                        })
                      ) : (
                        <option value="">please select province first</option>
                      )}
                    </select>

                    {/* select  a city ================================== */}
                    <label htmlFor="number">City</label>
                    <select
                      name="cars"
                      id="cars"
                      className="form-control"
                      onChange={(e) => setcity_name(e.target.value)}
                    >
                      {district_name ? (
                        city &&
                        city.map((item, key) => {
                          return (
                            <option key={key} value={item.name}>
                              {item.name}
                            </option>
                          );
                        })
                      ) : (
                        <option value="">please select district first</option>
                      )}
                    </select>
                  </div>
                </div>
              </div>
              {/* <div className="b-billingadress my-1">
                Bill to the same address <span className="edit-ba">Edit</span>
              </div> */}
              <div className="b-email">
                Email to{" "}
                <span className="bemail">sangeylama1000@gmail.com</span>{" "}
                <span className="edit-email">Edit</span>
              </div>
            </div>
            <div className="buy-cart">
              <div className="buy-cart-head text-capitalize">orders</div>

              {product &&
                product.map((product, key) => {
                  return (
                    <div key={key} className="buy-cart-container">
                      <div
                        className="buy-cart-img"
                        style={{ backgroundImage: `url(${product.img[0]})` }}
                      ></div>
                      <div className="buy-cart-detail">
                        <div className="buy-cart-head">
                          {product && product.name}
                        </div>
                        <div className="bu-cart-cat">{product.categories}</div>
                      </div>
                      <div className="buy-cart-qty">
                        Qty {amount[key].quantity}
                      </div>
                      <div className="buy-cart-price">
                        Rs {amount[key].amount} /-
                      </div>
                    </div>
                  );
                })}

              <div className="buy-subtotal">
                <span className="subtotal-item">1 items.</span>
                Subtotal :{" "}
                <span className="main-subtotal">Rs. {total_Amount}</span>
              </div>
            </div>
          </div>
          <div className="col-md-5 col-lg-4 col-sm-5 col-xsm-12">
            <div className="buy-place-order">
              <div className="po-head text-capitalize">Order summary</div>
              <div className="order-summary">
                <div className="items-total text-capitalize">Items Total</div>
                <div className="items-total-amt text-end">
                  Rs. {total_Amount}
                </div>
                <div className="deliveryfee text-capitalize">Delivery Fee</div>
                <div className="deliveryfeee-amt text-end">Rs.100</div>
                <div className="total-pay text-capitalize">Total payment</div>
                <div className="total-pay-amt text-end">Rd. {total_Amount}</div>
              </div>
              <div
                className="placeorder-btn btn text-capitalize"
                onClick={placeOrder}
              >
                <NavLink to="/product/placeorder" className="nav-link">
                  place order
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}
