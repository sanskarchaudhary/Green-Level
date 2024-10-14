const arr = [
  {
    name: "John",
    age: 20,
  },
  {
    name: "Mike",
    age: 30,
  },
  {
    name: "Jane",
    age: 40,
  },
];
const arr2 = arr.filter((item) => {
  if (item.age == 20) console.log("age 20",item.name,"->",item.age);
  else if (item.age == 30) console.log("age 30",item.name, "->", item.age);
  else if (item.age == 40) console.log("age 40",item.name, "->", item.age);
});
