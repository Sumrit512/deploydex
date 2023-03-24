import React from "react";
import Text from "../Text/Text";
import Dropdown from "../Dropdown/Dropdown";
import Button from "../Button/Button";
import LanguageIcon from "../Svg/Icons/Language";
import MenuButton from "./MenuButton";
import { Colors } from "../../theme";
import { Language } from "./types";
import { Position } from "../Dropdown/types";
import { Scale } from "../Button/types";

interface Props {
  currentLang: string;
  langs: Language[];
  setLang: (lang: Language) => void;
  color: keyof Colors;
  dropdownPosition?: Position;
  buttonScale?: Scale;
  hideLanguage?: boolean;
}

const LangSelector: React.FC<React.PropsWithChildren<Props>> = ({
  currentLang,
  langs,
  color,
  setLang,
  dropdownPosition = "bottom",
  buttonScale = "md",
  hideLanguage = false,
}) => (
  <Dropdown
    position={dropdownPosition}
    target={
      <Button scale={buttonScale} variant="text" startIcon={
      <LanguageIcon color={color} width="24px" />
      // <svg fill="text" height="24px" width="24px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
      // viewBox="0 0 24 24" ><path d="M14.022,7h1a1.0013,1.0013,0,0,1,1,1V9a1,1,0,0,0,2,0V8a3.00328,3.00328,0,0,0-3-3h-1a1,1,0,0,0,0,2Zm-4,9h-1a1.0013,1.0013,0,0,1-1-1V14a1,1,0,0,0-2,0v1a3.00328,3.00328,0,0,0,3,3h1a1,1,0,0,0,0-2Zm11-1a1,1,0,0,0,0-2h-3v-.5a1,1,0,0,0-2,0V13h-3a1,1,0,0,0,0,2h5.18427a6.72756,6.72756,0,0,1-1.22553,2.52667,6.66828,6.66828,0,0,1-.62915-.98272.99972.99972,0,1,0-1.77929.9121,8.67791,8.67791,0,0,0,.9591,1.468A6.6182,6.6182,0,0,1,13.10645,20.023a1.00008,1.00008,0,0,0,.42675,1.9541,8.63506,8.63506,0,0,0,3.445-1.62164,8.72368,8.72368,0,0,0,3.46857,1.62115,1,1,0,1,0,.43066-1.95312,6.72477,6.72477,0,0,1-2.4461-1.09009A8.73637,8.73637,0,0,0,20.24371,15ZM9.05176,11.24268a1.00011,1.00011,0,0,0,1.94043-.48536L9.23486,3.72754a2.28107,2.28107,0,0,0-4.42578,0L3.05176,10.75732a1.00011,1.00011,0,0,0,1.94043.48536L5.5528,9H8.49115ZM6.0528,7l.69671-2.78711a.2913.2913,0,0,1,.54492,0L7.99115,7Z"/></svg>
      }>
        {!hideLanguage && <Text color={color}>{currentLang?.toUpperCase()}</Text>}
      </Button>
    }
  >
    {langs.map((lang) => (
      <MenuButton
        key={lang.locale}
        fullWidth
        onClick={() => setLang(lang)}
        // Safari fix
        style={{ minHeight: "32px", height: "auto" }}
      >
        {lang.language}
      </MenuButton>
    ))}
  </Dropdown>
);

export default React.memo(LangSelector, (prev, next) => prev.currentLang === next.currentLang);
