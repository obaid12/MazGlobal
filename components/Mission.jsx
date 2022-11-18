import { useEffect, useState } from "react";
//import { useSelector } from "react-redux";
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import {
  Search,
  ShoppingCartOutlined,
  LocalShippingOutlined,
  VerifiedUser,
  Person,
  PhoneOutlined,
  EmailOutlined,
  Settings,FlightTakeoff,LocalPolice,Group,HighQuality,
} from "@material-ui/icons";
import { Avatar, Badge } from "@material-ui/core";
import router, { useRouter } from "next/router";
import Link from "next/link";
import nav from "../styles/navbar.module.css";
import axios from "axios";
//import logo from "../public/pernia.png";
import jwt_decode from "jwt-decode";

//import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';
//import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
import { Navbar, Nav, } from "react-bootstrap";
//import Dropdown from './Dropdown'
import { NavDropdown,Form,FormControl,Button } from "react-bootstrap";
import { Container } from "react-bootstrap";

const Mission = () => {
  useEffect(() => {
    // alert('Finished loading');
  }, []);
  return (
    <div className={nav.mission}>
      <div className={nav.mitem}>
       <Settings style={{height:'70px',width:'70px'}}/>
       <div style={{display:'flex',flexDirection:'column'}}>
       <p style={{fontWeight:'600',fontSize:'20px',marginLeft:'40px'}}>Stockists with an extensive inventory</p>
       <p style={{textAlign:'justify',marginLeft:'40px',fontWeight:'300'}}>
        We are the largest independent  retailers of components and aftermarket spare parts for trucks,pickups,4*4,vans and other vehicles.
         </p>
      </div>
      </div>
      <div className={nav.mitem}>
      <VerifiedUser style={{height:'70px',width:'70px'}}/>
       {/* <LocalPolice style={{height:'100px',width:'100px'}}/> */}
       <div style={{display:'flex',flexDirection:'column'}}>
       <p style={{fontWeight:'600',fontSize:'20px',marginLeft:'40px'}}>Access to fast sourcing  engine</p>
       <p style={{textAlign:'justify',marginLeft:'40px',fontWeight:'300'}}>
       With our efficient sourcing engine and access to reliable suppliers around the world, we are  your one-stop shop for getting high quality products
   .</p>
      </div>
      </div>
      <div className={nav.mitem}>
       <Group style={{height:'70px',width:'70px'}}/>
       <div style={{display:'flex',flexDirection:'column'}}>
       <p style={{fontWeight:'600',fontSize:'20px',marginLeft:'40px'}}>Delivering quality at your door step</p>
       <p style={{textAlign:'justify',marginLeft:'40px',fontWeight:'300'}}>All products of our online  spare parts store are avillabe for immediate delivery to a residential or commercial address in the UK and across Europe. </p>
      </div>
      </div>
    </div>
  );
};

export default Mission;
