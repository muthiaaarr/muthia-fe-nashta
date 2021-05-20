import { Alert } from "react-bootstrap";

export default function Warning(props) {
    return(
        <div>
            {props.showWarning ? 
                <Alert variant='warning' onClose={props.isClose} dismissible>
                    <span>{props.warningAlert}</span>
                </Alert> 
                :
                <div></div>
            }      
        </div>
    )
}