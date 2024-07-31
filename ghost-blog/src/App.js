// function Item({ name, isPacked, importance }) {
//   return (
//     <li className="item">
//       {isPacked ? name + ' ✔' : name + ' ❌'}
//       {importance > 0 && ' '}
//       {importance > 0 && <i>
//         (Importance: {importance})</i>
//       }
//     </li>
//   );
// }

// export default function PackingList() {
//   return (
//     <section>
//       <h1>Sally's Ride Packing List</h1>
//       <ul>
//         <Item
//           isPacked={true}
//           name="Space Unit"
//           importance={9}
//         />
//         <Item
//           isPacked={true}
//           name="Helmet with a golden leaf"
//           importance={0}
//         />
//         <Item
//           isPacked={false}
//           name="Photo of Tam"
//           importance={6}
//         />
//       </ul>
//     </section>
//   );
// }

function Drink({ name }) {

  let part, caffeine, age;
  if (name === 'tea') {
    part = 'leaf';
    caffeine = '15–70 mg/cup';
    age = '4,000+ years';
  } else {
    part = 'bean';
    caffeine = '80–185 mg/cup';
    age = '1,000+ years'
  }


  return (
    <section>
      <h1>{name}</h1>
      <dl>
        <dt>Part of plant</dt>
        <dd>{part}</dd>
        <dt>Caffeine content</dt>
        <dd>{caffeine}</dd>
        <dt>Age</dt>
        <dd>{age}</dd>
      </dl>
    </section>
  );
}

export default function DrinkList() {
  return (
    <div>
      <Drink name="tea" />
      <Drink name="coffee" />
    </div>
  );
}