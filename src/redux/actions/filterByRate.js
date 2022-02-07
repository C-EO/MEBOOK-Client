const filterByRate = (list, values) => {
  const newList = list.filter((item) => {
    if (values.includes(item.average_rating)) {
      return item;
    }
  });

  return {
    type: "FILTER_BY_RATE",
    payload: values.length ? newList : list,
  };
};

export default filterByRate;
