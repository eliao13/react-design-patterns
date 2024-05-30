export default function SmallPersonListItem({ person }) {
  const { name, age } = person;

  console.log("person", person);
  return (
    <p>
      Name: {name}, Age: {age} years
    </p>
  );
}
