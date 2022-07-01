import { Divider, Card, Col, Row, Space, Button, Form, Input } from 'antd'



function CardFilm({ cE, handleDelete }) {
    return (

        <Col span={6} style={{ margin: '4px' }}>
            <Card
                title={cE.title}
                cover={<img alt="example" src={`https://image.tmdb.org/t/p/w500${cE.backdrop_path}`} />}
            >
                <Button onClick={(e) => handleDelete(e, cE.id)}>Deletar</Button>
            </Card>
        </Col>
    );
}

export default CardFilm;