const filterByPrice = (list, value) => {
  const newList = list.filter((item) => {
    if (item.price >= value.min && item.price <= value.max) {
      return item;
    }
  });
  return {
    type: "FILTER_BY_PRICE",
    payload: newList,
  };
};

export default filterByPrice;
