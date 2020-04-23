const checkCompletion = () => (beers) => {
  let value = true;
  for (let i = 0; i < beers.length; i++) {
    if (beers[i].finished === false) {
      return (value = false);
    }
  }
  if (value === true) {
    this.setState({
      completed: true,
    });
  }
};

export default checkCompletion;