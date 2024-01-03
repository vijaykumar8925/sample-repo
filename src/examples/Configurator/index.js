import { useState, useEffect } from "react";
import axios from "axios";
import Icon from "@mui/material/Icon";
import SoftBox from "components/SoftBox";
import ConfiguratorRoot from "examples/Configurator/ConfiguratorRoot";
import "./Configurator.css";
import empimg from "./employee.webp";
import {
  useSoftUIController,
  setOpenConfigurator,
  setTransparentSidenav,
  setFixedNavbar,
  setSidenavColor,
} from "context";
import { useNavigate } from "react-router-dom";
import LogoutModel from "examples/models/LogoutModel";
function Configurator() {
  const navigate = useNavigate();
  const [controller, dispatch] = useSoftUIController();
  const { openConfigurator, transparentSidenav, fixedNavbar, sidenavColor } = controller;
  const [disabled, setDisabled] = useState(false);
  const sidenavColors = ["primary", "dark", "info", "success", "warning", "error"];

  // Use the useEffect hook to change the button state for the sidenav type based on window size.
  useEffect(() => {
    // A function that sets the disabled state of the buttons for the sidenav type.
    function handleDisabled() {
      return window.innerWidth > 1200 ? setDisabled(false) : setDisabled(true);
    }

    // The event listener that's calling the handleDisabled function when resizing the window.
    window.addEventListener("resize", handleDisabled);

    // Call the handleDisabled function to set the state with the initial value.
    handleDisabled();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleDisabled);
  }, []);

  const handleCloseConfigurator = () => setOpenConfigurator(dispatch, false);
  const handleTransparentSidenav = () => setTransparentSidenav(dispatch, true);
  const handleWhiteSidenav = () => setTransparentSidenav(dispatch, false);
  const handleFixedNavbar = () => setFixedNavbar(dispatch, !fixedNavbar);

  // sidenav type buttons styles
  const sidenavTypeButtonsStyles = ({
    functions: { pxToRem },
    boxShadows: { buttonBoxShadow },
  }) => ({
    height: pxToRem(42),
    boxShadow: buttonBoxShadow.main,

    "&:hover, &:focus": {
      opacity: 1,
    },
  });
  const [Results, setResults] = useState([]);
  const [img, setimg] = useState("");
  // useEffect(() => {
  //   try {
  //     const response = axios
  //       .get(`http://localhost:8000/login/profile/list/'${localStorage.getItem("email")}'`)
  //       .then((res) => {
  //         setResults(res.data);

  //         res.data.forEach((element) => {
  //           setimg(element.pro_File);
  //         });
  //       });
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }, []);

  const [show, setshow] = useState(true);
  const [modalShow, setModalShow] = useState(false);
  const LogutFunction = () => {
    localStorage.removeItem("role");
    localStorage.removeItem("email");
    localStorage.removeItem("token");
    localStorage.removeItem("data");
    localStorage.removeItem("profile");
    localStorage.removeItem("logintime");
    navigate("/", { replace: true });
  };
  return (
    <ConfiguratorRoot variant="permanent" ownerState={{ openConfigurator }}>
      <SoftBox
        display="flex"
        justifyContent="space-between"
        alignItems="baseline"
        pt={1}
        pb={0.8}
        px={3}
      >
        <Icon
          sx={({ typography: { size, fontWeightBold }, palette: { dark } }) => ({
            fontSize: `${size.md} !important`,
            fontWeight: `${fontWeightBold} !important`,
            stroke: dark.main,
            strokeWidth: "2px",
            cursor: "pointer",
          })}
          onClick={handleCloseConfigurator}
        >
          close
        </Icon>
      </SoftBox>
      <div className="configurator_parent">
        <div className="configurator_header">
          <div>
            <div
              onClick={() => {
                setshow(true);
              }}
              style={
                show
                  ? { borderBottom: "3px solid #767372" }
                  : { cursor: "pointer", color: "LightSkyBlue" }
              }
            >
              view profile
            </div>
          </div>
          <div>
            <div
              onClick={() => {
                setshow(false);
              }}
              style={
                show == false
                  ? { borderBottom: "3px solid #767372" }
                  : { cursor: "pointer", color: "LightSkyBlue" }
              }
            >
              Edit Profile
            </div>
          </div>
        </div>
        {show ? (
          <div className="view_profile">
            <div className="view_profile_1">
              <div>
                <img src={empimg} />
              </div>
            </div>

            <div className="view_profile_2">
              <table style={{ width: "100%" }}>
                <tr>
                  <th>Name</th>
                  <td>ranjithkumar</td>
                </tr>
                <tr>
                  <th>FatherName</th>
                  <td>palaniyappan</td>
                </tr>
                <tr>
                  <th>EmpCode</th>
                  <td>235648598412411</td>
                </tr>
                <tr>
                  <th>PhoneNumber</th>
                  <td>6382588569</td>
                </tr>
                <tr>
                  <th>DateOfBirth</th>
                  <td>20-10-1998</td>
                </tr>
                <tr>
                  <th>JoinDate</th>
                  <td>22-06-2023</td>
                </tr>
                <tr>
                  <th>Gender</th>
                  <td>male</td>
                </tr>
                <tr>
                  <th>Department</th>
                  <td>developement</td>
                </tr>
              </table>
              <div style={{ marginTop: "20px" }}>
                <button className="logout_button" onClick={() => setModalShow(true)}>
                  Logout
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="crendentials_change">
            <div>
              <div style={{ fontSize: "19px" }}>Credential Change</div>
            </div>
            <div>
              <div>
                <input placeholder="Email"></input>
              </div>
            </div>
            <div>
              <div>
                <input placeholder="Password"></input>
              </div>
            </div>
            <div>
              <div>
                <input placeholder="New Password"></input>
              </div>
            </div>
            <div>
              <div>
                <input placeholder="Confirm Password"></input>
              </div>
            </div>
            <div>
              <div>
                <button>Change Password</button>
              </div>
            </div>
          </div>
        )}
      </div>
      <LogoutModel
        show={modalShow}
        onHide={() => setModalShow(false)}
        LogutFunction={LogutFunction}
      />
    </ConfiguratorRoot>
  );
}

export default Configurator;
