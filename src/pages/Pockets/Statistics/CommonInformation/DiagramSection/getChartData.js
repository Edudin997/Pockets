const getChartData = (categories) => {
  let fullSum = 0;
  let sum = 0;
  let categoryCount = 0;

  let categorySum = [];
  let categoryName = [];

  categories.forEach((category) => {
    if (Number(category['transactions_sum']) !== 0) {
      fullSum += Number(category['transactions_sum']);
      categoryCount++;
    }
  });
  if (categoryCount < 5) {
    categories.forEach((category) => {
      if (Number(category['transactions_sum']) !== 0) {
        categorySum.push(((Number(category['transactions_sum']) / fullSum) * 100).toFixed(0));
        categoryName.push(category['name']);
      }
    });
  } else {
    for (let i = 0; i < 4; i++) {
      if (i !== 3) {
        sum += Number(categories[i]['transactions_sum']);
        categorySum.push(((Number(categories[i]['transactions_sum']) / fullSum) * 100).toFixed(0));
        categoryName.push(categories[i]['name']);
      } else {
        categorySum.push((((fullSum - sum) / fullSum) * 100).toFixed(0));
        categoryName.push('Другое');
      }
    }
  }

  return { categoryName, categorySum };
};

export default getChartData;
