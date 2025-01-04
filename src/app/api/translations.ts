import { Translations } from "@/types/Translations";

export const fetchTranslations = async (language: string): Promise<Translations> => {
  const response = await fetch('/translations/constants.json');
  const data: Record<string, Translations> = await response.json();
  return data[language] || data['tr'];
};