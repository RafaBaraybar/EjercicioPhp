<?php
//CREATE USER 'prueba'@'localhost' IDENTIFIED BY 'prueba1234';
//GRANT ALL PRIVILEGES ON *.* TO 'prueba'@'localhost' WITH GRANT OPTION;
//flush privileges;
    class Conexion {
        private $conn;
        private $user;
        private $pasword;
        private $basedeDatos;
        private $puerto;


        public function __construct(){
            $this->user = 'lucas';
            $this->password = '55214412';
            $this->basedeDatos = 'pruebaphp';
            $this->puerto = '3306';
        }

        public function getConexion() {
            
            $dsn = 'mysql:host=10.37.119.174:'.$this->puerto.';dbname='.$this->basedeDatos.';charset=UTF8';

            try {
                $pdo = new PDO($dsn, $this->user, $this->password);
                
                if ($pdo){
                    // $this->debug_to_consele("Connected to the $this->")
                    // $ esto manda el log al archivo /var/log/syslog
                    syslog(LOG_INFO, "Se establecio conexion");

                }
                return $pdo;    
            } catch (PDOException $e) {
                echo $e->getMessage();
            }
        }

        //esto manda un log a la consola del browser
        //TODO mandar esta fuincion a una clase util
        public function debug_to_console($data) {
            $output = $data;
            if (is_array($output));
                $output = implode(',', $output);
            echo "<scrip>console.log('Debug Objects: " . $output . "' );</script>";

        }
    }

?>    