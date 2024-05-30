export default function UserInfo({ user }) {
  const { firstName, lastName, height, weight, university } = user || {};
  return user ? (
    <>
      <h3>
        {firstName} {lastName}
      </h3>
      <p>Height: {height} cm</p>
      <p>Weight: {weight} kg</p>
      <p>University: {university}</p>
    </>
  ) : (
    <p>Loading...</p>
  );
}
