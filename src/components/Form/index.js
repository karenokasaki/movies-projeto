
import FilmList from "../../components/FilmList";
import { useState } from 'react'
import axios from 'axios'
import { Form, Input, Button, Col } from 'antd'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';

function FormPage() {

    const navigate = useNavigate()

    const [favoriteFilms, setFavoriteFilms] = useState({
        owner: '',
        description: '',
        movies: []
    })


    function handleChange(event) {
        setFavoriteFilms({ ...favoriteFilms, [event.target.name]: event.target.value })
    }



    console.log(favoriteFilms)

    return (

        <Form>
            <ToastContainer />
            <Button onClick={() => navigate('/')}>Voltar</Button>
            <Col>
                <div style={{ display: 'flex', flexDirection: 'column', marginTop: '14px', alignItems: 'center' }}>
                    <label>Dono da lista</label>
                    <Input value={favoriteFilms.owner} name='owner' onChange={handleChange} />

                    <label>Nome da Lista</label>
                    <Input value={favoriteFilms.description} name='description' onChange={handleChange} />
                </div>

                <FilmList favoriteFilms={favoriteFilms} setFavoriteFilms={setFavoriteFilms} toast={toast} />
                <Button
                    type="primary"
                    block
                    size="large"
                    onClick={
                        async function () {
                            await axios.post('https://ironrest.herokuapp.com/karen-movies', favoriteFilms)
                            toast.success("Lista criada!")
                            navigate('/')
                        }}>
                    Salvar Lista!
                </Button>
            </Col>
        </Form>

    );
}

export default FormPage;