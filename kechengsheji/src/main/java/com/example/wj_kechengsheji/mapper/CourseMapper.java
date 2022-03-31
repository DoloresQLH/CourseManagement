package com.example.wj_kechengsheji.mapper;

import com.example.wj_kechengsheji.pojo.CourseTableData;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Map;

@Mapper
@Repository
public interface CourseMapper {
    //通过课程id获取该课程所有的学生分数
    List<CourseTableData> getGradeByCourseId (int id) ;
    //根据课程id和分数段获取获取学生分数
    List<CourseTableData> getGradeByFenShuDuan (Map map) ;
}
