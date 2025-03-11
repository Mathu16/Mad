import { useState } from "react"
import './CSS/bootstrap.css'
import './CSS/linear-icons.css'
import './CSS/theme.css'
import './CSS/font-awesome.css'
import './CSS/animate.css'
import './CSS/ion-range-slider.css'
import './CSS/owl.carousel.css'
import './CSS/magnific-popup.css'
import logo from "./assets/images/logo.png"
import icon from "./assets/images/icon.png"





        function Navigation() {
            return (
                <nav>
                    <div className="clearfix">
                        <a href="index.html" className="logo">
                            <img src={logo} alt="Mercury Facility Management" />
                        </a>
        
                        {/* ==========  Pre navigation ========== */}
                        <div className="navigation navigation-pre clearfix">
                            <div className="row">
                                <div className="col-md-3">
                                    <a href="#"><i className="icon icon-cog"></i> About us</a>
                                </div>
                                <div className="col-md-3">
                                    <a href="#"><i className="icon icon-user"></i> Profile </a>
                                </div>
                            </div>
                        </div>
        
                        {/* ==========  Top navigation ========== */}
                        <div className="navigation navigation-top clearfix">
                            <ul>
                                <li className="left-side">
                                    <a href="index.html" className="logo-icon">
                                        <img src={icon} alt="Icon" />
                                    </a>
                                </li>
                                <li>
                                    <a href="javascript:void(0);" className="open-login">
                                        <i className="icon icon-user"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="javascript:void(0);" className="open-search">
                                        <i className="icon icon-magnifier"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="javascript:void(0);" className="open-cart">
                                        <i className="icon icon-cart"></i> <span>4</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
        
                        {/* ========== Search Wrapper ========== */}
                        <div className="search-wrapper">
                            <input className="form-control" placeholder="Search..." />
                            <button className="btn btn-main">Go!</button>
                        </div>
        
                        {/* ========== Login Wrapper ========== */}
                        <div className="login-wrapper">
                            <div className="h4">Sign in</div>
                            <form>
                                <div className="form-group">
                                    <input type="email" className="form-control" placeholder="Email" />
                                </div>
                                <div className="form-group">
                                    <input type="password" className="form-control" placeholder="Password" />
                                </div>
                                <button type="submit" className="btn btn-block btn-main">
                                    Submit
                                </button>
                            </form>
                        </div>
                    </div>
                </nav>
            );
        }
        
        export default Navigation;
        
