import React from 'react';
import { Card, CardImg, CardBody, CardText, CardTitle } from 'reactstrap';

const DishDetailedComponent = ({ dish }) => {
  const comments = dish.comments.map((item) => item);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-5">
          <Card>
            <CardImg width="100%" src={dish.image} alt={dish.name} />
            <CardBody>
              <CardTitle>{dish.name}</CardTitle>
              <CardText>{dish.description}</CardText>
            </CardBody>
          </Card>
        </div>

        <div className="col-md-5">
          <h4>Comments</h4>
          {comments.map((item) => (
            <div key={item.id}>
              <h6>{item.comment}</h6>
              <p className="display-5">{`-- ${
                item.author
              }, ${new Intl.DateTimeFormat('en-US', {
                year: 'numeric',
                month: 'short',
                day: '2-digit',
              }).format(Date.parse(item.date))}`}</p>
            </div>
          ))}
        </div>
      </div>
    </div>  
  );
};

export default DishDetailedComponent;
