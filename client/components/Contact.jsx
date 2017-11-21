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
                <div className="panel panel-info col-sm-4">
                    <div className="panel-heading">
                        <h3 className="panel-title">New</h3>
                    </div>
                    <div className="panel-body">
                        <p>By reader request, you can now donate to support your favorite projects through PayPal using the button below.</p>
                        <span className="paypalSpan">
                            <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                                <input type="hidden" name="cmd" value="_s-xclick" />
                                <input type="hidden" name="hosted_button_id" value="ANJZ6GC5ZES4N" />
                                <input type="image" className="btn btn-default" border="0" name="submit" alt="Donate" />
                                <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />
                            </form>
                        </span>
                    </div>
                </div>
            </div>
        </article>
    )
}

export default Contact;
