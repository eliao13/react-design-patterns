import withEditableResource from "../higher-order-components/withEditableResource";

export const UserInfoForm = withEditableResource(
  ({ user, onChangeUser, onResetUser }) => {
    const { firstName, age, height } = user || {};

    return user ? (
      <>
        <label>
          <p>Name:</p>
          <input
            type="text"
            value={firstName}
            onChange={(e) => onChangeUser({ firstName: e.target.value })}
          />
        </label>

        <label>
          <p>Age:</p>
          <input
            type="number"
            value={age}
            onChange={(e) => onChangeUser({ age: Number(e.target.value) })}
          />
        </label>

        <label>
          <p>Height (cm):</p>
          <input
            type="number"
            value={height}
            onChange={(e) => onChangeUser({ height: Number(e.target.value) })}
          />
        </label>

        <button onClick={onResetUser}>Reset</button>
      </>
    ) : (
      <p>Loading...</p>
    );
  },
  "https://dummyjson.com/users/12",
  "user"
);
