import React from 'react';
import './App.css';
import { Category, Product } from './components.js'
import { categories, listings } from './data.js'


function App() {
  return (
    <div className="App">

      <aside id="sidebar">
        {
          categories
          .map((str, i) => <Category name={str} key={i} />)
        }
      </aside>

      <main id='product-list'>
        {
          listings.map((obj, i) => <Product {...obj} key={i} />)
        }
      </main>
    </div>
  );
}

export default App;

/* 
  David Placca
  Codetrain Gen 14
  React Part 3 - Packages & Boostrap, Exercise 1
*/
