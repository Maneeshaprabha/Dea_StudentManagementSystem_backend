package com.sms.deastudentmanagementsystem.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "grade")
public class Grade {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;


    @Column(name = "grades")
    private String grades;

    @Column(name = "marks")
    private String marks;

    @Column(name = "subjectCode")
    private String subjectCode;

    @Column(name = "subject")
    private String subject;
}
