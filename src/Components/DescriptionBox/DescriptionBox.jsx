import React from 'react'
import './Description.css'
function DescriptionBox() {
    return (
        <div className='descriptionbox'>
            <div className="descriptionbox-navigator">
                <div className="descriptionbox-nav-box">
                    Description
                </div>
                <div className="descriptionbox-nav-box fade">
                    Reviews(122)
                </div>

            </div>

            <div className="descriptionbox-description">
                <p>The world of clothing is incredibly diverse, offering options for every occasion and preference. From timeless classics like denim jeans and white shirts to trendy, fashion-forward pieces that set new style benchmarks, the choices are endless. Each garment tells a story through its fabric, design, and craftsmanship, whether it's a handwoven traditional piece or a modern, sustainable creation.</p>
                <p>In addition to aesthetics, clothes play a crucial role in functionality. Sportswear is designed to enhance performance, while winter clothing provides insulation to keep us warm. With the growing emphasis on sustainability, many brands are adopting eco-friendly practices, creating clothes that are both stylish and environmentally conscious. Whether you're dressing for comfort, utility, or making a bold fashion statement, clothes are an integral part of our identity and everyday life.</p>
            </div>
        </ div>
    )
}

export default DescriptionBox