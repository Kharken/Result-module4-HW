import React from 'react';
import { useFetch } from '../hooks/useFetch';

const Demo = () => {
  const { data, isLoading, error, refetch } = useFetch('https://jsonplaceholder.typicode.com/posts');
  return (
    <div style={{ maxHeight: '300px', overflow: 'scroll'}}>
      <div >
        <button
          onClick={() =>
            refetch({
              params: {
                _limit: 3,
              },
            })
          }
        >
          Перезапросить
        </button>
      </div>
      {isLoading && 'Загрузка...'}
      {error && 'Произошла ошибка'}
      {data && !isLoading && data.map((item) => <div key={item.id}>{item.title}</div>)}
    </div>
  );
};

export { Demo as FirstTask };
