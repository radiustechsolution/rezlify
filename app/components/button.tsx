export const ButtonComp = (data: {
  title: string;
  bgColor?: string;
  fullWidth?: boolean;
}) => {
  return (
    <button
      className={` ${data.bgColor ? data.bgColor : "bg-accent"} ${data.fullWidth && "w-full"}  text-white text-[14px] cursor-pointer px-12 py-3 rounded-md`}
    >
      {data.title}
    </button>
  );
};
