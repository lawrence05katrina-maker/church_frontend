import api from "./axios";

// Create prayer
export const createPrayer = (data) => {
  console.log('Creating prayer request with data:', data);
  return api.post("/prayers", data)
    .then(response => {
      console.log('Prayer created successfully:', response.data);
      return response;
    })
    .catch(error => {
      console.error('Prayer creation failed:', error.response?.data || error.message);
      throw error;
    });
};

// Get all prayers (admin)
export const getAllPrayers = () => {
  console.log('Fetching all prayers...');
  return api.get("/prayers");
};

// Delete prayer
export const deletePrayer = (id) => {
  console.log('Deleting prayer with id:', id);
  return api.delete(`/prayers/${id}`);
};
