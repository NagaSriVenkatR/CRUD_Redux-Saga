const API_BASE_URL = "https://674435e8b4e2e04abea144c6.mockapi.io/signup";
export const createEntryAPI = async (data) => {
  const response = await fetch(`${API_BASE_URL}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  if (!response.ok) throw new Error("Failed to create entry");
  return response.json();
};
export const updateEntryAPI = async (id, data) => {
  const response = await fetch(`${API_BASE_URL}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  if (!response.ok) throw new Error("Failed to update entry");
  return response.json();
};
export const deleteEntryAPI = async (id) => {
  const response = await fetch(`${API_BASE_URL}/${id}`,{
    method:"DELETE",
  });
  if(!response.ok){
    throw new Error("Failed to delete entry");
  }
  return response.json();
}
