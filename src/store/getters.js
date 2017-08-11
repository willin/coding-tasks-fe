const getters = {
  tasks: state => state.task.sort((prev, next) =>
    (prev.deadline > next.deadline ? 1 : -1)
  ),
  users: state => state.user,
  projects: state => state.project
};

export default getters;
