import React from "react";
import profile from "../navSide/profile.jpg"
import { Row, Col, Nav } from 'react-bootstrap';
function NavSide() {
    return <>
        <aside className="head">
            <Row style={{paddingTop: '20%'}} >
                <Col xs={4} style= {{paddingLeft:'45px'}}> <img  className="profile" src={profile} /> </Col>
                <Col xs={6} > <h4>Marcos Raia</h4>
                    <Nav.Link className="link">Edit Profile <i class="material-icons">settings</i></Nav.Link>
                </Col>
            </Row>
            <Nav style= {{paddingTop:'50%'}} className=" d-flex flex-column align-items-center">
            <hr className="bdt"></hr>
                <Nav.Link className="link"> <i class="material-icons">fiber_new</i> Overview </Nav.Link>
                <Nav.Link className="link"> <i class="material-icons">camera</i>News </Nav.Link>
                <Nav.Link className="link"> <i class="material-icons">music_note</i> Playlists</Nav.Link>
                <Nav.Link className="link"> <i class="material-icons">wifi_tethering</i>Discover </Nav.Link>
            </Nav>
            <Nav style= {{paddingTop:'40px'}} className="d-flex flex-column align-items-center">
                <hr className="bdt"></hr>
                <Nav.Link className="link"> <i class="material-icons">tune</i> Dashboard </Nav.Link>
                <Nav.Link className="link"> <i class="material-icons">message</i> Messages </Nav.Link>
                <Nav.Link className="link"> <i class="material-icons">notifications_active</i> Notifications </Nav.Link>
                <Nav.Link className="link"> <i class="material-icons">account_circle</i> Account </Nav.Link>
            </Nav>
        </aside>
    </>
}

export default NavSide;