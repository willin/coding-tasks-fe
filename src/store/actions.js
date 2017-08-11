import axios from 'axios';

const actions = {
  async fetch({ commit }, type) {
    const result = await axios.get(`/api/${type}`);
    if (result.data.status === 1) {
      const data = {};
      data[type] = result.data.data;
      commit('fetched', data);
    }
  },
  async getAllData({ dispatch }) {
    await dispatch('fetch', 'user');
    await dispatch('fetch', 'team');
    await dispatch('fetch', 'project');
    await dispatch('fetch', 'label');
    await dispatch('fetch', 'task');
  }
};

export default actions;
