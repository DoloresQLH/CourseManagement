package com.example.wj_kechengsheji.service;

import com.example.wj_kechengsheji.pojo.Student;
import com.example.wj_kechengsheji.pojo.TableData;

import java.util.List;

public interface StudentService {
    //添加学生
    public int addStudent (Student student) ;
    //查询所有学生的基本信息
    List<Student> findAll () ;
    //根据学生id查询该学生的所有成绩
    List<TableData> findCourse (int id) ;
}
