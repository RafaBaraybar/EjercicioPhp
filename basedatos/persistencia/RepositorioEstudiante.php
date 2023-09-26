<?php
    include ("Conexion.php");
    class RepositorioEstudiante{
        private $pdo;



        public function  __construct()
        {

            $nuevaConexion = new Conexion();
            $this->pdo = $nuevaConexion->getConexion();

        } 

        public function obtenerEstudiante() {
            $estudiante = [];
            $stmt = $this->pdo->query("SELECT id, nombre, apellido, fechaNac, email FROM estudiante");
            while ($row = $stmt->fetch()) {

                array_push($estudiante,new Estudiante(
                    $row['id'],
                    $row['nombre'],
                    $row['apellido'],
                    $row['fechaNac'],
                    $row['email']));

            }
            return $estudiante;

        }

        public function guardarEstudiante(){

        }

        public function borrarEstudiante($id) {
            $sql = "DELETE from estudiante where id = ?";
            $stmt= $this->pdo->prepare($sql);
            $stmt->execute([$id]);

        }
    }
?>