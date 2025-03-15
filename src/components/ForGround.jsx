import Card from "./Card";
import { useRef } from "react";

const ForGround = () => {
  const ref = useRef(null);

  const data = [
    {
      text: " Lorem ipsum dolor,",
      filesize: "0.9mb",
      close: false,
      tag: {
        isOpen: true,
        tagTitle: "Download Now",
        tagColor: "green",
      },
    },
    {
      text: " Lorem ipsum dolor,",
      filesize: "0.9mb",
      close: false,
      tag: {
        isOpen: false,
        tagTitle: "Download ",
        tagColor: "blue",
      },
    },
    {
      text: " Lorem ipsum dolor,",
      filesize: "0.9mb",
      close: false,
      tag: {
        isOpen: true,
        tagTitle: "Upload",
        tagColor: "red",
      },
    },
  ];

  return (
    <div
      ref={ref}
      className=" fixed top-0 left-0 w-full h-screen z-[3] flex gap-10 flex-wrap p-5 "
    >
      {data.map((item, index) => (
        <div key={index}>
          <Card data={item} refrence={ref} />
        </div>
      ))}
    </div>
  );
};

export default ForGround;
