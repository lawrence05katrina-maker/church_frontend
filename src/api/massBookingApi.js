import api from "./axios";

// Create mass booking
export const createMassBooking = (data) => {
  return api.post("/mass-bookings", data);
};

// Get all mass bookings (admin)
export const getAllMassBookings = () => {
  return api.get("/mass-bookings");
};

// Update mass booking status
export const updateMassBookingStatus = (id, status) => {
  return api.patch(`/mass-bookings/${id}/status`, { status });
};

// Delete mass booking
export const deleteMassBooking = (id) => {
  return api.delete(`/mass-bookings/${id}`);
};

// Submit payment for mass booking
export const submitMassBookingPayment = (data) => {
  return api.post("/mass-bookings/payment", data, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};

// Get all mass booking payments (admin)
export const getAllMassBookingPayments = () => {
  return api.get("/mass-bookings/payments");
};

// Update payment status
export const updatePaymentStatus = (id, status) => {
  return api.patch(`/mass-bookings/payments/${id}/status`, { status });
};

// Delete payment
export const deletePayment = (id) => {
  return api.delete(`/mass-bookings/payments/${id}`);
};