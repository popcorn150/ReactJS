import './App.css';
import { Button } from './components/Button';
import { Greet } from './components/Greeting';
import { Heading } from './components/Heading';
import { Oscar } from './components/Oscar';
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
      <Greet name={personName} isLoggedIn={true} />
      <Button handleClick={(event, id) => {
        console.log('hello', event, id);
      }} />
      <Person name={personName} />
      <PersonList names={personList} />
      <Status status='success' />
      <Heading>Placeholder input</Heading>
      <Oscar>
        <Heading>
          Oscar goes to Leonardo Dicpario
        </Heading>
      </Oscar>
    </div>
  );
}

export default App;
