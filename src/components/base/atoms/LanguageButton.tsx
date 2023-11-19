import FrenchFlag from "../../../assets/icons/french-flag.svg?react";
import UkFlag from "../../../assets/icons/uk-flag.svg?react";
import { css, cx } from "../../../../styled-system/css";
import { useTranslation } from "react-i18next";

type LanguageButtonProps = {
  className?: string;
};

function LanguageButton({ className }: LanguageButtonProps) {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;
  const notFrench = currentLanguage !== "fr";
  console.log(currentLanguage);
  return (
    <button
      type="button"
      onClick={() => i18n.changeLanguage(notFrench ? "fr" : "en")}
      className={cx(buttonStyle, className)}
    >
      {notFrench ? <UkFlag /> : <FrenchFlag />}
    </button>
  );
}

export default LanguageButton;

const buttonStyle = css({
  borderRadius: "50%",
  width: { base: "35px", sm: "50px" },
  height: { base: "35px", sm: "50px" },
  padding: "8px",
  backgroundColor: "buttons.secondary.background.base",
  cursor: "pointer",
  transition: "all 0.2s ease-in-out",
  "& svg": {
    width: "100%",
    height: "100%",
  },
  "&:hover": {
    backgroundColor: "buttons.secondary.background.hover",
  },
});
