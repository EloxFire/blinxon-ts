import React, { useEffect, useState } from 'react'
import { getStorage, ref, listAll, getDownloadURL } from "firebase/storage";
import '../styles/pages/gallery.scss'

export default function Gallery() {

  const storage = getStorage();
  const [currentFilter, setCurrentFilter] = useState<number>(0)
  const [images, setImages] = useState<any[]>([])

  const handleFilter = (filter: number) => {
    const filtersList = document.querySelectorAll('.filter')
    setCurrentFilter(filter)
    filtersList.forEach(filter => filter.classList.remove('active'))
    filtersList[filter].classList.add('active')
  }

  useEffect(() => {
    setCurrentFilter(0)

    // Get all files from storage 'village-depart'
    const listRef = ref(storage, 'village-depart');
    listAll(listRef).then((res) => {
      res.items.forEach((itemRef) => {
        // All the items under listRef.
        console.log(itemRef)
        getDownloadURL(itemRef)
          .then((url) => {
            const image = { url: url, name: itemRef.name, filter: 1 }
            setImages(images => [...images, image])
            console.log(image);

          })
      });
    }).catch((error) => {
      // Uh-oh, an error occurred!
      console.log(error)
    })
  }, []);

  return (
    <div id="gallery">
      <div className="header">
        <div className="title-container">
          <h1>Gallerie photo</h1>
          <h2>Ce que nous avons vu</h2>
        </div>
      </div>
      <div className="content">
        <h1>Sélection des plus belles photos de notre 4L Trophy 2023</h1>

        <div className="filters-container">
          <p className="title">Filtres :</p>
          <div className="filters">
            <button className="filter" type='button' onClick={() => handleFilter(0)}>Voir tout</button>
            <button className="filter" type='button' onClick={() => handleFilter(1)}>Village départ</button>
            <button className="filter" type='button' onClick={() => handleFilter(2)}>Espagne</button>
            <button className="filter" type='button' onClick={() => handleFilter(3)}>Algéciras - Rabat</button>
            <button className="filter" type='button' onClick={() => handleFilter(4)}>Rabat - Boulajoul</button>
            <button className="filter" type='button' onClick={() => handleFilter(5)}>Boulajoul - Merzouga</button>
            <button className="filter" type='button' onClick={() => handleFilter(6)}>Boucle Erg Chebbi</button>
            <button className="filter" type='button' onClick={() => handleFilter(7)}>Boucle Oued Ziz</button>
            <button className="filter" type='button' onClick={() => handleFilter(8)}>Etape marathon</button>
          </div>
        </div>

        <div className="gallery">
          {
            currentFilter === 0 &&
            images.map((image, index) => {
              return (
                <div className="image-card" key={index}>
                  <img className="image" src={image.url} alt={image.name} />
                </div>
              )
            })
          }
          {
            currentFilter === 1 &&
            images.map((image, index) => {
              return (
                <div className="image-card" key={index}>
                  <img className="image" src={image.url} alt={image.name} />
                </div>
              )
            })
          }
          {
            currentFilter === (2 || 3 || 4 || 5 || 6 || 7 || 8) &&
            <h3>Images encore non disponibles... Veuillez réessayer plus tard !</h3>
          }
        </div>
      </div>
    </div>
  )
}
