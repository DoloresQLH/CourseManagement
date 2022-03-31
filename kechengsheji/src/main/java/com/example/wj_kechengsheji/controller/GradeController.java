package com.example.wj_kechengsheji.controller;

import com.example.wj_kechengsheji.pojo.Grade;
import com.example.wj_kechengsheji.service.GradeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("/grade")
public class GradeController {
    @Autowired
    GradeService gradeService ;
    @PostMapping("/add")
    @CrossOrigin
    public int addGrade (@RequestBody Grade grade) {
        return gradeService.addGrade(grade) ;
    }
}
