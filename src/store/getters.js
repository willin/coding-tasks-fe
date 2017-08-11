const getters = {
  tasks: (state) => {
    const tasks = state.task.sort((prev, next) => (prev.deadline > next.deadline ? -1 : 1));
    // eslint-disable-next-line no-proto
    tasks.__proto__.where = function Where(where) {
      return this.filter((task) => {
        const keys = Object.keys(where);
        for (let i = 0; i < keys.length; i += 1) {
          const key = keys[i];
          if (where[key] !== task[key]) {
            return false;
          }
        }
        return true;
      });
    };
    return tasks;
  },
  users: state => state.user,
  projects: state => state.project,
  labels: state => state.label,
  tasklabels: state => state.tasklabels
};

export default getters;
