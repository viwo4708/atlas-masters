const express = require('express');
const app = express();
const PORT = 3000;
const cors = require('cors');

app.use(cors()); // This allows ALL origins (good for dev, be careful in production)

// This allows your API to parse JSON data sent in a request body
app.use(express.json());

//plants data

let plants = [
  {
    id: 1,
    name: "Monstera",
    latin_name: "Monstera deliciosa",
    light_level: ["Bright"],
    light_type: "Indirect",
    rareness: "Common",
    difficulty: ["Beginner", "Intermediate", "Advanced"],
    plant_type: ["leafy"],
    image: "/plantphotos/monstera.jpg",
    description: "Monstera is a common, widely beloved plant with large, showy foliage. Its defining trait is large leaves with holes, or fenestrations. Fun fact, in optimal growing conditions, the plant produces a delicious fruit! Give it something sturdy to climb, and water only when the top few inches of soil are dry."
  },
  {
    id: 2,
    name: "Lithops (Living Stones)",
    latin_name: "Lithops",
    light_level: ["Bright"],
    light_type: "Direct",
    rareness: "Semi-Rare",
    difficulty: ["Advanced"],
    plant_type: ["succulent"],
    image: "/plantphotos/lithops.jpg",
    description: "Lithops, also known as living stones, are a charming, strange looking succulent. Some people say they look like little butts. They need A LOT of sun, don't be afraid to let them get toasted in bright light! They have a particular watering schedule to accomodate their growing stages, do your research before adopting this plant into your home."
  },
  {
    id: 3,
    name: "Pothos (Devil's Ivy)",
    latin_name: "Epipremnum aureum",
    light_level: ["Medium", "Bright"],
    light_type: "Indirect",
    rareness: "Common",
    difficulty: ["Beginner", "Intermediate", "Advanced"],
    plant_type: ["leafy"],
    image: "/plantphotos/pothos.jpg",
    description: "Pothos seems to be the plant of choice for trendy millenial coffee shops. Considered an excellent starter plant, they come in a variety of different foliage colors and patterns ranging from dark green to mottled with white (variegated). Pothos can elegantly climb or trail, adding a fresh, nature-y vibe to your space. Let the soil dry thoroughly between waterings."
  },
  {
    id: 4,
    name: "Money Tree",
    latin_name: "Pachira aquatica",
    light_level: ["Bright"],
    light_type: "Indirect",
    rareness: "Common",
    difficulty: ["Beginner", "Intermediate", "Advanced"],
    plant_type: ["leafy"],
    image: "/plantphotos/moneytree.jpeg",
    description: "In Chinese Feng Shui, Money Trees are believed to bring wealth and prosperity into your home. In the wild (or in an exceptionally large pot) money trees can grow up to 60 feet tall! Indoors, though, they are typically limited by potting and pruning. Let the soil dry fully between waterings."
  },
  {
    id: 5,
    name: "Pineapple",
    latin_name: "Ananas comosus",
    light_level: ["Bright"],
    light_type: "Direct",
    rareness: "Rare",
    difficulty: ["Intermediate", "Advanced"],
    plant_type: ["spiky"],
    image: "/plantphotos/pineapple.jpg",
    description: "Yes, you can grow pineapple as a house plant! They can product a small, edible fruit, as well as spiky foliage. Let the soil get very dry between waterings. The parent plant usually dies after producing a fruit, but it will produce pups that can be propagated!"
  },
  {
    id: 6,
    name: "Conophytum",
    latin_name: "Conophytum",
    light_level: ["Bright"],
    light_type: "Indirect",
    rareness: "Extremely Rare",
    difficulty: ["Advanced"],
    plant_type: ["succulent"],
    image: "/plantphotos/conophytum.jpg",
    description: "Conophytum are extremely rare succulents found in southern Africa. They are small, compact, and disctinctively round. Unfortunately, many types are illegally poached from the wild, endangering populations. If you try to buy one, do your reseach to ensure ethical acquisition!"
  },
  {
    id: 7,
    name: "Alocasia",
    latin_name: "Alocasia",
    light_level: ["Bright"],
    light_type: "Indirect",
    rareness: "Somewhat Rare",
    difficulty: ["Advanced"],
    plant_type: ["leafy"],
    image: "/plantphotos/alocasia.jpg",
    description: "Native to tropical rainforests, Alocasia need high humidity and just the right balance of moisture in their soil to thrive. With distinctively shaped leaves, Alocasia come in many different variegations and colors, providing tropical flair to your space."
  },
   {
    id: 8,
    name: "Snake Plant",
    latin_name: "Dracaena trifasciata",
    light_level: ["Low", "Medium", "Bright"],
    light_type: "Indirect",
    rareness: "Common",
    difficulty: ["Beginner", "Intermediate", "Advanced"],
    plant_type: ["spiky", "succulent"],
    image: "/plantphotos/snakeplant.jpg",
    description: "Snake Plants are common, low maintenance houseplants with stately, upright leaves. They are very tolerant of drought conditions and low light. Snake plants have a secret superpower: they can remove toxins from the air such as formeldahyde and benzene. "
  },
    {
    id: 9,
    name: "String of Pearls",
    latin_name: "Senecio rowleyanus",
    light_level: ["Bright"],
    light_type: "Indirect",
    rareness: "Common",
    difficulty: ["Intermediate", "Advanced"],
    plant_type: ["succulent"],
    image: "/plantphotos/stringofpearls.jpg",
    description: "These plants look a bit surreal, with their strings of perfectly spherical leaves. They need high light levels, but direct light can scorch their delicate foliage. Water only when the 'pearls' start to look slightly shriveled."
  },
    {
    id: 10,
    name: "Pitcher Plant",
    latin_name: "Sarracenia or Nepenthes",
    light_level: ["Bright"],
    light_type: "Indirect",
    rareness: "Rare",
    difficulty: ["Intermediate", "Advanced"],
    plant_type: ["leafy"],
    image: "/plantphotos/pitcherplant.jpg",
    description: "With a unique, almost alien appearance, the pitcher plants uses its unique cupped leaves to catch and digest unsuspecting insects. In humid envrionments with careful attention to watering needs, pitcher plants make surprisingly good houseplants."
  },
    {
    id: 11,
    name: "Chinese Evergreen",
    latin_name: "Aglaonema",
    light_level: ["Medium", "Bright"],
    light_type: "Indirect",
    rareness: "Common",
    difficulty: ["Beginner", "Intermediate", "Advanced"],
    plant_type: ["leafy"],
    image: "/plantphotos/chineseevergreen.jpg",
    description: "For centuries, Chinese Evergreen plants have been grown in Asia to bring good luck. They prefer high humidity and warm temperatures. Their leaves come in a variety of different patterns, with variegations including light green, white, and pink."
  },
  {
    id: 12,
    name: "Plastic Plant",
    latin_name: "Fictus mendacem",
    light_level:["None"],
    light_type: "None",
    rareness: "Common",
    difficulty: ["Beginner", "Intermediate", "Advanced"],
    plant_type: ["leafy", "succulent", "spiky", "flowering", ],
    image: "/plantphotos/plastic.jpg",
    description: "For those who cannot provide light, water, or soil, a plastic plant may be the right choice. With a near infinite variety of forms and colors, let your imagination run wild in choosing the spurious stems and false foliage of your dreams!"
  },
    {
    id: 13,
    name: "ZZ Plant",
    latin_name: "Zamioculcas zamiifolia",
    light_level: ["Low", "Medium", "Bright"],
    light_type: "Indirect",
    rareness: "Common",
    difficulty: ["Beginner", "Intermediate", "Advanced"],
    plant_type: ["succulent", "leafy"],
    image: "/plantphotos/zzplant.jpg",
    description: "ZZ plants have regal, dark green leaves. The tolerate low light well, and don't need frequent watering. Many people joke that the best way to take care of it is to just put in a corner and kind of forget about it. "
  },
  {
    id: 14,
    name: "Aloe Vera",
    latin_name: "Aloe vera",
    light_level: ["Bright"],
    light_type: "Direct",
    rareness: "Common",
    difficulty: ["Beginner", "Intermediate", "Advanced"],
    plant_type: ["spiky", "succulent"],
    image: "/plantphotos/aloevera.jpg",
    description: "Aloe vera is a spiky succulent that tolerates neglect well as long as it has plenty of light. The gel inside the leaves is an excellent anti-inflammatory moisturizer for skin, commonly used to soothe suburns or dryness and irritation."
  },
  {
    id: 15,
    name: "Spider Plant",
    latin_name: "Chlorophytum comosum",
    light_level: ["Medium", "Bright"],
    light_type: "Indirect",
    rareness: "Common",
    difficulty: ["Beginner", "Intermediate", "Advanced"],
    plant_type: ["leafy", "spiky"],
    image: "/plantphotos/spiderplant.jpg",
    description: "Spider plants are fast growing, and seemingly impossible to kill. When they are happy, they will produce pups that can be snipped off and propagated to grow more plants. Before long, you can have your own army of spider plants taking over!"
  },
    {
    id: 16,
    name: "Goldfish Plant",
    latin_name: "Nematanthus gregarius",
    light_level: ["Bright"],
    light_type: "Indirect",
    rareness: "Somewhat Rare",
    difficulty: ["Advanced"],
    plant_type: ["leafy", "flowering"],
    image: "/plantphotos/goldfishplant.jpg",
    description: "The Goldfish Plant is named for its golden orange flowers that bear a strong resemblance to small goldfish. A whimsical addition to any plant collection! They prefer high humidity, are sensitive to temperature changes, and require consistent watering to thrive."
  },
    {
    id: 17,
    name: "Strombocactus",
    latin_name: "Strombocactus disciformis",
    light_level: ["Bright"],
    light_type: "Direct",
    rareness: "Rare",
    difficulty: ["Intermediate", "Advanced"],
    plant_type: ["succulent", "spiky"],
    image: "/plantphotos/strombocactus.jpg",
    description: "Strombocactus is a rare cactus native to Mexico. They are considered a vulnerable species, so make sure you buy them from an ethical seller. They are very sensitive to overwatering. Grow it in very rocky, inorganic soil to mimic its natural habitat."
  },
    {
    id: 18,
    name: "Haworthia",
    latin_name: "Haworthia cooperi",
    light_level: ["Bright"],
    light_type: "Indirect",
    rareness: "Somewhat Rare",
    difficulty: ["Beginner", "Intermediate", "Advanced"],
    plant_type: ["succulent"],
    image: "/plantphotos/haworthia.jpg",
    description: "Haworthia cooperi leaves have crystalline, clear 'windows' or fenestrations at the tips of their leaves that allow sunlight to reach photosynthesizing surfaces inside. Allow to dry completely between waterings to prevent root rot. "
  },
    {
    id: 19,
    name: "Air Plant",
    latin_name: "Tillandsia",
    light_level: ["Bright"],
    light_type: "Indirect",
    rareness: "Somewhat Rare",
    difficulty: ["Beginner", "Intermediate", "Advanced"],
    plant_type: ["spiky"],
    image: "/plantphotos/airplant.jpg",
    description: "Air plants have an ethereal and striking appearance, because they 'float' in midar and thrive without soil. They absorb moisture through their leaves, soak them in water for 30-60 minutes each week to ensure they are hydrated. Get creative with how you display these!"
  },
    {
    id: 20,
    name: "Boobie Cactus",
    latin_name: "Myrtillocactus geometrizans 'Fukurokuryuzinboku'",
    light_level: ["Bright"],
    light_type: "Direct",
    rareness: "Rare",
    difficulty: ["Beginner", "Intermediate", "Advanced"],
    plant_type: ["succulent"],
    image: "/plantphotos/boobiecactus.jpg",
    description: "There's no denying it: this cactus has boobs. Yes, this is a real plant, although it can be difficult to find, as it is a unique cultivar from Japan. Water thoroughly but infrequently, and make sure it gets plenty of sun on its lovely lady lumps."
  },
  {
    id: 21,
    name: "Mouse Head",
    latin_name: "Muiria hortenseae",
    light_level: ["Bright"],
    light_type: "Direct",
    rareness: "Extremely Rare",
    difficulty: ["Advanced"],
    plant_type: ["succulent"],
    image: "/plantphotos/mousehead.jpg",
    description: "An exceedingly strange succulent. Resembling a hairy green blob or a piece of mochi, this plant has a suprisingly large root system for its tiny size. In the wild, it is very endangered, so make sure you acquire from an ethical seller."
  },
    {
    id: 22,
    name: "Frizzle Sizzle",
    latin_name: "Albuca spiralis",
    light_level: ["Bright"],
    light_type: "Direct",
    rareness: "Somewhat Rare",
    difficulty: ["Intermediate", "Advanced"],
    plant_type: ["spiky", "succulent"],
    image: "/plantphotos/frizzlesizzle.jpg",
    description: "The dark green, spiny leaves of this plant curl into tight corkscrews when they are thriving with enough light. During summer, they lose their leaves and go dormant. Move it to a shady spot and leave it alone to rest until the next growing season!"
  },
    {
    id: 23,
    name: "Cast Iron Plant",
    latin_name: "Aspidistra elatior",
    light_level: ["Low", "Medium", "Bright"],
    light_type: "Indirect",
    rareness: "Somewhat Rare",
    difficulty: ["Beginner", "Intermediate", "Advanced"],
    plant_type: ["leafy"],
    image: "/plantphotos/castironplant.jpg",
    description: "This plant is very hardy and tolerant of low light and dry conditions. Water only when the soil is completetely dry. Stately dark green leaves are the standard, but more colorful variegated types are available for higher prices."
  },
    {
    id: 24,
    name: "Oyster Mushroom",
    latin_name: "Pleurotus genus",
    light_level: ["Low", "Medium", "Bright"],
    light_type: "Indirect",
    rareness: "Somewhat Rare",
    difficulty: ["Advanced"],
    plant_type: ["mushroom"],
    image: "/plantphotos/oystermushroom.jpg",
    description: "Although Oyster Mushrooms are not plants, they can be a great addition to an indoor garden for those up for the challenge. They require high levels of humidity to grow. If you are successful, you can cook them into a variety of delicious dishes!"
  },
    {
    id: 25,
    name: "Calathea",
    latin_name: "Calathea",
    light_level: ["Medium", "Bright"],
    light_type: "Indirect",
    rareness: "Somewhat Rare",
    difficulty: ["Advanced"],
    plant_type: ["leafy"],
    image: "/plantphotos/calathea.jpg",
    description: "Calatheas feature striking, striped leaves. They are also very temperamental, and are sensitive to water quality, humidity, and temperature. Not for the faint of heart, adopt only if you're up for the challenge!"
  },
  {
    id: 26,
    name: "African Violet",
    latin_name: "Saintpaulia ionantha",
    light_level: ["Medium", "Bright"],
    light_type: "Indirect",
    rareness: "Somewhat Rare",
    difficulty: ["Intermediate", "Advanced"],
    plant_type: ["leafy", "flowering"],
    image: "/plantphotos/africanviolet.jpg",
    description: "African violets have brightly colored, compact blooms that add vibrant flair to any space. Do not let the soil dry completely, and don't get cold water on the delicate leaves to avoid spots and discoloration."
  },
  {
    id: 27,
    name: "Queen of the Night",
    latin_name: "Epiphyllum oxypetalum",
    light_level: ["Bright"],
    light_type: "Indirect",
    rareness: "Rare",
    difficulty: ["Advanced"],
    plant_type: ["leafy", "flowering", "succulent"],
    image: "/plantphotos/queenofnight.jpg",
    description: "The regal and mysterious Queen of Night is a jungle cactus that displays its fragrant bloom for only one night a year. They flower nocturnally to attract natural pollinators such as moths and bats. They require well draining soil as well as consistent moisture."
  },

];

// Route to get EVERYTHING
app.get('/api/plants', (req, res) => {
    res.json(plants);
});

// Route to get just ONE by ID
app.get('/api/plants/:id', (req, res) => {
    const plantId = parseInt(req.params.id);
    const plant = plants.find(p => p.id === plantId);

    if (plant) {
        res.json(plant);
    } else {
        res.status(404).send("Plant not found");
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});