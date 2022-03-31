package com.example.wj_kechengsheji.mapper;

import com.example.wj_kechengsheji.pojo.Student;
import com.example.wj_kechengsheji.pojo.TableData;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@Mapper
public interface StudentMapper {
    //添加学生
    public int addStudent (Student student) ;
    //查询所有学生的基本信息
    List<Student> findAll () ;
    //根据学生id查询该学生的所有成绩
    List<TableData> findCourse (int id) ;
}
