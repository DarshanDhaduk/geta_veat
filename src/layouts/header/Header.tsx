import React from "react";
import { Button, Container, Nav, Navbar, Offcanvas } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Header: React.FC = () => {

    const { t } = useTranslation();
    return (
        <>
            <Navbar bg="light" expand="lg" className="">
                <Container>
                    <div className=""></div>
                    <Navbar.Brand href="#">
                        <img src="./assets/img/header-logo.png" alt="header-logo" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls={'offcanvasNavbar-expand-lg'} />
                    <Navbar.Offcanvas
                        id={'offcanvasNavbar-expand-lg'}
                        aria-labelledby={'offcanvasNavbarLabel-expand-lg'}
                        placement="end"
                    >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id={'offcanvasNavbarLabel-expand-lg'}>
                                <img src="./assets/img/header-logo.png" alt="header-logo" />
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="align-items-end justify-content-md-center justify-content-md-between align-items-md-end pe-3 nav-link ">
                                {/* className="justify-content-center justify-content-between  align-items-end flex-grow-1 pe-3 nav-link" */}
                                <Button className="logout-btn">{t("Header.Log_out")}</Button>
                                <Link to="" className="mb-lg-2">{t("Header.My_profile")}</Link>
                                <Link to="" className="mb-lg-2">{t("Header.Vaccine_packages")}</Link>
                                <Link to="" className="header-logo"> <img src="./assets/img/header-logo.png" alt="header-logo" /></Link>
                                <Link to="" className="mb-lg-2">{t("Header.medical_record")}</Link>
                                <Link to="" className="mb-lg-2">{t("Header.ordered_visits")}</Link>
                                <Link to="" className="home-page-link mb-lg-2">{t("Header.Home_Page")}</Link>
                            </Nav>
                            <Nav className="align-items-end pe-3 nav-link d-lg-none">
                                <Link to="">{t("Header.Sign_out")} <img src="./assets/img/signout-arrow.png" alt="" /> </Link>
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;

