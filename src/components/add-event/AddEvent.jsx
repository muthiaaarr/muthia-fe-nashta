import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap'
import './AddEvent.css'
import Navbar from '../navbar/Navbar'
import { useEffect, useState } from 'react'
import Warning from './Warning'
import Success from './Success'
import { useDispatch, useSelector } from 'react-redux'
import { changeDate, changeFile, changeLocation, changeNote, changeParticipants, changeTitle } from '../../actions/action'

export default function AddEvent() {
    const title = useSelector(state => state.title)
    const location = useSelector(state => state.location)
    const participants = useSelector(state => state.participants)
    const date = useSelector(state => state.date)
    const note = useSelector(state => state.note)

    const dispatch = useDispatch()

    const [alert, setAlert] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')

    const [success, isSuccess] = useState(false)

    const validateNote = () => {
        if (note.length < 50) {
            setAlert(true)
            setErrorMessage('Note must be above 50 characters')
        } else {
            setAlert(false)
        }
    }

    const uploadFile = (e) => {
        const reader = new FileReader()
        reader.onload = () => {
            dispatch(changeFile(reader.result))
        }
        reader.readAsDataURL(e.target.files[0])
    }

    const handleSubmit = () => {
        isSuccess(true)
    }

    useEffect(() => {
        validateNote()
    })

    return (
        <div >
            <Navbar isActiveEventForm={true} />
            <Container className='add-event-form'>
                <Row>
                    <Col xs={5} className='img-col'>
                        <img
                            src='https://cdn.iconscout.com/icon/free/png-512/meeting-1543488-1305981.png'
                            alt='meeting'
                            className='image-meeting'
                            style={{ width: '100%', margin: 'auto' }}
                        />
                    </Col>
                    <Col>
                        <Warning 
                            showWarning={alert} 
                            isClose={() => setAlert(false)} 
                            warningAlert={errorMessage} 
                        />
                        <Success 
                            showSuccess={success} 
                            isClose={() => isSuccess(false)}
                        />
                        <Card>
                            <Form
                                className='form-box'
                                onSubmit={handleSubmit}
                            >
                                <Form.Row>
                                    <Form.Group as={Col}>
                                        <Form.Label htmlFor='title'>Title 
                                            <span className='required'> *</span>
                                        </Form.Label>
                                        <Form.Control
                                            required
                                            id='title'
                                            type='text'
                                            placeholder='Title'
                                            value={title}
                                            onChange={(e) => dispatch(changeTitle(e.target.value))}
                                        />
                                    </Form.Group>
                                    <Form.Group as={Col}>
                                        <Form.Label for='location'>Location
                                            <span className='required'> *</span>
                                        </Form.Label>
                                        <Form.Control
                                            required
                                            type='text'
                                            placeholder='Location'
                                            value={location}
                                            onChange={(e) => dispatch(changeLocation(e.target.value))}
                                        />
                                    </Form.Group>
                                </Form.Row>
                                <Form.Row>
                                    <Form.Group as={Col}>
                                        <Form.Label for='participants'>Participants
                                            <span className='required'> *</span>
                                        </Form.Label>
                                        <Form.Control
                                            required
                                            type='text'
                                            placeholder='Participants'
                                            value={participants}
                                            onChange={(e) => dispatch(changeParticipants((e.target.value)))}
                                        />
                                    </Form.Group>
                                    <Form.Group as={Col}>
                                        <Form.Label for='Date'>Date
                                            <span className='required'> *</span>
                                        </Form.Label>
                                        <Form.Control
                                            required
                                            type='date'
                                            placeholder='Date'
                                            value={date}
                                            onChange={(e) => dispatch(changeDate((e.target.value)))}
                                        />
                                    </Form.Group>
                                </Form.Row>
                                <Form.Row>
                                    <Form.Group as={Col}>
                                        <Form.Label for='note'>Note
                                            <span className='required'> *</span>
                                        </Form.Label>
                                        <Form.Control
                                            required
                                            as='textarea'
                                            rows={3}
                                            type='text'
                                            placeholder='Note'
                                            value={note}
                                            onChange={(e) => dispatch(changeNote((e.target.value)))}
                                        />
                                    </Form.Group>
                                </Form.Row>
                                <Form.Row>
                                    <Form.Group as={Col}>
                                        <Form.Label for='file'>Upload File
                                            <span className='required'> *</span>
                                        </Form.Label>
                                        <Form.Control
                                            required
                                            accept='image/*'
                                            type='file'
                                            onChange={uploadFile}
                                        />
                                    </Form.Group>
                                </Form.Row>
                                <Form.Row className='justify-content-end'>
                                    <Button
                                        variant='success'
                                        onClick={() => handleSubmit()}
                                    >
                                        Submit Event
                                    </Button>
                                </Form.Row>
                            </Form>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}