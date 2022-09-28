import clsx from "clsx";
import Image from "next/image";
import React from "react";

interface Props {
  url: string;
  active?: boolean;
  handleClick: (activeDestionation: string) => void;
  title: string;
}
const CardDestination = ({ url, active, handleClick, title }: Props) => {
  return (
    <button
      className={clsx(
        "w-[124px] h-[124px] rounded-lg border  mb-auto relative outline-none",
        active ? "border-2 border-gray-900" : "border"
      )}
      onClick={() => handleClick(title)}
    >
      <Image
        objectFit="cover"
        src={url}
        layout="fill"
        alt={title}
        className="rounded-lg"
      />
    </button>
  );
};

export default CardDestination;
