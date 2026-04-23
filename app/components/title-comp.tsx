export const TitleComp = ({ title }: { title: string }) => {
  return (
    <div className="flex items-center gap-3">
      <span className="bg-accent rounded-sm w-5 h-10 inline-block "></span>
      <p className="text-[14px] font-medium text-accent">{title}</p>
    </div>
  );
};
