import { BsApple } from 'react-icons/bs';
import { BsPlayCircle } from 'react-icons/bs';
import './App.css';
// import MidImage from './img/mid-image.jpg'
function App() {

  const handleClick = () => {
    window.open('https://www.youtube.com/watch?v=UF8uR6Z6KLc', '_blank');
  };
  return (
    <div className="App">
      <header className="App-header">
        <h1> Steve Jobs</h1>
        <h2>1995 - 2011</h2>
        <span id='play-button'>
          {/* <BsPlayCircle onClick={() => {
            window.location.href = 'https://www.youtube.com/watch?v=UF8uR6Z6KLc';
          }} /> */}
          <BsPlayCircle onClick={handleClick} />
        </span>
      </header>

      <div className='image-container'>
        <p className='text-content'>
          Design is not just waht it looks like  and feels like.
          Design is how it works.
        </p>
      </div>
      <div className='content-container'>
        <h1>Biography</h1>
        <p>Steven Paul Jobs (February 24, 1955 – October 5, 2011) was an American business magnate,
          inventor, and investor. He was the co-founder, chairman, and CEO of Apple; the chairman and
          majority shareholder of Pixar; a member of The Walt Disney Company's board of directors following
          its acquisition of Pixar; and the founder, chairman, and CEO of NeXT. He was a pioneer of the
          personal computer revolution of the 1970s and 1980s, along with his early business partner and
          fellow Apple co-founder Steve Wozniak.</p>
        <p>Jobs was born in San Francisco to a Syrian father and German-American mother. He was adopted
          shortly after his birth. Jobs attended Reed College in 1972 before withdrawing that same year.
          In 1974, he traveled through India seeking enlightenment before later studying Zen Buddhism.
          He and Wozniak co-founded Apple in 1976 to sell Wozniak's Apple I personal computer. Together
          the duo gained fame and wealth a year later with production and sale of the Apple II, one of
          the first highly successful mass-produced microcomputers. Jobs saw the commercial potential
          of the Xerox Alto in 1979, which was mouse-driven and had a graphical user interface (GUI).
          This led to the development of the unsuccessful Apple Lisa in 1983, followed by the
          breakthrough Macintosh in 1984, the first mass-produced computer with a GUI. The Macintosh
          introduced the desktop publishing industry in 1985 with the addition of the Apple LaserWriter,
          the first laser printer to feature vector graphics.</p>
      </div>
      <footer className='footer'>
        <p className='footer-text'>
          Made with <a href='https://www.apple.com/' id='apple' target='_blank'><BsApple /></a> by <a id='name' href='https://bento.me/amey' target='_blank'>Amey Pankanti</a>
        </p>
      </footer>
    </div>
  );
}

export default App;
