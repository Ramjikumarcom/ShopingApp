import React, { createContext, useState } from "react";

import all_product from '../Components/Assets/all_product'
import LoginData from "../Components/Assets/LoginData";
import userId from "../Components/Assets/UserId";
import PromocodeArray from "../Components/Assets/Promocode";


export const ShopContext = createContext(null);//  to create context
const getDefaultCart = () => {
    let cart = {};
    for (let index = 0; index < all_product.length + 1; index++) {
        cart[index] = 0;
    }
    return cart;
}
const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getDefaultCart())
    const [Promocode, setPromocode] = useState('');
    const [pcodeDiscount, setPcodeDiscount] = useState(0)
    const [EditProfileInformati, setEditProfileInformati] = useState({})
    const [searchTerm, setSearchTerm] = useState("");


    const addToCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
        console.log(cartItems)
    }
    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
    }




    const getTotalCartItems = () => {
        let totalItem = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                totalItem += cartItems[item];
            }
        }
        return totalItem;
    }


    const getSubTotalAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = all_product.find((product) => product.id === Number(item))
                totalAmount += itemInfo.new_price * cartItems[item];
            }
        }

        // totalAmount = totalAmount * (100 - 10) / 100;
        return totalAmount;

    }

    const emailValidation = (name, email, password) => {
        let emaildata = LoginData.find((itemInEmail) => {
            return (itemInEmail.email === email && itemInEmail.passwor === password)
        });

        if (emaildata) {
            return true;
        }
        else return false;
    }
    const GetPromocodeDiscount = (PromocodeValue) => {
        let pcode = PromocodeArray.find((itemcode) => {
            return itemcode.code == PromocodeValue
        })

        if (PromocodeValue === '') setPromocode('Please Enter Valid Promocode')

        else if (pcode.code === PromocodeValue) {


            // Discount = pcode.discount;
            setPromocode(`Congratulations:You have ${pcode.discount} discount`)
            setPcodeDiscount(pcode.discount);

        }
        else {

            setPromocode(
                'sorry you Have No Discount!!'
            )
        }

    }
    const getTotalAmount = (item) => {
        const disc = parseInt(pcodeDiscount, 10);
        item = item * (100 - (disc)) / 100;
        return item;
    }


    const EditProfileInformation = (pNameElement, pEmailElement, pAddressElement, pPhoneElement) => {
        setEditProfileInformati({
            uemail: pEmailElement,
            uname: pNameElement,
            uaddress: pAddressElement,
            uphone: pPhoneElement
        })

    }

    const userValidation = (userIdElement, UpasswordElement) => {
        let UserCrediential = userId.find((checkuser) => {
            return (checkuser.UserId === userIdElement && checkuser.password === UpasswordElement)
        });

        if (UserCrediential) {
            return true;
        }
        else return false;
    }


    const contextValue = { getTotalCartItems, getSubTotalAmount, all_product, cartItems, addToCart, removeFromCart, emailValidation, GetPromocodeDiscount, Promocode, pcodeDiscount, getTotalAmount, EditProfileInformation, EditProfileInformati, userValidation, searchTerm, setSearchTerm }
    // console.log(cartItems)


    return <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>// context provider
}
export default ShopContextProvider;