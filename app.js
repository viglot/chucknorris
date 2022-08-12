createCoronaStatsComponent('Joke:', document.body);


function createCoronaStatsComponent(joke, parentElement) {
  const element = document.createElement('div');
  element.classList.add('jokes');
  parentElement.append(element);

  
  const render = () => {
    element.innerHTML = `
      <h2>${ joke }</h2>

    `;
  }

  const load = async () => {
    const response = await fetch(`https://api.chucknorris.io/jokes/random
    `);
    
    const data = await response.json();
    
    render();
  }

  load();
  render();
}
