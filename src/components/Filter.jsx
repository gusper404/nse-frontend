import { useEffect, useState } from 'react';
import qs from 'qs';
import Search from './Search';

export default function Filter({ endpoint, currentUrl, currentCategory, data, path }) {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        setLoading(true);

        const query = qs.stringify({
            fields: ['id'],
            populate: {
              videos: '*',
              category: {
                fields: ['name',  'slug']
              }
            }
          }, {
            encodeValuesOnly: true
          })

        const response = await fetch(`${import.meta.env.PUBLIC_STRAPI_API_URL}/${endpoint}?${query}`);
        const { data:posts } = await response.json();

        const allCategories = posts.map(({attributes:post}) => {
          return {
            name: post.category.data.attributes.name,
            slug: post.category.data.attributes.slug
          }
        });

        const categoriesWithoutDuplicates = allCategories.reduce((acc, category) => {
          if (!acc.find(({name}) => name === category.name)) {
            acc.push(category);
          }
          return acc;
        }, []);

        setCategories(categoriesWithoutDuplicates);

      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    fetchCategories();
  }, []);

  const handleChanges = (e) => {
    if(currentCategory) {
      window.location.href = currentUrl.href.replace(currentCategory, '') + e.target.value
    } else {
      window.location.href = currentUrl + '/' + e.target.value
    }
  }

  if (loading) {
    return <div>Cargando...</div>
  }

  return (
    <div className="join flex">
      <div className="w-full">
        <div>
          <Search data={data} path={path}/>
        </div>
      </div>
      <div className="flex-none">
        <select defaultValue={currentCategory} className="select select-bordered join-item" onChange={handleChanges}>
          <option disabled value=''>Filtrar</option>
          {categories.map((category) => (
            <option key={category.slug} value={category.slug}>{category.name}</option>
          ))}
        </select>
      </div>
    </div>
  )
}
