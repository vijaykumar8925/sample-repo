
// Soft UI Dashboard React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Transitions from "animation/Transition";
import './TaskList.css'
import TasklistHead from "./component/TasklistHead";
import TasklistDatatable from "./component/TasklistDatatable";
import { useState } from "react";
import { useEffect } from "react";
import jsPDF from 'jspdf'
import axios from "axios";
import autoTable from 'jspdf-autotable';
function Tables() {
  const [results, setResults] = useState([
     {
      task_ref : 'Task Reference1',
      acti_vity : 'Designing',
      pro_ject : 'Msts Intra Connect',
      task_type : 'Client Meeting',
      wrk_detls : 'Finshing the balance Design Work',
      strt_time : '2023-10-27T09:30',
      end_time : '13:45',
      duraTion : '04:15 Mins',
      status_ : 'Complete'
     },
     {
      task_ref : 'Task Reference2',
      acti_vity : 'Development',
      pro_ject : 'Msts Intra Connect',
      task_type : 'RND',
      wrk_detls : 'Creating Structure for new project',
      strt_time : '2023-10-27T11:30',
      end_time : '12:45',
      duraTion : '01:15 Mins',
      status_ : 'In Progress'
     },
     {
      task_ref : 'Task Reference3',
      acti_vity : 'Back-End',
      pro_ject : 'Msts Intra Connect',
      task_type : 'DataBase Structure',
      wrk_detls : 'Creating Structure for new project',
      strt_time : '2023-10-27T15:30',
      end_time : '18:40',
      duraTion : '03:10 Mins',
      status_ : 'Completed'
     },
     {
      task_ref : 'Task Reference4',
      acti_vity : 'Data-Base',
      pro_ject : 'Msts Intra Connect',
      task_type : 'Table Creation',
      wrk_detls : 'Creating Table',
      strt_time : '2023-10-27T10:30',
      end_time : '16:53',
      duraTion : '05:23 Mins',
      status_ : 'Completed'
     },
     {
      task_ref : 'Task Reference1',
      acti_vity : 'Designing',
      pro_ject : 'Msts Intra Connect',
      task_type : 'Client Meeting',
      wrk_detls : 'Finshing the balance Design Work',
      strt_time : '2023-10-27T09:30',
      end_time : '13:45',
      duraTion : '04:15 Mins',
      status_ : 'Complete'
     },
     {
      task_ref : 'Task Reference2',
      acti_vity : 'Development',
      pro_ject : 'Msts Intra Connect',
      task_type : 'RND',
      wrk_detls : 'Creating Structure for new project',
      strt_time : '2023-10-27T11:30',
      end_time : '12:45',
      duraTion : '01:15 Mins',
      status_ : 'In Progress'
     },
     {
      task_ref : 'Task Reference3',
      acti_vity : 'Back-End',
      pro_ject : 'Msts Intra Connect',
      task_type : 'DataBase Structure',
      wrk_detls : 'Creating Structure for new project',
      strt_time : '2023-10-27T15:30',
      end_time : '18:40',
      duraTion : '03:10 Mins',
      status_ : 'Completed'
     },
     {
      task_ref : 'Task Reference4',
      acti_vity : 'Data-Base',
      pro_ject : 'Msts Intra Connect',
      task_type : 'Table Creation',
      wrk_detls : 'Creating Table',
      strt_time : '2023-10-27T10:30',
      end_time : '16:53',
      duraTion : '05:23 Mins',
      status_ : 'Completed'
     },
     {
      task_ref : 'Task Reference4',
      acti_vity : 'Data-Base',
      pro_ject : 'Msts Intra Connect',
      task_type : 'Table Creation',
      wrk_detls : 'Creating Table',
      strt_time : '2023-10-27T10:30',
      end_time : '16:53',
      duraTion : '05:23 Mins',
      status_ : 'Completed'
     },
     {
      task_ref : 'Task Reference4',
      acti_vity : 'Data-Base',
      pro_ject : 'Msts Intra Connect',
      task_type : 'Table Creation',
      wrk_detls : 'Creating Table',
      strt_time : '2023-10-27T10:30',
      end_time : '16:53',
      duraTion : '05:23 Mins',
      status_ : 'Completed'
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
          selector: (row,index) => index+1,
          id: "name",
          center:true,
          style:{
              fontSize: '16px',
              backgroundColor: '#FloralWhite'
          }
      },
      {
          name: 'Task Referance',
          selector: row => row.task_ref,
          id: "name",
          width:'200px',
          center:true,
           style:{
              fontSize: '16px',
              backgroundColor: '#FloralWhite'
          }
      },
      {
          name: 'Activity',
          selector: row => row.acti_vity,
          id: "name",
          center:true,
          width:'200px',
          style:{
              fontSize: '16px',
              backgroundColor: '#FloralWhite'
          }
      },
      
      {
          name: 'Project',
          selector: row => row.pro_ject,
          id: "name",
          width:'200px',
          center:true,
          style:{
              fontSize: '16px',
              backgroundColor: '#FloralWhite'
          }
      },
      
      {
          name: 'Task Type',
          selector: row => row.task_type,
          id: "name",
          center:true,
          width:'200px',
          style:{
              fontSize: '16px',
              backgroundColor: '#FloralWhite'
          }

      },
      {
          name: 'Work Details',
          selector: row => row.wrk_detls,
          id: "name",
          center:true,
          width:'200px',
          style:{
              fontSize: '16px',
              backgroundColor: '#FloralWhite'
          }
      },
      {
        name: 'Start Time',
        selector: row => row.strt_time,
        id: "name",
        width:'200px',
        center:true,
        style:{
            fontSize: '16px',
            backgroundColor: '#FloralWhite'
        }
    }, {
      name: 'End Time',
      selector: row => row.end_time,
      id: "name",
      center:true,
      width:'200px',
      style:{
          fontSize: '16px',
          backgroundColor: '#FloralWhite'
      }
  },
  {
    name: 'Duration',
    selector: row => row.duraTion,
    id: "name",
    width:'200px',
    center:true,
    
    style:{
        fontSize: '16px',
        backgroundColor: '#FloralWhite'
    }
},
{
  name: 'Status',
  selector: row => row.status_,
  id: "name",
  width:'200px',
  center:true,
  style:{
      fontSize: '16px',
      backgroundColor: '#FloralWhite'
  }
}
     
  ];
  const [copy,setCopy] = useState([]);
  const Selected = (data) => {
     setCopy(data.selectedRows)
     console.log(copy)
  }
  const changeMessage = (newMessage) => {
    const Message = (newMessage.toLowerCase())
    const filtered = results.filter(user => user.acti_vity.toLowerCase().includes(Message));
    setFilteredUsers(filtered);
    Setchange(true)
  }
  var doc = new jsPDF();
  var col = ["Sl.No.","Task Referance",'Activity','Project','Task Type','Work Details','Start Time','End Time','Duration','Status'];
  var rows = [];
   var rowsCopy = [];

results.forEach((element,index) => {      
  var temp = [index+1,element.task_ref,element.acti_vity,element.pro_ject,element.task_type,element.wrk_detls,element.strt_time,element.end_time,element.duraTion,element.status_];
  rows.push(temp)
  console.log(element)
}); 

copy.forEach((element,index) => {      
  var temp = [index+1,element.task_ref,element.acti_vity,element.pro_ject,element.task_type,element.wrk_detls,element.strt_time,element.end_time,element.duraTion,element.status_];
  rowsCopy.push(temp)
  console.log(element)
}); 
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
      <DashboardNavbar />
      <div>
        <div><TasklistHead  changeMessage={changeMessage} GeneratePdf={GeneratePdf} data={rows} dataCopy={rowsCopy} columns={columns} CopyFunction={CopyFunction}/> </div>
        <div style={{marginTop:"10px"}}><TasklistDatatable Selected={Selected} data={change?FilteredUsers:results} columns={columns}/> </div>
      </div>
      
    </DashboardLayout>
    </Transitions>
  );
}

export default Tables;
