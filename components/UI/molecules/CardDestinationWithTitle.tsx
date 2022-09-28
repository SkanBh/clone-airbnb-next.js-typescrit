import React from "react";
import CardDestination from "../atoms/cardDestination";
interface Props {
  url: string;
  active?: boolean;
  title: string;
  handleClick: (destination: string) => void;
}
const CardDestinationWithTitle = ({
  url,
  active,
  title,
  handleClick,
}: Props) => {
  return (
    <div className="w-[132px] h-40 flex flex-col p-1 flex-shrink-0">
      <CardDestination
        url={url}
        active={active}
        handleClick={handleClick}
        title={title}
      />
      <span>{title}</span>
    </div>
  );
};

export default CardDestinationWithTitle;
