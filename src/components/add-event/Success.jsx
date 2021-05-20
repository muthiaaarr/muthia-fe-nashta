import { Alert, Button, Col } from "react-bootstrap";

export default function Success(props) {
    return(
        <div>
            {props.showSuccess ? 
                <Alert variant='success' onClose={props.isClose}>
                    <span>Your event has been added. </span>
                    <span><a href='/' style={{color: 'green'}}>Go to main page</a></span>
                </Alert> 
                :
                <div></div>
            }      
        </div>
    )
}