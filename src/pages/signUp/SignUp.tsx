import React from 'react'
import { Form } from 'react-bootstrap';
import { Col, Row } from 'react-bootstrap'
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router';

const SignUp = () => {

    const { t } = useTranslation();
    const navigate = useNavigate()

    return (
        <>
            <div className="bg-img">
                <div className="responsive-logo_name">
                    <div className="signin_logo_content">
                        <img src="./assets/img/color-logo.png" alt="" />
                        <p className="page_name">{t("SignUp.sign_up")}</p>
                        {/* <img src="./assets/img/firstadd-kit.png" alt="" className="firstadd-kit" /> */}
                    </div>
                </div>
                <div className="signin" >
                    <Row className='' style={{ height: "100%" }}>
                        <Col md={12} lg={5} className="p-0 scroll-y">
                            <div className="signin_forn">
                                <h1 className="Contact-info">{t("SignUp.Contact_Information")}</h1>
                                <label htmlFor="">{t("SignUp.Placeholder.Full_name")}</label>
                                <input type="text" placeholder='' value="" onChange={() => { }} />
                                <label htmlFor="" className='input-m-t'>{t("SignUp.Placeholder.Id_number")}</label>
                                <input type="text" placeholder='' value="" onChange={() => { }} />
                                <label htmlFor="" className='input-m-t'>{t("SignUp.Placeholder.email")}</label>
                                <input type="text" placeholder='' value="" onChange={() => { }} />
                                <label htmlFor="" className='input-m-t'>{t("SignUp.Placeholder.phone_number")}</label>
                                <input type="text" placeholder='' value="" onChange={() => { }} />

                                <h1 className="address-area">{t("SignUp.Placeholder.full_address")}</h1>
                                <label htmlFor="" className='address-label'>{t("SignUp.Placeholder.address")}</label>
                                <textarea className='textarea' placeholder={t("SignUp.Placeholder.address_placeholder")} />
                                <Form.Group className="ckeckbox-label-div">
                                    <label htmlFor="" className='check-label'>{t("SignUp.Placeholder.private_house")}</label>
                                    <Form.Check
                                        type="checkbox"
                                        className='checkbox'
                                    />
                                </Form.Group>
                                <div className='Apartment-div'>
                                    <div className='apar-num-div'>
                                        <label className=''>{t("SignUp.Placeholder.Apartment_number")}</label>
                                        <input type="text" className='aprt-num' />
                                    </div>
                                    <div className='floor-div'>
                                        <label className=''>{t("SignUp.Placeholder.floor")}</label>
                                        <input type="text" className='floor-num' />
                                    </div>
                                </div>
                                <Form.Group className="ckeckbox-label-div">
                                    <p className='terms-privacy font-w-400'>{t("SignUp.Placeholder.I_agree_to_the")} <a href="" className='font-w-400'>{t("SignUp.Placeholder.tou")}</a>{t("SignUp.Placeholder.and")} <a href="" className='font-w-400'>{t("SignUp.Placeholder.privacy")}</a> </p>
                                    {/* <label htmlFor="" className='check-label'>private house</label> */}
                                    <Form.Check
                                        type="checkbox"
                                        className='checkbox'
                                    />
                                </Form.Group>

                                <button onClick={() => navigate("/signupverification")}>{t("SignUp.btn_text")}</button>
                                <div className="for_signup font-w-400">
                                    <p>{t("SignUp.Placeholder.already_have_account")}  <a href="/" className='font-w-400'>{t("SignIn.signIn")}</a></p>
                                </div>
                            </div>
                        </Col>
                        <Col md={12} lg={7} className="signin_logo">
                            <div >
                                <div className="signin_logo_content">
                                    <img src="./assets/img/logo.png" alt="" />
                                    <p className="page_name">{t("SignUp.sign_up")}</p>
                                    <img src="./assets/img/firstadd-kit.png" alt="" className="firstadd-kit" />
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        </>
    )
}

export default SignUp