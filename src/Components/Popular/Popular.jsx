import React from 'react';
import './Popular.css';
import data_product from '../Assets/data';
import Item from '../Item/Item';

const Popular = () => {
    return (
        <div className="popular">
            <h1>POPULAR IN WOMEN</h1>
            <hr style={{ width: '25%' }} />
            <div className="popular-item">
                {data_product.map((item, index) => (
                    <Item
                        key={index}
                        id={item.id}
                        image={item.image}
                        name={item.name}
                        new_price={item.new_price}
                        old_price={item.old_price}
                    />
                ))}
            </div>
        </div>
    );
}

export default Popular;
