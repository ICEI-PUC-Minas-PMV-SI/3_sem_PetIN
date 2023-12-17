export interface SignupHTTPRequestBody {
  name: string;
  birthdate: string;
  cpf: string;
  rg: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface SignupHTTPResponse {
  status: 200;
  data: {
    id: string;
    name: string;
    birthdate: string;
    cpf: string;
    rg: string;
    email: string;
    password: string;
  };
  error?: string;
}
