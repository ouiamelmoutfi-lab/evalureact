import React, { useState } from 'react';

function StudentForm({ onAddStudent }) {
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [note, setNote] = useState('');
  const [erreur, setErreur] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation des contraintes : nom et prénom obligatoires
    if (!nom.trim() || !prenom.trim()) {
      setErreur('Le nom et le prénom sont obligatoires.');
      return;
    }

    // Validation de la note : nombre compris entre 0 et 20
    const noteNum = parseFloat(note);
    if (note === '' || isNaN(noteNum) || noteNum < 0 || noteNum > 20) {
      setErreur('La note doit être un nombre compris entre 0 et 20.');
      return;
    }

    // Ajout de l'étudiant
    onAddStudent({
      nom: nom.trim(),
      prenom: prenom.trim(),
      note: noteNum,
    });

    // Réinitialisation des champs et de l'erreur
    setNom('');
    setPrenom('');
    setNote('');
    setErreur('');
  };

  return (
    <div className="section-card">
      <h2 className="section-title">Ajouter un étudiant</h2>

      {erreur && <div className="error-message">{erreur}</div>}

      <form onSubmit={handleSubmit} className="student-form">
        <div className="form-row">
          <input
            type="text"
            placeholder="Nom"
            value={nom}
            onChange={(e) => setNom(e.target.value)}
            className="form-input"
          />
          <input
            type="text"
            placeholder="Prénom"
            value={prenom}
            onChange={(e) => setPrenom(e.target.value)}
            className="form-input"
          />
        </div>

        <div className="form-row">
          <input
            type="number"
            step="0.01"
            min="0"
            max="20"
            placeholder="Note (0–20)"
            value={note}
            onChange={(e) => setNote(e.target.value)}
            className="form-input full-width"
          />
        </div>

        <button type="submit" className="btn-submit">
          + Ajouter l'étudiant
        </button>
      </form>
    </div>
  );
}

export default StudentForm;
