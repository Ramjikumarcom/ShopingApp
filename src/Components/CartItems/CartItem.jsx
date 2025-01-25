import React, { useContext, useRef, useState } from 'react'
import './CartItem.css'
import { ShopContext } from '../../Context/ShopContext'
import remove_icon from '../Assets/cart_cross_icon.png'
import { useNavigate } from 'react-router-dom';
import PromocodeArray from '../Assets/Promocode'
import PromoCodeData from '../PromoCodeData/PromoCodeData';
function CartItem() {

    const { getSubTotalAmount, all_product, cartItems, removeFromCart, GetPromocodeDiscount, Promocode, pcodeDiscount, getTotalAmount } = useContext(ShopContext);
    const Inputpromocode = useRef();

    const navigator = useNavigate()


    const [PromocodeView, setPromocodeview] = useState('');

    // let Discount = 0;

    if (PromocodeView === 'pview') {
        return <PromoCodeData></PromoCodeData>
    }



    return (
        <div className='cartitems'>

            <div className="cartitems-format-main">
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr></hr>

            {all_product.map((item) => {
                if (cartItems[item.id] > 0) {
                    return (
                        <div key={item.id}>
                            <div className="cartitems-format  cartitems-format-main">
                                <img src={item.image} alt="" className="carticon-product-icon" />
                                <p>{item.name}</p>
                                <p>${item.new_price}</p>
                                <button className="cartitems-qunatity">{cartItems[item.id]}</button>
                                <p>${(item.new_price * cartItems[item.id])}</p>
                                <img
                                    src={remove_icon}
                                    onClick={() => removeFromCart(item.id)}
                                    alt="Remove Item"
                                    className="cart-remove-icon"
                                />
                            </div>
                            <hr />
                        </div>
                    );
                    return null
                }

            })}

            <div className="cartitems-down">
                <div className="cartitems-total">
                    <h1>Cart Totals</h1>
                    <div>
                        <div className="cartitems-total-item">
                            <p>Total</p>
                            <p>${getSubTotalAmount()}</p>
                        </div>
                        <hr />
                        <div className="cartitems-total-item">
                            <p>Discount</p>
                            <p>${pcodeDiscount}</p>
                        </div>
                        <hr />
                        <div className="cartitems-total-item">
                            <p>Shipping Fee</p>
                            <p>Free</p>
                        </div>
                        <hr />

                        <div className="cartitems-total-item">
                            <h3>Subtotal</h3>
                            <h3>${getTotalAmount(getSubTotalAmount())}</h3>

                        </div>
                    </div>
                    <button onClick={() => {

                        navigator('/CheckVerification')
                    }}>PROCEED TO CHECKOUT</button>
                </div>
                <div className="CARTITEMS-PROMOCODE">
                    <p>If you have a promo code ,Enter it here</p> <span><button style={{
                        height: '30px', border:
                            'none', cursor: 'pointer', padding: '5px', borderRadius: '10px', color: 'blue'
                    }} onClick={
                        () => {

                            setPromocodeview('pview')
                        }
                    }>Click to See Promocode</button></span>
                    <div className="cartitems-promobox">
                        <input type="text" name="" ref={Inputpromocode} id="" placeholder='Enter Promo Code' required />

                        <button onClick={() => {
                            const PromocodeValue = Inputpromocode.current.value;
                            GetPromocodeDiscount(PromocodeValue)

                        }}>Submit</button>

                    </div>
                    <p style={{ color: 'blue', margin: ' 5px 10px' }}>{Promocode} </p>
                </div>
            </div>

        </div>
    )
}

export default CartItem