import api from "./axios";

// Get all active fathers by category (public)
export const getActiveFathers = () => {
  return api.get("/fathers/active");
};

// Get all fathers (admin)
export const getAllFathers = () => {
  return api.get("/fathers/admin/all");
};

// Get fathers statistics (admin)
export const getFathersStats = () => {
  return api.get("/fathers/admin/stats");
};

// Get fathers by category (admin)
export const getFathersByCategory = (category) => {
  return api.get(`/fathers/admin/category/${category}`);
};

// Get father by ID (admin)
export const getFatherById = (id) => {
  return api.get(`/fathers/admin/${id}`);
};

// Create father (admin)
export const createFather = (data) => {
  return api.post("/fathers/admin", data);
};

// Update father (admin)
export const updateFather = (id, data) => {
  return api.put(`/fathers/admin/${id}`, data);
};

// Delete father (admin)
export const deleteFather = (id) => {
  return api.delete(`/fathers/admin/${id}`);
};

// Toggle active status (admin)
export const toggleFatherActive = (id) => {
  return api.patch(`/fathers/admin/${id}/toggle-active`);
};

// Update display order (admin)
export const updateFatherDisplayOrder = (id, displayOrder) => {
  return api.patch(`/fathers/admin/${id}/display-order`, { display_order: displayOrder });
};