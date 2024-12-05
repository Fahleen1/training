import Form from './components/Form';
import MainHeading from './components/MainHeading';

function App() {
  return (
    <div className="h-screen flex flex-col items-center  gap-8 justify-center">
      <MainHeading name="Currency Converter" />
      <Form />
    </div>
  );
}

export default App;
