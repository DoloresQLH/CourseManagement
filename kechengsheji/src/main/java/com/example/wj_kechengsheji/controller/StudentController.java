package com.example.wj_kechengsheji.controller;

import com.example.wj_kechengsheji.pojo.Student;
import com.example.wj_kechengsheji.pojo.TableData;
import com.example.wj_kechengsheji.service.GradeService;
import com.example.wj_kechengsheji.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/student")
@CrossOrigin
public class StudentController {
    @Autowired
    StudentService studentService ;
    @Autowired
    GradeService gradeService ;
    @CrossOrigin
    @RequestMapping("/add")
    public int addStudent (@RequestBody Student student) {
        return studentService.addStudent(student);
        }
    @CrossOrigin
    @RequestMapping("/findAll")
    public List<Student> findAll () {
        return studentService.findAll();
    }
    @CrossOrigin
    @RequestMapping("/findCourse")
    public List<TableData> findCourse (int id) {
        return studentService.findCourse(id);
    }
}
