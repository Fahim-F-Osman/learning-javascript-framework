import './App.css'
import Card from "./components/Card/Card"

function App() {
  return (
    <main>
      <h1>Hello World</h1>
      <div className="gallery">
        <Card> This is a text. </Card>
        <Card> 
          <picture className="responsive-picture">
            <source media="(min-width: 650px)" srcSet="img_pink_flowers.jpg" />
            <source media="(min-width: 465px)" srcSet="img_white_flower.jpg" />
            <img src="img_orange_flowers.jpg" alt="Flowers"></img>
          </picture>
        </Card>
        <Card> <h3>This is a header.</h3><p>This is a text</p> </Card>
      </div>
    </main>
  )

}

export default App
