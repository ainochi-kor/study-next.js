export interface ISign {
  nickname: String;
  content: String;
  country: String;
}

export interface ILatestSign extends ISign {
  uuid: number;
  created_at: string;
}
