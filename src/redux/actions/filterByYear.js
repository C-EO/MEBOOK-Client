const filterByYear = (list, values) => {
  const newList = list.filter((item) => {
    if (values.includes(item.publication_date.slice(0, 4))) {
      return item;
    }
  });

  return {
    type: "FILTER_BY_YEAR",
    payload: newList.length ? newList : list,
  };
};

export default filterByYear;
