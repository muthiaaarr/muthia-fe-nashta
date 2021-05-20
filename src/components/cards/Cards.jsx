import { Card, CardColumns, Container } from 'react-bootstrap'
import './Cards.css'
import Navbar from '../navbar/Navbar'
import { datas } from '../../DummyData'

export default function Cards() {
    return (
        <div>
            <Navbar isActiveDashboard={false} />
            <Container className='cards-box'>
                <CardColumns>
                    {datas.map(data => (
                        <Card>
                            <Card.Img src={data.picture}></Card.Img>
                            <Card.Body>
                                <img
                                    src='https://i.pinimg.com/originals/0f/61/ba/0f61ba72e0e12ba59d30a50295964871.png'
                                    alt='map'
                                    className='map-icon'
                                />
                                <span>{data.location}</span>
                                <h4>{data.title}</h4>

                                <hr />

                                <span>{data.participants}</span>

                                <hr />

                                <h6>Note :</h6>
                                <p>{data.note}</p>
                            </Card.Body>
                        </Card>
                    ))}
                </CardColumns>
            </Container>
        </div>
    )
}