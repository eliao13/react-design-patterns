import { useState } from "react";
import "./App.css";
import CurrentUserLoader from "./container-components/CurrentUserLoader";
import DataSource from "./container-components/DataSource";
import ProductInfo from "./container-components/ProductInfo";
import ResourceLoader from "./container-components/ResourceLoader";
import UserInfo from "./container-components/UserInfo";
import UserLoader from "./container-components/UserLoader";
import ControlledForms from "./controlled-uncontrolled-components/ControlledForms";
import ControlledModal from "./controlled-uncontrolled-components/ControlledModal";
import UncontrolledForms from "./controlled-uncontrolled-components/UncontrolledForms";
import RegularList from "./layout-components/list-components/RegularList";
import LargePersonListItem from "./layout-components/list-components/people/LargePersonListItem";
import SmallPersonListItem from "./layout-components/list-components/people/SmallPersonListItem";
import LargeProductListItem from "./layout-components/list-components/product/LargeProductListItem";
import NumberedList from "./layout-components/list-components/product/NumberedList";
import SmallProductListItem from "./layout-components/list-components/product/SmallProductListItem";
import Modal from "./layout-components/modal-components/Modal";
import SplitScreen from "./layout-components/split-screen-components/SplitScreen";
import UncontrolledOnboardingFlow from "./controlled-uncontrolled-components/UncontrolledOnboardingFlow";
import ControlledOnboardingFlow from "./controlled-uncontrolled-components/ControlledOnboardingFlow";
import printProps from "./higher-order-components/printProps";
import withUser from "./higher-order-components/withUser";
import { UserInfoForm } from "./container-components/UserInfoForm";
import CustomHookUserInfo from "./custom-hooks/CustomHookUserInfo";
import CustomHookProductInfo from "./custom-hooks/CustomHookProductInfo";

const pageSections = [
  {
    id: "layout-components",
    title: "Layout Components",
  },
  {
    id: "container-components",
    title: "Container Components",
  },
  {
    id: "controlled-uncontrolled-components",
    title: "Controlled and Uncontrolled Components",
  },
  {
    id: "higher-order-components",
    title: "Higher-Order Components",
  },
  {
    id: "custom-hooks",
    title: "Custom Hooks",
  },
];

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

//* Container Components
function getServerData(url) {
  return fetch(url).then((response) => response.json());
}

function getLocalStorageData(key) {
  return new Promise((resolve) => {
    const data = localStorage.getItem(key);
    resolve(data);
  });
}

function TextComponent({ message }) {
  return <h1>{message}</h1>;
}

//* Controlled and Uncontrolled Components
function StepOne({ goToNext }) {
  return (
    <>
      <h1>Step One</h1>
      <button onClick={() => goToNext({ name: "John Doe" })}>Next</button>
    </>
  );
}

function StepTwo({ goToNext }) {
  return (
    <>
      <h1>Step Two</h1>
      <button onClick={() => goToNext({ age: 100 })}>Next</button>
    </>
  );
}

function StepThree({ goToNext }) {
  return (
    <>
      <h1>Step Three</h1>
      <p>Congratulations! You qualify for our senior discount</p>
      <button onClick={() => goToNext({})}>Next</button>
    </>
  );
}

function StepFour({ goToNext }) {
  return (
    <>
      <h1>Step Four</h1>
      <button onClick={() => goToNext({ hairColor: "brown" })}>Next</button>
    </>
  );
}

//* Higher-Order Components
const UserInfoWrapped = printProps(UserInfo);

const UserInfoWithLoader = withUser(UserInfo, "4");

function App() {
  const [shouldShowModal, setShouldShowModal] = useState(false);
  const [onboardingData, setOnboardingData] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);

  function onNext(stepData) {
    setOnboardingData({ ...onboardingData, ...stepData });
    setCurrentIndex(currentIndex + 1);
  }

  return (
    <>
      <ul style={{ listStyle: "none", padding: "0" }}>
        {pageSections.map((section) => (
          <li key={section.id}>
            <a href={`#${section.id}`}>{section.title}</a>
          </li>
        ))}
      </ul>

      <h1 id="layout-components">Layout Components</h1>

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

      <Modal>
        <LargeProductListItem product={products[0]} />
      </Modal>

      {/* Container components take care of all of the data loading and other data manangement for their child components.
          This allows child components to share logic and make it so they don't need to know where their data is coming from or how to manage it.
      */}

      <h1 id="container-components">Container Components</h1>

      <CurrentUserLoader>
        <UserInfo />
      </CurrentUserLoader>

      <UserLoader userId={2}>
        <UserInfo />
      </UserLoader>

      <UserLoader userId={4}>
        <UserInfo />
      </UserLoader>

      <UserLoader userId={6}>
        <UserInfo />
      </UserLoader>

      {/* Resource Loader component allows for loading different types of resources from a server */}

      <ResourceLoader
        resourceUrl="https://dummyjson.com/users/1"
        resourceName="user"
      >
        <UserInfo />
      </ResourceLoader>

      <ResourceLoader
        resourceUrl="https://dummyjson.com/products/1"
        resourceName="product"
      >
        <ProductInfo />
      </ResourceLoader>

      <DataSource
        getDataFunc={() => getServerData("https://dummyjson.com/users/10")}
        resourceName="user"
      >
        <UserInfo />
      </DataSource>

      <DataSource
        getDataFunc={() => getLocalStorageData("message")}
        resourceName={"message"}
      >
        <TextComponent />
      </DataSource>

      <h1 id="controlled-uncontrolled-components">
        Controlled and Uncontrolled Components
      </h1>

      {/* Uncontrolled components are components that keep track of their own states and release data only when some event occurs */}
      {/* Controlled components are components that do not keep track of their own state--all state is passed in as props */}

      <UncontrolledForms />

      <ControlledForms />

      <ControlledModal
        shouldShow={shouldShowModal}
        onRequestClose={() => setShouldShowModal(false)}
      >
        <h1>Hello!</h1>
      </ControlledModal>

      <button onClick={() => setShouldShowModal(!shouldShowModal)}>
        {shouldShowModal ? "Hide" : "Show"}
        Modal
      </button>

      <UncontrolledOnboardingFlow
        onFinish={(data) => {
          console.log(data);
          alert("Onboarding complete!");
        }}
      >
        <StepOne />
        <StepTwo />
        <StepThree />
      </UncontrolledOnboardingFlow>

      <ControlledOnboardingFlow currentIndex={currentIndex} onNext={onNext}>
        <StepOne />
        <StepTwo />
        {onboardingData.age >= 62 && <StepThree />}
        <StepFour />
      </ControlledOnboardingFlow>

      <h1 id="higher-order-components">Higher-Order Components</h1>

      {/* Higher-order components are functions that return compoonents */}
      {/* HOCs are used for sharing complex behaviour between multiple components + adding extra functionality to existing components */}

      <UserInfoWrapped a={1} b="Hello" c={{ name: "Sam" }} />

      <UserInfoWithLoader />

      <UserInfoForm />

      <h1 id="custom-hooks">Custom Hooks</h1>

      {/* Custom Hooks are special hooks we define ourselves, and that usually combine the functionality of one or more existing React hooks */}
      {/* Custom Hooks are used for sharing complex behaviour between multiple components */}

      <CustomHookUserInfo userId={15} />
      <CustomHookUserInfo userId={25} />
      <CustomHookUserInfo userId={35} />

      <CustomHookProductInfo productId={15} />
      <CustomHookProductInfo productId={25} />
      <CustomHookProductInfo productId={35} />
    </>
  );
}

export default App;
