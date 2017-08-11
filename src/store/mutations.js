const state = {
  user: [],
  team: [],
  project: [],
  label: [],
  task: []
};

/* eslint-disable no-param-reassign */
const mutations = {
  fetched(ctx, data) {
    Object.keys(data).forEach((key) => {
      ctx[key] = data[key];
    });
  }
};

module.exports = { state, mutations };
