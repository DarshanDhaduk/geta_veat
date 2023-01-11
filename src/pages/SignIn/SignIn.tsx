import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Col, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router';

const SignIn = () => {

    const { t } = useTranslation();

    const navigate = useNavigate()
    const [mobileNumber, setMobileNumber] = useState<number>()
    const [verificationCodeError, setVerificationCodeError] = useState<boolean>(false)

    const onChangeInput = (e: any) => {
        let regex = /^[0-9\b]+$/;
        if (e.target.value === "" || regex.test(e.target.value)) {
            setMobileNumber(e.target.value)
        }
    }

    const sendCode = () => {
        if (!mobileNumber) {
            setVerificationCodeError(true)
            return
        }
        navigate("/verification")
    }

    return (
        <>
            <div className="bg-img">
                <div className="responsive-logo_name">
                    <div className="signin_logo_content">
                        <img src="./assets/img/color-logo.png" alt="" />
                        <p className="page_name">{t("SignIn.signIn")}</p>
                    </div>
                </div>
                <div className="signin set-signin-height">
                    <Row className='p-0' style={{ height: "100%", overflow: "hidden" }}>
                        <Col sm={12} md={12} lg={5} xl={5} xxl={4} className="p-0">
                            <div className="signin_forn">
                                <h1 className="heade_text">{t("SignIn.title")}</h1>
                                <label htmlFor="">{t("SignIn.Placeholder.phone_number")}</label>
                                <input type="text" className={verificationCodeError ? "validErr-input" : ""} placeholder='' value={mobileNumber} onChange={(e) => onChangeInput(e)} />
                                {verificationCodeError && <p className='validErr-text'>{t("SignIn.Errors.phone_number")}</p>}
                                <button onClick={() => sendCode()}>{t("SignIn.btn_text")}</button>
                                <div className="for_signup">
                                    <p>{t("SignIn.Placeholder.Dont_have_account")} <a href="/signup">{t("SignUp.sign_up")}</a></p>
                                </div>
                            </div>
                        </Col>
                        <Col sm={12} md={12} lg={7} xl={7} xxl={8} className="p-0">
                            <div className="signin_logo">
                                <div className="signin_logo_content">
                                    <img src="./assets/img/logo.png" alt="" />
                                    <p className="page_name">{t("SignIn.signIn")}</p>
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

export default SignIn