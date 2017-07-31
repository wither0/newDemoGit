<?php
  header("Access-Control-Allow-Origin: *");

  $uname = $_POST["uname"];
  $upws = $_POST["upws"];
  $valiC = $_POST["valicode"];

  $mono = new MongoClient("http://localhost:9002");
  $db = $mono->SSM;
  $col = $db->users;
  $infonumb = $col->count();
  $urule = array("uname"=>$uname);
  $udata = $col->find($ufind);

  $result = "";
  $isrepeat = $udata->count();

  if($uid!=null&&$uname!=null&&$upws!=null&&$isrepeat==0){
    $data = array(
      "uid"=>$infonumb,
      "uname"=>$uname,
      "upws"=>$upws,
      "uhead"=>"",
      "ufileurl"=>[],
      "ulv"=>1,
      "umoeB"=>0,
      "umoeP"=>60,
      "usign"=>"",
      "uhot"=>[],
      "ubg"=>""
    );
    $col->insert($data);
    $result = "success";
  }
  else{
    if($isrepeat>0){
      $result = "name exsist";
    }
    else{
      $result = "data erro";
    }
  }

  echo $result;
?>
