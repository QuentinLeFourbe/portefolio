import { IconName } from "../../types/Icon";

type IconProps = {
  icon: IconName;
  className?: string;
};

function Icon({ icon, className }: IconProps) {
  let iconSrc = "";
  switch (icon) {
    case "valise":
      iconSrc = "src/assets/valise.svg";
      break;
    case "telephone":
      iconSrc = "src/assets/telephone.svg";
      break;
    case "mail":
      iconSrc = "src/assets/mail.svg";
      break;
    case "calendrier":
      iconSrc = "src/assets/calendrier.svg";
      break;
    case "livre":
      iconSrc = "src/assets/livre.svg";
      break;
    case "pin":
      iconSrc = "src/assets/pin.svg";
      break;
    default:
      break;
  }

  return <img className={className} src={iconSrc} />;
}

export default Icon;
