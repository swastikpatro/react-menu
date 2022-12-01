import React, { MouseEventHandler, useState } from 'react';

interface categoryProps {
  categories: string[];
  filterItems: (category: string) => void;
}

const Categories = ({
  categories,
  filterItems,
}: categoryProps): JSX.Element => {
  const [active, setActive] = useState(0);
  function handleContainerClick(e: React.MouseEvent<HTMLDivElement>): void {
    const element = e.target as HTMLElement;
    if (!element.classList.contains('filter-btn')) {
      return;
    }

    setActive(Number(element.dataset.index) as number);

    filterItems(element.dataset.btn as string);
  }
  return (
    <div className='btn-container' onClick={handleContainerClick}>
      {categories.map((singleBtn, i) => (
        <button
          className={active === i ? 'filter-btn active' : 'filter-btn'}
          data-index={i}
          data-btn={singleBtn}
          key={singleBtn}
        >
          {singleBtn}
        </button>
      ))}
    </div>
  );
};

export default Categories;
