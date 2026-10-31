import React from 'react';

function StudentStats({ students }) {
  const totalStudents = students.length;

  const moyenne =
    totalStudents > 0
      ? (
          students.reduce((acc, curr) => acc + Number(curr.note), 0) /
          totalStudents
        ).toFixed(2)
      : null;

  return (
    <div className="stats-container">
      <div className="stat-card">
        <span className="stat-label">Nombre d'étudiants</span>
        <span className="stat-value">{totalStudents}</span>
      </div>

      <div className="stat-card">
        <span className="stat-label">Moyenne générale</span>
        <span className="stat-value">
          {totalStudents > 0 ? `${moyenne}/20` : 'Aucun étudiant'}
        </span>
      </div>
    </div>
  );
}

export default StudentStats;
