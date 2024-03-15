export const formatToILS = (amount: number = 0) => {
  return new Intl.NumberFormat("he-IL", {
    style: "currency",
    currency: "ILS",
    maximumFractionDigits: 0,
    compactDisplay: "long",
    notation: "standard",
  }).format(amount);
};

// return integer percentage
export const calculatePercentage = (amount: number, total: number) => {
  return Math.floor((amount / total) * 100);
};

export const shuffleArray = (array: any[]) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};
