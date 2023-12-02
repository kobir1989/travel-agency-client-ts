// server side data fetching 3

export const getHotDeals = async () => {
  try {
    const response = await fetch(`${process.env.NEXT_BASE_URL}/tours`);
    return await response.json();
  } catch (err: any) {
    throw new Error('Request Failed', err);
  }
};
