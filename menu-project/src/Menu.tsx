import React from 'react';

interface ItemsType {
  id: number;
  title: string;
  category: string;
  price: number;
  img: string;
  desc: string;
}

interface menuProps {
  items: ItemsType[];
}

const Menu = ({ items }: menuProps): JSX.Element => {
  console.log(items);

  return (
    <div className='section-center'>
      {items.map((singleItem) => {
        return (
          <article key={singleItem.id} className='menu-item'>
            <div className='photo-container'>
              <img
                src={singleItem.img}
                alt={singleItem.title}
                className='photo'
              />
            </div>

            <div className='item-info'>
              <header>
                <h4>{singleItem.title}</h4>
                <h4 className='price'>${singleItem.price}</h4>
              </header>
              <p className='item-text'>{singleItem.desc}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default Menu;
