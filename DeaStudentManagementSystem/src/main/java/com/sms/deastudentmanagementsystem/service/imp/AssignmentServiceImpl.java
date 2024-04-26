package com.sms.deastudentmanagementsystem.service.imp;

import com.sms.deastudentmanagementsystem.exception.ResourceNotFoundException;
import com.sms.deastudentmanagementsystem.model.Assignment;
import com.sms.deastudentmanagementsystem.repository.AssignmentRepository;
import com.sms.deastudentmanagementsystem.service.AssignmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AssignmentServiceImpl implements AssignmentService {

    private final AssignmentRepository assignmentRepository;

    @Autowired
    public AssignmentServiceImpl(AssignmentRepository assignmentRepository) {
        this.assignmentRepository = assignmentRepository;
    }

    @Override
    public List<Assignment> getAllAssignments() {
        return assignmentRepository.findAll();
    }

    @Override
    public Assignment saveAssignment(Assignment assignment) {
        return assignmentRepository.save(assignment);
    }

    @Override
    public Assignment getAssignmentById(Long id) {
        Optional<Assignment> assignment = assignmentRepository.findById(id);
        if (assignment.isPresent()) {
            return assignment.get();
        } else {
            throw new ResourceNotFoundException("Assignment not found with id: " + id);
        }
    }

    @Override
    public Assignment updateAssignment(Long id, Assignment assignment) {
        Optional<Assignment> optionalAssignment = assignmentRepository.findById(id);
        if (optionalAssignment.isPresent()) {
            Assignment existingAssignment = optionalAssignment.get();
            existingAssignment.setSubject(assignment.getSubject());
            existingAssignment.setStudentName(assignment.getStudentName());
            existingAssignment.setDescription(assignment.getDescription());
            existingAssignment.setAssignments(assignment.getAssignments());
            return assignmentRepository.save(existingAssignment);
        } else {
            throw new ResourceNotFoundException("Assignment not found with id: " + id);
        }
    }

    @Override
    public void deleteAssignmentById(Long id) {
        assignmentRepository.deleteById(id);
    }
}