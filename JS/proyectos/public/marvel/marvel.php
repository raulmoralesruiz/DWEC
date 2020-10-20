<?php
    $conn = NULL;
        try{

            $con = new PDO("mysql:host=localhost; dbname=marvel; charset=utf8", 'root', 'root');

            if(isset($_GET['id'])){
                $id = $_GET['id'];
                $sql = "SELECT * FROM characters WHERE ID=$id";
            }
            elseif(isset($_GET['gen'],$_GET['ali'])){
                $gen = $_GET['gen'];
                $ali = $_GET['ali'];
                $sql = "SELECT * FROM characters WHERE gender='$gen' AND alignment='$ali'";
            }
            elseif(isset($_GET['ali'])){
                $ali = $_GET['ali'];
                $sql = "SELECT DISTINCT Alignment FROM characters;";
            }
            elseif(isset($_GET['gen'])){
                $gen = $_GET['gen'];
                $sql = "SELECT DISTINCT Gender FROM characters;";
            }
            else{
                $sql = "SELECT * FROM characters";
            }

            $stm=$con->prepare($sql);

            $stm->execute();

            $resultSet = $stm->fetchAll(PDO::FETCH_ASSOC);

            echo json_encode($resultSet);
            
        }catch (PDOException $e){
            echo "Error ".$e->getMessage();
        }
?>
