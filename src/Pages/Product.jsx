import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom'
import Breadcrums from '../Components/Breadcrums/Breadcrums'
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay'
import DescriptionBox from '../Components/DescriptionBox/DescriptionBox'
import ReleatedProduct from '../Components/ReleatedProduct/ReleatedProduct'

const Product = () => {
    const { all_product } = useContext(ShopContext)
    const { productId } = useParams();
    const product = all_product.find((e) => e.id === Number(productId));//If a product with the matching id is found, .find() returns the corresponding product object.
    return (
        <div>
            <Breadcrums product={product}></Breadcrums>
            <ProductDisplay product={product}></ProductDisplay>
            <DescriptionBox></DescriptionBox>
            <ReleatedProduct></ReleatedProduct>
        </div>
    )
}

export default Product