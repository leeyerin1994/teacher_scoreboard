import React, {useEffect, useState} from 'react';
import axios from 'axios';

export const Heroes = (props) => {
  const [heroes, setHeroes] = useState([]);

  useEffect(() => {
    getHeroes()
  }, []);

  const getHeroes = () => {
    axios.get('http://ec2-15-164-134-124.ap-northeast-2.compute.amazonaws.com:8000/api/user/heroes?start_index=0&page_size=5')
      .then(res => {
        setHeroes(res.data.data);
        console.log(heroes);
      });
  }

  return (
    <ul>
      {heroes.map(hero => (
        <li key={hero.id}>
          <img src={hero.photo} alt={hero.name} />
          <span>{hero.name}</span>
        </li>
      ))
      }
    </ul>
  );
}