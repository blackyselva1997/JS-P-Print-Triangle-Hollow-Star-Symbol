let a = 6;

 for (i=1;i<=a;i++) {
    for (j=1;j<=i;j++){
        if (i == 1){
            document.write("*");
        } else if (j == 1 || i == j || i == a) {
            document.write("*");   
        } else {
            document.write("&nbsp;&nbsp");
        }
    }
    document.write("<br>");
}