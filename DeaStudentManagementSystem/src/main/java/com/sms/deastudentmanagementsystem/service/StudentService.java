package com.sms.deastudentmanagementsystem.service;

import com.sms.deastudentmanagementsystem.model.Student;

import java.util.List;

public interface StudentService {
    List<Student> getAllStudents();

    Student saveStudent(Student student);

    Student getStudentById(Long id);
    Student updateStudent(long id, Student student);

    Student updateStudent(Student student);

    void deleteStudentById(Long id);
}
