export interface User {
  id: string;
  name?: string; 
  token?: string;
  admin?: boolean;
  phone?: number;
  owner: any;
}
