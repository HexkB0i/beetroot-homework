'use strict';

// Elements
const displayArea = document.querySelector('.display')
const inputName = document.querySelector('#name')
const inputCity = document.querySelector('#city')
const inputCourse = document.querySelector('#course')
const btnSubmit = document.querySelector('#btn-submit')
const btnReset = document.querySelector('#btn-reset')

let studentArr = [];

class Student {
    constructor(name, city, course, id){
        this.name = name;
        this.city = city;
        this.course = course;
        this.id = id;
    }
}

function parseStudents(){
    displayArea.innerHTML = '';
    studentArr.forEach(student => {
        let studentListItem = document.createElement('li');
        studentListItem.innerText = `${student.id}. ${student.name} from ${student.city} is studying ${student.course}.`;
        displayArea.appendChild(studentListItem);
    });
}

function addStudent(){
    let studentName = inputName.value;
    let studentCity = inputCity.value;
    let studentCourse = inputCourse.value;

    let studentId = studentArr.length + 1

    if (!studentName || !studentCity || !studentCourse){
        alert('Please provide all the details.')
    }else{
        let student = new Student(studentName, studentCity, studentCourse, studentId);
        studentArr.push(student)
        document.querySelector('.inputs-form').reset()
        parseStudents()
    }
}

btnSubmit.addEventListener('click', addStudent)
