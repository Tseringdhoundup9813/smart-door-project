//css
import './style/Categories.css'

//color picker
import ColorPicker  from '../ColorPicker';

import { useState } from 'react';

function Categories (){
    const [length,setLength]=useState('0');
    const [breath,setBreath]=useState('0');
    const inputlength=(e)=>{
        setLength(e.target.value)
    }
    const inputbreath=(e)=>{
        setBreath(e.target.value)
    }
    return(
        <div>
            <div className="row-ad-cat row">
                <div className="add-cat">
                <div className="col-12 text-capitalize mt-2 fw-bold fs-3">
                    Add Categories
                </div>
                <div className="col-12 my-2 d-flex align-items-center justify-content-between">
                    <div className="addCat d-flex">
                        <div className="addCatName">Name : </div>
                        <div className="addCatInput"><input type="text" className="form-control" /></div>
                    </div>
                    <div className="addCatBtn btn">
                        Add category
                    </div>
                </div>
                </div>

                <div className="add-color">
                <div className="col-12 text-capitalize mt-2 fw-bold fs-3">
                    Add color
                </div>
                <div className="col-12 my-2 d-flex align-items-center justify-content-between">
                    <div className="addCat">
                        <div className="mb-2">Pick color : </div>
                         <ColorPicker></ColorPicker>
                    </div>
                    <div className="addCatBtn btn">
                        submit color
                    </div>
                </div>

                
                
                </div>

                <div className="add-size">
                <div className="col-12 text-capitalize mt-2 fw-bold fs-3">
                    Add size
                </div>
                <div className="col-12 my-2 d-flex align-items-center justify-content-between">
                    <div className="addCat">
                        <div className="addSize m-2">Type size you want to add : </div>
                        <div className="ad-grid">
                        <div className="">Length : </div>
                        <div className=""><input  type="number" onChange={inputlength}/> </div>
                        <div className="">Breath : </div>
                        <div className=""><input  type="number" onChange={inputbreath} /> </div>
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
                    <div className="addCatBtn btn">
                        submit color
                    </div>
                </div>

                
                
                </div>
            </div>
        </div>
    )
}
export default Categories;