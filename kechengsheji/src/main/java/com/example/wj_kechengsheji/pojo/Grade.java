package com.example.wj_kechengsheji.pojo;

public class Grade {
    private int sid ;
    private int cid ;
    private int pingshi ;
    private int qizhong ;
    private int shixi ;
    private int qimo ;
    private double zongping ;

    public Grade() {
    }

    public Grade(int sid, int cid, int pingshi, int qizhong, int shixi, int qimo, double zongping) {
        this.sid = sid;
        this.cid = cid;
        this.pingshi = pingshi;
        this.qizhong = qizhong;
        this.shixi = shixi;
        this.qimo = qimo;
        this.zongping = zongping;
    }

    public int getSid() {
        return sid;
    }

    public void setSid(int sid) {
        this.sid = sid;
    }

    public int getCid() {
        return cid;
    }

    public void setCid(int cid) {
        this.cid = cid;
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
        return "Grade{" +
                "sid=" + sid +
                ", cid=" + cid +
                ", pingshi=" + pingshi +
                ", qizhong=" + qizhong +
                ", shixi=" + shixi +
                ", qimo=" + qimo +
                ", zongping=" + zongping +
                '}';
    }
}
