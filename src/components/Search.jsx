import { useState } from 'react';

const Search = ({ data, path, type }) => {
  const basepath = path.endsWith('/') ? path : path + '/';

  const TYPES = {
    cines: 'cine',
    radios: 'radio',
    tvs: 'televisión',
  }

  const [search, setSearch] = useState('');
  const handleSearch = (e) => {
    setSearch(e.target.value);
  }
  const results = data.filter(({attributes:post}) => post.title.toLowerCase().includes(search.toLowerCase()));
  return (
    <div className="relative">
      <input type='search' value={search} className="input input-bordered join-item w-full" placeholder={`Buscar contenido ${TYPES[type]}`} onChange={handleSearch}/>
      {search && results.length > 0 && (
        <div className='absolute left-0 w-full top-full pt-2'>
          <ul className="menu bg-base-200 rounded-box w-full shadow">
            {results.map(({attributes:post}) => (
              <li key={post.id}>
                <a href={basepath + post.slug}>{post.title}</a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Search;
