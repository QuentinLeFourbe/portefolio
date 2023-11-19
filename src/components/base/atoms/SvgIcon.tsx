import { SvgIconName } from "../../../types/Icon";
import Beaker from "../../../assets/icons/beaker.svg?react";
import Cog from "../../../assets/icons/cog.svg?react";
import Heart from "../../../assets/icons/heart.svg?react";
import Sparkles from "../../../assets/icons/sparkles.svg?react";
import ReactIcon from "../../../assets/icons/react.svg?react";
type SvgIconProps = {
  icon: SvgIconName;
};

function SvgIcon({ icon }: SvgIconProps) {
  let svgIcon = null;
  switch (icon) {
    case "beaker":
      svgIcon = <Beaker />;
      break;
    case "cog":
      svgIcon = <Cog />;
      break;
    case "heart":
      svgIcon = <Heart />;
      break;
    case "sparkles":
      svgIcon = <Sparkles />;
      break;
    case "react":
      svgIcon = <ReactIcon />;
      break;
    default:
      break;
  }

  return svgIcon;
}

export default SvgIcon;
