<?php
$connection = mysqli_connect('localhost', 'root', '', 'formulario')or die(mysql_error($mysqli));

insertar($connection);

function insertar ($connection){
    $firstName= $_POST['firstName'];
    $lastName= $_POST['lastName'];
    $numberOfTickets= $_POST['numberOfTickets'];
    $category= $_POST['category'];

    $consulta= "INSERT INTO formulario(firstName, lastName, numberOfTickets, category)
    VALUES ('$firstName', '$lastName', '$numberOfTickets', '$category')";
    mysqli_query($connection, $consulta);
    mysqli_close($connection);
}
?>