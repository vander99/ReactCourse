import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

function RenderDish ({dish}) {
    if(dish == null){
        return (
            <div>
            </div>
        )
    }
    else {
        const item = dish;
        const itemComments = dish.comments.map((itemComment) => {
            return(
                <div key={itemComment.id}>
                    <p>{itemComment.comment}</p>
                    <p>--{itemComment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(itemComment.date)))}</p>
                </div>
            )})
            return (
                <div className="container">
                    <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <Card>
                            <CardImg width="100%" src={item.image} alt={item.name} />
                            <CardBody>
                                <CardTitle heading>{item.name}</CardTitle>
                                <CardText>{item.description}</CardText>
                            </CardBody>
                        </Card>
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <h5>Comments</h5>
                        {itemComments}
                    </div>
                    </div>
                </div>
            )
        }
}

const DishDetail = (props)=> {
    return (<RenderDish dish={props.dish}/>)
}

export default DishDetail;