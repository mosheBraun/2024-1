import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ItemList from './components/ItemList'

let items = [
  {name: 'Swivel Wave Cutlery Holder',
    SKU: 'TFCHS01G',
    color: 'Gold',
    price: 65.00,
    image: '../assets/TFSBB01G'
  },
  {
    name: 'Swivel Wave Cutlery Holder',
    SKU: 'TFCHS01S',
    color: 'Silver',
    price: 65.00,
    image: '../assets/TFSBB01G'
  },
  {
    name: 'Towel Box with 8 Towels',
    SKU: 'TFTBGS01',
    color: 'Grey Pearl',
    price: 92.00,
    image: '../assets/TFSBB01G'
  },
  {
    name: 'Towel Box with 8 Towels',
    SKU: 'TFTBWP01',
    color: 'White Pearl',
    price: 92.00,
    image: "../assets/TFSBB01G.jpg"
  },
  {
    name: 'Salad Bowl with Base',
    SKU: 'TFSBB01G',
    color: 'Gold',
    price: 82.00,
    image: '../assets/TFSBB01G.webp'
  },
  {
    name: 'Salad Bowl with Base',
    SKU: 'TFSBB01S',
    color: 'Silver',
    price: 145.00,
    image: '../assets/TFSBB01G.jpg'
  },
]

function App() {
  const [price, setPrice] = useState(null)

  const showRange = (event) =>{
    setPrice(event.target.value)
  };

  


  return (
    <div>
      <h1>Gift Items</h1>
      <babel htmlFor='priceRange'>Filter </babel>
      <select value={price} name='FilterOptions' id='FilterOptions' onChange={showRange}>
        <option value='null'>Select To Filter</option>
        <option value='50'>Under 50</option>
        <option value='75'>Under 75</option>
        <option value='100'>Under 100</option>
        <option value='150'>Under 150</option>
      </select>
      <ItemList items={items} price={price} />
    </div>
  )
}

export default App

