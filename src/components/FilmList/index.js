import axios from 'axios'
import { useState, useEffect } from 'react'
import { Divider, Card, Col, Row, Button } from 'antd'



function FilmList({ setFavoriteFilms, favoriteFilms, toast }) {
    const { Meta } = Card;

    const [data, setData] = useState([])

    useEffect(() => {
        //quando alguém entrar nessa página, roda esse código aqui
        async function fetchFilms() {
            const response = await axios.get('https://api.themoviedb.org/3/discover/movie?api_key=c7060fa9b1db1e09a3a1106d5f691343')
            setData(response.data.results)
        }

        fetchFilms()
    }, [])
    console.log(data)

    async function handleClick(event, film) {
        event.preventDefault()
        setFavoriteFilms({ ...favoriteFilms, movies: [...favoriteFilms.movies, film] })
        toast.success("Adicionado com sucesso")
        takeFilmOut(film)
    }

    function takeFilmOut(film) {
        setData(data.filter((cE) => cE.id !== film.id))
    }

    return (
        <Row gutter={16} justify='center' style={{ margin: '4px' }}>

            <Divider>Lita de filmes</Divider>
            {data.map((cE) => {
                return (
                    <Col span={8} style={{ margin: '4px' }}>
                        <Card
                            hoverable cover={<img alt="example" src={`https://image.tmdb.org/t/p/w500${cE.backdrop_path}`} />}
                        >
                            <Meta title={cE.title} description={cE.overview} />
                            <Button onClick={(event) => handleClick(event, cE)} style={{ marginTop: '14px' }} type='dashed'>Adicionar aos Favoritos</Button>
                        </Card>
                    </Col>
                )
            })}
        </Row>
    );
}

export default FilmList;