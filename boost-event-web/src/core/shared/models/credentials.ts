export type Credentials = {
  email: string;
  password: string;
}

export type Auth = {
  id: string;
  name: string;
  email: string;
  accessToken: string;
  expiration: Date;
}