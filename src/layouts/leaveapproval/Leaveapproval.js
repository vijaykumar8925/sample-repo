import React, { useState } from "react";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import UnderProgress from "components/UnderProgress";
import EmpInput from "layouts/attendancecorrection/componenet/EmpInput";
import SoftButton from "components/SoftButton";
import SoftButtonRoot from "components/SoftButton/SoftButtonRoot";
import { Card, Button, Row, Col } from "react-bootstrap";
import axios from "axios";
const Leaveapproval = () => {
  // width,height,lable,placeholder,type,message,border,errormsg,key,max,value

  const [department, setDepartment] = useState("");
  const [departmentDateTime, setDepartmentDateTime] = useState("");
  const [validate , setValidate] = useState({
      depart : "",
      date : ""
  })

  const [designation, setDesignation] = useState("");
  const [designationDateTime, setDesignationDateTime] = useState("");

  const [branch, setBranch] = useState("");
  const [branchDateTime, setBranchDateTime] = useState("");

  const [qualification, setQualification] = useState("");
  const [qualificationDateTime, setQualificationDateTime] = useState("");

  // function
  const departmentFunc = (value) => {
    setDepartment(value);
  };

  const designationFunc = (value) => {
    setDesignation(value);
  };

  const branchFunc = (value) => {
    setBranch(value);
  };

  const qualificationFunc = (value) => {
    setQualification(value);
  };

  // date Func
  const departmentDateTimeFunc = (value) => {
    setDepartmentDateTime(value);
  };

  const designationDateTimeFunc = (value) => {
    setDesignationDateTime(value);
  };

  const branchDateTimeFunc = (value) => {
    setBranchDateTime(value);
  };

  const qualificationDateTimeFunc = (value) => {
    setQualificationDateTime(value);
  };

  // Submit Func
  const handleDepartment = async () => {

  if(department && departmentDateTime)  {
    return validate.depart = "required"
  }
    // try {
    //   await axios
    //     .post("http://localhost:5000/post/updatedepartment", { department, departmentDateTime })
    //     .then((res) => console.log("send"));
    // } catch (err) {
    //   console.log(err);
    // }
  };

  const handleDesignation = async () => {
    try {
      await axios
        .post("http://localhost:5000/post/updatedesignation", { designation, designationDateTime })
        .then((res) => console.log("send"));
    } catch (err) {
      console.log(err);
    }
  };

  const handleBranch = async () => {
    try {
      await axios
        .post("http://localhost:5000/post/updatebranch", { branch, branchDateTime })
        .then((res) => console.log("send"));
    } catch (err) {
      console.log(err);
    }
  };
  const handleQualification = async () => {
    console.log(qualification, qualificationDateTime);
    try {
      await axios
        .post("http://localhost:5000/post/updatequalification", {
          qualification,
          qualificationDateTime,
        })
        .then((res) => console.log("send"));
    } catch (err) {
      console.log(err);
    }
  };

  console.log(validate)

  return (
    <div>
      <DashboardLayout>
        <DashboardNavbar />
        {/* <div>
        <UnderProgress/>
      </div> */}

        <Row>
          <Col lg={6}>
            <Card style={{ width: "21rem" }}>
              <Card.Body className="d-flex flex-column gap-3 justify-content-center align-items-center">
                <Card.Title className="text-center">Department</Card.Title>
                <EmpInput
                  width="250px"
                  height="40px"
                  lable="Type"
                  placeholder="Department"
                  type="text"
                  value={department}
                  message={departmentFunc}
                />
               
                <EmpInput
                  width="250px"
                  height="40px"
                  lable="Date and Time"
                  type="datetime-local"
                  value={departmentDateTime}
                  message={departmentDateTimeFunc}
                />
                <Button variant="primary" onClick={handleDepartment}>
                  Submit
                </Button>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={6}>
            <Card style={{ width: "21rem" }}>
              <Card.Body className="d-flex flex-column gap-3 justify-content-center align-items-center">
                <Card.Title className="text-center">Designation</Card.Title>
                <EmpInput
                  width="250px"
                  height="40px"
                  lable="Type"
                  placeholder="Designation"
                  type="text"
                  value={designation}
                  message={designationFunc}
                />
                <EmpInput
                  width="250px"
                  height="40px"
                  lable="Date and Time"
                  type="datetime-local"
                  value={designationDateTime}
                  message={designationDateTimeFunc}
                />
                <Button variant="primary" onClick={handleDesignation}>
                  Submit
                </Button>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={6} className="my-4">
            <Card style={{ width: "21rem" }}>
              <Card.Body className="d-flex flex-column gap-3 justify-content-center align-items-center">
                <Card.Title className="text-center">Branch</Card.Title>
                <EmpInput
                  width="250px"
                  height="40px"
                  lable="Type"
                  placeholder="Branch"
                  type="text"
                  value={branch}
                  message={branchFunc}
                />
                <EmpInput
                  width="250px"
                  height="40px"
                  lable="Date and Time"
                  type="datetime-local"
                  value={branchDateTime}
                  message={branchDateTimeFunc}
                />
                <Button variant="primary" onClick={handleBranch}>
                  Submit
                </Button>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={6} className="my-4">
            <Card style={{ width: "21rem" }}>
              <Card.Body className="d-flex flex-column gap-3 justify-content-center align-items-center">
                <Card.Title className="text-center">Qualification</Card.Title>
                <EmpInput
                  width="250px"
                  height="40px"
                  lable="Type"
                  placeholder="Qualification"
                  type="text"
                  value={qualification}
                  message={qualificationFunc}
                />
                <EmpInput
                  width="250px"
                  height="40px"
                  lable="Date and Time"
                  type="datetime-local"
                  value={qualificationDateTime}
                  message={qualificationDateTimeFunc}
                />
                <Button variant="primary" onClick={handleQualification}>
                  Submit
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </DashboardLayout>
    </div>
  );
};

export default Leaveapproval;
