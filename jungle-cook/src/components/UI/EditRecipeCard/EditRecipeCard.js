import React, { Component } from 'react';
import TimeIcon from "../../../assets/images/time.svg";
import ServingsIcon from "../../../assets/images/servings.svg";
import Button from "../Button/Button";
import axios from "../../../axios-recipes";

import './EditRecipeCard.scss';

class EditRecipeCard extends Component {

    deletePostHandler = () => {
        console.log("clicked")
        axios.delete(`/my-recipes/${this.props.firebaseId}.json`)
            .then(response => {
                console.log(response)
                
            })

    }
    

    render() {

        return (

            <div className="EditRecipeContainer">
            
                <div className="EditRecipeCard__layout">
                <div className="EditRecipeCard__img">
                    <img src={require(`../../../assets/images/${this.props.imgURL}.jpg`)} alt="" />
                </div>
                <div className="EditRecipeCard__info">

                    <h3 className="EditRecipeCard__info--header">
                        {this.props.name}
                    </h3>

                    <p className="EditRecipeCard__info--desc">
                        {this.props.description}
                    </p>

                    <div className="EditRecipeCard__info--time">
                        <img src={TimeIcon} alt="Time" />
                        <p>{this.props.time}</p>
                    </div>

                    <div className="EditRecipeCard__info--servings">
                        <img src={ServingsIcon} alt="Time" />
                        <p>4 servings</p>
                    </div>

                </div>
                </div>

                <div className="EditRecipeContainer__btns">
                    <Button>Edit Recipe</Button>
                    <Button clicked={this.deletePostHandler}>Delete</Button>
                    
                </div>
            
            </div>

            

        )

    }

}

export default EditRecipeCard;