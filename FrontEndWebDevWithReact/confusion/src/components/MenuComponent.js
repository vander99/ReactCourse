import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';
import { DishdetailComponent } from './DishdetailComponent';

class Menu extends Component {
    constructor(props) {
        super(props);

        this.state = {
          selectedDish: null
        }
    }

    onDishSelect(dish){
      this.setState({selectedDish: dish});
    }

    renderDish(dish){
      if (dish != null){
        return(
          <div style={{width: "100%"}}>
            <DishdetailComponent item={dish} />
          </div>
        );
      }
      else {
        return(
          <div></div>
        );
      }
    }

    render() {
        const menu = this.props.dishes.map((dish) => {
            return (
              <div key={dish.id} className="col-12 col-md-5 m-1">
                <Card key={dish.id}
                        onClick={() => this.props.onClick(dish.id)}>
                  <CardImg width="100%" src={dish.image} alt={dish.name} />
                  <CardImgOverlay>
                    <CardTitle heading>{dish.name}</CardTitle>
                  </CardImgOverlay>
                </Card>
              </div>
            );
        });

        return (
          <div className="container">
            <div className="row">
              {menu}
            </div>
            <div className="row">
              {this.renderDish(this.state.selectedDish)}
            </div>
          </div>
        );
    }
}

export default Menu;