export const userRules = {
  name: {
    min: 1,
    max: 100,
  },
  bio: {
    min: 1,
    max: 1000,
  },
  password: {
    min: 8,
    max: 100,
  },
};

export const postRules = {
  title: {
    min: 1,
    max: 100,
  },
  description: {
    min: 1,
    max: 500,
  },
  content: {
    min: 1,
    max: 5000,
  },
};

export const commentRules = {
  content: {
    min: 1,
    max: 500,
  },
};
