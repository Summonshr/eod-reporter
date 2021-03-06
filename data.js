export default JSON.parse(localStorage.getItem('data')) || {
    bankLevels: [
      {
        time: '',
        name: 'HSOLCOP'
      },
      {
        time: '',
        name: 'HRIST'
      },
      {
        time: '',
        name: 'HSAC'
      },
      {
        time: '',
        name: 'HSCOLD'
      },
      {
        time: '',
        name: 'HBKOD'
      },
      {
        time: '',
        name: 'HBKCOP'
      },
      {
        time: '',
        name: 'HBKOLD'
      },
    ],
    gist: 'No issues found.',
    checked: {
      copy_rman: false
    },
    restart_before_eod: {
      finlistval: {time: ''},
      core: {time: ''},
      cs: {time: ''},
      cbc: {time: ''},
      uniser: {time: ''},
      was: {time: ''},
      finrpt: {time: ''},
      cups: {time: ''},
    },
    restart_after_eod: {
      backup: {time: ''},
      core: {time: ''},
      cs: {time: ''},
      cbc: {time: ''},
      uniser: {time: ''},
      was: {time: ''},
      fin: {time: ''},
      uni: {time: ''},
    },
    space: {
      application: {
        backend: {
          available: "",
          time: ""
        },
        finsetups: {
          available: "",
          time: ""
        }
      },
      database: {
        archivelogs: {
          available: "",
          time: ""
        },
        dbbackup: {
          available: "",
          time: ""
        },
        database: {
          available: "",
          time: ""
        }
      },
      wasserver: {
        wasapp: {
          available: "",
          time: ""
        },
        wasadmin: {
          available: "",
          time: ""
        }
      },
      c24: {
        c24services: {
          available: "",
          time: ""
        },
        database: {
          available: "",
          time: ""
        },
        csis_dbbackup: {
          available: "",
          time: ""
        },
        archivelogs: {
          available: "",
          time: ""
        }
      },
      one_hundred_thirteen: {time: ''}
    },
    run: {
      stat_gather:{
        time: ''
      }
    },
    restarted: {},
    after_eod: {
      copy_log: {time: ''},
      last_arc_after_eod: {time: ''},
      sod_count: {time: ''},
      gup_count: {time: ''},
      check_batch_job: {time: ''}
    },
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
    eod_date: "",
    criterias: [
      { when: "daily", text: "Criteria 1" },
      { when: "daily", text: "Criteria 2" },
      { when: "monthly", text: "Criteria 3" },
      { when: "quarterly", text: "Criteria 4" },
      { when: "half-yearly", text: "Criteria 5" },
      { when: "yearly", text: "Criteria 6" }
    ],
    sols: [
      { disabled: false, parallel: '', set_id: "SET 00-20", hint: "find ./ -name fatal*" },
      { disabled: false, parallel: '', set_id: "SET 21-30", hint: "find ./ -name core*" },
      { disabled: false, parallel: '', set_id: "SET 30-54", hint: "ps -ef |grep fin*" },
      { disabled: false, parallel: '', set_id: "SET 55-64", hint: "ls | wc -l" },
      { disabled: false, parallel: '', set_id: "SET 81-98" },
      { disabled: false, parallel: '', set_id: "SET A0-B9" },
      { disabled: false, parallel: '', set_id: "SET C0-D9" },
      { disabled: false, parallel: '', set_id: "SET E1-F9" },
      { disabled: false, parallel: '', set_id: "SET G0-H9" },
      { disabled: false, parallel: '', set_id: "SET I0-J9" },
      { disabled: false, parallel: '', set_id: "SET K0-L0" },
      { disabled: false, parallel: '', set_id: "SET M0-M9" },
      { disabled: false, parallel: '', set_id: "SET O0-P9" },
      { disabled: false, parallel: '', set_id: "SET Q0-R9" },
      { disabled: false, parallel: '', set_id: "SET S0-T9" },
      { disabled: false, parallel: '', set_id: "SET U0-V9" },
      { disabled: false, parallel: '', set_id: "SET W0-X9" },
      { disabled: false, parallel: '', set_id: "SET Y0-Z9" }
    ]
  }