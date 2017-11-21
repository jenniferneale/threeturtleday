import React from 'react'
import { Link } from 'react-router-dom'

const Portfolio = props => {
    
    return (
        <article className="story">
            <div className="portfolio-bg img-responsive col-xs-12 rounded">
                <div className="port-cat col-md-3 rounded">
                    <h3>Experience</h3>
                    <ul>
                        <li>Sales Coordinator at <a href="http://global.oup.com">Oxford University Press</a> (May 2014 - August 2017)</li>
                        <li>Research Assistant in the <a href="https://sites.google.com/site/sidneydmello/projects">Emotive Computing Lab</a> at University of Notre Dame (August 2013 - August 2014)</li>
                        <li>Technical Writer at <a href="http://www.globaljetservices.com/business/posters-cockpits.php">Global Jet Services</a> (June 2012 - August 2012)</li>
                        <li>Grant Research Assistant working on <a href="http://wordnet.princeton.edu">Princeton WordNet</a> at Vassar College (May 2010 - May 2011)</li>
                    </ul>
                </div>
                <div className="port-cat col-md-3 rounded">
                    <h3>Education</h3>
                    <ul>
                        <li><a href="https://www.gracehopper.com/curriculum">Grace Hopper Program</a> at Fullstack Academy '17, Certificate in Software Engineering</li>
                        <li>Vassar College '11, BA, Cognitive Science major and coursework in Philosophy, Computer Science, Psychology, German, Robotics</li>
                        <li>Southern Connecticut State University, fiction courses</li>
                        <li>Watkinson School '07, High School and <a href="http://www.watkinson.org/podium/default.aspx?t=137159" className="disabled" target="_blank">Creative Arts Diploma</a></li>
                    </ul>
                </div>
                <div className=" port-cat col-md-3 rounded">
                    <h3>Interests</h3>
                    <ul>
                        <li>Interactive stories</li>
                        <li>Software development</li>
                        <li>Data analysis</li>
                    </ul>
                </div>

                <div className="resumeDiv rounded">
                    <a href="https://www.dropbox.com/s/mpnlqe4nuc4bpff/JNealeResume2017.pdf?dl=0" className="resumeLink"><button type="button" className="btn btn-default">Download Jenn's Resume (PDF)</button></a>
                </div>
			</div>
        </article>
    )
}

export default Portfolio;
