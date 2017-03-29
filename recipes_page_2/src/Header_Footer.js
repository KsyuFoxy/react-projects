import React from 'react';

export class Header extends React.Component {
    render() {
        return (
          <div className='header'>
                  <p>My recipes</p>
          </div>
    )
  };
}
export class Footer extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         'marginTop': '132px'
    //     }
    // }
    render() {
        var screenHeight = window.innerHeight;
        var marginTop = {
            'marginTop': '132px'
        }
        console.log('screenHeight:', screenHeight)
        console.log('marginTop', marginTop)

      return (
        <div className='footer' style={marginTop}>
              <p>@ Copyright 2017 All rights reserved</p>
        </div>
      )
    }
  }
