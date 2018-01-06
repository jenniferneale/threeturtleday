import React from 'react'
import { Link } from 'react-router-dom'

const Contact = props => {
    //const {pathname} = props.location || {pathname: '<< no path >>'}
    //console.error('NotFound: %s not found (%o)', pathname, props)
    return (
        <article className="story">
            <div className="row">
                <div className="panel panel-primary col-sm-7" id="email-panel">
                    <div className="panel-heading">
                        <h3 className="panel-title">Email Me</h3>
                    </div>
                    <div className="panel-body">
                        <p className="emailP">I can be reached at <a href="mailto:jeneale6@gmail.com">jeneale6@gmail.com</a>.</p>
                    </div>
                </div>                
            </div>
        </article>
    )
}

export default Contact;
