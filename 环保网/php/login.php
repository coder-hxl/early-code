<?php
header("content-type:text/html;charset=utf8");
$username = $_POST['username'];
$password = $_POST['password'];
$conn = mysqli_connect('localhost','root','root','ecological');
$res = mysqli_query($conn,"select * from user_table where username = '$username'");
$row = mysqli_fetch_assoc($res);

if($row){
    if($row['password'] === $password){
        setcookie('username',$username);
        echo ("<script>
        localStorage.removeItem('fhname')
        localStorage.setItem('fhname',"."'$username')
        location.href='../index.html';</script>");
    }else{
        echo ("<script>
        alert('密码错误');
        location.href='../login.html';</script>");
    }
}else{
    echo ("<script>
    alert('用户名不存在');
    location.href='../login.html';</script>");
}
?>