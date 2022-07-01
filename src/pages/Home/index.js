import Favorites from "../../components/Favorites";
import { Link } from 'react-router-dom'
import { Button, Divider } from 'antd'
import TvSeries from "../../components/TvSeries";

function Home() {


    return (
        <div>

            <Divider>Crie sua lista de filmes!</Divider>
            <Link to='/criar-lista'><Button block type='primary'>CRIAR!</Button></Link>

            <Divider>Listas Criadas</Divider>
            <Favorites />

            <Divider>Séries de TV populares hoje</Divider>
            <TvSeries />
        </div>
    );
}

export default Home;