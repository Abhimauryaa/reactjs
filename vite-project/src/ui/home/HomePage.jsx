import React from "react";
import stride from "../images/stride.jpg"
import "./HomePage.css"
import { Button, Input } from "reactstrap";
import HeaderCom from "../pages/header/Component/HeaderCom";



export default function HomePage() {
    <HeaderCom/>
    return (
        <div>

            <div className="navbar">
                <img src={stride} alt="" />
            </div>

            <div className="mid-content">
                <div className="category">
                    <h1>SHOP BY CATEGORIES</h1>
                </div>
                <div className="cate-men">
                    <button type="submit" className="btn-men" >MEN</button>
                    <button>WOMEN</button>
                    <button>KIDS</button>

                </div>
            </div>

            <div className="tabs-head">
                <div className="tabs-content">
                    <div className="newsSection-box">
                        <div className="tabs-img">
                           <a href="https://www.libertyshoesonline.com/flip-flops.html?gender=80"> <img src="https://www.libertyshoesonline.com/pub/media/wysiwyg/home/Men-Flip-Flops_20-oct.webp" alt="" /></a>
                        </div>
                        <h3>Flip-Flops</h3>
                        <p>Put your best foot forward with these flip flops</p>
                        <br />
                        <div className="btn-hover">
                            <button>Shop Flip- flops</button>
                        </div>

                    </div>

                    <div className="newsSection-box">
                        <div className="tabs-img">
                            <img src="https://www.libertyshoesonline.com/pub/media/wysiwyg/home/Formal-Shoes_20-oct.webp" alt="" />
                        </div>
                        <h3>Formal Shoes</h3>
                        <p>Some utterly stylish formal shoes for all your office events</p>

                        <div className="btn-hover">
                            <button>Shop Shoes</button>
                        </div>

                    </div>

                    <div className="newsSection-box">
                        <div className="tabs-img">

                            <img src="https://www.libertyshoesonline.com/pub/media/wysiwyg/home/Men_Sportswear_Athleisure_20-oct.webp" alt="" />
                        </div>
                        <h3>Sportswear / Athleisure</h3>
                        <p>Get the sporty look and inspiration with us</p>
                        <br />
                        <div className="btn-hover">
                            <button>Shop Sportswear / Athleisure</button>
                        </div>

                    </div>
                    <div className="newsSection-box">
                        <div className="tabs-img">
                            <img src="https://www.libertyshoesonline.com/pub/media/wysiwyg/home/MenCasualSandals_20-oct.webp" alt="" />
                        </div>
                        <h3>Casual Sandals</h3>
                        <p>Meet your match with these everyday casual sandals</p>

                        <div className="btn-hover">
                            <button>Shop Casual</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="newsSection-2">
                <div className="best-seller">
                    <ul className="tabs">
                        <li className="active">New Arrivals</li>
                        <li>Best Sellers</li>
                    </ul>

                    <div className="best-content">
                        <div className="best-content-img">
                            <img src="https://www.libertyshoesonline.com/pub/media/catalog/product/cache/56e7884e9df52d10beb7c68c6d3d3e76/1/_/1_48_1.jpg" alt="" />
                            <h3>Leap7x By Liberty Men NITWALK-2 L.Grey Casual Slippers</h3>
                            <p>₹1,099.00</p>

                        </div>

                        <div className="best-content-img">
                            <img src="https://www.libertyshoesonline.com/pub/media/catalog/product/cache/56e7884e9df52d10beb7c68c6d3d3e76/e/a/eazy_black_1_1.jpg" alt="" />
                            <h3>LEAP7X By Liberty Ladies EAZY Black Sports Non Lacing Shoes</h3>
                            <p>₹1,999.00</p>

                        </div>
                        <div className="best-content-img">
                            <img src="https://www.libertyshoesonline.com/pub/media/catalog/product/cache/56e7884e9df52d10beb7c68c6d3d3e76/e/a/eazy-m_n.blue_1_1.jpg" alt="" />
                            <h3>LEAP7X By Liberty Men EAZY-M N.Blue Sports Non Lacing Shoes</h3>
                            <p>₹1,999.00</p>

                        </div>
                        <div className="best-content-img">
                            <img src="https://www.libertyshoesonline.com/pub/media/catalog/product/cache/56e7884e9df52d10beb7c68c6d3d3e76/e/a/eazy-m_l.grey_1_1.jpg" alt="" />
                            <h3>LEAP7X By Liberty Men EAZY-M L.Grey Sports Non Lacing Shoes</h3>
                            <p>₹1,999.00</p>

                        </div>
                    </div>
                </div>
            </div>

            <div className="newsSection-3">
                <div className="newSection-hero">
                    <div className="newSectionBox-img">
                        <img src="https://www.libertyshoesonline.com/pub/media/wysiwyg/home/21-oct-Ayushamann-Favourite1.jpg" alt="" />
                    </div>
                    <div className="newSectionBox-img">
                        <img src="https://www.libertyshoesonline.com/pub/media/wysiwyg/home/21-oct-Rakul-Favourite1.jpg" alt="" />
                    </div>
                </div>
            </div>

            <div className="newsSection-4">
                <h4 className="heading-new">MOST LOVED BRANDS</h4>
                <div className="newsSection-brand">
                    <div className="newsSectionBox4">
                        <div className="newsSectionBox-img">
                            <img src="https://www.libertyshoesonline.com/pub/media/wysiwyg/home/Leap7x_20-oct.webp" alt="" />
                        </div>
                        <div className="overlap-newbox">
                            <div className="overlap-brand">
                                <img src="https://www.libertyshoesonline.com/pub/media/wysiwyg/LibertyNew/leapx7-logon.svg" alt="" />
                            </div>
                            <div className="btn-hover1">
                                <button>Shop Now</button>
                            </div>
                        </div>
                    </div>
                    <div className="newsSectionBox4">
                        <div className="newsSectionBox-img">
                            <img src="https://www.libertyshoesonline.com/pub/media/wysiwyg/home/Healers.webp" alt="" />
                        </div>
                        <div className="overlap-newbox">
                            <div className="overlap-brand">
                                <img src="https://www.libertyshoesonline.com/pub/media/wysiwyg/LibertyNew/healers-brands.svg" alt="" />
                            </div>
                            <div className="btn-hover1">
                                <button>Shop Now</button>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="newsSection-bottom">
                    <div className="newsSectionBox4">
                        <div className="newsSectionBox-img">
                            <img src="https://www.libertyshoesonline.com/pub/media/wysiwyg/home/AHA.webp" alt="" />
                        </div>
                        <div className="overlap-newbox">
                            <div className="overlap-brand">
                                <img src="https://www.libertyshoesonline.com/pub/media/wysiwyg/LibertyNew/aha-brands.svg" alt="" />
                            </div>
                            <div className="btn-hover1">
                                <button>Shop Now</button>
                            </div>
                        </div>
                    </div>
                    <div className="newsSectionBox4">
                        <div className="newsSectionBox-img">
                            <img src="https://www.libertyshoesonline.com/pub/media/wysiwyg/home/Lucy-Luke_20-oct.webp" alt="" />
                        </div>
                        <div className="overlap-newbox">
                            <div className="overlap-brand">
                                <img src="https://www.libertyshoesonline.com/pub/media/wysiwyg/LibertyNew/lucyluke-brands.svg" alt="" />
                            </div>
                            <div className="btn-hover1">
                                <button>Shop Now</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="btn-bottom">
                    <button>View All Brands</button>
                </div>
            </div>

            <div className="newsSection-5">
                <div className="genderSection-left">
                    <div className="genderSection-img">
                        <img src="https://www.libertyshoesonline.com/pub/media/wysiwyg/home/Women-Winter-26oct.jpg" alt="" />
                    </div>
                    <div className="btn-gender">
                        <button>Shop WOMEN</button>
                    </div>
                </div>

             
               <div className="genderSection-right">
                    <div className="genderSection-img">
                        <img src="https://www.libertyshoesonline.com/pub/media/wysiwyg/home/Men-Winter-26oct.jpg" alt="" />
                    </div>
                    <div className="btn-gender">
                        <button>Shop MEN</button>
                    </div>
                </div>

                <div className="genderSection-overlap">
                    <h2>Winter is Here!</h2>
                    <h3>SO IS OUR COLLECTION</h3>
                </div>
            </div>


            <div className="newsSection-6">
                <div className="newsSection-store">
                    <div className="store-img">
                        <img src="https://www.libertyshoesonline.com/pub/media/wysiwyg/LibertyNew/26-july-store-banner.jpg" alt="" />
                    </div>
                    <div className="overlap-store">
                        <h4>COME VISIT US AT ANY OF OUR STORES!</h4>
                        <div className="btn-store">
                            <button>Find Your Store</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="page-footer">
                <div className="footer-content">
                    <div className="free-shipping">
                        <div className="footer-free-shipping">
                            <ul>
                                <li><img src="https://www.libertyshoesonline.com/pub/media/wysiwyg/LibertyNew/New-freeshippng-icon.svg" alt="" />
                                    <p><strong>Free Shipping For All Order</strong></p>
                                
                                </li>
                                
                                
                                <li>
                                    <img src="https://www.libertyshoesonline.com/pub/media/wysiwyg/LibertyNew/New-reverse-icon.svg" alt="" />
                                    <p> <strong>Reverse Pickup</strong></p>
                                </li>
                                <li>
                                    <img src="https://www.libertyshoesonline.com/pub/media/wysiwyg/LibertyNew/New-cod-icon.svg" alt="" />
                                    <p><strong>Fixed COD</strong>
                                    Charges Rs. 49</p>
                                </li>

                            </ul>
                        </div>

                    </div>

                    <div className="newsletter-hide">
                        <div className="title">
                            <strong>Stay Connected</strong>
                        </div>
                        <div className="content">
                            <form action="" className="subscribe">
                            <div className="field-news">
                                <div className="control">
                                    <Input name="email" placeholder="enter your email id" type="email" />
                                </div>
                                <div className="action">
                                    <Button title="submit" >Submit</Button>
                                </div>
                            </div>
                            </form>
                        </div>
                    </div>
                    <div className="footer-link-container">
                            <div className="footer-link">
                                <div className="customer-menu">
                                    <h2>ABOUT COMPANY</h2>
                                    <ul>
                                        <li><a href="https://www.libertyshoesonline.com/about-us">About Us</a></li>
                                        <li><a href="https://www.libertyshoesonline.com/contact/">Contact Us</a></li>
                                        <li><a href="https://www.libertyshoes.com/store-locator/">Store Locator</a></li>
                                        <li><a href="https://www.libertyshoes.com/category/press-coverage/">Press</a></li>
                                        <li><a href="https://blog.libertyshoesonline.com/">Blog</a></li>

                                    </ul>
                                </div>
                                <div className="customer-menu">
                                    <h2>online shopping</h2>
                                    <ul>
                                        <li><a href="https://www.libertyshoesonline.com/new-arrivals.html/">New Arrivals</a></li>
                                        <li><a href="https://www.libertyshoesonline.com/men.html">Men</a></li>
                                        <li><a href="https://www.libertyshoesonline.com/women.html/">Women</a></li>
                                        <li><a href="https://www.libertyshoesonline.com/kids.html/">Kids</a></li>
                                        <li><a href="https://www.libertyshoesonline.com/brands">Brands</a></li>

                                    </ul>
                                </div>
                                <div className="customer-menu">
                                    <h2>POLICIES</h2>
                                    <ul>
                                        <li><a href="https://www.libertyshoesonline.com/return-policy">Return Policy</a></li>
                                        <li><a href="https://www.libertyshoesonline.com/privacy-policy">Privacy Policy</a></li>
                                        <li><a href="https://www.libertyshoesonline.com/terms-of-use">Terms & Conditions</a></li>
                                        <li><a href="https://www.libertyshoesonline.com/shipping-information">Shipping Information</a></li>

                                    </ul>
                                </div>
                                <div className="customer-menu">
                                    <h2>CUSTOMER SERVICE</h2>
                                    <ul>
                                        <li><a href="https://www.libertyshoesonline.com/faq">FAQ</a></li>
                                        <li><a href="https://www.libertyshoesonline.com/order-tracking/">Track Your Order</a></li>
                                        <li><a href="https://www.libertyshoesonline.com/returns/rma/list/">Return Request</a></li>
                                       

                                    </ul>
                                </div>
                                <div className="customer-menu">
                                    <h2><img src="https://www.libertyshoesonline.com/pub/static/frontend/Greenhonchos/styletag/en_US/images/logo.svg" alt="" /></h2>
                                    <p>We, at Liberty Shoes have been fashioning footwear, for well over 60 years now, for the style-conscious people around the globe.</p>
                                    <div className="follow-us">
                                        <h2>Follow us</h2>
                                        <ul className="social">
                                            <li><a href="https://www.instagram.com/libertyshoesltd/"><img src="https://www.libertyshoesonline.com/pub/media/wysiwyg/LibertyNew/insta-icon-new.png" alt="" /></a></li>
                                            <li><a href="https://twitter.com/LibertyShoesLtd"><img src="https://www.libertyshoesonline.com/pub/media/wysiwyg/LibertyNew/twitter-icon-new.png" alt="" /></a></li>
                                            <li><a href="https://www.facebook.com/libertyshoes"><img src="https://www.libertyshoesonline.com/pub/media/wysiwyg/LibertyNew/facebook-icon-new.png" alt="" /></a></li>

                                        </ul>
                                    </div>
                                    <strong>Phone:</strong>
                                    <a href="tel:+91%2093541-11126">+91-93541-11126</a>
                                    <br />
                                    <strong>Email:</strong>
                                    <a href="mailto:lsocare@libertyshoes.com">lsocare@libertyshoes.com</a>
                                </div>
                              
                            </div>
                    </div>

                </div>
            </div>

        </div>

    )
}