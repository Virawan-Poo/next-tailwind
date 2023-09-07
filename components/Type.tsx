export interface IUserData {
  id: number;
  name: string;
  username: string;
  email: string;
  address: userAddress;
  phone: string;
  website: string;
  company: userCompany;
}

export interface userAddress {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: {
    lat: string;
    lng: string;
  };
}

export interface userCompany {
  name: string;
  catchPhrase: string;
  bs: string;
}
