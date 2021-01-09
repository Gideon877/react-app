import React, { Fragment, useState } from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';


const Navigate = ({change }) => {


    return  <Nav>
        <NavItem>
          <NavLink href="#" onClick={()=> change('home')}>Home</NavLink>
        </NavItem>
        <NavItem>
            <NavLink href="#" onClick={() => change('sort')}>Sorted</NavLink>
        </NavItem>
        <NavItem>
            <NavLink href="#" onClick={() => change('union')}>Union</NavLink>
        </NavItem>
        <NavItem>
          <NavLink disabled href="#">Logout</NavLink>
        </NavItem>
      </Nav>
    
}


export default Navigate;