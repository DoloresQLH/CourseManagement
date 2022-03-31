package com.example.wj_kechengsheji.mapper;

import com.example.wj_kechengsheji.pojo.Grade;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

@Mapper
@Repository
public interface GradeMapper {
    //添加学生的课程成绩
    int addGrade (Grade grade) ;
}
