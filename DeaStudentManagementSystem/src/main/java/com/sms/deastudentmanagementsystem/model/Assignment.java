package com.sms.deastudentmanagementsystem.model;


import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.web.multipart.MultipartFile;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "assignment")
public class Assignment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;


    @Column(name = "subject")
    private String subject;

    @Column(name = "studentName")
    private String studentName;

    @Column(name = "description")
    private String description;

    @Column(name = "assignments")
    private byte[] assignments;

    @Column(name = "filePath")
    private String filePath;

    @Transient
    private MultipartFile file;


}
