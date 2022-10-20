import React, { Component } from 'react'
import './ServicesHeroImg.scss'

class ServicesHeroImg extends Component {
    render() {
        return (
            <div className='servicesheroimgPage'>
                <div className='hero-img'>
                    <div className='heading'>
                        <h1>{this.props.heading}</h1>
                        <p> {this.props.text} </p>
                    </div>
                </div>

            </div>
        )
    }
}

export default ServicesHeroImg;