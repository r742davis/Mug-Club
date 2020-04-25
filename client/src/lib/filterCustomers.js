export default function filterCustomers(customers = [], search) {
  let filtered = customers.filter((customer) => {
    // Number Search
    let id = customer.mugClub.clubId.toString();
    let number = search === id ? customer : null;

    // Name Search
    let strings =
      customer.name.first.toLowerCase().includes(search.toLowerCase()) ||
      customer.name.last.toLowerCase().includes(search.toLowerCase());

    if (strings) {
      return strings;
    }
    if (number) {
      return number;
    }
    return null;
  });
  return filtered;
};