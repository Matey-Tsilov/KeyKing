import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export const QuestCard = ({language, loot, time, title, content}) => {
    return (
        <Card style={{ width: '18rem' }} className="center cards" >
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Details</Button>
        </Card.Body>
      </Card>
  );
}