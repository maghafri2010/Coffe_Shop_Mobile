

const locations = [
  { label: "Tanger", value: "tanger" },
  { label: "Tétouan", value: "tetouan" },
  { label: "Chefchaouen", value: "chefchaouen" },
  { label: "Al Hoceima", value: "al_hoceima" },
  { label: "Rabat", value: "rabat" }, 
];

const filter = ["All Coffee", "Machiato", "Latte", "Americano"];


const coffees = [
  {name:"Caffe Mocha", image: <Machio />, description:"Ethiopian Yirgacheffe is a light to medium roast coffee known for its bright acidity, floral aroma, and vibrant citrus notes. Carefully handpicked from the highlands of Ethiopia, each bean delivers a delicate balance of sweetness and subtle fruitiness.", price:"$4.53", rate:"4.6", type:"Machiato", genre:"Ice/Hot"},
  {name:"Espresso", image: <Espresso />, description:"Ethiopian Yirgacheffe is a light to medium roast coffee known for its bright acidity, floral aroma, and vibrant citrus notes. Carefully handpicked from the highlands of Ethiopia, each bean delivers a delicate balance of sweetness and subtle fruitiness.", price:"$4.23", rate:"4.4", type:"Americano", genre:"Ice/Hot"},
  {name:"Caffe Flat Brown", image: <FlatBrown />, description:"Ethiopian Yirgacheffe is a light to medium roast coffee known for its bright acidity, floral aroma, and vibrant citrus notes. Carefully handpicked from the highlands of Ethiopia, each bean delivers a delicate balance of sweetness and subtle fruitiness.", price:"$3.53", rate:"4.6", type:"Latte", genre:"Ice/Hot"},
  {name:"Caffe Flat White", image: <FlatWhite />, description:"Ethiopian Yirgacheffe is a light to medium roast coffee known for its bright acidity, floral aroma, and vibrant citrus notes. Carefully handpicked from the highlands of Ethiopia, each bean delivers a delicate balance of sweetness and subtle fruitiness.", price:"$4.03", rate:"4.9", type:"Machiato", genre:"Ice/Hot"},
  {name:"Cappuchino", image: <Cappuchino />, description:"Ethiopian Yirgacheffe is a light to medium roast coffee known for its bright acidity, floral aroma, and vibrant citrus notes. Carefully handpicked from the highlands of Ethiopia, each bean delivers a delicate balance of sweetness and subtle fruitiness.", price:"$3.83", rate:"4.2", type:"Latte", genre:"Ice/Hot"},
];

export default {locations, filter, coffees};