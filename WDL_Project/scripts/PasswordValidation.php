<?php
	$buttonType=$_POST['button'];
	$hostname="localhost";
	$username="root";
	$p="";
	session_start();
	$dbName="userTable";	
	$conn=mysqli_connect($hostname,$username,$p,$dbName);
   $user="'".$_POST['User']."'";
   $pass=$_POST['Pass'];
   $md5Pass=md5($pass);
   $result=False;
   if($buttonType=='Login'){
   		if($conn){
   			$query="SELECT * FROM USERS WHERE USERNAME=$user";
			$res=mysqli_query($conn,$query);
			if($res){
				if(mysqli_num_rows($res)>0){
				 	while($r=mysqli_fetch_assoc($res)){
						if($md5Pass===$r['Pass']){
							header("Refresh:0; url=../index.html");
						}else{
							echo "<script>alert('Invalid password !');</script>";
							header("Refresh:0; url=../Login.html");
						}
					}
			 	}else{
					echo "<script>alert('Invalid username !');</script>";
					header("Refresh:0; url=../Login.html");
				}
			}
		}else{
			echo "Connection failed!";
		}
	}
	else if($buttonType=='Signup'){
		$name="'".$_POST['Name']."'";
		$mail="'".$_POST['Email']."'";
		$mob="'".$_POST['Mob_no']."'";
		$addr="'".$_POST['Addr']."'";
		$landm="'".$_POST['Landmark']."'";
		$user="'".$_POST['User']."'";
		$pass=$_POST['Pass'];
   		$md5Pass="'".md5($pass)."'";
   	if($conn){
   		$mysqlInsert="INSERT INTO `users` (`ID`, `Name`, `Email`, `MobileNo`, `Address`, `Landmark`, `Username`, `Pass`) VALUES (NULL, $name, $mail, $mob, $addr, $landm, $user, $md5Pass);";
			if(mysqli_query($conn,$mysqlInsert)){
				$getID="SELECT * FROM USERS WHERE USERNAME=$user AND PASS=$md5Pass";
				$res=mysqli_query($conn,$getID);
				if(mysqli_num_rows($res)>0){
					echo "<script>alert('Registered successfully!');</script>";
					include_once('../Login.html');
				}
			}else{
				echo "<script>alert('Registration failed!');</script>";
				header("Refresh:1; url=../Signup.html");
			}
	}else{
		echo "Connection failed!";
	}
	}elseif($buttonType=='Back'){
		header("Refresh:0; url=../Login.html");
	}
	session_abort();
?>
