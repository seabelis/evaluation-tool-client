
const evaluations = []

function assignWeight(evaluation) {
  switch (evaluation.grade) {
    case "red":
      return {
        ...evaluation,
        weight: 50
      };
    case "yellow":
      return {
        ...evaluation,
        weight: 33
      };
    case "green":
      return {
        ...evaluation,
        weight: 17
      };
    default:
      return {
        ...evaluation
      };
  }
}

const evaluation = {};
const weighedEvaluation = assignWeight(evaluation);

console.log(weighedEvaluation);
///////////////

    const generateWeighedList = function(list, weight) {
      const weighed_list = [];

      // Loop over weights
      for (let i = 0; i < weight.length; i++) {
        let multiples = weight[i] * list.length;

        // Loop over the list of items
        for (let j = 0; j < multiples; j++) {
          weighed_list.push(list[i]);
        }
      }

      return weighed_list;
    };
    const list = evaluations
    const weight = [0.5, 0.33, 0.17]
    const weighed_list = generateWeighedList(list, weight);
    const rand = function(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    const random_num = rand(0, weighed_list.length - 1);
    console.log("random_num", random_num);

    console.log("weighted_list", weighed_list);
