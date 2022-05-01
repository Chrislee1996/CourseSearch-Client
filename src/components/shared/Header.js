import React, { Fragment } from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { Link } from 'react-router-dom'
import {HouseFill, List, PersonDash, Mortarboard, MortarboardFill, Check2, Pen, Search, PersonPlusFill, PersonCircle, BoxArrowRight, Key} from "react-bootstrap-icons"

const linkStyle = {
    color: 'white',
    textDecoration: 'none',
}
const authenticatedOptions = (
	<>
		<Nav.Item className='m-2'>
			<Link to='/courses/mine' style={linkStyle}>
				My Courses <PersonDash></PersonDash>
			</Link>
		</Nav.Item>
		<Nav.Item className='m-2'>
			<Link to='/attendingcourses' style={linkStyle}>
				My List<List></List>
			</Link>
		</Nav.Item>
		<Nav.Item className='m-2'>
			<Link to={`/courses/collegecourses`} style={linkStyle} >College Courses  <Mortarboard></Mortarboard></Link>
		</Nav.Item>
		<Nav.Item className='m-2'>
        	<Link to={`/courses/noncollegecourses`} style={linkStyle} >Non-College Courses <MortarboardFill></MortarboardFill> </Link>
		</Nav.Item>
		<Nav.Item className='m-2'>
			<Link to='addCourse' style={linkStyle}>
				Add a New Course <Pen></Pen>
			</Link>
		</Nav.Item>
		<Nav.Item className='m-2'>
			<Link to='change-password' style={linkStyle}>
				Change Password <Key></Key>
			</Link>
		</Nav.Item>
		<Nav.Item className='m-2'>
			<Link to='sign-out' style={linkStyle}>
				Sign Out<BoxArrowRight></BoxArrowRight>
			</Link>
		</Nav.Item>
	</>
)

const unauthenticatedOptions = (
	<>
        <Nav.Item className='m-2'>
		    <Link to='sign-up' style={linkStyle}>Sign Up <PersonPlusFill></PersonPlusFill></Link> 
        </Nav.Item>
        <Nav.Item className='m-2'>
		    <Link to='sign-in' style={linkStyle}>Sign In <PersonCircle></PersonCircle></Link>
        </Nav.Item>
	</>
)

const alwaysOptions = (
	<>
		<Nav.Item className='m-2'>
			<Link to='/' style={linkStyle}  >
			  <HouseFill></HouseFill>Home
			</Link>
		</Nav.Item>
	</>
)

const Header = ({ user }) => (
	<Navbar bg='secondary' variant='dark' expand='md' style={{backgroundImage:`url("https://wallpaperaccess.com/full/1092758.jpg")`}}>
		<Navbar.Brand className='m-2'>
            <Link to='/' style={linkStyle}>
				CourseSearch<Search></Search> 
            </Link>
        </Navbar.Brand>
		<Navbar.Toggle aria-controls='basic-navbar-nav' />
		<Navbar.Collapse id='basic-navbar-nav'>
			<Nav className='ml-auto'>
				{user && (
					<span className='navbar-text mr-2'>Welcome, {user.email}<Check2></Check2></span>
				)}
				{alwaysOptions}
				{user ? authenticatedOptions : unauthenticatedOptions}
			</Nav>
		</Navbar.Collapse>
	</Navbar>
)

export default Header