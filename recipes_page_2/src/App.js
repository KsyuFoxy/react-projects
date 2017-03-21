import React, { Component } from 'react';
import logo from './logo.svg';
import './styles.min.css';
import Tiramisu from './img_fonts/Tiramisu.jpg';
import Brownie from './img_fonts/Brownie.jpg';
import chees_cacke from './img_fonts/chees_cacke.jpg';
import Jogurt_dessert from './img_fonts/Jogurt_dessert.jpg';

class Header extends React.Component {
    render() {
        return (
          <div className='header'>
                  <p>My recipes</p>
          </div>
    )
  };
}
class Footer extends React.Component {
    render() {
      return (
        <div className='footer'>
              <p>@ Copyright 2017 All rights reserved</p>
        </div>
      )
    }
  }

class Image extends React.Component {
    render() {
        return(
            <div className='recipe-image'>
                <img src={this.props.src} />
            </div>
        )
    }
}
class Heart extends React.Component {
    render() {
        return(
            <div className='heart'>
            </div>
        )
    }
}
class Box extends React.Component {
    render() {
        return(
            <div className='recipe-wrapper'>
                <Image src={this.props.src}/>
                <Heart />
                <a href={this.props.href} target='_blank'>{this.props.name}</a>
                <p>{this.props.recipe}</p>
            </div>
        )
    }
}

class Page1 extends React.Component {
    render() {
      return (
        <div className='page-container'>
            <Box src={Tiramisu} name={'Tiramisu'} recipe={'Lorem ipsun dolor, amen Lorem ipsun dolor, amen Lorem ipsun dolor, amen'} href={'https://www.w3schools.com'}/>
            <Box src={Brownie} name={'Brownie'} recipe={'Lorem ipsun dolor, amen Lorem ipsun dolor, amen Lorem ipsun dolor, amen'} href={'#'}/>
            <Box src={chees_cacke} name={'Chees cacke'} recipe={'Lorem ipsun dolor, amen Lorem ipsun dolor, amen Lorem ipsun dolor, amen'} href={'#'}/>
            <Box src={Jogurt_dessert} name={'Jogurt dessert'} recipe={'Lorem ipsun dolor, amen Lorem ipsun dolor, amen Lorem ipsun dolor, amen'} href={'#'}/>
        </div>
      )
    }
  }

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Page1 />
        <Footer />
      </div>
    )
  }
}

export default App;
