import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


export const QuestCard = ({text}) => {
    return (
        <Card style={{ width: '18rem' }} className="center cards" >
        <Card.Img variant="top" src={text.imageUrl} />
        <Card.Body>
          <Card.Title>{text.title}</Card.Title>
          <Card.Text>
            {text.content.slice(0, 50)}
          </Card.Text>
          <Link to={`/details/${text._id}`}><Button variant="warning">Details</Button></Link>
        </Card.Body>
      </Card>
  );
}