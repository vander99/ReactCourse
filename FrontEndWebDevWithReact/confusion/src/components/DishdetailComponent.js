import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle, NavItem } from 'reactstrap';

export class DishdetailComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            ready: false,
        };
    }
    render() {
        if(this.props.dish == null){
            console.log("not readdy")
            return (
                <div>
                    <p>not ready</p>
                </div>
            )
        }
        else {
            const item = this.props.dish;
            console.log(item)
            const itemComments = this.props.dish.comments.map((itemComment) => {
                return(
                    <div>
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
}

export default DishdetailComponent;