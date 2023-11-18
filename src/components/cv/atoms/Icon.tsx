import { IconName } from "../../../types/Icon";

type IconProps = {
  icon: IconName;
  className?: string;
};

function Icon({ icon, className }: IconProps) {
  let iconSrc = "";
  switch (icon) {
    case "valise":
      iconSrc = "src/assets/cv/valise.svg";
      break;
    case "telephone":
      iconSrc = "src/assets/cv/telephone.svg";
      break;
    case "mail":
      iconSrc = "src/assets/cv/mail.svg";
      break;
    case "calendrier":
      iconSrc = "src/assets/cv/calendrier.svg";
      break;
    case "livre":
      iconSrc = "src/assets/cv/livre.svg";
      break;
    case "pin":
      iconSrc = "src/assets/cv/pin.svg";
      break;
    case "diplome":
      iconSrc = "src/assets/cv/diplome.svg";
      break;
    case "cake":
      iconSrc = "src/assets/cv/cake.svg";
      break;
    default:
      break;
  }

  return <img className={className} src={iconSrc} />;
}

export default Icon;
