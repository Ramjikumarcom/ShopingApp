import React from 'react'
import './ReleatedProduct.css'
import data_product from '../Assets/data'
import Item from '../Item/Item'
function ReleatedProduct() {
    return (
        <div className='relatedproducts'>
            <h1>Releated Products</h1>

            <hr></hr>
            <div className="releatedproducts-item">
                {data_product.map((item, index) => {
                    return <Item key={index}
                        id={item.id}
                        image={item.image}
                        name={item.name}
                        new_price={item.new_price}
                        old_price={item.old_price}></Item>
                })}
            </div>

        </div>
    )
}

export default ReleatedProduct