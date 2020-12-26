import React, {useState} from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';
import Route from './components/Route';
import Header from './components/Header';

const items = [

  {
    title: 'React is so Cool',
    content: 'This is content that is being displayed here but original'
  },
  {
    title: 'React is Helpful',
    content: 'This is content that is being displayed here but cool'
  },
  {
    title: 'Wow I Like React!',
    content: 'This is content that is being displayed here but cooler'
  }

]

const options = [
  {
    label: 'The color red',
    value: 'red'
  },
  {
    label: 'The color green',
    value: 'green'
  },
  {
    label: 'The color blue',
    value: 'blue'
  }

]


const App = () => {
  const [selected, setSelected] = useState(options[0]);

  return(
    <div>
      <Header />
      <Route path="/">
        <Accordion items={items} />
      </Route>

      <Route path="/list">
        <Search />
      </Route>

      <Route path="/dropdown">
        <Dropdown label="Select a color:" options={options} selected={selected} onSelectedChange={setSelected}/>
      </Route>

      <Route path="/translate">
        <Translate />
      </Route>
    </div>
  );

}

export default App;
