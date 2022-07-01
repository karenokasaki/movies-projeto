import { useParams, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Divider, Col, Row, Button, Form, Input } from 'antd'
import CardFilm from '../../components/Card';
import { toast } from 'react-toastify';



function EditList() {

    const { TextArea } = Input;

    const { id } = useParams()

    const [film, setFilm] = useState({ movies: [] })
    const navigate = useNavigate()

    useEffect(() => {
        async function fetchFilms() {
            const response = await axios.get(`https://ironrest.herokuapp.com/karen-movies/${id}`)
            setFilm(response.data)
        }
        fetchFilms()
    }, [id])

    function handleChange(event) {
        setFilm({ ...film, [event.target.name]: event.target.value })
    }
    console.log(film)

    function handleDelete(event, idFilm) {
        const listNew = film.movies.filter((cE) => cE.id !== idFilm)
        setFilm({ ...film, movies: listNew })
        toast.error("Filme deletado")
    }

    return (
        <>

            <Button onClick={() => navigate('/')}>Voltar</Button>
            <Divider>Edite sua lista de filmes!</Divider>

            <Form>
                <Col>

                    <div style={{ display: 'flex', flexDirection: 'column', marginTop: '14px', alignItems: 'center' }}>
                        <label>Nome</label>
                        <Input value={film.owner} name='owner' onChange={handleChange} />

                        <label>Descrição</label>
                        <TextArea value={film.description} name='description' onChange={handleChange} />
                    </div>
                    <Row gutter={16} justify='center' style={{ margin: '4px' }}>
                        {film.movies.map((cE) => {
                            return (
                                <CardFilm cE={cE} handleDelete={handleDelete} />
                            )
                        })}
                    </Row>
                    <Button type="primary" block size="large" onClick={
                        async function () {
                            delete film._id
                            await axios.put(`https://ironrest.herokuapp.com/karen-movies/${id}`, film)
                            toast.success("Lista Editada")
                            navigate(`/lista/${id}`)
                        }}
                    > Salvar Lista!</Button>
                </Col>
            </Form>
        </>
    );
}

export default EditList;