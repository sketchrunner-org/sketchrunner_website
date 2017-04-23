import React, { Component, Children, PropTypes } from 'react';
import './testimonials.scss';

export default class Testimonials extends Component {

	render() {
		return (
			<div className="featured-testimonials-section">
			  <div className="row columns">
			    <h1>What people say about Runner…</h1>
			  </div>
			  <div className="featured-testimonials row">
			    <div className="columns">
			      <div className="testimonial">
			        <img className="profile-pic" src="http://placekitten.com/g/145" />
			        <p className="featured-testimonials-quotation">Hide when guests come over instantly break out into full speed make cat go crazy. Meow mix meow meow cat things and purring. catnip.</p>
			      </div>
			    </div>
			    <div className="columns">
			      <div className="testimonial">
			        <img className="profile-pic" src="http://placekitten.com/g/175" />
			        <p className="featured-testimonials-quotation">Hide when guests come over instantly break out into full speed make cat go crazy. Meow mix meow meow cat things and purring. catnip.</p>
			      </div>
			    </div>
			  </div>
			  <div className="featured-testimonials row">
			    <div className="columns">
			      <div className="testimonial">
			        <img className="profile-pic" src="http://placekitten.com/g/200" />
			        <p className="featured-testimonials-quotation">Hide when guests come over instantly break out into full speed make cat go crazy. Meow mix meow meow cat things and purring. catnip.</p>
			      </div>
			    </div>
			    <div className="columns">
			      <div className="testimonial">
			        <img className="profile-pic" src="http://placekitten.com/g/150" />
			        <p className="featured-testimonials-quotation">Hide when guests come over instantly break out into full speed make cat go crazy. Meow mix meow meow cat things and purring. catnip.</p>
			      </div>
			    </div>
			  </div>
			</div>
		);
	}
}
