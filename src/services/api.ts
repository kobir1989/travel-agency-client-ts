// server side data fetching
// Hot Deals API
export const getHotDeals = async () => {
  try {
    const response = await fetch(`${process.env.NEXT_BASE_URL}/tours`);
    return await response.json();
  } catch (err: any) {
    throw new Error('Request Failed', err);
  }
};
// Hotels List API
export const getHotels = async () => {
  try {
    const response = await fetch(`${process.env.NEXT_BASE_URL}/hotels-list`);
    return await response.json();
  } catch (err: any) {
    throw new Error('Request Failed', err);
  }
};
