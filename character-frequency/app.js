d3.select('#submit').on('click', () => {
  d3.event.preventDefault();
  const text = d3.select('input').property('value');
  d3.select('#phrase').text(text);
  d3.select('input').property('value', '');
});