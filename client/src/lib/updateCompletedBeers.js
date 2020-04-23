const updateCompletedBeers = (checked, beers) => {
  let updated = beers;
    for (let k = 0; k < updated.length; k++) {
      for (let h = 1; h < checked.length; h++) {
        if (updated[k]._id === checked[h]._id) {
          updated[k].finished = true;
        }
      }
    }
    this.setState({
      customerBeers: updated
    });
}

export default updateCompletedBeers;