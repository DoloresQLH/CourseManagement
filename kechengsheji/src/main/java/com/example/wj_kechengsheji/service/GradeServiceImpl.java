package com.example.wj_kechengsheji.service;

import com.example.wj_kechengsheji.mapper.GradeMapper;
import com.example.wj_kechengsheji.pojo.Grade;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class GradeServiceImpl implements GradeService {
    @Autowired
    GradeMapper gradeMapper ;
    @Override
    public int addGrade(Grade grade) {
        return gradeMapper.addGrade(grade);
    }
}
