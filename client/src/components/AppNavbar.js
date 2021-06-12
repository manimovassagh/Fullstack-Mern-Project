import React from 'react'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Container
} from 'reactstrap';
import { useState } from 'react';


export default function AppNavbar() {
  const [open, setOpen] = useState(false)

  const toggle = () => {
    setOpen(true)
  }
  return (
    <div>
      <Navbar color="dark" dark expand="sm" className="mb-5">
      </Navbar>
    </div>
  )
}
