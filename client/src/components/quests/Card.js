import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export const QuestCard = ({text}) => {
    return (
        <Card style={{ width: '18rem' }} className="center cards" >
        <Card.Img variant="top" src={text.imageUrl} />
        <Card.Body>
          <Card.Title>{text.title}</Card.Title>
          <Card.Text>
            {text.content}
          </Card.Text>
          <Button variant="primary">Details</Button>
        </Card.Body>
      </Card>
  );
}