import React, { Component } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image from "next/image";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div className="h-80 w-80 text-center " id="test">
        <Slider {...settings}>
          <div>
            
            <Image layout="responsive" width={1} height={1}
              className="object-cover rounded-xl"
              src="https://a0.muscache.com/im/pictures/c5878441-bc6f-4db7-b37d-5efe9c47c717.jpg?im_w=720"
              alt="..."
              />
            
          </div>
          <div>
            <img
              className="object-cover h-80 w-80 rounded-xl"
              src="https://a0.muscache.com/im/pictures/1b00beaa-7bf1-4fe7-be4d-83357a205f33.jpg?im_w=720"
              alt="..."
            ></img>
          </div>
          <div>
            <img
              className="object-cover h-80 w-80 rounded-xl"
              src="https://a0.muscache.com/im/pictures/ba62f399-02d0-4165-9055-9300640ad591.jpg?im_w=720"
              alt="..."
            ></img>
          </div>
          <div>
            <img
              className="object-cover h-80 w-80 rounded-xl"
              src="https://a0.muscache.com/im/pictures/8f72025b-4654-4737-9a40-cf5a65cb3ed2.jpg?im_w=720"
              alt="..."
            ></img>
          </div>
          <div>
            <img
              className="object-cover h-80 w-80 rounded-xl"
              src="https://a0.muscache.com/im/pictures/edd0c072-cadb-44a5-b4ea-9b6a3aa88965.jpg?im_w=720"
              alt="..."
            ></img>
          </div>
          <div>
            <img
              className="object-cover h-80 w-80 rounded-xl"
              src="https://a0.muscache.com/im/pictures/d7e9333f-4f39-45b2-88da-cb0d54f85d11.jpg?im_w=720"
              alt="..."
            ></img>
          </div>
          <div>
            <img
              className="object-cover h-80 w-80 rounded-xl"
              src="https://a0.muscache.com/im/pictures/c0c62a79-16c9-4a3b-9465-885ff28dc717.jpg?im_w=720"
              alt="..."
            ></img>
          </div>
          <div>
            <img
              className="object-cover h-80 w-80 rounded-xl"
              src="https://a0.muscache.com/im/pictures/feba1a5e-80be-435f-9169-ffc2b019dd2a.jpg?im_w=720"
              alt="..."
            ></img>
          </div>
          <div>
            <img
              className="object-cover h-80 w-80 rounded-xl"
              src="https://a0.muscache.com/im/pictures/b8fce811-a4e9-4bca-9153-40db8795d391.jpg?im_w=720"
              alt="..."
            ></img>
          </div>
          <div>
            <img
              className="object-cover h-80 w-80 rounded-xl"
              src="https://a0.muscache.com/im/pictures/ac730d60-b17b-4dc3-8417-12c0d62a57a1.jpg?im_w=720"
              alt="..."
            ></img>
          </div>
          <div>
            <img
              className="object-cover h-80 w-80 rounded-xl"
              src="https://a0.muscache.com/im/pictures/84e5f0fa-4f6b-441c-96b6-8c4a978dea99.jpg?im_w=720"
              alt="..."
            ></img>
          </div>
        </Slider>
      </div>
    );
  }
}
