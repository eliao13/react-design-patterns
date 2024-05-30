export default function LargePersonListItem({ person }) {
  const { name, age, hairColor, hobbies } = person;

  return (
    <>
      <h3>{name}</h3>
      <p>Age: {age} years</p>
      <p>Hair Color: {hairColor}</p>
      <h3>Hobbies</h3>
      <ul>
        {hobbies.map((hobby) => {
          return <li key={hobby}>{hobby}</li>;
        })}
      </ul>
    </>
  );
}