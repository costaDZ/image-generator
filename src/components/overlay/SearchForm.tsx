import React, { MouseEvent } from 'react';

import { SerachIcon, SearchFormStyles, PopulairImagesStyle } from './searchForm-styles';
interface SearchFormProps {
  startSearchingImages?: any;
  startSearchingVideos?: any;
  section: Section;
}

const SearchForm: React.FC<SearchFormProps> = ({
  startSearchingImages,
  startSearchingVideos,
  section
}: SearchFormProps) => {
  function startSearch(e: React.MouseEvent | React.FormEvent, val: string, check: string) {
    e.preventDefault();
    const target = e.target as HTMLFormElement;

    if (check === 'search') (target.lastElementChild as HTMLInputElement).value = '';
    switch (section.category) {
      case 'videos':
        startSearchingVideos(section.category, val, 1);
        break;
      default:
        startSearchingImages(section.category, val, 1);
        break;
    }
  }

  return (
    <>
      <SearchFormStyles
        onSubmit={(e: React.FormEvent<HTMLFormElement>) =>
          startSearch(
            e,
            ((e.target as HTMLFormElement).lastElementChild as HTMLInputElement).value,
            'search'
          )
        }>
        <button className="search-btn" type="submit" aria-label="search">
          <SerachIcon />
        </button>
        <input
          className="search-input"
          placeholder={`Search ${section.category || ''} ...`}
          required
        />
      </SearchFormStyles>

      <PopulairImagesStyle>
        <h4>Populair Images : </h4>
        {(section.populair || section.populair).map((item: string, i: number) => {
          return (
            <button
              key={i}
              onClick={(e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) =>
                startSearch(e, (e.target as HTMLButtonElement).textContent as string, 'btn')
              }>
              {item}
            </button>
          );
        })}
      </PopulairImagesStyle>
    </>
  );
};

export default SearchForm;
