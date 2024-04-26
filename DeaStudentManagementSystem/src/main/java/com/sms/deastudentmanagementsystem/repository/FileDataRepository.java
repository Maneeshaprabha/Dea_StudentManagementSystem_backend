package com.sms.deastudentmanagementsystem.repository;

import com.sms.deastudentmanagementsystem.model.FileData;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface FileDataRepository extends JpaRepository<FileData,Integer> {
    Optional<FileData> findByName(String fileName);
}