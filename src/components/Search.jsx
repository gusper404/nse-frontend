import { useState } from 'react';

const Search = ({ data, path }) => {

  const [search, setSearch] = useState('');
  const handleSearch = (e) => {
    setSearch(e.target.value);
  }

  return (
    <div className="relative">
      <input value={search} className="input input-bordered join-item w-full" placeholder="Buscar" onChange={handleSearch}/>
      {search && (
        <div className='absolute left-0 w-full top-full pt-2'>
          <ul className="menu bg-base-200 rounded-box w-full shadow">
            {data.filter(({attributes:post}) => post.title.toLowerCase().includes(search.toLowerCase())).map(({attributes:post}) => (
              <li key={post.id}>
                <a href={path + '/' + post.slug}>{post.title}</a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Search;
