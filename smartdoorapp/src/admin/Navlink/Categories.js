//css
import "./style/Categories.css";

//color picker
import ColorPicker from "../ColorPicker";

import { useState, useEffect } from "react";
import axios from "axios";

//css
import "../../style/aadmin.css";

//navbar
import AdminNavbar from "../AdminNavbar";
//footer
import AdminTop from "../AdminTop";

function Categories() {
  const [length, setLength] = useState("0");
  const [breath, setBreath] = useState("0");

  const [categories, setcategories] = useState({
    name: "",
    color: "",
    size: "",
  });
  const [categories_name, set_categories_name] = useState();
  const [categories_color, set_categories_color] = useState();

  console.log(categories_color);

  const inputlength = (e) => {
    setLength(e.target.value);
  };
  const inputbreath = (e) => {
    setBreath(e.target.value);
  };
  function getcolorvalue(v) {
    console.log(v);
  }

  // add category name ===========
  async function AddCategoryName() {
    try {
      const categoryname = axios.post("http://localhost:3001/addcategoryname", {
        name: categories_name,
      });
    } catch (err) {}
  }

  // add cateogry color
  async function AddCategoryColor() {
    try {
      const categoryname = axios.post(
        "http://localhost:3001/addcategorycolor",
        { name: categories_color }
      );
    } catch (err) {}
  }

  return (
    <div>
      <div className="row row-admin">
        <AdminNavbar></AdminNavbar>
        <div className="col-md-10 col-sm-12 admin-main">
          <AdminTop></AdminTop>
          <div className="row-ad-cat row">
            <div className="add-cat">
              <div className="col-12 text-capitalize mt-2 fw-bold fs-3">
                Add Categories
              </div>
              <div className="col-12 my-2 d-flex align-items-center justify-content-between">
                <div className="addCat d-flex">
                  <div className="addCatName">Name : </div>
                  <div className="addCatInput">
                    <input
                      type="text"
                      onChange={(e) => set_categories_name(e.target.value)}
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="addCatBtn btn" onClick={AddCategoryName}>
                  Add category
                </div>
              </div>
            </div>

            <div className="add-color">
              <div className="col-12 text-capitalize mt-2 fw-bold fs-3">
                Add color
              </div>
              <div className="col-12 my-2">
                <div className="addCat">
                  <div
                    className="mb-2"
                    onChange={(e) =>
                      setcategories({ ...categories, name: e.target.value })
                    }
                  >
                    Pick color :{" "}
                  </div>
                  <ColorPicker getcolorvalue={getcolorvalue}></ColorPicker>
                </div>
              </div>
            </div>

            <div className="add-size">
              <div className="col-12 text-capitalize mt-2 fw-bold fs-3">
                Add size
              </div>
              <div className="col-12 my-2 d-flex align-items-center justify-content-between">
                <div className="addCat">
                  <div className="addSize m-2">
                    Type size you want to add :{" "}
                  </div>
                  <div className="ad-grid">
                    <div className="">Length : </div>
                    <div className="">
                      <input type="number" onChange={inputlength} />{" "}
                    </div>
                    <div className="">Breath : </div>
                    <div className="">
                      <input type="number" onChange={inputbreath} />{" "}
                    </div>
                    <div className="">Measure : </div>
                    <div className="">millimeter (mm)</div>
                  </div>
                </div>

                <div className="ad-size">
                  size :
                  <div className="ad-size show">
                    {length} * {breath} mm
                  </div>
                </div>
                <div className="addCatBtn btn">submit color</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Categories;
