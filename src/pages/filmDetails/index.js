import { useParams, Link, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Divider, Card, Col, Row, Space, Button } from 'antd'
import { toast } from 'react-toastify';


function FilmDetails() {
    const { Meta } = Card;

    const { id } = useParams()
    const [film, setFilm] = useState({ movies: [] })
    const navigate = useNavigate()


    useEffect(() => {

        async function fetchFilms() {
            const response = await axios.get(`https://ironrest.herokuapp.com/karen-movies/${id}`)
            setFilm(response.data)
        }

        fetchFilms()
    }, [])
    console.log(film)

    async function handleDelete(e) {
        e.preventDefault()
        await axios.delete(`https://ironrest.herokuapp.com/karen-movies/${id}`)
        navigate('/')
        toast.error("Lista deletada")
    }

    return (
        <div>
            <Button onClick={() => navigate('/')}>Voltar</Button>

            <Divider>Informações da Lista</Divider>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px' }}>
                <p>Criado por: {film.owner}</p>
                <p>Descrição: {film.description}</p>
                <Link to={`/lista/${id}/edit`}> <Button type="dashed" danger>Editar sua lista!</Button></Link>
                <Button style={{ marginTop: '4px' }} type="primary" danger onClick={handleDelete}>Deletar Lista!</Button>
            </div>
            <Row gutter={18} justify='center' style={{ margin: '4px' }}>

                <Divider>Filmes</Divider>

                {film.movies.map((cE) => {
                    return (
                        <Col span={8} style={{ margin: '4px' }}>
                            <Card
                                cover={<img alt="example" src={`https://image.tmdb.org/t/p/w500${cE.backdrop_path}`} />}
                            >
                                <Meta title={cE.title} description={cE.overview} />
                                Nota: <Meta description={cE.vote_average} />

                            </Card>
                        </Col>
                    )
                })}

            </Row>
        </div>
    );
}

export default FilmDetails;