package com.sms.deastudentmanagementsystem.repository;

import com.sms.deastudentmanagementsystem.model.ImageData;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface StorageRepository extends JpaRepository<ImageData, Long> {


    Optional<ImageData> findByName(String fileName);
}
