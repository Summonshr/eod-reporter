export default {
  addTimeInThis(a) {
    if (!a.time) {
      a.time = new Date().toLocaleTimeString();
    }
  },
  addTimeInSpace(a, b) {
    if (
      !this.space[a][b].time &&
      this.space[a][b].used &&
      this.space[a][b].available
    )
      this.space[a][b].time = new Date().toLocaleTimeString();
  },
  addTime(batch) {
    if (!this.batch[batch].time)
      this.batch[batch].time = new Date().toLocaleTimeString();
  },
  start(sol) {
    this.sols = this.sols.map(s => {
      if (s.set_id == sol.set_id && s.start_time == null) {
        s.start_time = new Date().toLocaleTimeString();
      }
      return s;
    });
  },
  restart(b) {
    if (this.restarted[b]) {
      this.restarted[b] = undefined;
    } else {
      this.restarted[b] = new Date().toLocaleTimeString();
    }

    this.restarted = { ...this.restarted };
  }
};
