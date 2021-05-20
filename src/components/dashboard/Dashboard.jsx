import './Dashboard.css'
import Navbar from '../navbar/Navbar'
import { Container, Table } from 'react-bootstrap'
import { datas } from '../../DummyData'

const tableHead = ['No.', 'Title', 'Location', 'Date', 'Participants', 'Note']

export default function Dashboard() {
    return (
        <div>
            <Navbar isActiveDashboard={true} />
            <Container className='table-box'>
                <Table>
                    <thead>
                        <tr>
                            {tableHead.map(t => (
                                <th>{t}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            {datas.map((data, index) => {
                                // <div>
                                // <td>{d.id}</td>
                                <td key={index}>{data}</td>
                                // </div>
                            })}
                        </tr>
                    </tbody>
                </Table>
            </Container>
        </div>
    )
}