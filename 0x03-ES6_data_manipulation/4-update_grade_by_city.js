/**
 * Updates the grades of a list of students in a given city.
 * *@param* {{
 *   id: Number,
 *   firstName: String,
 *   location: String
 * }[]} students - The list of students.
 * @param {*} city - The city of students.
 * *@param* {{
 *   studentId: Number,
 *   grade: Number,
 * }[]} newGrades - The new grades to be given to a student.
 * *@returns* {{id: Number, firstName: String, location: String}[]}
 */

function updateStudentGradeByCity(students, city, newGrades) {
  return students
    .filter((student) => student.location === city)
    .map((student) => {
      const gradeObj = newGrades.find(
        (grade) => grade.studentId === student.id
      );
      return {
        ...student,
        grade: gradeObj ? gradeObj.grade : 'N/A',
      };
    });
}

export default updateStudentGradeByCity;
