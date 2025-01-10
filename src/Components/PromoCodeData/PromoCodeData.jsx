import React, { useState } from 'react'
import PromocodeArray from '../Assets/Promocode'
import { AiOutlineClose } from 'react-icons/ai';
import CartItem from '../CartItems/CartItem';
function PromoCodeData(props) {

    const [cutPromocode, setCutPromocode] = useState('');


    if (cutPromocode === 'cartView') return <CartItem></CartItem>

    return (
        <div style={{ display: 'flex', alignItems: "center", justifyContent: 'center' }}>
            <div className='PromoCodeData' style={{

                display: 'flex', flexDirection: 'column', flexWrap: 'wrap', fontSize: '1.5rem', backgroundColor: '#eaeaea', alignItems: 'center', justifyContent: 'center', gap: '80px', margin: '40px 0px', height: "100%", width: '400px', padding: '30px', borderRadius: '40px'
            }} >
                <AiOutlineClose style={{ fontSize: '24px', cursor: 'pointer' }} onClick={() => {
                    setCutPromocode('cartView')
                }} />
                <div className="box">
                    {PromocodeArray.map((item, index) => {

                        return (<div key={index} style={{ width: "100px", height: '100px' }}>
                            <h4>Promocode:{item.code}</h4>
                            <h4>Discount:{item.discount}</h4>
                        </div>
                        )

                    })}
                </div>

            </div>
        </div>
    )
}

export default PromoCodeData