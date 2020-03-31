/* Author: 

*/
document.write("<br>1.<br>");
    for(i=0;i<=4;i++){
                document.write("*");
                for(j=0;j<i;j++){
                    document.write("A");
                    for(k=j;k<j+1;k++){
                    document.write("*");
                }
            }
                document.write("<br>");
            }

document.write("<br>2.");
for(i=0;i<=6;i++){
    for(j=0;j<i;j++){
        document.write("#");
    }
        document.write("<br>");
}
document.write("<br>3.<br>");

var rows = 5;
for(i=1;i <= rows;i++){
    for(j=1;j<rows;j++){
        document.write(" ");
    }
    for(j=1;j<=(i*2-1);j++){
        if(i==rows || j==1 || j==(2*i-1))
        {
           document.write("*")
        }
        else
        {
            document.write(" ");
        }
    }
    document.write("<br>");
}
document.write("<br>4.<br>");
for(i=1;i<=6;i++){
    for(j=0;j<i;j++){
        document.write("*");
    }
    document.write("<br>");
}
var x=6;
var y=6;
for(i=1;i<x;i++){
    for(j=0;j<y;j++){
        if(j >= i){
             document.write("*");
        }
    }
     document.write("<br>");
}
     
document.write("<br>5.<br>");

for(i=1;i<=5;i++){
    document.write(i);
    for(j=1;j<i;j++){
        document.write(j+2);
    }
    for(k=2;k<j+1;k++){
        document.write(k);
    }
    document.write("<br>");
}
