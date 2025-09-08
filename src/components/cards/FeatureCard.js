import { cn } from "@/lib/utils";
import { Icon } from "@iconify/react";

export const FeatureCard = ({
  title,
  description,
  icon,
  className,
  iconClass,
}) => {
  return (
    <div
      className={cn(
        "flex flex-row justify-start items-start gap-4 p-6 rounded-lg",
        className
      )}
    >
      <Icon
        icon={icon}
        className={cn(
          "size-14 p-3 text-[#29375C] dark:text-white",
          iconClass
        )}
      />
      <div>
        <h6 className="text-md text-[#29375C] dark:text-white font-sans font-medium mb-1">{title}</h6>
        <p className="text-sm text-muted">{description}</p>
      </div>
    </div>
  );
};
