import React from 'react';

import { SerachIcon, SearchFormStyles, PopulairImagesStyle } from './searchForm-styles';
interface SearchFormProps {
  startSearchingImages?: any;
  startSearchingVideos?: any;
  section: any;
}

const SearchForm: React.FC<SearchFormProps> = ({
  startSearchingImages,
  startSearchingVideos,
  section
}: SearchFormProps) => {
  function startSearch(e: React.SyntheticEvent<HTMLFormElement>, val: string, check: string) {
    e.preventDefault();
    if (check === 'search') (e.target as Element).lastElementChild.value = '';
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
        onSubmit={(e: React.SyntheticEvent<HTMLFormElement>) =>
          startSearch(e, (e.target as HTMLFormElement).lastElementChild.value, 'search')
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
        {(section.populair || section.all.populair).map((item: any, i: any) => {
          return (
            <button key={i} onClick={(e) => startSearch(e, e.target.textContent, 'btn')}>
              {item}
            </button>
          );
        })}
      </PopulairImagesStyle>
    </>
  );
};

export default SearchForm;
