export type User = {
  username: string;
  pin: string;
  avatar: string;
};

export type Gameplay = {
  level: number;
  score: number;
  timestamp: string;
};

export type Player = {
  name: string;
  gameplay: Gameplay[];
};
