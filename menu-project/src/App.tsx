import React, { useState } from 'react';
import Categories from './Categories';
import Menu from './Menu';
import data from './data';

const allCategories: string[] = [
  'all',
  ...new Set(data.map((singleItem) => singleItem.category)),
];

const App = (): JSX.Element => {
  const [menuItems, setMenuItems] = useState(data);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category: string): void => {
    if (category === 'all') {
      setMenuItems(data);
      return;
    }

    const filteredItemsOnCategory = data.filter((singleItem) => {
      return singleItem.category === category;
    });
    console.log(filteredItemsOnCategory);

    setMenuItems((prev) => filteredItemsOnCategory);
  };

  return (
    <main className='App'>
      <section className='menu section'>
        <div className='title'>
          <h2>our menu</h2>
          <div className='title-underline'></div>
        </div>
        <Categories categories={categories} filterItems={filterItems} />
        <Menu items={menuItems} />
      </section>
    </main>
  );
};

export default App;
