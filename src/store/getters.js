const getters = {
  tasks: state => state.task,
  users: state => state.user,
  projects: state => state.project,
  labels: state => state.label,
  tasklabels: state => state.tasklabels
};

export default getters;
