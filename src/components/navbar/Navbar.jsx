import { Container, Nav, Navbar } from "react-bootstrap";
import './Navbar.css'

export default function Navbaar(props) {
    return (
        <div>
            <Navbar collapseOnSelect bg='dark' variant='dark'>
                <Container>
                    <Navbar.Brand href='/'>Navbar Brand</Navbar.Brand>
                    <Navbar.Toggle></Navbar.Toggle>
                    <Navbar.Collapse className='justify-content-end'>
                        {props.isActiveEventForm ?
                            <Nav>
                                <Nav.Link active>Add Event</Nav.Link>
                            </Nav>
                            :
                            <Nav>
                                <Nav.Link href='add-event'>Add Event</Nav.Link>
                            </Nav>
                        }
                        {props.isActiveDashboard ?
                            <Nav>
                                <Nav.Link active>Dashboard</Nav.Link>
                            </Nav>
                            :
                            <Nav>
                                <Nav.Link href='dashboard'>Dashboard</Nav.Link>
                            </Nav>
                        }
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}