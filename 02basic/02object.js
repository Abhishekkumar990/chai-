//In this we de-strcture and other part

const course = {
    coursename: "js in Hindi",
    price: "999",
    courseInstrutor: "self",
}

// course.courseInstrutor
const { courseInstrutor: instrutor } = course

console.log(instrutor);