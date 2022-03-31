package com.example.wj_kechengsheji.utils;

public class Utils {
    public static int getZongPing (Integer pingshi , Integer qizhong , Integer shixi , Integer qimo) {
        return (pingshi + qizhong + shixi + qimo)/4;
    }
    public static int[] getFenShuDuan (int number) {
        int[] ans = new int[2];
        switch (number) {
            case 1 :
                ans = new int[] {0 ,60} ;
                break;
            case 2 :
                ans = new int[] {60 , 70} ;
                break;
            case 3 :
                ans = new int[] {70 , 80};
                break;
            case 4:
                ans = new int[] {80, 90} ;
                break;
            case 5 :
                ans = new int[] {90, 100} ;
                break;
        }
        return ans ;
    }
}
