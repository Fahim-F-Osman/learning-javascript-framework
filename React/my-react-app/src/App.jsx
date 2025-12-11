import { useState } from 'react';
import './App.css';
import Card from './components/Card/Card';
import Form from './components/Form/Form';
import JokeFetcher from './components/JokeFetcher/JokeFetcher';

function App() {
  const [day, setDay] = useState(0);

  const renderContent = () => {
    switch(day) {
      case 1:
        return <h1>Hello World</h1>;
      case 2:
        return (
          <div className="gallery">
            <Card>This is a text.</Card>
            <Card>
              <picture className="responsive-picture">
                <source media="(min-width: 650px)" srcSet="img_pink_flowers.jpg" />
                <source media="(min-width: 465px)" srcSet="img_white_flower.jpg" />
                <img src="img_orange_flowers.jpg" alt="Flowers" />
              </picture>
            </Card>
            <Card>
              <h3>This is a header.</h3>
              <p>This is a text</p>
            </Card>
          </div>
        );
      case 3:
        return <Form />;
      case 4:
        return <JokeFetcher />;
      default:
        return null;
    }
  };

  return (
    <main>
     <div className="button-group">
      {[1, 2, 3, 4].map((num) => (
        <button key={num} onClick={() => setDay(num)}>
          Day-{num}
        </button>
      ))}
    </div>
      {renderContent()}
    </main>
  );
}

export default App;
