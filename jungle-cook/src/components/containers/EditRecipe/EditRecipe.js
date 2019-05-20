import React, { Component } from 'react';
import "./EditRecipe.scss";


class EditRecipe extends Component {


    render() {
        return (
            <div className="EditRecipe">

                <div className="EditRecipe__container">

                    <form action="#" method="get">

                        <fieldset>
                            <legend>Hey Name! Create your recipe!</legend>
                            <input type="text" name="imageUpload" placeholder="Add Recipe Image" />
                            <input type="text" name="recipeName" placeholder="Name" />
                            <input type="text" name="recipeDesc" placeholder="Description" />
                            <input type="text" name="recipeTime" placeholder="Time" />
                            <input type="text" name="recipeServSize" placeholder="Name" />

                        </fieldset>

                        <fieldset>
                            <legend>Enter Ingredients:</legend>
                            <input type="text" name="ingred1" placeholder="Ingredient 1" />
                            <input type="text" name="ingred2" placeholder="Ingredient 2" />
                            <input type="text" name="ingred3" placeholder="Ingredient 3" />

                        </fieldset>

                        <fieldset>
                            <legend>Enter Instructions:</legend>
                            <input type="text" name="instruct1" placeholder="Instruction 1" />
                            <input type="text" name="instruct2" placeholder="Instruction 2" />
                            <input type="text" name="instruct3" placeholder="Instruction 3" />

                        </fieldset>

                        <input type="submit" value="Edit Recipe" />

                    </form>

                </div>

            </div>
        )
    }
}

export default EditRecipe;
