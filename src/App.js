import React from "react";
import './Css/Greeting.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@coreui/coreui/dist/css/coreui.min.css';
// import { CAlert, CCard, CCardHeader, CCardBody, CCardTitle, CCardText, CButton, CCardFooter } from "@coreui/react";
import Greeting from "./Greeting";
// import {CRow, CCol, CCard, CCardBody, CCardTitle, CCardText, CButton} from "@coreui/react";

const App = () =>{
  return(
    <>
      <Greeting />
    </>
  );
}


export default App;