const getters = {
  tasks: state => state.task.sort((prev, next) =>
    (prev.deadline > next.deadline ? 1 : -1)
  )
};

export default getters;
