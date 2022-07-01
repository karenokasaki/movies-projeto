import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Card, Col, Row } from 'antd'



function Favorites() {

    const [data, setData] = useState([])

    useEffect(() => {

        async function fetchFilms() {
            const response = await axios.get('https://ironrest.herokuapp.com/karen-movies')
            setData(response.data)
        }

        fetchFilms()
    }, [])

    return (
        <Row gutter={18} justify='center' style={{ margin: '4px' }}>

            {data.map((cE) => {
                return (
                    <Col span={6} style={{ margin: '4px' }} >
                        <Link to={`/lista/${cE._id}`}>
                            <Card
                                title={cE.description}
                                hoverable headStyle={{ backgroundColor: 'Gainsboro' }}
                            >
                                Criado por: <p>{cE.owner}</p>
                            </Card>
                        </Link>
                    </Col>
                )
            })}
        </Row>
    );
}

export default Favorites;