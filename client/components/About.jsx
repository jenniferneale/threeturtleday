import React from 'react'
import { Link } from 'react-router-dom'

const About = props => {
    
    return (
        <article>
            <div className="bubble-div col-xs-12">
                <img className="profile-pic col-xs-6 col-md-2" src="/images/profilesm.jpg" />
                <p className="bubble rounded col-xs-11 col-md-8">I'm a full stack developer working primarily in Javascript, React, C#, Unity, and Java, 
                with a background in Cognitive Science research, creative and technical writing, and publishing. 
                I love storytelling in games and other interactive media! I also enjoy fancy cheeses and industrial music.</p>
            </div>
            <div className="portfolio-bg img-responsive container col-xs-12 rounded">
            
                <div className="port-cat col-xs-11 col-md-3 rounded">
                    <h3>Experience</h3>
                    <ul>
                        <li>Sales Coordinator at <a href="http://global.oup.com">Oxford University Press</a> (May 2014 - August 2017)</li>
                        <li>Research Assistant in the <a href="https://sites.google.com/site/sidneydmello/projects">Emotive Computing Lab</a> at University of Notre Dame (August 2013 - August 2014)</li>
                        <li>Technical Writer at <a href="http://www.globaljetservices.com/business/posters-cockpits.php">Global Jet Services</a> (June 2012 - August 2012)</li>
                        <li>Grant Research Assistant working on <a href="http://wordnet.princeton.edu">Princeton WordNet</a> at Vassar College (May 2010 - May 2011)</li>
                    </ul>
                </div>
                <div className="port-cat col-xs-11 col-md-3 rounded">
                    <h3>Education</h3>
                    <ul>
                        <li><a href="https://www.gracehopper.com/curriculum">Grace Hopper Program</a> at Fullstack Academy '17, Certificate in Software Engineering</li>
                        <li>Vassar College '11, BA, Cognitive Science major</li>
                        <li>Southern Connecticut State University, fiction courses</li>
                        <li>Watkinson School '07, High School and <a href="http://www.watkinson.org/podium/default.aspx?t=137159" className="disabled" target="_blank">Creative Arts Diploma</a></li>
                    </ul>
                </div>
                <div className=" port-cat col-xs-11 col-md-2 rounded">
                    <h3>Interests</h3>
                    <ul>
                        <li>Interactive stories</li>
                        <li>Software development</li>
                        <li>Data analysis</li>
                    </ul>
                </div>
                <div className=" port-cat col-xs-11 col-md-2 rounded">
                    <h3>Favorite Technologies</h3>
                    <ul>
                        <li>Unity</li>
                        <li>C#</li>
                        <li>Javascript</li>
                        <li>Java</li>
                        <li>Node</li>
                        <li>React</li>
                        <li>Redux</li>
                        <li>Express</li>
                        <li>PostgreSQL</li>                        
                    </ul>
                </div>
                <div className="resumeDiv rounded">
                    <a href="https://www.dropbox.com/s/mpnlqe4nuc4bpff/JNealeResume2017.pdf?dl=0" className="resumeLink"><button type="button" className="btn btn-default">Download Jenn's Resume (PDF)</button></a>
                </div>
			</div>
        </article>
    )
}

export default About;
