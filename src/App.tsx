import './App.css'
import type { MediaType } from './types/MediaType.types'
import BacklogList from './components/BacklogList'

function App() {
  const data: MediaType[] = [{
    type: "Movie",
    entries: [
      { title: "Inception" },
      { title: "The Godfather" },
      { title: "Parasite" },
      { title: "Spirited Away" },
      { title: "Mad Max: Fury Road" }
    ]
  }, {
    type: "Game",
    entries: [
      { title: "The Legend of Zelda: Breath of the Wild" },
      { title: "Elden Ring" },
      { title: "Minecraft" },
      { title: "God of War" },
      { title: "Hades" }
    ]
  }, {
    type: "Book",
    entries: [
      { title: "1984" },
      { title: "To Kill a Mockingbird" },
      { title: "The Hobbit" },
      { title: "The Catcher in the Rye" },
      { title: "Sapiens: A Brief History of Humankind" }
    ]
  }];

  return (
    <>
      {data.map((type) => <BacklogList entryList={type.entries}/>)}
    </>
  )
}

export default App
