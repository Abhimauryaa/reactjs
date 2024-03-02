import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import { store } from "../redux/app/store";
import HeaderCom from "../ui/pages/header/Component/HeaderCom";
import NewArrivals from "../ui/pages/newArrivals/NewArrivals";
import Women from "../ui/pages/women/Women";
import Men from "../ui/pages/men/Men";
import Kids from "../ui/pages/kids/Kids";
import Brands from "../ui/pages/brands/Brands";
import LeapCom from "../ui/pages/leap/LeapCom";
import LoveWalk from "../ui/pages/loveWalk/LoveWalk";
import SignUp from "../ui/pages/loginPage/SignUp";
import SearchCom from "../ui/pages/search/SearchCom";
import WhishListCom from "../ui/pages/whishList/WhishListCom";
import ShoppingList from "../ui/pages/Shopping/ShoppingList";
import { User } from "lucide-react";



export default function Router() {
    return (
            <BrowserRouter>
                <Provider store={store}>
                    <div className="app-content">
                    {/* <HeaderCom /> */}
                        <div className="container">
                            <NavLink to={"/"}> <img width={100} height="auto" src="https://www.libertyshoesonline.com/pub/static/frontend/Greenhonchos/styletag/en_US/images/logo.svg" alt="" /> </NavLink>
                            <NavLink to={"/newarrivals"}>NEW ARRIVALS</NavLink>
                            <NavLink to={"/women"}>WOMEN</NavLink>
                            <NavLink to={"/men"}>MEN</NavLink>
                            <NavLink to={"/kids"}>KIDS</NavLink>
                            <NavLink to={"/brands"}>BRANDS</NavLink>
                           
                           
                        </div>
                            <div className="walk">

                            <NavLink to={"/leap"}>LEAP7X</NavLink>
                            </div>
                         
                         <div className="sidebar">
                            
                            <SearchCom/>
                            <NavLink to={"/login"}><User/></NavLink>
                            
                            
                            
                            
                            {/* <SignUp /> */}
                            <WhishListCom/>
                            <ShoppingList/>
                            </div>
                        </div>

                        <div className="content">
                            <Routes >
                                <Route path="/" element={<HeaderCom/>}/>
                                <Route path="/newarrivals" element={<NewArrivals />} />
                                <Route path="/women" element={<Women />} />
                                <Route path="/men" element={<Men />} />
                                <Route path="/kids" element={<Kids />} />
                                <Route path="/brands" element={<Brands />} />
                                <Route path="/leap" element={<LeapCom />} />
                                 <Route path="/login" element={<SignUp/>}  />   


                            </Routes>

                    </div>
                </Provider>
            </BrowserRouter>
    )
}