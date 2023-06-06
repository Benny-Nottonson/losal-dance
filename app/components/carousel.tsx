import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

export default class NextJsCarousel extends Component {
	render() {
		return (
			<div className="bg-white">
				<Carousel>
					<div>
						<img src="i1.jpeg" alt="image1" />
						<p className="legend">Image 1</p>
					</div>
					<div>
						<img src="i1.jpeg" alt="image2" />
						<p className="legend">Image 2</p>
					</div>
				</Carousel>
			</div>
		);
	}
}
