export default function data() {
  return new Promise(async (resolve, reject) => {
    try {
      const fetchData = async () => {
        try {
          const response = await fetch('https://fakestoreapi.com/products');
          const jsonData = await response.json();
          console.log(jsonData);
          resolve(jsonData);
        } catch (error) {
          console.error('Error fetching data:', error);
          reject(error);
        }
      };

      fetchData();
    } catch (error) {
      reject(error);
    }
  });
}