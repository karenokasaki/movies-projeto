import axios from 'axios'
import { useState, useEffect } from 'react'
import { Card, Col, Row } from 'antd'


function TvSeries() {

    const [data, setData] = useState([])
    const { Meta } = Card;


    useEffect(() => {
        //quando alguém entrar nessa página, roda esse código aqui
        async function fetchFilms() {
            const response = await axios.get('https://api.themoviedb.org/3/trending/tv/week?api_key=c7060fa9b1db1e09a3a1106d5f691343')
            setData(response.data.results)
        }

        fetchFilms()
    }, [])
    console.log(data)

    return (
        <div>
            <Row gutter={16} justify='center' style={{ margin: '4px' }}>
                {data.map((cE) => {
                    return (
                        <Col span={8} style={{ margin: '4px' }}>
                            <Card
                                cover={<img alt="example" src={`https://image.tmdb.org/t/p/w500${cE.backdrop_path}`} />}
                            >
                                <Meta title={cE.name} description={cE.overview} />

                            </Card>
                        </Col>
                    )
                })}
            </Row>
        </div>
    );
}

export default TvSeries;