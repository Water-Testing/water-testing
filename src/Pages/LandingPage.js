import React from "react";
import '../css/uikit.min.css';
import Logo from '../Images/SpartanLogo.png';
import '../css/LandingPage.css';
import watertestingheader from '../Images/Water Testing Header-1.png';



class LandingPage extends React.Component {


    render() {

        let logo = <img className='Logo' src={Logo} />
        let header = <img className="WaterTestingHeader" src={watertestingheader} />

        return (

            <div>
                <nav className="uk-navbar-container" uk-navbar="mode: click">
                    <div className="uk-navbar-left">

                        <ul className="uk-navbar-nav">
                            <li>{logo}</li>
                            <li><a href="#">About</a></li>
                            <li>

                                <a href="#">Testing Kit</a>
                                <div className="uk-navbar-dropdown">
                                    <ul className="uk-nav uk-navbar-dropdown-nav">
                                        <li className="uk-active"><a href="#">Active</a></li>
                                        <li><a href="#">Item</a></li>
                                        <li><a href="#">Item</a></li>
                                    </ul>
                                </div>
                            </li>
                            <li><a href="#">Contact Us</a></li>

                        </ul>
                        <div className="uk-navbar-right">
                            <ul className="uk-navbar-nav">
                                <li >
                                    <a href="#">Sign Up</a>
                                </li>
                            </ul>


                        </div>
                    </div >




                </nav>



                <div>
                    {header}
                </div>




            </div>

        )




    }








}

export default LandingPage;