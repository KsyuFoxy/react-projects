import React from 'react';
import Step1 from './img_fonts/Step1.jpg';
import Step2 from './img_fonts/Step2.jpg';
import Step3 from './img_fonts/Step3.jpg';
import Step4 from './img_fonts/Step4.jpg';
import Step5 from './img_fonts/Step5.jpg';
import heart_Violet from './img_fonts/heart_Violet.png';

export class LikesQuantity extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            likesQuantity : 0,
        }
    }
updateLikes() {
    var likes = this.state.likesQuantity += 1;
    this.setState({
        likesQuantity: likes
        })
    }
    render() {
        return (
            <div className='likes-quantity'>
                <img onClick={this.updateLikes.bind(this)} src={heart_Violet} alt='heart_Violet' />
                <div> {this.state.likesQuantity} </div>
            </div>
        )
    }
}
export class Step extends React.Component {
    render() {
        return(
            <div className='step-container'>
                <p>{this.props.stepNumber}</p>
                <div className='step-wrapper'>
                    <div>
                        <img src={this.props.stepImg} alt='step-image' />
                    </div>
                    <div>
                        <p>{this.props.stepText}</p>
                    </div>
                </div>
            </div>
        )
    }
}

function IngredientsList(props) {
    const numbers = props.numbers;
    const ListIngredients = numbers.map((number) =>
    <li key={number.toString()}>{number}</li>
    );
    return(
        <ul>{ListIngredients}</ul>
    );
}
const numbers = ['4 eggs', '1/2 cup sugar', '250g mascarpone', '1/3 cup coffee liqueur', '200ml thickened cream', '2 t.s. instant coffee powder',
                '2 cups warm water', '28 finger biscuits', '1 t.s. cocoa powder'];

export class Ingredients extends React.Component {
    render() {
        return(
            <div>
                <p className='indredients'>Ingredients</p>
                <IngredientsList numbers={numbers} />
                <div className='devide-line'></div>
            </div>
        )
    }
}

export class Recipe extends React.Component {
    render() {
        return(
            <div className='recipe-container'>
                <img src={this.props.recipeImg} alt='recipe-image' />
                <h1>{this.props.recipeName}</h1>
                <LikesQuantity />
                <Ingredients />
                <Step stepNumber={'1'} stepImg={Step1} stepText={'Beat egg yolks and sugar together until pale and creamy. Gently fold in mascarpone and liqueur. Whip cream to firm peaks.'} />
                <Step stepNumber={'2'} stepImg={Step2} stepText={'Beat eggwhites until stiff peaks form. Fold into mascarpone mixture. Cover with plastic wrap.'} />
                <Step stepNumber={'3'} stepImg={Step3} stepText={'Combine coffee and warm water in a shallow dish, stirring until coffee dissolves. Using half the biscuits, dip biscuits 1 at a time in coffee, turning to coat. Place, in a single layer.'} />
                <Step stepNumber={'4'} stepImg={Step4} stepText={'Spread half the mascarpone mixture over biscuits to cover. Repeat layers with remaining biscuits, coffee and mascarpone mixture. Cover and refrigerate for 4 hours.'} />
                <Step stepNumber={'5'} stepImg={Step5} stepText={'Dust top with cocoa powder and serve.'} />
            </div>
        )
    }
}
