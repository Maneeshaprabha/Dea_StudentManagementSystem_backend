package com.sms.deastudentmanagementsystem.service;

import com.sms.deastudentmanagementsystem.model.Assignment;

import java.util.List;

public interface AssignmentService {
    List<Assignment> getAllAssignments();

    Assignment saveAssignment(Assignment assignment);

    Assignment getAssignmentById(Long id);

    Assignment updateAssignment(Long id, Assignment assignment);

    void deleteAssignmentById(Long id);
}
