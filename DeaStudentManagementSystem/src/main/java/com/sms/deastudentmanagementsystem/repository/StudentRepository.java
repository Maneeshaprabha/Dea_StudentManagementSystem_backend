package com.sms.deastudentmanagementsystem.repository;

import com.sms.deastudentmanagementsystem.model.Student;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StudentRepository extends JpaRepository<Student, Long> {
    //All crud methods
}
