import React from 'react';
import "./Products.css"

export default function Products() {
  return (
    <div  style={{marginTop:"30px"}}>
      <h3  style={{textAlign:'center'}}>Products</h3>

      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap'  ,justifyContent:"space-around",paddingTop:"" }   }>
       
        <div className="card" style={{ width: '18rem' }}>
        <img src='' alt=' '/>
          <div className="card-body">
            <h5 className="card-title">Card Title 1</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </p>
          </div>
        </div>

       
        <div className="card" style={{ width: '18rem' }}>
          <img src="" className="card-img-top" alt="" />
          <img src='' alt=' '/>
          <div className="card-body">
            <h5 className="card-title">Card Title 2</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </p>
          </div>
        </div>

    
        <div className="card" style={{ width: '18rem' }}>
        <img src='' alt=' '/>
          <div className="card-body">
            <h5 className="card-title">Card Title 3</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}


