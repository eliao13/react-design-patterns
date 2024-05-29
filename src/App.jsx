import "./App.css";
import SplitScreen from "./layout-components/SplitScreen";

//* Split Screen Layout Component
function LeftHandComponent({ name }) {
  return <h1 style={{ backgroundColor: "green" }}>{name}</h1>;
}

function RightHandComponent({ message }) {
  return <p style={{ backgroundColor: "red" }}>{message}</p>;
}

function App() {
  return (
    <>
      <SplitScreen leftWeight={1} rightWeight={3}>
        <LeftHandComponent name="Eli" />
        <RightHandComponent message="Hello" />
      </SplitScreen>
    </>
  );
}

export default App;
