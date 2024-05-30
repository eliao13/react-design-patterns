import "./App.css";
import RegularList from "./layout-components/list-components/RegularList";
import LargePersonListItem from "./layout-components/list-components/people/LargePersonListItem";
import SmallPersonListItem from "./layout-components/list-components/people/SmallPersonListItem";
import LargeProductListItem from "./layout-components/list-components/product/LargeProductListItem";
import NumberedList from "./layout-components/list-components/product/NumberedList";
import SmallProductListItem from "./layout-components/list-components/product/SmallProductListItem";
import SplitScreen from "./layout-components/split-screen-components/SplitScreen";

//* Split Screen Layout Component
function LeftHandComponent({ name }) {
  return <h1 style={{ backgroundColor: "green" }}>{name}</h1>;
}

function RightHandComponent({ message }) {
  return <p style={{ backgroundColor: "red" }}>{message}</p>;
}

//* Lists And List Items
const people = [
  {
    name: "John Doe",
    age: 54,
    hairColor: "brown",
    hobbies: ["swimming", "bicylcing", "video games"],
  },
  {
    name: "Jane Doe",
    age: 52,
    hairColor: "blonde",
    hobbies: ["reading", "gardening", "hiking"],
  },
  {
    name: "Sam Smith",
    age: 23,
    hairColor: "black",
    hobbies: ["running", "cooking", "painting"],
  },
];

const products = [
  {
    name: "Flat-Screen TV",
    price: "$300",
    description: "A flat-screen TV with 4K resolution",
    rating: 4.5,
  },
  {
    name: "Smartphone",
    price: "$800",
    description: "A smartphone with 128GB storage",
    rating: 4.8,
  },
  {
    name: "Laptop",
    price: "$1200",
    description: "A laptop with 16GB RAM and 1TB storage",
    rating: 4.7,
  },
];

function App() {
  return (
    <>
      <SplitScreen leftWeight={1} rightWeight={3}>
        <LeftHandComponent name="Eli" />
        <RightHandComponent message="Hello" />
      </SplitScreen>

      <h2>Lists and list items</h2>

      <RegularList
        items={people}
        resourceName="person"
        itemComponent={SmallPersonListItem}
      />

      <NumberedList
        items={people}
        resourceName="person"
        itemComponent={LargePersonListItem}
      />

      <RegularList
        items={products}
        resourceName={"product"}
        itemComponent={SmallProductListItem}
      />

      <NumberedList
        items={products}
        resourceName={"product"}
        itemComponent={LargeProductListItem}
      />
    </>
  );
}

export default App;
