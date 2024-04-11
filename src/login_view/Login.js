import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import carImage from "../style/Images/car_blur_image.jpg";
import { ReactComponent as LightningIcon } from '../style/svg_icons/lightning-lightning-svgrepo-com.svg';
import "../style/Animation/highlight.css";
import "../style/Position.css";
import "../style/Common.css";
import "../style/Color.css";
import "../style/Font.css";
import React from 'react';
import Icons from '../main_view/Icons';

export default function Login() {
    return (
        <div>
            <div style={{ border: "1px solid black", backgroundImage: `url(${carImage})`, backgroundSize: 'cover' }}>
                <div>
                    <LightningIcon className='w70px h45px p-rel tp20px left10' /> <span className=' p-rel tp20px f-s-xl f-w-b rgb-orange-2-1-7'>Astrix.</span>
                </div>
                <div className="d-flex justify-content-center align-items-center vh-100">
                    <div style={{ width: '30%' }}>
                        <Form>
                            <div className='f-s-xl margin-btm5p'>
                                <span style={{ color: "white" }}>REGISTERATION / </span> <span style={{ color: "#616161" }}>LOGIN</span>
                            </div>
                            <InputGroup className="mb-3">
                                <Form.Control
                                    placeholder="Email"
                                    aria-label="Recipient's username"
                                    aria-describedby="basic-addon2"
                                />
                                <InputGroup.Text id="basic-addon2">@gmail.com</InputGroup.Text>
                            </InputGroup>

                            <Form.Control
                                placeholder="Password"
                                type="password"
                                id="inputPassword5"
                                aria-describedby="passwordHelpBlock"
                            />

                            <div className=''>
                                {['checkbox'].map((type) => (
                                    <div key={`default-${type}`} className="mb-3">
                                        <Form.Check // prettier-ignore
                                            type={type}
                                            id={`default-${type}`}
                                            label={<span className="clr-white">I am 18 years old and I have read and accept <span className="clr-blue f-w-b">Terms and Conditions</span> and <span className="clr-blue f-w-b">Privacy Policy</span>.</span>}
                                        />
                                    </div>

                                ))}
                                {['checkbox'].map((type) => (
                                    <div key={`default-${type}`} className="mb-3">
                                        <Form.Check // prettier-ignore
                                            type={type}
                                            id={`default-${type}`}
                                            label={<span className="clr-white">I would like to received emails about promotions from <span className='rgb-orange-2-1-7 f-w-b'>Astrix.com</span> </span>}
                                        />
                                    </div>

                                ))}
                                                    </div>


                            <div style={{ marginTop: "2%", textAlign: "center", }}>
                                <button class="glow-on-hover" type="button">CLICK ME!</button>
                            </div>
                        </Form>
                        <div className='margin-top5p' style={{ textAlign: "center", color: "white" }}>
                            <span>or via social network</span>
                        </div>
                        <div className='txt-cnt clr-white'>
                            <Icons />
                        </div>
                        <div className='txt-cnt clr-white margin-top5p'>
                            <span>Have an account ?</span> <span className='clr-blue f-w-b'>Login</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
