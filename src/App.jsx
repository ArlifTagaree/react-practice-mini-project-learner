import Card from './Card/Card';
import './App.css'
import { useState } from 'react';

const movies = [
  {
    title: 'The Matrix',
    image:
      'https://i.pinimg.com/736x/cb/82/6d/cb826d2fc3b9fbc4920cdd7dabb53555.jpg',
  },
  {
    title: 'Inception',
    image:
      'https://images.theconversation.com/files/353512/original/file-20200818-14-1yd1myr.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=900.0&fit=crop',
  },
  {
    title: 'The Dark Knight',
    image:
      'https://www.wallpapermania.eu/images/lthumbs/2012-04/2487_Batman-The-Dark-Knight-Poster-HD-Wallpaper.jpg',
  },
];

// DRY

export default function App() {
  const [selectedMovie, setSelectedMovie] = useState([])

  // const [movietitle, setMovietitle] = useState('')
  
  const handleClick = (movietitle) => {
    // setMovietitle(movietitle)

    if(selectedMovie.includes(movietitle)) {
      setSelectedMovie(prev => {
        return prev.filter(ele => ele !== movietitle)
      })
    } else {
      setSelectedMovie(prev => {
        return [...prev, movietitle]}) // ใช้วิธีนี้เพราะถ้าใช้ push array จะไม่มีการเปลี่ยนค่า ทำให้ใช้ useState ([]) ไม่เปลี่ยนแปลง
    }
    
  }


  return (
    <>
      <div className='card-container'>
        <ul>
          {
            selectedMovie.map((movie)=> {
              return <li key = {movie}>{movie}</li>
            })
          }
        </ul>
      {/* {movietitle} */}
      {/* วน render card ออกมาตามจำนวนของที่อยู่ใน array */}
      {movies.map((ele) => 
       // eslint-disable-next-line react/jsx-key
        <Card key={ele.title} 
        handleClick={handleClick}
        title={ele.title} 
       image={ele.image} />
      // <Card key={ele.title} movieData={ele} />
      )}
    </div>
    </>
  );
}
