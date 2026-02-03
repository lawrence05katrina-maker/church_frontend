import api from "./axios";

// Get donation purposes
export const getDonationPurposes = () => {
  return api.get("/donations/purposes");
};

// Submit donation
export const submitDonation = (data) => {
  return api.post("/donations/submit", data, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};

// Get all donations (admin)
export const getAllDonations = () => {
  return api.get("/donations");
};

// Get donation statistics (admin)
export const getDonationStats = () => {
  return api.get("/donations/stats");
};

// Update donation status (admin)
export const updateDonationStatus = (id, status) => {
  return api.patch(`/donations/${id}/status`, { status });
};

// Get donation by ID
export const getDonationById = (id) => {
  return api.get(`/donations/${id}`);
};

// Delete donation (admin)
export const deleteDonation = (id) => {
  return api.delete(`/donations/${id}`);
};