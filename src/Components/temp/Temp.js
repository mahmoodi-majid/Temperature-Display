import React, { Component } from 'react'
import "./temp.css"
export default class Temp extends Component {
  render() {
    return (
      <div>
        <div className='app-container'>
          <div className='tempPerature-display-container'>
            <div className='temperature-display cold'>
                10&#176;C
            </div>
          </div>
          <div className='button-Container'>
                <button>+</button>
                <button>_</button>
          </div>
        </div>
      </div>
    )
  }
}
