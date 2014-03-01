<!DOCTYPE html>
<!--
To change this license header, choose License Headers in Project Properties.
To change this template file, choose Tools | Templates
and open the template in the editor.
-->
<html>
    <head>
        <meta charset="UTF-8">
        <title>WebGL sandbox</title>
        <link rel="stylesheet" type="text/css" href="css/webgl.css">
    </head>
    <body>
        <?php
        $exclude = array("main.js");
        $dir = "js";
        if ($handle = opendir($dir)) {
            while (false !== ($entry = readdir($handle))) {
                if (in_array($entry, $exclude))
                    continue;
                if (substr($entry, -3) == ".js")
                    echo "<script src='$dir/$entry'></script>";
            }
            echo "<script src='$dir/main.js'></script>";
            closedir($handle);
        }
        ?>
    </body>
</html>
