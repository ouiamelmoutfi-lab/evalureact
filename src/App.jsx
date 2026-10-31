import React, { useState } from 'react';
import StudentStats from './components/StudentStats';
import StudentForm from './components/StudentForm';
import StudentList from './components/StudentList';
import './App.css';

const initialStudents = [
  { id: 1, nom: "Alami", prenom: "Sara", note: 15 },
  { id: 2, nom: "Bennani", prenom: "Youssef", note: 12 },
  { id: 3, nom: "Idrissi", prenom: "Hiba", note: 17 },
];

function App() {
  const [students, setStudents] = useState(initialStudents);
  const [searchTerm, setSearchTerm] = useState('');

  // Ajout d'un nouvel étudiant
  const handleAddStudent = (newStudentData) => {
    const nextId =
      students.length > 0
        ? Math.max(...students.map((s) => s.id)) + 1
        : 1;

    const newStudent = {
      id: nextId,
      ...newStudentData,
    };

    setStudents([...students, newStudent]);
  };

  // Suppression d'un étudiant par son identifiant
  const handleDeleteStudent = (id) => {
    setStudents(students.filter((student) => student.id !== id));
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <h1 className="app-title">Gestion des étudiants</h1>
        <p className="app-subtitle">
          Exemple d'interface attendue — démonstration interactive
        </p>
      </header>

      <main className="app-content">
        {/* Exercice 4 : Statistiques (Nombre total & Moyenne générale) */}
        <StudentStats students={students} />

        {/* Exercice 2 : Formulaire d'ajout d'un étudiant */}
        <StudentForm onAddStudent={handleAddStudent} />

        {/* Exercice 1 & 3 : Liste, affichage, recherche et suppression */}
        <StudentList
          students={students}
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          onDeleteStudent={handleDeleteStudent}
        />
      </main>
    </div>
  );
}

export default App;
