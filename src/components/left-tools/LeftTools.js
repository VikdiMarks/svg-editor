import React from "react";
import { BsFillCursorFill } from "react-icons/bs";
import { MdRectangle, MdPolyline } from "react-icons/md";
import { TbOvalVerticalFilled } from "react-icons/tb";
import { BiPolygon } from "react-icons/bi";
import { AiOutlineLine } from "react-icons/ai";
import ToolsButton from "./components/tools-button/ToolsButton";

function LeftTools() {
  const buttons = [
    {
      name: "cursor",
      icon: BsFillCursorFill,
      id: 1,
    },
    {
      name: "rectangle",
      icon: MdRectangle,
      id: 2,
    },
    {
      name: "ellipse",
      icon: TbOvalVerticalFilled,
      id: 3,
    },
    {
      name: "polygon",
      icon: BiPolygon,
      id: 4,
    },
    {
      name: "outline",
      icon: AiOutlineLine,
      id: 5,
    },
    {
      name: "polyline",
      icon: MdPolyline,
      id: 6,
    },
  ];

  return (
    <div className="left-tools">
      {buttons.map(({ name, icon, id }) => (
        <ToolsButton name={icon} key={id} />
      ))}
    </div>
  );
}

export default LeftTools;
