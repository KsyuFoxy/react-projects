import React from 'react';
import Step1 from './img_fonts/Step1.jpg';
import Step2 from './img_fonts/Step2.jpg';
import Step3 from './img_fonts/Step3.jpg';
import Step4 from './img_fonts/Step4.jpg';
import Step5 from './img_fonts/Step5.jpg';

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

export class Recipe extends React.Component {
    render() {
        return(
            <div className='recipe-container'>
                <img src={this.props.recipeImg} alt='recipe-image' />
                <h1>{this.props.recipeName}</h1>
                <Step stepNumber={'1'} stepImg={Step1} stepText={'Put the cream, mascarpone, Marsala and sugar in a large bowl. Whisk until all ingredients completely combined and have the consistency of thickly whipped cream.'} />
                <Step stepNumber={'2'} stepImg={Step2} stepText={'Consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore etdolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata'} />
                <Step stepNumber={'3'} stepImg={Step3} stepText={'Sed diam nonumy eirmod tempor invidunt ut labore etdolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata'} />
                <Step stepNumber={'4'} stepImg={Step4} stepText={'Ut labore etdolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata'} />
                <Step stepNumber={'5'} stepImg={Step5} stepText={'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore etdolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata'} />
            </div>
        )
    }
}
