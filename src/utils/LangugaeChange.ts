import { AppSettings } from "./AppSettings";
import i18n from "./TranslationConfig"

export const change = () =>{
    if(i18n.language === AppSettings.ENGLISH_LANGUAGE)
        i18n.changeLanguage(AppSettings.POLISH_LANGUAGE);
    else
        i18n.changeLanguage(AppSettings.ENGLISH_LANGUAGE);
}