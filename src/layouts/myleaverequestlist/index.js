
// Soft UI Dashboard React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Transitions from "animation/Transition";
import './leavereq.css'
import LeavelistDatatable from "./component/LeavelistDatatable";
import LeavelistHead from "./component/LeavelistHead";
import { useState } from "react";
import { useEffect } from "react";
import jsPDF from 'jspdf'
import axios from "axios";
import autoTable from 'jspdf-autotable';
function Tables() {
  const [results, setResults] = useState([
    {
      days_: '5.5',
      date_: '',
      date_session: '',
      from_date: '2023-10-18',
      from_session: 'afternoon',
      to_date: '2023-10-23',
      to_session: '',
      rea_son: 'Personal Leave',
      rea_marks: '',
    },
    {
      days_: '12',
      date_: '',
      date_session: '',
      from_date: '2023-10-25',
      from_session: 'afternoon',
      to_date: '2023-11-21',
      to_session: 'Forenoon',
      rea_son: 'Health Issue',
      rea_marks: '',
    },
    {
      days_: '7',
      date_: '',
      date_session: '',
      from_date: '2023-10-28',
      from_session: 'afternoon',
      to_date: '2023-11-10',
      to_session: 'Forenoon',
      rea_son: 'Personal Leave',
      rea_marks: '',
    },
    {
      days_: '4',
      date_: '',
      date_session: '',
      from_date: '2023-10-18',
      from_session: '',
      to_date: '2023-10-20',
      to_session: '',
      rea_son: 'Due to Illness',
      rea_marks: '',
    },
    {
      days_: '0.5',
      date_: '2023-10-18',
      date_session: 'afternoon',
      from_date: '',
      from_session: '',
      to_date: '',
      to_session: '',
      rea_son: 'Due to Headpain',
      rea_marks: '',
    },
    {
      days_: '9',
      date_: '',
      date_session: '',
      from_date: '2023-10-28',
      from_session: 'afternoon',
      to_date: '2023-11-10',
      to_session: 'Forenoon',
      rea_son: 'Personal Leave',
      rea_marks: '',
    },
    {
      days_: '8',
      date_: '2023-10-18',
      date_session: 'afternoon',
      from_date: '',
      from_session: '',
      to_date: '',
      to_session: '',
      rea_son: 'Due to Headpain',
      rea_marks: '',
    },
    {
      days_: '6',
      date_: '',
      date_session: '',
      from_date: '2023-10-25',
      from_session: 'afternoon',
      to_date: '2023-11-21',
      to_session: 'Forenoon',
      rea_son: 'Health Issue',
      rea_marks: '',
    },
    {
      days_: '5',
      date_: '',
      date_session: '',
      from_date: '2023-10-25',
      from_session: 'afternoon',
      to_date: '2023-11-21',
      to_session: 'Forenoon',
      rea_son: 'Health Issue',
      rea_marks: '',
    },
    {
      days_: '17',
      date_: '',
      date_session: '',
      from_date: '2023-10-25',
      from_session: 'afternoon',
      to_date: '2023-11-21',
      to_session: 'Forenoon',
      rea_son: 'Health Issue',
      rea_marks: '',
    },
    {
      days_: '3',
      date_: '',
      date_session: '',
      from_date: '2023-10-25',
      from_session: 'afternoon',
      to_date: '2023-11-21',
      to_session: 'Forenoon',
      rea_son: 'Health Issue',
      rea_marks: '',
    },
    {
      days_: '2',
      date_: '',
      date_session: '',
      from_date: '2023-10-25',
      from_session: 'afternoon',
      to_date: '2023-11-21',
      to_session: 'Forenoon',
      rea_son: 'Health Issue',
      rea_marks: '',
    },
    {
      days_: '13',
      date_: '',
      date_session: '',
      from_date: '2023-10-25',
      from_session: 'afternoon',
      to_date: '2023-11-21',
      to_session: 'Forenoon',
      rea_son: 'Health Issue',
      rea_marks: '',
    },
    {
      days_: '19',
      date_: '',
      date_session: '',
      from_date: '2023-10-25',
      from_session: 'afternoon',
      to_date: '2023-11-21',
      to_session: 'Forenoon',
      rea_son: 'Health Issue',
      rea_marks: '',
    },
  ])
  const [FilteredUsers, setFilteredUsers] = useState([])
  const [change, Setchange] = useState(false)
  const [Email, setemail] = useState('')
  useEffect(() => {

    console.log(localStorage.getItem('email'))
  }, [])
  // useEffect(() => {

  //     try {
  //         const response = axios.get(`http://localhost:8000/list/task/list/'${localStorage.getItem('email')}'`).then((res)=>{

  //         setResults((res.data))

  //         })

  //       } catch (err) {
  //         console.log(err) 
  //       }
  //   }, []);
  const columns = [
    {
      name: 'Sl No',
      selector: (row, index) => index + 1,
      id: "name",
      center: true,
      style: {
        fontSize: '16px',
        backgroundColor: '#FloralWhite'
      }
    },
    {
      name: 'No of Days',
      selector: row => row.days_,
      id: "name",
      width: '200px',
      center: true,
      style: {
        fontSize: '16px',
        backgroundColor: '#FloralWhite'
      }
    },
    {
      name: 'Date',
      selector: row => row.date_,
      id: "name",
      width: '200px',
      center: true,
      style: {
        fontSize: '16px',
        backgroundColor: '#FloralWhite'
      }
    },
    {
      name: 'Date Session',
      selector: row => row.date_session,
      id: "name",
      center: true,
      width: '200px',
      style: {
        fontSize: '16px',
        backgroundColor: '#FloralWhite'
      }
    },

    {
      name: 'From Date',
      selector: row => row.from_date,
      id: "name",
      width: '200px',
      center: true,
      style: {
        fontSize: '16px',
        backgroundColor: '#FloralWhite'
      }
    },

    {
      name: 'From Session',
      selector: row => row.from_session,
      id: "name",
      center: true,
      width: '200px',
      style: {
        fontSize: '16px',
        backgroundColor: '#FloralWhite'
      }

    },
    {
      name: 'To Date',
      selector: row => row.to_date,
      id: "name",
      center: true,
      width: '200px',
      style: {
        fontSize: '16px',
        backgroundColor: '#FloralWhite'
      }
    },
    {
      name: 'To Session',
      selector: row => row.to_session,
      id: "name",
      width: '200px',
      center: true,
      style: {
        fontSize: '16px',
        backgroundColor: '#FloralWhite'
      }
    }, {
      name: 'Reason',
      selector: row => row.rea_son,
      id: "name",
      center: true,
      width: '200px',
      style: {
        fontSize: '16px',
        backgroundColor: '#FloralWhite'
      }
    },
    {
      name: 'Remarks',
      selector: row => row.rea_marks,
      id: "name",
      width: '200px',
      center: true,

      style: {
        fontSize: '16px',
        backgroundColor: '#FloralWhite'
      }
    }
  ];
  const [copy, setCopy] = useState([])
  const Selecting = (data) => {
    setCopy(data.selectedRows)
    console.log(data)
  }
  const changeMessage = (newMessage) => {
    const Message = (newMessage.toLowerCase())
    const filtered = results.filter(user => user.days_.toLowerCase().includes(Message));
    setFilteredUsers(filtered);
    Setchange(true)
  }
  var doc = new jsPDF();
  var col = ["Sl.No.", "Task Referance", 'Activity', 'Project', 'Task Type', 'Work Details', 'Start Time', 'End Time', 'Duration', 'Status'];
  var rows = [];
  var rowsCopy = [];

  results.forEach((element, index) => {
    var temp = [index + 1, element.days_, element.date_, element.date_session, element.from_date, element.from_session, element.to_date, element.to_session, element.rea_son, element.rea_marks];
    rows.push(temp);
    console.log(element)

  });

  copy.forEach((element, index) => {
    var temp = [index + 1, element.days_, element.date_, element.date_session, element.from_date, element.from_session, element.to_date, element.to_session, element.rea_son, element.rea_marks];
    rowsCopy.push(temp);
    console.log(element)

  });

  console.log(rows)
  const GeneratePdf = () => {

    doc.autoTable(col, rows, { startY: 10 });
    doc.save('Test.pdf');
  }
  const CopyFunction = () => {
    alert('ggg')
  }
  return (
    <Transitions>
      <DashboardLayout>
        <DashboardNavbar />
        <div>
          <div><LeavelistHead changeMessage={changeMessage} GeneratePdf={GeneratePdf} data={rows} dataCopy={rowsCopy} columns={columns} CopyFunction={CopyFunction} /> </div>
          <div style={{ marginTop: "10px" }}><LeavelistDatatable Selecting={Selecting} data={change ? FilteredUsers : results} columns={columns} /> </div>
        </div>

      </DashboardLayout>
    </Transitions>
  );
}

export default Tables;
