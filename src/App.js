import './App.css';
import Navbar from './pages/Navbar';

function App() {
  const data = {
    name: "Explorin Academy",
    count: 3,
    images: [
      { url: "https://via.placeholder.com/38", ready: true, error: false },
      { url: "https://via.placeholder.com/38", ready: true, error: false },
      { url: "https://via.placeholder.com/38", ready: false, error: true }
    ],
  };

  return (
    <div>
    <Navbar  name={data.name} count={data.count} images={data.images}/>
    
    
    </div>
  );

};
export default App;
