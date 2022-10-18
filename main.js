//Bài 1
//Phân tích mô hình 3 khối:
//+ Đầu vào:
//- Nhập số ngày làm: workday
//- Nhập lương 1 ngày: salaryday
//+ Xử lí: 
// Tính thành tiền: totalsalary=workday*salaryday;
//+ Đầu ra: 
// - Xuất ra màn hình thông tin totalsalary;

document.getElementById("btnSalary").onclick=function(){
    
    var workday=document.getElementById("workday").value*1;
    var salaryday=document.getElementById("salaryday").value*1;  
    var totalsalary=workday*salaryday;
    var resultSalary="Tổng tiền lương là: "+ totalsalary;
    document.getElementById("informSalary").innerHTML=resultSalary;
}

//Bài 2
//Phân tích mô hình 3 khối:
//+ Đầu vào:
//- Nhập 5 số thực: number1,number2,number3,number4,number5
//+ Xử lí: 
//-Tính tổng giá trị của 5 số thực: totalnumber=number1+number2+number3+number4+number5
//-Tính giá trị trung bình: average=totalnumber/5
//+ Đầu ra: 
// - Xuất ra màn hình giá trị trung bình: average;

document.getElementById("btnAverage").onclick=function(){
    var number1=document.getElementById("number1").value*1;
    var number2=document.getElementById("number2").value*1;
    var number3=document.getElementById("number3").value*1;
    var number4=document.getElementById("number4").value*1;
    var number5=document.getElementById("number5").value*1;
    var total=number1+number2+number3+number4+number5;
    var average=total/5;
    var resultAverage="Giá trị trung bình là: "+ average;
    document.getElementById("informAverage").innerHTML=resultAverage;
}

//Bài 3
//Phân tích mô hình 3 khối:
//+ Đầu vào:
//- Nhập số USD cần đổi: USDquantity
//- Nhập giá 1USD: USDprice
//+ Xử lí: 
// Tính thành tiền: totalUSD=USDquantity*USDprice;
//+ Đầu ra: 
// - Xuất ra màn hình thông tin totalUSD;

document.getElementById("btnUSD").onclick=function(){
    
    var usdquantity=document.getElementById("USDquantity").value*1;
    var usdprice=document.getElementById("USDprice").value*1;  
    var totalusd=usdquantity*usdprice;
    var resultUSD="Tổng tiền đổi là: "+ totalusd;
    document.getElementById("informUSD").innerHTML=resultUSD;
}

//Bài 4
//Phân tích mô hình 3 khối:
//+ Đầu vào:
//- Nhập chiều dài: length
//- Nhập chiều rộng: width
//+ Xử lí: 
// Tính chuvi: cv=(length+width)*2
// Tính diện tích: dt=length*width
//+ Đầu ra: 
// - Xuất ra màn hình thông tin cv và dt.

document.getElementById("btnCal").onclick=function(){
    
    var length=document.getElementById("length").value*1;
    var width=document.getElementById("width").value*1;  
    var cv=(length+width)*2;
    var dt=length*width;
    var resultCal="Chu vi là: "+ cv +"<br>";
    resultCal+="Diện tích là: "+ dt;
    document.getElementById("informCal").innerHTML=resultCal;
}

//Bài 5
//Phân tích mô hình 3 khối:
//+ Đầu vào:
//- Nhập số có 2 chữ số: number
//+ Xử lí: 
// Tính số hàng chục: number_1=number/10 và lấy số nguyên của phép tính number/10
// Tính số hàng đơn vị: number_2=number%10 và lấy số dư của phép tính number%10
// Tính tổng 2 kí số: totalnumber=number_1+number_2;
//+ Đầu ra: 
// - Xuất ra màn hình tổng 2 kí số totalnumber.

document.getElementById("btnNumber").onclick=function(){
    
    var number=document.getElementById("number").value*1;
    var number_1=parseInt(number/10);
    var number_2=parseInt(number%10);
    var totalnumber=number_1+number_2;
    var resultNumber="Tổng 2 kí số là: "+ totalnumber;
    document.getElementById("informNumber").innerHTML=resultNumber;
}
