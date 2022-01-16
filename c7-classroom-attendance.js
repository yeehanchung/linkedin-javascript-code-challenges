classroom = {
	classList: ['Rashida', 'John', 'Roman', 'Lisa', 'Omair', 'Lukas'],
	hasTeachingAssistant: true,
};

function getStudents(classroom) {
	let { hasTeachingAssistant, classList } = classroom;
	let teacher, teachingAssistant, students;

	if (hasTeachingAssistant) {
		[teacher, teacherAssistant, ...students] = classList;
	} else {
		[teacher, ...students] = classList;
	}
	return students;
}

console.log(getStudents(classroom));
