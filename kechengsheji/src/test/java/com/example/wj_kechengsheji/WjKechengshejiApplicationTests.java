package com.example.wj_kechengsheji;

import com.example.wj_kechengsheji.pojo.Student;
import com.example.wj_kechengsheji.service.StudentService;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import javax.annotation.Resource;

@SpringBootTest
class WjKechengshejiApplicationTests {
    @Resource
    StudentService service ;

    @Test
    void contextLoads() {
        Student student = new Student(4,"张三",18,"北京");
        int i = service.addStudent(student);
        System.out.println(i);
    }
}
