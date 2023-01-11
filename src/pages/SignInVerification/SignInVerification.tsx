import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router'

const SignInVerification = () => {

    const { t } = useTranslation();
    const navigate = useNavigate()
    const [verificationCode, setVerificationCode] = useState<number>()
    const [verificationCodeError, setVerificationCodeError] = useState<boolean>(false)

    const onChangeInput = (e: any) => {
        let regex = /^[0-9\b]+$/;
        if (e.target.value === "" || regex.test(e.target.value)) {
            setVerificationCode(e.target.value)
        }
    }

    const validateCode = () => {
        if (!verificationCode) {
            setVerificationCodeError(true)
            return
        }
        navigate("/home")
    }

    return (
        <>
            <div className="bg-img">
                <div className="responsive-logo_name">
                    <div className="signin_logo_content">
                        <img src="./assets/img/logo.png" alt="" />
                        <p className="page_name">{t("Verification.title")}</p>
                    </div>
                </div>
                <div className="signin set-signin-height">
                    <Row className='' style={{ height: "100%" }}>
                        <Col sm={12} md={12} lg={5} xl={5} xxl={4}>
                            <div className="signin_forn">
                                <h1 className="heade_text font-w-400">{t("Verification.Header_text")}</h1>
                                <label htmlFor="">{t("Verification.Placeholder.Verification_code")}</label>
                                <input type="text" className={verificationCodeError ? "validErr-input" : ""} placeholder='' value={verificationCode} onChange={(e: any) => onChangeInput(e)} />
                                {verificationCodeError && <p className='validErr-text'>{t("Verification.Errors.error")}</p>}
                                <button onClick={validateCode}>{t("SignIn.signIn")}</button>
                                <div className="for_signup">
                                    <p>{t("Verification.Placeholder.Did_not_receive_message")} <a href="">{t("Verification.Placeholder.send_again")}</a></p>
                                </div>
                            </div>
                        </Col>
                        <Col sm={12} md={12} lg={7} xl={7} xxl={8}>
                            <div className="signin_logo">
                                <div className="signin_logo_content">
                                    <img src="./assets/img/logo.png" alt="" />
                                    <p className="page_name">{t("Verification.title")}</p>
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

export default SignInVerification