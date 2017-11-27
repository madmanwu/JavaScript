<?php

	if(!empty($_GET['hd'])){
		$f=$_GET['hd'];
	}else{
		$f='test';
	}
	if(!empty($_GET['class'])){
		$s=$_GET['class'];
	}else{
		$s='1507J';
	};
	$data1=array("1507J"=>"42 js3");
	$data2=array("1507F"=>"52 js3");
	$data3=array("1507E"=>"52 js3");
	switch ($s) {
		case '1507J':
			echo $f.'('.json_encode($data1).')';
			break;
		case '1507F':
			echo $f.'('.json_encode($data2).')';
			break;
		case '1507E':
			echo $f.'('.json_encode($data3).')';
			break;
	}

?>

