import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../../style.css';
import '../../colors/green.css';
import twitter from '../../images/icon_twitter.png'

class PageHeader extends Component
{
    constructor(props)
    {
        super(props)
        this.state = {title: '', header_text: '' };
        this.setState({title: props.title, header_text: props.header_text});
    }

    componentDidMount() {

        this.setState({title: this.props.title, header_text: this.props.header_text});
    }

    render()
    {
        return(
            <div className="page_header_photo contact_header">
                <div className="page_header_trans">
                    <div className="page_header_title">
                        <h1>{this.state.title}</h1>
                        <p dangerouslySetInnerHTML={{__html: this.state.header_text}}></p>
                    </div>
                </div>
            </div>
        )
    }
}

export default PageHeader