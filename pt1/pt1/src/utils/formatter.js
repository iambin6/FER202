export const formatCurrency = (amount) =>
  amount.toLocaleString('vi-VN') + ' VND';

export const formatDate = (dateStr) => {
  const d = new Date(dateStr);
  if (Number.isNaN(d.getTime())) return dateStr;
  return d.toLocaleDateString('vi-VN');
};
