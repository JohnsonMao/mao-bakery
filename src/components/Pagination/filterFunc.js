export default function filterFunc( data, filterType ) {
  switch( filterType ) {
    case 'all':
      return data;
    case 'festival':
      return data.filter(item => item.badge === "節日精選");
    case 'popularity':
      return data.filter(item => item.badge === "人氣推薦");
    case 'new':
      return data.filter(item => item.badge === "新品上市");
    case 'food':
      return data.filter(item => item.badge === "食材");
    case 'tool':
      return data.filter(item => item.badge === "器具");
    default:
      return;
  }
}