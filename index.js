import "./style.css";
import "./custom.css";
import Vue from "vue";

new Vue({
  el: "#app",
  computed: {
    filteredCriterias() {
      return this.criterias.filter(e => {
        if (this.eod_type == "yearly") {
          return true;
        }

        if (this.eod_type == "half-yearly") {
          return e.when != "yearly";
        }

        if (this.eod_type == "quarterly") {
          return e.when != "yearly" && e.when != "half-yearly";
        }

        if (this.eod_type == "monthly") {
          return (
            e.when != "yearly" &&
            e.when != "half-yearly" &&
            e.when != "quarterly"
          );
        }

        if (this.eod_type == "daily") {
          return (
            e.when != "yearly" &&
            e.when != "half-yearly" &&
            e.when != "quarterly" &&
            e.when != "monthly"
          );
        }
      });
    }
  },
  methods: {
    addTimeInSpace(a, b){
      if(!this.space[a][b].time && this.space[a][b].used && this.space[a][b].available)
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
  },
  data: {
    checked: {
      copy_rman: false
    },
    space: {
      application: {
        backend: {
          available: "",
          used: "",
          time: ""
        },
        finsetups: {
          available: "",
          used: "",
          time: ""
        }
      },
      database: {
        archivelogs: {
          available: "",
          used: "",
          time: ""
        },
        dbbackup: {
          available: "",
          used: "",
          time: ""
        },
        database: {
          available: "",
          used: "",
          time: ""
        }
      },
      wasserver: {
        wasapp: {
          available: "",
          used: "",
          time: ""
        },
        wasadmin: {
          available: "",
          used: "",
          time: ""
        }
      },
      c24: {
        c24services: {
          available: "",
          used: "",
          time: ""
        },
        database: {
          available: "",
          used: "",
          time: ""
        },
        csis_dbbackup: {
          available: "",
          used: "",
          time: ""
        },
        archivelogs: {
          available: "",
          used: "",
          time: ""
        }
      }
    },
    restarted: {},
    batch: {
      daily: {
        count: "",
        time: "",
        run_for_date: ""
      },
      daily_prscd: {
        count: "",
        time: "",
        run_for_date: ""
      },
      monthly: {
        count: "",
        time: "",
        run_for_date: ""
      },
      quarterly: {
        count: "",
        time: "",
        run_for_date: ""
      },
      half_yearly: {
        count: "",
        time: "",
        run_for_date: ""
      },
      yearly: {
        count: "",
        time: "",
        run_for_date: ""
      }
    },
    eod_type: "",
    criterias: [
      { when: "daily", text: "Criteria 1" },
      { when: "daily", text: "Criteria 2" },
      { when: "monthly", text: "Criteria 3" },
      { when: "quarterly", text: "Criteria 4" },
      { when: "half-yearly", text: "Criteria 5" },
      { when: "yearly", text: "Criteria 6" }
    ],
    sols: [
      { disabled: false, set_id: "SET 00-20", hint: "find ./ -name fatal*" },
      { disabled: false, set_id: "SET 21-30", hint: "find ./ -name core*" },
      { disabled: false, set_id: "SET 30-54", hint: "ps -ef |grep fin*" },
      { disabled: false, set_id: "SET 55-64", hint: "ls | wc -l" },
      { disabled: false, set_id: "SET 81-98" },
      { disabled: false, set_id: "SET A0-B9" },
      { disabled: false, set_id: "SET C0-D9" },
      { disabled: false, set_id: "SET E1-F9" },
      { disabled: false, set_id: "SET G0-H9" },
      { disabled: false, set_id: "SET I0-J9" },
      { disabled: false, set_id: "SET K0-L0" },
      { disabled: false, set_id: "SET M0-M9" },
      { disabled: false, set_id: "SET O0-P9" },
      { disabled: false, set_id: "SET Q0-R9" },
      { disabled: false, set_id: "SET S0-T9" },
      { disabled: false, set_id: "SET U0-V9" },
      { disabled: false, set_id: "SET W0-X9" },
      { disabled: false, set_id: "SET Y0-Z9" }
    ]
  }
});
