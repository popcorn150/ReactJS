import { people } from "./data";
import { getImageUrl } from "./utils";


let chemists = [];
let everyoneElse = [];

people.forEach(person => {
    if (person.occupation === "chemist") {
        chemists.push(person);
    } else {
        everyoneElse.push(person);
    }
});


function ListSection({ title, people }) {
    return (
        <>
            <h2>{title}</h2>
            <ul>
                {people.map(person => 
                    <li key={person.id}>
                        <img
                            src={getImageUrl(person)}
                            alt={person.name}
                        />
                        <p>
                            <b>{person.name}:</b>
                            {' ' + person.occupation + ' '}
                            known for {person.accomplishment}
                        </p>
                    </li>
                )}
            </ul>
        </>
    );
}


export default function List() {
    return (
        <article>
            <h1>Scientists</h1>
            <ListSection 
                title="Chemists"
                people={chemists}
            />
            <ListSection
                title="Everyone Else"
                people={everyoneElse}
            />
        </article>
    );
}
