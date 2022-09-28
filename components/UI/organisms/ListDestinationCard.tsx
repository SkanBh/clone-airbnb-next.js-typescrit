import React, { useState } from "react";
import CardDestinationWithTitle from "../molecules/CardDestinationWithTitle";
const destinations = [
  {
    url: "https://a0.muscache.com/pictures/f9ec8a23-ed44-420b-83e5-10ff1f071a13.jpg",
    title: "I’m flexible",
  },
  {
    url: "https://a0.muscache.com/im/pictures/7b5cf816-6c16-49f8-99e5-cbc4adfd97e2.jpg?im_w=320",
    title: "Europe",
  },
  {
    url: "https://a0.muscache.com/im/pictures/f0ece7c0-d9b2-49d5-bb83-64173d29cbe3.jpg?im_w=320",
    title: "France",
  },
  {
    url: "https://a0.muscache.com/im/pictures/66355b01-4695-4db9-b292-c149c46fb1ca.jpg?im_w=320",
    title: "Middle East",
  },
  {
    url: "https://a0.muscache.com/im/pictures/97d76097-22b3-4d87-9459-ad1b90b18d2f.jpg?im_w=320",
    title: "Turkey",
  },
  {
    url: "https://a0.muscache.com/im/pictures/d77de9f5-5318-4571-88c7-e97d2355d20a.jpg?im_w=320",
    title: "Southeast Asia",
  },
  {
    url: "https://a0.muscache.com/im/pictures/ea5598d7-2b07-4ed7-84da-d1eabd9f2714.jpg?im_w=320",
    title: "Italy",
  },
  {
    url: "https://a0.muscache.com/im/pictures/4e762891-75a3-4fe1-b73a-cd7e673ba915.jpg?im_w=320",
    title: "United States",
  },
  {
    url: "https://a0.muscache.com/im/pictures/a0fd6dfc-6bec-4abb-850e-9ab78ed7bf37.jpg?im_w=320",
    title: "Spain",
  },
  {
    url: "https://a0.muscache.com/im/pictures/cd9f2bf0-eefc-4980-b7cb-9c8ca3dae883.jpg?im_w=320",
    title: "Canada",
  },
];
interface Props {
  activeDestination: string;
  handleClick: (destination: string) => void;
}
const ListDestinationCard = ({ activeDestination, handleClick }: Props) => {
  return (
    <>
      {destinations.map(({ title, url }, index) => (
        <CardDestinationWithTitle
          key={index}
          title={title}
          url={url}
          active={title === activeDestination}
          handleClick={handleClick}
        />
      ))}
    </>
  );
};

export default ListDestinationCard;
