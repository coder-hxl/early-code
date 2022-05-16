<?php
header("content-type:text/html;charset=utf8");
$username = $_POST['username'];
$password = $_POST['password'];
$email = $_POST['email'];
$conn = mysqli_connect('localhost','root','root','ecological');
// 查找数据库里面的账号
$res = mysqli_query($conn,"select * from user_table where username='$username'");
// 查找一个数据库的账号
$row = mysqli_fetch_assoc($res);
// 判断用账号是否存在
if($row){
    echo ("<script>
    alert('账号已存在');
    location.href='../regist.html';</script>");
}else{
    // 给数据库添加数据
    $res = mysqli_query($conn,"insert into user_table(username,password,email) values('$username','$password','$email')");
    if($res){
        echo ("<script>
        alert('注册成功');
        location.href='../login.html';</script>");
    }else{
        echo ("<script>
        alert('注册失败请重新注册');
        location.href='../regist.html';</script>");
    }
}



?>