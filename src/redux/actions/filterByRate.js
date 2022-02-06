const filterByRate = (list, values) => {
  const newList = list.filter((item) => {
    if (values.includes(item.average_rating)) {
      return item;
    }
  });

  return {
    type: "FILTER_BY_RATE",
    payload: newList.length ? newList : list,
  };
};

export default filterByRate;
