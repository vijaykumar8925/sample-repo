import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Datatable from "./component/Datatable";
import DataTableHead from "./component/DataTableHead";
import jsPDF from 'jspdf'
import Transitions from 'animation/Transition';
import autoTable from 'jspdf-autotable';
function Tables() {
  
  const [results, setResults] = useState([
    {
      Break_Type : 'Launch',
      Star_Time : '03:45:35',
      End_Time : '04:20:35',
      Total_Time : '35 Mins',
      rea_Son  : 'Getting Launch Break',
      re_Marks : 'Null'
    },
    {
      Break_Type : 'Personal Out',
      Star_Time : '11:30:56',
      End_Time : '12:45:35',
      Total_Time : '01:15 Mins',
      rea_Son  : 'For personal use',
      re_Marks : 'Null'
    }, 
    {
      Break_Type : 'On Duty',
      Star_Time : '11:30:56',
      End_Time : '12:45:35',
      Total_Time : '01:15 Mins',
      rea_Son  : 'Attending Company at Clients Place',
      re_Marks : 'Null'
    },
    {
      Break_Type : 'Break',
      Star_Time : '11:30:56',
      End_Time : '11:45:35',
      Total_Time : '15 Mins',
      rea_Son  : 'Getting Tea Break',
      re_Marks : 'Null'
    },
    {
      Break_Type : 'Break',
      Star_Time : '11:30:56',
      End_Time : '11:45:35',
      Total_Time : '15 Mins',
      rea_Son  : 'Getting Tea Break',
      re_Marks : 'Null'
    }, 
    {
      Break_Type : 'Launch',
      Star_Time : '03:45:35',
      End_Time : '04:20:35',
      Total_Time : '35 Mins',
      rea_Son  : 'Getting Launch Break',
      re_Marks : 'Null'
    },
    {
      Break_Type : 'Personal Out',
      Star_Time : '11:30:56',
      End_Time : '12:45:35',
      Total_Time : '01:15 Mins',
      rea_Son  : 'For personal use',
      re_Marks : 'Null'
    },
    {
      Break_Type : 'On Duty',
      Star_Time : '11:30:56',
      End_Time : '12:45:35',
      Total_Time : '01:15 Mins',
      rea_Son  : 'Attending Company at Clients Place',
      re_Marks : 'Null'
    },
    {
      Break_Type : 'On Duty',
      Star_Time : '11:30:56',
      End_Time : '12:45:35',
      Total_Time : '01:15 Mins',
      rea_Son  : 'Attending Company at Clients Place',
      re_Marks : 'Null'
    },
    {
      Break_Type : 'On Duty',
      Star_Time : '11:30:56',
      End_Time : '12:45:35',
      Total_Time : '01:15 Mins',
      rea_Son  : 'Attending Company at Clients Place',
      re_Marks : 'Null'
    },
    {
      Break_Type : 'On Duty',
      Star_Time : '11:30:56',
      End_Time : '12:45:35',
      Total_Time : '01:15 Mins',
      rea_Son  : 'Attending Company at Clients Place',
      re_Marks : 'Null'
    },
    {
      Break_Type : 'On Duty',
      Star_Time : '11:30:56',
      End_Time : '12:45:35',
      Total_Time : '01:15 Mins',
      rea_Son  : 'Attending Company at Clients Place',
      re_Marks : 'Null'
    },
  ])
  const [FilteredUsers, setFilteredUsers] = useState([])
  const [change, Setchange] = useState(false)
    const[Email,setemail]=useState('')
    useEffect(()=>{
      
      console.log(localStorage.getItem('email'))
    },[])
  // useEffect(() => {
   
  //     try {
  //         const response = axios.get(`http://localhost:8000/list/break/list/'${localStorage.getItem('email')}'`).then((res)=>{
  
  //         setResults(res.data)
  //         })
         
  //       } catch (err) {
  //         console.log(err) 
  //       }
  //   }, []);
    const columns = [         
      {
          name: 'Sl No',
          selector: (row,index) => index+1,
          id: "name",
          width:"100px",
          center:true,
          style:{
              fontSize: '16px',
              backgroundColor: '#FloralWhite'
          }
      },
      {
          name: 'Break Type',
          selector: row => row.Break_Type,
          id: "name",
          center:true,
           style:{
              fontSize: '16px',
              backgroundColor: '#FloralWhite'
          }
      },
      {
          name: 'Start Time',
          selector: row => row.Star_Time,
          id: "name",
          center:true,
          style:{
              fontSize: '16px',
              backgroundColor: '#FloralWhite',
              
          }
      },
      
      {
          name: 'End Time',
          selector: row => row.End_Time,
          id: "name",
          center:true,
          style:{
              fontSize: '16px',
              backgroundColor: '#FloralWhite'
          }
      },
      {
          name: 'Total Duration',
          selector: row => row.Total_Time,
          id: "name",
          width:"150px",
          center:true,
          style:{
              fontSize: '16px',
              backgroundColor: '#FloralWhite'
          }

      },
      {
          name: 'Reason',
          selector: row => row.rea_Son,
          id: "name",
          center:true,
          width:"350px",
          style:{
              fontSize: '16px',
              backgroundColor: '#FloralWhite'
          }
      }, {
        name: 'Remarks',
        selector: row => row.re_Marks,
        id: "name",
        center:true,
        style:{
            fontSize: '16px',
            backgroundColor: '#FloralWhite'
        }
    },
     
  ];
  const[copydata,setcopydata]=useState([])
  const selectedData=(data)=>{
    setcopydata(data.selectedRows)
    console.log(copydata)
  }
  var doc = new jsPDF();
  var col = ["Sl.No.","Break Type",'Start Time','End Time','Total Time','Reason','Remarks'];
  var rows = [];
  var rowsCopy = [];
 
  results.forEach((element,index) => {      
    var temp = [index+1,element.Break_Type,element.Star_Time,element.End_Time,element.Total_Time,element.rea_Son,element.re_Marks];
    rows.push(temp)
    console.log(element)
});  

copydata.forEach((element,index) => {      
  var temp = [index+1,element.Break_Type,element.Star_Time,element.End_Time,element.Total_Time,element.rea_Son,element.re_Marks];
  rowsCopy.push(temp)
  console.log(element)
});  

const changeMessage = (newMessage) => {
  let newMessage_lower=(newMessage.toLowerCase())
  console.log(newMessage_lower)
  const filtered = results.filter(user => user.Break_Type.toLowerCase().includes(newMessage_lower));
  setFilteredUsers(filtered);
  Setchange(true)
}

  const GeneratePdf=()=>{
    doc.autoTable(col, rows, { startY: 10 });
    doc.save('Test.pdf');
  }
  const CopyFunction=()=>{
alert('ggg')
  }
 
  return (
    <Transitions>
    <DashboardLayout>
      <DashboardNavbar data={results}/>
      <div>
        <div><DataTableHead  changeMessage={changeMessage} GeneratePdf={GeneratePdf} dataCopy={rowsCopy} data={rows} columns={columns} CopyFunction={CopyFunction}/> </div>
        <div style={{marginTop:"10px"}}><Datatable selectedData={selectedData} data={change?FilteredUsers:results} columns={columns} /> </div>
      </div>
    </DashboardLayout>
    </Transitions>
  );
}

export default Tables;
