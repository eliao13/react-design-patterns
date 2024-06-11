import useCurrentUser from "./useCurrentUser";
import useDataSource from "./useDataSource";
import useResource from "./useResource";
import useUser from "./useUser";

export default function CustomHookUserInfo({ userId }) {
  // const user = useCurrentUser();

  // const user = useUser(userId);

  const user = useResource(`https://dummyjson.com/users/${userId}`);

  //! causes too many requests
  // const user = useDataSource(() =>
  //   fetch(`https://dummyjson.com/users/${userId}`).then((response) =>
  //     response.json()
  //   )
  // );

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
