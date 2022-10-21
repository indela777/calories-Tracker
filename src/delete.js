// eslint-disable-next-line import/no-cycle, import/extensions
import dataLocal from './app.js';

const Delete = (id) => {
  const listCalorie = JSON.parse(localStorage.getItem('array1'));
  const updatedList = listCalorie.filter((item) => item.id !== id);
  localStorage.setItem('array1', JSON.stringify(updatedList));
  dataLocal();
};
export default Delete;
