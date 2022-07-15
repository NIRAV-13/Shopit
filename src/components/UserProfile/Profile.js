import React from 'react';
import userIcon from "../Register/usericon.png"
import "./Profile.css";
import {Card, CardBody, CardHeader} from "reactstrap";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";

const userName = ""
const emailId = localStorage.getItem("email")

const Profile = (props) => {
    return (

        <div className="bg-image-profile">
            <NavBar/>
            <Card className="card col-sm-6 col-lg-7 border-right-0">
                <CardHeader>
                    <CardBody>
                        <h1 className="info">Your profile info</h1>
                        <div className="row">
                            <div className="col-md-4 animated fadeIn">
                                <div className="profile-card">
                                    <img src={userIcon} alt="" width={150} height={150} class="img-profile"/>

                                    <p className="display-info">
                                        <b>Username: </b>{userName}
                                    </p>
                                    <p className="display-info">
                                        <b> Email Id: </b>{emailId}
                                    </p>
                                    <br/>

                                </div>
                            </div>
                        </div>
                    </CardBody>
                </CardHeader>
            </Card>
            <div className="footer-user">
                <Footer/>
            </div>

        </div>
    );
};

export default Profile;
