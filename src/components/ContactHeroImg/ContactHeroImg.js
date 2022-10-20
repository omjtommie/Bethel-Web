import React, { Component } from 'react'
import './ContactHeroImg.scss'

class ContactHeroImg extends Component {
    render() {
        return (
            <div className='contactheroimgPage'>
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

export default ContactHeroImg;