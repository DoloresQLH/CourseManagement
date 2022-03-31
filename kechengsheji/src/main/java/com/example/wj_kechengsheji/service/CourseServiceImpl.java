package com.example.wj_kechengsheji.service;

import com.example.wj_kechengsheji.mapper.CourseMapper;
import com.example.wj_kechengsheji.pojo.CourseTableData;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Service
public class CourseServiceImpl implements CourseService {
    @Autowired
    CourseMapper courseMapper;
    @Override
    public List<CourseTableData> getGradeByCourseId(int id) {
        return courseMapper.getGradeByCourseId(id);
    }

    @Override
    public List<CourseTableData> getGradeByFenShuDuan(Map map) {
        return courseMapper.getGradeByFenShuDuan(map);
    }
}
