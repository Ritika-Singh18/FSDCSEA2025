const student = {
  name:"Ram",
  age: 20,
  branch: "CSE-A",
  language:[{
    lang1:"Java",
    lang2:"Python",
  },
{
  database1 : "mysql",
  database2 : "Oracle",
  database3 : "Mongodb",
},
  {
    framework1:"Hibernate",
    framework2 : "Spring",
  }]
}
// console.log(student);
// console.log(student.name);
// console.log(student.language[0].lang1);
// console.log(student.language[1]);
// console.log(student["language"][2]);



student.college="ABES Engineering College";
console.log(student);
delete student.name;
console.log(student);