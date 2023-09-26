<?php
    include '../persistencia/RepositorioEstudiante.php';
    class Estudiante {
        private $id;
        private $nombre;
        private $apellido;
        private $fechaNac;
        private $mail;

        public function __construct($id, $nombre, $apellido, $fechaNac, $mail){
        $this->id = $id;
        $this->nombre = $nombre;
        $this->apellido = $apellido;
        $this->fechaNac = $fechaNac;
        $this->mail = $mail;
    }
    
    public function getId() {
        return $this->id;
    }

    public function getNombre() {
        return $this->nombre;
    }

    public function getApellido() {
        return $this->apellido;
    }

    public function getFechaNac() {
        return $this->fechaNac;
    }

    public function getMail() {
        return $this->mail;
    }

    public static function obtenerEstudiante() {
        $repoEst = new RepositorioEstudiante();
        return $repoEst->obtenerEstudiante();
    }
    public static function borrarEstudiante($id){
        $repoEst = new RepositorioEstudiante();
        return $repoEst->borrarEstudiante($id);
      }
  }

   

?> 


