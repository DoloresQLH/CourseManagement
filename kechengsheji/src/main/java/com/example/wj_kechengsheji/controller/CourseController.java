package com.example.wj_kechengsheji.controller;

import com.example.wj_kechengsheji.pojo.CourseTableData;
import com.example.wj_kechengsheji.service.CourseService;
import com.example.wj_kechengsheji.utils.Utils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin
@RequestMapping("/course")
public class CourseController {
    @Autowired
    CourseService courseService ;

    @GetMapping("/getGradeByCourseId")
    @CrossOrigin
    List<CourseTableData> getGradeByCourseId (int id) {
        return courseService.getGradeByCourseId(id) ;
    };
    @GetMapping("/getGradeByCourseByFenShuDuan")
    @CrossOrigin
    List<CourseTableData> getGradeByCourseByFenShuDuan (int id , int idd) {
        //idd表示分数段id ， id表示课程id
        int[] fenShuDuan = Utils.getFenShuDuan(idd);
        Map<String,Integer> map = new HashMap<>() ;
        map.put("id",id) ;
        map.put("a",fenShuDuan[0]) ;
        map.put("b",fenShuDuan[1]) ;
        return courseService.getGradeByFenShuDuan(map) ;
    };
}
