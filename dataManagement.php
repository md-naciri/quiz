<!-- database connection -->
<?php
class Database
{
    protected $conn;
    public function __construct()
    {
        try {
            $this->conn = new PDO("mysql:host=localhost;dbname=quizizy", "root", "");
        } catch (PDOException $e) {
            echo 'erreur de connexion ' . $e->getMessage();
        }
    }
    public function getData($query)
    {
        $preparing = $this->conn->prepare($query);
        $preparing->execute();
        return $preparing->fetchAll(PDO::FETCH_ASSOC);
    }
}

// var_dump($dsn);
?>