import narek from './narek.jpg';
import './App.css';
import Likes from './components/Likes';
import Title from './components/Title';
import Comments from './components/Comments';

function App() {
  return (
    <div className="App">
      <div className='wrap'>
        <div className='card'>
          <div className='card-image'>
            <img src={narek} />
            <Title />
            <Likes />
          </div>
          <Comments />
        </div>
      </div>
    </div>
  );
}

export default App;
