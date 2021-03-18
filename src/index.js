import countries from './countries';

const isEqual = (str1, str2) => {
  if (!str1) return false;
  if (!str2) return false;
  return str1.toUpperCase() === str2.toUpperCase();
};

const findFlagByPredicate = (countries, predicate) => {
  const country = countries.find(predicate);

  return country ? country.flag : '';
};

export const findFlagByCountryName = (countryName) => {
  return findFlagByPredicate(
    countries,
    ({ name, altSpellings }) =>
      isEqual(name, countryName) ||
      altSpellings.some((altSpelling) => isEqual(altSpelling, countryName)),
  );
};

export const findFlagByNationality = (nationality) => {
  return findFlagByPredicate(countries, ({ demonym }) =>
    isEqual(demonym, nationality),
  );
};

export const findFlagByIso2Code = (iso2Code) => {
  return findFlagByPredicate(countries, ({ iso2 }) => isEqual(iso2, iso2Code));
};

export const findFlagByIso3Code = (iso3Code) => {
  return findFlagByPredicate(countries, ({ iso3 }) => isEqual(iso3, iso3Code));
};
