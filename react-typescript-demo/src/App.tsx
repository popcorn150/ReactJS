import './App.css';
import { Greet } from './components/Greeting';
import { Person } from './components/Person';
import { PersonList } from './components/PersonList';
import { Status } from './components/Status';

function App() {

  const personName = {
    first: 'James',
    last: 'Michael',
  }

  const personList = [
    {
      first: 'Mark',
      last: 'Clayton',
    },
    {
      first: 'Gray',
      last: 'Michigan',
    },
    {
      first: 'David',
      last: 'Oyster',
    },
  ];

  return (
    <div className="App">
      <Greet name={personName} messageCounts={50} isLoggedIn={false} />
      <Person name={personName} />
      <PersonList names={personList}/>
      <Status status='success'/>
    </div>
  );
}

export default App;
