function TopProduct(){
    return(
        <div className="row row-product-list">
        <h3 className="text-capitalize">top products    </h3>

        <div className="col-12 main-ol">
            <div className="product-list ol-head">
                <div className="pl-name text-capitalize">product</div>
                <div className="pl-name text-capitalize">category</div>
                <div className="pl-name text-capitalize">price</div>
                <div className="pl-name text-capitalize">sold</div>
                <div className="pl-name text-capitalize">stock left</div>
            </div>

            <div className="product-list pro-list align-items-center">
                <div className="pro-detail d-flex align-items-center">
                    <div className="pro-checkbox">
                        <input type="checkbox" />
                    </div>
                    <div className="pro-img"></div>
                    <div className="pro-model">
                        DDkg
                    </div>
                </div>

                <div className="pro-cat">
                    3d ddors
                </div>

                <div className="pro-price">Rs.400/-</div>

                <div className="pro-sold">22</div>

                <div className="pro-stock-left">34</div>
            </div>

            <div className="product-list pro-list align-items-center">
                <div className="pro-detail d-flex align-items-center">
                    <div className="pro-checkbox">
                        <input type="checkbox" />
                    </div>
                    <div className="pro-img"></div>
                    <div className="pro-model">
                        DDkg
                    </div>
                </div>

                <div className="pro-cat">
                    3d ddors
                </div>

                <div className="pro-price">Rs.400/-</div>

                <div className="pro-sold">22</div>

                <div className="pro-stock-left">34</div>
            </div>
        </div>

        
    </div>
    )
}

export default TopProduct;