import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import PermissionReqDatatable from './component/PermissionReqDatatable';
import jsPDF from 'jspdf'
import Transitions from 'animation/Transition';
import autoTable from 'jspdf-autotable';
import PermissionReqhead from './component/PermissionReqhead';
function Tables() {
  
  const [results, setResults] = useState([
    {
      Date_ : '2023-10-28',
      Per_time : '01:30 HRS',
      From_Time : '16:34',
      To_Time : '18:04',
      Reason  : 'Going out for Person use.',
      Remarks : 'Null'
    },
    {
      Date_ : '2023-10-18',
      Per_time : '01:30 HRS',
      From_Time : '16:34',
      To_Time : '18:04',
      Reason  : 'Going out for Person use.',
      Remarks : 'Null'
    },
    {
      Date_ : '2023-07-28',
      Per_time : '01:30 HRS',
      From_Time : '16:34',
      To_Time : '18:04',
      Reason  : 'Going out for Person use.',
      Remarks : 'Null'
    },
    {
      Date_ : '2023-10-28',
      Per_time : '01:30 HRS',
      From_Time : '16:34',
      To_Time : '18:04',
      Reason  : 'Going out for Person use.',
      Remarks : 'Null'
    },
    {
      Date_ : '2023-11-28',
      Per_time : '01:30 HRS',
      From_Time : '16:34',
      To_Time : '18:04',
      Reason  : 'Going out for Person use.',
      Remarks : 'Null'
    },
    {
      Date_ : '2023-10-28',
      Per_time : '01:30 HRS',
      From_Time : '16:34',
      To_Time : '18:04',
      Reason  : 'Going out for Person use.',
      Remarks : 'Null'
    },
    {
      Date_ : '2023-10-28',
      Per_time : '01:30 HRS',
      From_Time : '16:34',
      To_Time : '18:04',
      Reason  : 'Going out for Person use.',
      Remarks : 'Null'
    },
    {
      Date_ : '2023-10-28',
      Per_time : '01:30 HRS',
      From_Time : '16:34',
      To_Time : '18:04',
      Reason  : 'Going out for Person use.',
      Remarks : 'Null'
    },
    {
      Date_ : '2023-10-28',
      Per_time : '01:30 HRS',
      From_Time : '16:34',
      To_Time : '18:04',
      Reason  : 'Going out for Person use.',
      Remarks : 'Null'
    },
    {
      Date_ : '2023-10-28',
      Per_time : '01:30 HRS',
      From_Time : '16:34',
      To_Time : '18:04',
      Reason  : 'Going out for Person use.',
      Remarks : 'Null'
    },
    {
      Date_ : '2023-10-28',
      Per_time : '01:30 HRS',
      From_Time : '16:34',
      To_Time : '18:04',
      Reason  : 'Going out for Person use.',
      Remarks : 'Null'
    },
    {
      Date_ : '2023-10-28',
      Per_time : '01:30 HRS',
      From_Time : '16:34',
      To_Time : '18:04',
      Reason  : 'Going out for Person use.',
      Remarks : 'Null'
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
  //         const response = axios.get(`http://localhost:8000/list/permission/data/'${localStorage.getItem('email')}'`).then((res)=>{
  
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
        name: 'Date',
        selector: (row,index) => row.Date_,
        id: "name",
        width:"200px",
        center:true,
        style:{
            fontSize: '16px',
            backgroundColor: '#FloralWhite'
        }
    },
      {
          name: 'Time ',
          selector: row => row.Per_time,
          id: "name",
          center:true,
          width:"200px",
           style:{
              fontSize: '16px',
              backgroundColor: '#FloralWhite'
          }
      },
      {
          name: 'Start Time',
          selector: row => row.From_Time,
          id: "name",
          center:true,
          style:{
              fontSize: '16px',
              backgroundColor: '#FloralWhite'
          }
      },
      
      {
          name: 'End Time',
          selector: row => row.To_Time,
          id: "name",
          center:true,
          style:{
              fontSize: '16px',
              backgroundColor: '#FloralWhite'
          }
      },
      
      {
          name: 'Reason',
          selector: row => row.Reason,
          id: "name",
          center:true,
          style:{
              fontSize: '16px',
              backgroundColor: '#FloralWhite'
          }

      },
      {
          name: 'Remarks',
          selector: row => row.Remarks,
          id: "name",
          center:true,
          style:{
              fontSize: '16px',
              backgroundColor: '#FloralWhite'
          }
      }
     
  ];
  const [copy,setCopy] = useState([]);
  const Select = (data) => {
      setCopy(data.selectedRows)
      console.log(data)
  }
  const changeMessage = (newMessage) => {
    const Message = (newMessage.toLowerCase())
    const filtered = results.filter(user => user.Date_.toLowerCase().includes(Message));
    setFilteredUsers(filtered);
    Setchange(true)
  }
  var doc = new jsPDF();
  var col = ["Sl.No.","Date",'Time','Start Time','  End Time','Reason','Remarks'];
  var rows = [];
  var rowsCopy = [];
 
  results.forEach((element,index) => {      
    var temp = [index+1,element.Date_,element.Per_time,element.From_Time,element.To_Time,element.Reason,element.Remarks];
    rows.push(temp);

}); 

copy.forEach((element,index) => {      
  var temp = [index+1,element.Date_,element.Per_time,element.From_Time,element.To_Time,element.Reason,element.Remarks];
  rowsCopy.push(temp);
});  

  const GeneratePdf=()=>{
 
    doc.autoTable(col, rows, { startY: 10 });
    doc.save('Test.pdf');
  }

  return (
    <Transitions>
    <DashboardLayout>
      <DashboardNavbar data={results}/>
      <div>
        <div>< PermissionReqhead changeMessage={changeMessage} GeneratePdf={GeneratePdf} data={rows} dataCopy={rowsCopy} columns={columns}/> </div>
        <div style={{marginTop:"10px"}}><PermissionReqDatatable Select={Select}  data={change?FilteredUsers:results} columns={columns}/> </div>
      </div>
    </DashboardLayout>
    </Transitions>
  );
}

export default Tables;
