import "src/App.css";
import Form from "src/app/components/Form";
import List from "src/app/components/List";
import InputProvider, { InputContext } from "src/app/context/formContext";

function App() {
  return (
    <InputProvider>
      <div className="App">
        <Form />
        <List />
      </div>
    </InputProvider>
  );
}

export default App;
