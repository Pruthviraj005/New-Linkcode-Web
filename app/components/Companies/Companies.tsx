"use client"
import Image from "next/image";
import React, { Component } from "react";
import Slider from "react-slick";

// IMAGES DATA FOR CAROUSEL
interface Data {
    imgSrc: string;
}

const data: Data[] = [
    {
        imgSrc: "https://www.linkcode.in/infosys.png"
    },
    {
        imgSrc: "https://www.linkcode.in/accenture.png"
    },
    {
        imgSrc: "https://www.linkcode.in/brillio.png"
    },
    {
        imgSrc: "https://www.linkcode.in/Cognizant-Logo.jpg"
    },
    {
        imgSrc: "https://www.linkcode.in/sap.png"
    },
    {
        imgSrc: "data:image/png;base64,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"
    },
    {
        imgSrc: "https://www.linkcode.in/barclays.png"
    }, {
        imgSrc: "https://www.linkcode.in/persistent.png"
    }
]


// CAROUSEL SETTINGS
export default class MultipleItems extends Component {
    render() {
        const settings = {
            dots: false,
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            arrows: false,
            autoplay: true,
            speed: 2000,
            autoplaySpeed: 2000,
            cssEase: "linear",
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 700,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 500,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                }
            ]
        };

        return (

            <div className='text-center bg-lightpink -mt-20' >
                <div className="mx-auto max-w-2xl py-16 px-4s sm:px-6 lg:max-w-7xl lg:px-8">
                    <h2 className="text-3xl sm:text-5xl my-14 text-lightgrey mb-20 font-bold tracking-tight text-blue-900">Our Students Placed At</h2>
                    <div className=" m-auto ">
                        <Slider {...settings}>
                            {data.map((item, i) =>
                                <div key={i} className=" pl-16">
                                    <Image width={200} height={0} src={item.imgSrc} alt={item.imgSrc} className="h-32 p-4 " />
                                </div>
                            )}
                        </Slider>
                    </div>
                </div>
            </div>

        )
    }
}