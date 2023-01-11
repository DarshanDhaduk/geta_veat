import { useSelector } from "react-redux";
import { useLocation } from "react-router";
import { Routes, Route, Link } from "react-router-dom";
import AuthLayout from "../layouts/AuthLayout";
import Layout from "../layouts/Layout";
import GeneralDetails from "./generaldetails/GeneralDetails";
import HomePage from "./homepage/Homepage";
import Veterinar from "./homepage/Veterinar";
import SignIn from "./SignIn/SignIn";
import SignInVerification from "./SignInVerification/SignInVerification";
import SignUp from "./signUp/SignUp";
import SignUpVerification from "./signUpVerification/SignUpVerification";

const Index = () => {
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   if (AuthStorage.isUserAuthenticated()) {
  //     ApiGet("user/validate")
  //       .then((res) => {
  //         dispatch(changeLoginState(true));
  //         // console.log("Is Authenticated", AuthStorage.isUserAuthenticated());
  //       })
  //       .catch((error) => {
  //         AuthStorage.deauthenticateUser();
  //         history.push("/");
  //       });
  //   }
  // }, []);

  const { is_loggedin } = useSelector((state: any) => state.login)
  const location = useLocation();
  const LayoutPaths = ["/", "/verification", "/signup", "/generaldetails","/signupverification","/veterinar"]
  const AuthLayoutPaths = ["/home"]
  return (
    <>
      {LayoutPaths.includes(location.pathname) && <Layout>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/verification" element={<SignInVerification />} />
          <Route path="/signupverification" element={<SignUpVerification />} />
          <Route path="/veterinar" element={<Veterinar />} />
          <Route path="/generaldetails" element={<GeneralDetails />} />
        </Routes>
      </Layout>}
      {AuthLayoutPaths.includes(location.pathname) && <AuthLayout>
        <Routes>
          <Route path="/home" element={<HomePage />} />
        </Routes>
      </AuthLayout>}

    </>
  );
};

export default Index;
