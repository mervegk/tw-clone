import { Menu } from "@/types/translations/Menu";
import { Translations } from "@/types/translations/Translations";

export const fetchTranslations = async (language: string): Promise<Translations> => {
  const response = await fetch('/translations/constants.json');
  const data: Record<string, Translations> = await response.json();
  return data[language] || data['tr'];
};

export const fetchMenuTranslations = async (language: string): Promise<Menu> => {
  const response = await fetch('/translations/menu.json');
  const data: Record<string, Menu> = await response.json();
  return data[language] || data['tr'];
}