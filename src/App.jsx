import "./App.css";
import BucketList from "./features/components/BucketList";
import BucketListWithImmer from "./features/components/BucketListWIthImmer";
import Greeting from "./features/components/createElement";
import Editable from "./features/components/Editable";
import Form from "./features/components/Form";
import Gallery from "./features/components/Gallery";
import Immer from "./features/components/immer";
import Toolbar from "./features/components/toolbar";

function App() {
  return (
    <div className="main-wrapper">
      <Editable />
      <br />
      <hr />
      <br />
      <Immer />
      <br />
      <hr />
      <br />
      <BucketList />
      <br />
      <hr />
      <br />
      <BucketListWithImmer />
      <br />
      <hr />
      <br />
      <Toolbar />
      <br />
      <hr />
      <br />
      <Gallery />
      <br />
      <hr />
      <br />
      <Form />
      <br />
      <hr />
      <br />
      <Greeting name={"Farzin"} />
    </div>
  );
}

export default App;
