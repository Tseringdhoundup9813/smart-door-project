import { NavLink } from "react-router-dom";

//css
import '../../style/aadmin.css'

//navbar
import AdminNavbar from '../AdminNavbar'
//footer
import AdminTop from '../AdminTop'
function UpdateProduct(){
    return(
        <div>
           <div className="row row-admin">
              <AdminNavbar></AdminNavbar>
              <div className="col-md-10 col-sm-12 admin-main">
                  <AdminTop></AdminTop>
                    <div className="row-uproduct row">
                        <div className="col d-flex align-items-center justify-content-between">
                            <div className="up-title">Add Product</div>
                            <div className="up-publish-btn btn">Publish</div>
                        </div>
                    </div>
                    <div className="row w-90 mx-auto">
                        <div className="col-7 up-input">
                                <div className="up-product-title">
                                    <label className="mb-3 text-capitalize" >Product title</label>
                                    <input className="mb-3 form-control" type="text"  />
                                </div>
                                <div className="up-product-title">
                                    <label className="mb-3 text-capitalize" >Price</label>
                                    <input className="mb-3 form-control" type="number"  />
                                </div>
                                <div className="up-size container d-flex align-items-center justify-content-between">
                                <div className="up-size d-flex align-items-center">
                                <label className="mb-3 text-capitalize me-2" >Size : </label>
                                    <select className="form-control" name="" id="upSize">
                                        <option value="size">80 * 32</option>
                                        <option value="size">80 * 26</option>
                                        <option value="size">75 * 26</option>
                                        <option value="size">72 * 26</option>
                                        <option value="size">72 * 26</option>
                                        <option value="size">80 * 38</option>
                                        <option value="size">DD80 * 19</option>
                                        <option value="size">DD80 * 22</option>
                                    </select>
                                </div>
                                    <div className="up-cat">
                                    <label className="mb-3 text-capitalize me-2" >Categories : </label>
                                    <select className="form-control" name="" id="upCat">
                                        <option value="categories">3d doors</option>
                                        <option value="categories">Double  doors</option>
                                        <option value="categories">Canadian  doors</option>
                                        <option value="categories">Membrance  doors</option>
                                    </select>
                                    </div>
                                </div>
                                
                                <div className="up-product-title">
                                    <label className="mb-3 text-capitalize" >color</label>
                                    <input className="mb-3 form-control" type="text"  />
                                </div>
                                <div className="up-product-title">
                                    <label className="mb-3 text-capitalize" >Discount</label>
                                    <input className="mb-3 form-control" type="text"  />
                                </div>
                                <div className="up-product-title">
                                    <label className="mb-3 text-capitalize" >description</label>
                                    <textarea className="form-control" name="" id="" cols="30" rows="10">

                                    </textarea>
                                </div>
                        </div>
                        <div className="col-5 up-img">
                            <div className="front-img">
                                <div className="img"></div>
                                <div className="img-upload">
                                    <input type="file" />
                                </div>
                            </div>

                            <div className="back-img">
                                <div className="img"></div>
                                <div className="img-upload">
                                    <input type="file" />
                                </div>
                            </div>
                        </div>
                    </div>
              </div>
          </div>
        </div>
    )
}

export default UpdateProduct;