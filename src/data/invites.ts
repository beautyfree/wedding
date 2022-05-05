type Invites = {
  [slug in string]: {
    message: string;
    single?: boolean;
  };
};

export const invites: Invites = {
  mamapapa: {
    message: `Дорогие <br/> родители`,
  },

  //
  plehanovy: {
    message: `Дорогие <br/> Ника и Иван`,
  },
  nastya: {
    message: `Дорогая <br/> Настюша`,
    single: true,
  },
  zaycevy: {
    message: `Дорогие <br/> Ирина и Алексей`,
  },
  vera: {
    message: `Дорогая <br/> тетя Вера`,
  },
  rydiny: {
    message: `Дорогие <br/> Ольга и Андрей`,
  },
  "minkevichy-senior": {
    message: `Дорогие Екатерина<br/> и Владимир`,
  },
  "minkevichy-junior": {
    message: `Дорогие <br/> Ирина и Иван`,
  },
  melnikovy: {
    message: `Дорогие Ольга<br/> и Константин`,
  },
  sashavasya: {
    message: `Дорогие Александра<br/> и Василий`,
  },
  oksakova: {
    message: `Дорогая <br/> Екатерина`,
    single: true,
  },
  lizaoleg: {
    message: `Дорогие <br/> Елизавета и Олег`,
  },
  stas: {
    message: `Дорогой <br/> Станислав`,
    single: true,
  },

  //
  "elizarovy-senior": {
    message: `Дорогие бабушка,<br/> Ольга и Егор`,
  },
  alinavasya: {
    message: `Дорогие <br/> Алина и Василий`,
  },
  sashadanya: {
    message: `Дорогие Александр<br/> и Даниил`,
  },
  poniny: {
    message: `Дорогие <br/> Ольга и Иван`,
  },
  sherbakovy: {
    message: `Дорогие Елена<br/> и Александр`,
  },
  orekhovy: {
    message: `Дорогие Елизавета<br/> и Андрей`,
  },
  mikhail: {
    message: `Дорогой <br/> Михаил`,
    single: true,
  },
  evstratovy: {
    message: `Дорогие <br/> Елена и Никита`,
  },
  satanovy: {
    message: `Дорогие <br/> Татьяна и Роман`,
  },
  lebedevy: {
    message: `Дорогие <br/> Ольга и Илья`,
  },
  andronovy: {
    message: `Дорогие Екатерина<br/> и Денис`,
  },
  lebedev: {
    message: `Дорогой <br/> Илья`,
    single: true,
  },

  //
  milovanov: {
    message: `Дорогой <br/> Дима`,
    single: true,
  },
};
