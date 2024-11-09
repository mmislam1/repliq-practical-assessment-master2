import React from "react";

const AllRecipes = () => {
  const [Recipies, setRecipies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('www.themealdb.com/api/json/v1/1/search.php?f=a');
        setRecipies(response.data);
      } catch (error) {
        console.error('Error fetching data(recipies):', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen flex items-center">
      <div className="container mx-auto">
        <h1 className="text-4xl">This is the all recipes page</h1>


      </div>
    </div>
  );
};

export default AllRecipes;
