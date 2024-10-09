/**
 * Updates the grades of a list of students in a given city.
 * @param {{
 *   id: Number,
 *   firstName: String,
 *   location: String
 * }[]} students - The list of students.
 * @param {String} city - The city of students.
 * @param {{
 *   studentId: Number,
 *   grade: Number,
 * }[]} newGrades - The new grades to be given to a student.
 * @returns {{id: Number, firstName: String, location: String, grade: Number|String}[]}
 */
export default function updateStudentGradeByCity(students, city, newGrades) {
  if (!(students instanceof Array)) {
    return [];
  }

  return students
    .filter((student) => student.location === city)
    .map((student) => {
      const newGrade = newGrades.find(
        (grade) => grade.studentId === student.id
      );
      return {
        id: student.id,
        firstName: student.firstName,
        location: student.location,
        grade: newGrade ? newGrade.grade : 'N/A',
      };
    });
}
