// Bài 1

document.getElementById('hanldeSalary').onclick = function() {
    var dayWork = +document.getElementById('dayWork').value;
    var salary = +document.getElementById('salary').value;
    var totalSalary = dayWork * salary ;
    document.getElementById('resultSalary').innerHTML = `Tổng lương : ${totalSalary}`;
}


// Bài 2

document.getElementById('hanldeAverage').onclick = function() {
    var a = +document.getElementById('a').value;
    var b = +document.getElementById('b').value;
    var c = +document.getElementById('c').value;
    var d = +document.getElementById('d').value;
    var e = +document.getElementById('e').value;

    var Average = (a + b + c + d + e)/5 ;
    document.getElementById('resultAverage').innerHTML = `Average : ${Average}`;
}
//  Bài 3

document.getElementById('hanldeUSD').onclick = function() {
    var USD = +document.getElementById('USD').value;
    var VND = USD * 23500 ;
    document.getElementById('resultUSD').innerHTML = `Thành tiền : ${VND} VND`;
}


// Bài 4   

document.getElementById('hanldeArea').onclick = function() {
    var length = +document.getElementById('length').value;
    var width = +document.getElementById('width').value;
    var area = length * width ;
    document.getElementById('resultArea').innerHTML = `Diện tích : ${area}`;

}
document.getElementById('hanldePerimeter').onclick = function() {
    var length = +document.getElementById('length').value;
    var width = +document.getElementById('width').value;
    var perimeter = ( length + width ) * 2
    document.getElementById('resultArea').innerHTML = `Chu vi : ${perimeter}`;

}


// Bài 5  

document.getElementById('hanldeN').onclick = function() {
    var n = +document.getElementById('n').value;
    var unit = n % 10 ;
    var ten = Math.floor((n % 100)/10);
    var sum = unit + ten ; 
    document.getElementById('resultN').innerHTML = `Tổng : ${sum}`;

}



















