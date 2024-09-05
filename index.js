function showtime(){
    let d= new Date();
    let h=d.getHours();
    let m=d.getMinutes();
    let s=d.getSeconds();
    let day=d.getDay();
    let month=d.getMonth();
    d.getFullYear();
    let arr1=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    let arr2=["January","February","March","April","May","June","July","August","September","October","November","December"];
   
    let session="AM";
    if(h>12){
        session="PM";
        h=h-12;
    }
    
    h=h<10?"0"+h:h;
    m=m<10?"0"+m:m;
    s=s<10?"0"+s:s;
    let time=h+" : "+m+" : "+s+" "+session;
    document.getElementById("dayname").innerHTML=(arr1[day]+" "+arr2[month]+" "+d.getFullYear());
    document.getElementsByTagName("h1")[0].innerHTML=time;
  
    setTimeout(showtime,1000)
}