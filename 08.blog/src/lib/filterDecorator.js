const filterDecorator = (callback, filter) => {
  return async () => {
    const data = await callback();
    return data.filter(filter);
  };
};

export default filterDecorator;
