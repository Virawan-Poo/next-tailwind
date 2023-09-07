export default async function GetData<T>(url: string): Promise<T> {
  try {
    const response: Response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Failed to fetch data: ${response.statusText}`);
    }
    const data: T = await response.json();
    return data;
  } catch (error) {
    throw new Error(`An error occurred while fetching data: ${error}`);
  }
}
