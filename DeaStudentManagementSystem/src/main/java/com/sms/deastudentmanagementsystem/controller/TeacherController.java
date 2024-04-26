package com.sms.deastudentmanagementsystem.controller;

import com.sms.deastudentmanagementsystem.exception.ResourceNotFoundException;
import com.sms.deastudentmanagementsystem.model.Student;

import com.sms.deastudentmanagementsystem.model.Teacher;
import com.sms.deastudentmanagementsystem.repository.TeacherRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin("*")
@RestController
@RequestMapping("/api/teacher")
public class TeacherController {
    @Autowired
    private TeacherRepository teacherRepository;

    @GetMapping
    public List<Teacher> getAllTeacher(){
        return teacherRepository.findAll();
    }

    @PostMapping
    public Teacher createTeacher(@RequestBody Teacher teacher){
        return teacherRepository.save(teacher);

    }
    @GetMapping("/{id}")
    public ResponseEntity<Teacher> getTeacherById(@PathVariable long id) {
        Teacher teacher = teacherRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Student not found with id: " + id));
        return ResponseEntity.ok(teacher);
    }

    // build update employee REST API
    @PutMapping("{id}")
    public ResponseEntity<Teacher> updateTeacher(@PathVariable long id,@RequestBody Teacher teacherDetails) {
        Teacher updateTeacher = teacherRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Employee not exist with id: " + id));

        updateTeacher.setFirstName(teacherDetails.getFirstName());
        updateTeacher.setLastName(teacherDetails.getLastName());
        updateTeacher.setEmailId(teacherDetails.getEmailId());
        updateTeacher.setSubject(teacherDetails.getSubject());


        teacherRepository.save(updateTeacher);

        return ResponseEntity.ok(updateTeacher);
    }


    // build delete teacher REST API
    @DeleteMapping("{id}")
    public ResponseEntity<HttpStatus> deleteTeacher(@PathVariable long id){

        Teacher teacher = teacherRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Teacher not exist with id: " + id));
        teacherRepository.delete(teacher);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
