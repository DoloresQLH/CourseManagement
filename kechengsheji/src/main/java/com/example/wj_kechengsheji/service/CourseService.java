package com.example.wj_kechengsheji.service;

import com.example.wj_kechengsheji.pojo.CourseTableData;

import java.util.List;
import java.util.Map;

public interface CourseService {
    List<CourseTableData> getGradeByCourseId (int id) ;
    //根据课程id和分数段获取获取学生分数
    List<CourseTableData> getGradeByFenShuDuan (Map map) ;
}
