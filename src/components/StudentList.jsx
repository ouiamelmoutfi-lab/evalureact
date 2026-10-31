import React from 'react';

function StudentList({ students, searchTerm, onSearchChange, onDeleteStudent }) {
  // Filtrage insensible à la casse sur le nom
  const filteredStudents = students.filter((student) =>
    student.nom.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="section-card">
      <h2 className="section-title">Liste des étudiants</h2>

      {/* Barre de recherche */}
      <div className="search-container">
        <input
          type="text"
          placeholder="Rechercher par nom..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className="search-input"
        />
      </div>

      {/* Tableau des étudiants */}
      <div className="table-responsive">
        <table className="student-table">
          <thead>
            <tr>
              <th>Nom</th>
              <th>Prénom</th>
              <th>Note</th>
              <th className="text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredStudents.length > 0 ? (
              filteredStudents.map((student) => (
                <tr key={student.id}>
                  <td>{student.nom}</td>
                  <td>{student.prenom}</td>
                  <td>{student.note}</td>
                  <td className="text-center">
                    <button
                      onClick={() => onDeleteStudent(student.id)}
                      className="btn-delete"
                      title="Supprimer"
                      aria-label={`Supprimer ${student.prenom} ${student.nom}`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="trash-icon"
                      >
                        <path d="M3 6h18" />
                        <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
                        <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
                        <line x1="10" y1="11" x2="10" y2="17" />
                        <line x1="14" y1="11" x2="14" y2="17" />
                      </svg>
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="empty-state">
                  {students.length === 0
                    ? 'Aucun étudiant dans la liste.'
                    : 'Aucun étudiant ne correspond à cette recherche.'}
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default StudentList;
