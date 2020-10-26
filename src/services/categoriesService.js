// import instance from "../config/instance";

// export function getCategories() {
//   return instance.get("/categories.json");
// }

// export function saveCategory(category) {
//   if(category.id){
//   const body = { ...category };
//   delete body.id;
//   return instance.put("/categories.json", body);
//   }
//   return instance.post("/categories.json", category);
// }

export const categories = [];

export function getCategories() {
  return categories;
}

export function saveCategory(category) {
  let categoryDb = categories.find((c) => c.id === category.id) || {};
  categoryDb.name = category.name;
  if (!category.id) {
    categoryDb.id = Date.now().toString();
    categories.push(categoryDb);
  }
  return categoryDb;
}
