/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */

export function cookingStatus(time) {
  if (time === undefined) return "You forgot to set the timer.";
  if (time === 0) return "Lasagna is done.";
  return "Not done, please wait.";
}

export function preparationTime(layers, average) {
  if (!average) average = 2;
  return layers.length * average;
}

export function quantities(layers) {
  let noodles = 0;
  let sauce = 0;
  layers.forEach((element) => {
    if (element === "noodles") {
      noodles += 50;
    } else if (element === "sauce") {
      sauce += 0.2;
    }
  });
  return { noodles: noodles, sauce: sauce };
}

export function addSecretIngredient(friendsList, myList) {
  myList.push(friendsList[friendsList.length - 1]);
}

export function scaleRecipe(recipe, scale) {
  let recipeCopy = JSON.stringify(recipe)
  recipeCopy = JSON.parse(recipeCopy)
  Object.keys(recipeCopy).forEach(function (key, index) {
    recipeCopy[key] *= scale / 2;
  });
  return recipeCopy
}
