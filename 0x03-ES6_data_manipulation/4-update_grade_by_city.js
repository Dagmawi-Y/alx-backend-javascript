/**
 * Updates the grades of a list of students in a given city.
 * @param {Array} students - The list of students.
 * @param {String} city - The city of the students.
 * @param {Array} newGrades - The array of new grade objects.
 * @returns {Array} - The updated list of students with their grades.
 */
export default function updateStudentGradeByCity(students, city, newGrades) {
  const defaultGrade = { grade: 'N/A' }; // Default grade if not found in newGrades

  if (students instanceof Array) {
    return students
      .filter((student) => student.location === city) // Filter students by city
      .map((student) => {
        // Find the new grade for each student
        const studentGrade =
          newGrades.find((grade) => grade.studentId === student.id) ||
          defaultGrade;

        // Return the updated student object with the grade
        return {
          id: student.id,
          firstName: student.firstName,
          location: student.location,
          grade: studentGrade.grade, // Assign the grade, or 'N/A' if no grade is found
        };
      });
  }
  return []; // Return an empty array if students is not an array
}
