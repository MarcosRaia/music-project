import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import playlist1 from "../bodyContent/playlist1.jpg"
import playlist2 from "../bodyContent/playlist2.jpg"
import playlist3 from "../bodyContent/playlist3.jpg"
import playlist4 from "../bodyContent/playlist4.jpg"

function Content() {
    return <>
        <div className="searchbar">
            <div style={{ width: '35%' }} className="input-group">
                <i class="material-icons">search</i><input id="searchcolor" type="text" className="form-control" placeholder="Search playlists, artists or tracks" aria-label="Username" aria-describedby="addon-wrapping" />
            </div>
        </div>
        <h2 className='d-flex justify-content-center'>Featured Playlists</h2>
        <Container className="grid">
            <div className="item">
                <div className="item-image">
                <img src={playlist1}/>
                </div>
            </div>
            <div className="item">
                <div className="item-image">
                <img src={playlist2}/>
                </div>
            </div>
            <div className="item">
                <div className="item-image">
                <img src={playlist3}/>
                </div>
            </div>
            <div className="item">
                <div className="item-image">
                <img src={playlist4}/>
                </div>
            </div>
            

        </Container>
    </>

}

export default Content;