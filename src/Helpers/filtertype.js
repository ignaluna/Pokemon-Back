export const FilterType = (filter, data) => {
   const pokfilter = data.filter(el => el.types.find(el => el === filter));
   return pokfilter;
}

export default FilterType;