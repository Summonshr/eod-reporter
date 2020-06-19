export default {
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
          e.when != "yearly" && e.when != "half-yearly" && e.when != "quarterly"
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

      return false;
    });
  }
};
