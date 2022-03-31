package com.example.wj_kechengsheji.service;

import com.example.wj_kechengsheji.mapper.StudentMapper;
import com.example.wj_kechengsheji.pojo.Student;
import com.example.wj_kechengsheji.pojo.TableData;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;

@Service
public class StudentServiceImpl implements StudentService {
    @Resource
    StudentMapper studentMapper ;
    @Override
    public int addStudent(Student student) {
        return studentMapper.addStudent(student);
    }

    @Override
    public List<Student> findAll() {
        return studentMapper.findAll();
    }

    @Override
    public List<TableData> findCourse(int id) {
        return studentMapper.findCourse(id);
    }
}
