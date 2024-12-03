import Form from './components/Form';
import MainHeading from './components/MainHeading';

function App() {
  return (
    <div className="h-screen p-24 flex flex-col items-center justify-center">
      <MainHeading name="Currency Converter" />
      <Form />
    </div>
  );
}

export default App;
