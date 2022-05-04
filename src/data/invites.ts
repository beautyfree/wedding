type Invites = {
  [slug in string]: {
    message: string;
    [key: string]: any;
  };
};

export const invites: Invites = {
  nikavanya: {
    message: `<br/> Ника и Ваня`,
  },
};
