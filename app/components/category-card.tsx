import { FaTv } from "react-icons/fa";
import { IoWatchOutline } from "react-icons/io5";
import { LuSmartphone } from "react-icons/lu";
import { MdOutlineCameraAlt, MdOutlineComputer } from "react-icons/md";
import { RiHeadphoneLine } from "react-icons/ri";
import { VscGame } from "react-icons/vsc";

export const CategoryCard = () => {
  // CategoryObject
  const CategoryObject = [
    {
      title: "Phones",
      icon: <LuSmartphone size={45} />,
    },
    {
      title: "Computers",
      icon: <MdOutlineComputer size={45} />,
    },
    {
      title: "SmhartWatch",
      icon: <IoWatchOutline size={45} />,
    },
    {
      title: "Camera",
      icon: <MdOutlineCameraAlt size={45} />,
    },
    {
      title: "HeadPhones",
      icon: <RiHeadphoneLine size={45} />,
    },
    {
      title: "Gaming",
      icon: <VscGame size={45} />,
    },
    {
      title: "TV",
      icon: <RiHeadphoneLine size={45} />,
    },
  ];

  return (
    <div className="flex items-center justify-between gap-4">
      {CategoryObject.map((v, i) => (
        <div
          key={i}
          className="w-32.5 h-26.25 sm:w-42.5 sm:h-36.25 rounded-md gap-3 flex flex-col items-center justify-center  border border-[#b3b3b3]"
        >
          {v.icon}
          <p>{v.title}</p>
        </div>
      ))}
    </div>
  );
};
