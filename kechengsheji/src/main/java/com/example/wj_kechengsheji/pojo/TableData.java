package com.example.wj_kechengsheji.pojo;

/**
 * 根据学生id查询该学生的课程成绩
 */
public class TableData {
    //课程名
    private String name ;
    private int pingshi ;
    private int qizhong ;
    private int shixi ;
    private int qimo ;
    private double zongping ;

    public TableData() {
    }

    public TableData(String name, int pingshi, int qizhong, int shixi, int qimo, double zongping) {
        this.name = name;
        this.pingshi = pingshi;
        this.qizhong = qizhong;
        this.shixi = shixi;
        this.qimo = qimo;
        this.zongping = zongping;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getPingshi() {
        return pingshi;
    }

    public void setPingshi(int pingshi) {
        this.pingshi = pingshi;
    }

    public int getQizhong() {
        return qizhong;
    }

    public void setQizhong(int qizhong) {
        this.qizhong = qizhong;
    }

    public int getShixi() {
        return shixi;
    }

    public void setShixi(int shixi) {
        this.shixi = shixi;
    }

    public int getQimo() {
        return qimo;
    }

    public void setQimo(int qimo) {
        this.qimo = qimo;
    }

    public double getZongping() {
        return zongping;
    }

    public void setZongping(double zongping) {
        this.zongping = zongping;
    }

    @Override
    public String toString() {
        return "TableData{" +
                "name='" + name + '\'' +
                ", pingshi=" + pingshi +
                ", qizhong=" + qizhong +
                ", shixi=" + shixi +
                ", qimo=" + qimo +
                ", zongping=" + zongping +
                '}';
    }
}
