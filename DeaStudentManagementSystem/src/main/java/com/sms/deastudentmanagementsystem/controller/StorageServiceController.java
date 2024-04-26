package com.sms.deastudentmanagementsystem.controller;

import com.sms.deastudentmanagementsystem.model.Grade;
import com.sms.deastudentmanagementsystem.model.ImageData;
import com.sms.deastudentmanagementsystem.service.StorageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("/storage")
public class StorageServiceController {

    @Autowired
    private StorageService service;

    @PostMapping("/uploadImage")
    public ResponseEntity<?> uploadImage(@RequestParam("image") MultipartFile file) throws IOException {
        String uploadImage = service.uploadImage(file);
        return ResponseEntity.status(HttpStatus.OK).body(uploadImage);
    }


    @GetMapping("/downloadImage/{fileName}")
    public ResponseEntity<?> downloadImage(@PathVariable String fileName) {
        byte[] imageData = service.downloadImage(fileName);
        return ResponseEntity.ok().contentType(MediaType.IMAGE_PNG).body(imageData);
    }

    @PostMapping("/uploadImageToFileSystem")
    public ResponseEntity<?> uploadImageToFileSystem(@RequestParam("image") MultipartFile file) throws IOException {
        String uploadImage = service.uploadImageToFileSystem(file);
        return ResponseEntity.status(HttpStatus.OK).body(uploadImage);
    }

    @GetMapping("/downloadImageFromFileSystem/{fileName}")
    public ResponseEntity<?> downloadImageFromFileSystem(@PathVariable String fileName) throws IOException {
        byte[] imageData = service.downloadImageFromFileSystem(fileName);
        return ResponseEntity.ok().contentType(MediaType.IMAGE_PNG).body(imageData);
    }

    public static void main(String[] args) {
        SpringApplication.run(StorageServiceController.class, args);
    }
}
