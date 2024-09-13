import fs from "fs";

// Leitura do arquivo data.json
/* fs.readFile("data.json", "utf8", (err, data) => {
   if (err) {
      console.error("Erro ao ler o arquivo:", err);
      return;
   }

   try {
      // Parse do JSON para um objeto JavaScript
      const restaurants = JSON.parse(data);

      let formattedArray = [];

      for (let restaurant of restaurants) {
         let formattedRestaurant = {
            address: {
               building: restaurant.address.building,
               coord: restaurant.address.coord,
               street: restaurant.address.street,
               zipcode: restaurant.address.zipcode,
            },
            borough: restaurant.borough,
            cuisine: restaurant.cuisine,
            grades: restaurant.grades.map((grade) => {
               return {
                  date: new Date(grade.date.$date),
                  grade: grade.grade,
                  score: grade.score,
               };
            }),
            name: restaurant.name,
            restaurant_id: restaurant.restaurant_id,
         };
         formattedArray.push(formattedRestaurant);
      }

      //salvar em um arquivo js com a variável data
      fs.writeFile(
         "dataFormatted.js",
         `export default ${JSON.stringify(formattedArray)}`,
         (err) => {
            if (err) {
               console.error("Erro ao salvar o arquivo:", err);
               return;
            }
            console.log("Arquivo salvo com sucesso!");
         }
      );
   } catch (error) {
      console.error("Erro ao converter JSON:", error);
   }
});
 */

import data from "./dataFormatted.js";

console.log(data);