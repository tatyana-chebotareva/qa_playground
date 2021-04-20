const recipeCategory: Array<string> = ["----","Breakfast","Second Breakfast","Brunch","Lunch","Dinner","Drinks","Dessert"]

class Recipe {
    name: string;
    category: number; //recipeCategory[i]
    authorFirstName: string;
    authorLastName: string;
    ingredient: Array<string>;
    instruction: Array<string>;

    constructor( //no easy way to create multiple constructors in TypeScript? what about non-required fields?
        name: string,
        category: number,
        authorFirstName: string,
        authorLastName: string,
        ingredient: Array<string>,
        instruction: Array<string>,
    ) {
        this.name = name;
        this.category = category;
        this.authorFirstName = authorFirstName;
        this.authorLastName = authorLastName;
        this.ingredient = ingredient;
        this.instruction = instruction;
    }
}

const testData: Array<Recipe> = [
  //recipe#1
  new Recipe(
    "Good Old Fashioned Pancakes",
    1, //"Breakfast"
    "dakota kelly",
    "from allrecipes",
    ["1 ½ cups all-purpose flour", "3 ½ teaspoons baking powder", "1 teaspoon salt", "1 tablespoon white sugar", "1 ¼ cups milk", "1 egg", "3 tablespoons butter, melted"],
    [
      "In a large bowl, sift together the flour, baking powder, salt and sugar. Make a well in the center and pour in the milk, egg and melted butter; mix until smooth.", 
      "Heat a lightly oiled griddle or frying pan over medium-high heat. Pour or scoop the batter onto the griddle, using approximately 1/4 cup for each pancake. Brown on both sides and serve hot."
    ]
  ),
  
  //recipe#2
  new Recipe(
    "Perfect Baked Potato",
    5, //"Dinner"
    "Jeanine and Jack.",
    "from Love&Lemons",
    ["4 medium russet potatoes", "Extra-virgin olive oil", "Sea salt", "Cashew Sour Cream", "Tempeh Bacon Bits", "Chives"],
    [
      "Preheat the oven to 425°F and line two baking sheet with parchment paper.",
      "Use a fork to poke a few holes into the potatoes. Place on the baking sheet, rub with olive oil, and sprinkle liberally with sea salt all over. Bake 45 to 60 minutes, or until the potato is fork-tender and the skin is crisp.",
      "Slice open each potato. Assemble with a dollop of sour cream or cashew cream, tempeh bacon bits, and a sprinkle of chives. Serve with remaining cashew cream and tempeh bacon on the side."
    ]
  ),

  //recipe#3
  new Recipe(
    "Hard boiled eggs",
    0,
    "unknown",
    "-",
    ["6 to 12 eggs"],
    ["Place eggs in a pot and cover with cold water by 1 inch. Boil and let them sit in a hot water for 12 minutes."]
  )
]