
export const registerUser = async (userData) => {
  const res = await fetch(`${API_URL}/auth/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(userData),
  }
  return res.json();
};

export const loginUser = async (userData) => {
  const res = await fetch(`${API_URL}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(userData),
  });
  return res.json();
};

export const createAppointment = async (appointmentData, token) => {
  const res = await fetch(`${API_URL}/appointments`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(appointmentData),
  });
  return res.json();
};

export const getAppointments = async (token) => {
  const res = await fetch(`${API_URL}/appointments`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.json();
};
