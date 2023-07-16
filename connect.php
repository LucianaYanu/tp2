<?php
$firstName = $_POST['firstName'];
$lastName = $_POST['lastName'];
$email = $_POST['email'];
$numberOfTickets = $_POST['numberOfTickets'];
$category = $_POST['category'];

//Database connection
$conn new mysql('localhost', 'root', '', 'formulario');
if ($conn-> connect_error){
    die('Connection Failed: '-> .$conn->connect_error);
}else {
    $stmt = $conn->prepare("insert into registration(firstName,lastName,email,numberOfTickets,category)
    values(?,?,?,?,?)");
    $stmt->bind_param("sssis", $firstName, $lastName, $email, $numberOfTickets, $category);
    $stmt->execute();
    echo "registration successfully";
    $stmt->close();
    $conn->close();
}
?>