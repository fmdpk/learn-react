import "./App.css";
import BucketList from "./features/components/BucketList";
import BucketListWithImmer from "./features/components/BucketListWIthImmer";
import Editable from "./features/components/Editable";
import Immer from "./features/components/immer";

function App() {
  return (
    <>
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
    </>
  );
}

export default App;
