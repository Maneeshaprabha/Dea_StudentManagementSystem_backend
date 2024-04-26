package com.sms.deastudentmanagementsystem.controller;

import com.sms.deastudentmanagementsystem.exception.ResourceNotFoundException;
import com.sms.deastudentmanagementsystem.model.Grade;

import com.sms.deastudentmanagementsystem.repository.GradeRepository;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/grade")
public class GradeController {

    @Autowired
    private GradeRepository gradeRepository;

    @GetMapping
    public List<Grade> getAllGrade(){
        return gradeRepository.findAll();
    }

    @PostMapping
    public Grade createGrade(@RequestBody Grade grade){
        return gradeRepository.save(grade);

    }
    @GetMapping("/{id}")
    public ResponseEntity<Grade> getGradeById(@PathVariable long id) {
        Grade grade = gradeRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Grade not found with id: " + id));
        return ResponseEntity.ok(grade);
    }

    // build update student REST API
    @PutMapping("{id}")
    public ResponseEntity<Grade> updateGrade(@PathVariable long id,@RequestBody Grade gradeDetails) {
        Grade updateGrade = gradeRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Grade not exist with id: " + id));

        updateGrade.setMarks(gradeDetails.getMarks());
        updateGrade.setGrades(gradeDetails.getGrades());
        updateGrade.setSubjectCode(gradeDetails.getSubjectCode());
        updateGrade.setSubject(gradeDetails.getSubject());



        gradeRepository.save(updateGrade);

        return ResponseEntity.ok(updateGrade);
    }


    // build delete grade REST API
    @DeleteMapping("{id}")
    public ResponseEntity<HttpStatus> deleteGrade(@PathVariable long id){

        Grade grade = gradeRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Grade not exist with id: " + id));
        gradeRepository.delete(grade);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}

