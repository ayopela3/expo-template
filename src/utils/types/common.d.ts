export type User = {
  id: string;
  email: string;
  name: string;
  avatar: string;
  type: string;
  address: Address;
};

export type Address = {
  street: string;
  city: string;
  state: string;
  zip: string;
  country: string;
};
