export async function getLiveLogisticsData() {
  const response = await fetch('https://standard.open-contracting.org/latest/en/');
  const data = await response.json();
  return data;
}
