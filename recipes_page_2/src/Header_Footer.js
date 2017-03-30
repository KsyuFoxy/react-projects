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
    render() {
      return (
        <div className='footer'>
              <p>@ Copyright 2017 All rights reserved</p>
        </div>
      )
    }
  }
