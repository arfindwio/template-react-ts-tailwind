// State utama untuk auth
export interface AuthState {
  user: {
    id: string;
    name: string;
    email: string;
  } | null;
  token: string | null;
  loading: boolean;
  error: string | null;
}

// Payload untuk login
export interface LoginPayload {
  email: string;
  password: string;
}

// Payload untuk register
export interface RegisterPayload {
  name: string;
  email: string;
  password: string;
}
