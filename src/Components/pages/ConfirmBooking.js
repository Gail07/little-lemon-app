import { useLocation, useNavigate } from "react-router-dom";
import "./ConfirmBooking.css";

const ConfirmBooking = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const data = location.state || {};

  const formatDate = (dateString) => {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('fr-FR', options);
  };

  return (
    <div className="confirm-booking-container">
      <div className="confirmation-card">
        <div className="confirmation-header">
          <div className="success-icon">✓</div>
          <h1>Réservation Confirmée</h1>
          <p className="subtitle">Merci d'avoir réservé chez Little Lemon</p>
        </div>

        {data && Object.keys(data).length > 0 ? (
          <div className="confirmation-content">
            {/* Greeting */}
            <div className="greeting-section">
              <p className="greeting-text">
                Bienvenue {data.firstName} {data.lastName},
              </p>
              <p className="message-text">
                Votre réservation a été confirmée avec succès. Vous recevrez un email de confirmation à l'adresse {data.email}.
              </p>
            </div>

            {/* Reservation Details */}
            <div className="details-section">
              <h2>Détails de votre Réservation</h2>
              <div className="details-grid">
                {data.date && (
                  <div className="detail-item">
                    <span className="detail-label">📅 Date</span>
                    <span className="detail-value">{formatDate(data.date)}</span>
                  </div>
                )}
                {data.time && (
                  <div className="detail-item">
                    <span className="detail-label">⏰ Heure</span>
                    <span className="detail-value">{data.time}</span>
                  </div>
                )}
                {data.guests && (
                  <div className="detail-item">
                    <span className="detail-label">👥 Nombre de Convives</span>
                    <span className="detail-value">{data.guests} {data.guests > 1 ? "personnes" : "personne"}</span>
                  </div>
                )}
                {data.occasion && (
                  <div className="detail-item">
                    <span className="detail-label">🎉 Occasion</span>
                    <span className="detail-value">{data.occasion}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Customer Information */}
            <div className="customer-section">
              <h2>Informations du Client</h2>
              <div className="info-box">
                <div className="info-row">
                  <span className="info-label">Nom Complet:</span>
                  <span className="info-value">{data.firstName} {data.lastName}</span>
                </div>
                <div className="info-row">
                  <span className="info-label">Email:</span>
                  <span className="info-value">{data.email}</span>
                </div>
                {data.comments && (
                  <div className="info-row">
                    <span className="info-label">Remarques:</span>
                    <span className="info-value comment-text">{data.comments}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Important Notice */}
            <div className="notice-section">
              <p className="notice-text">
                💡 <strong>À retenir:</strong> Veuillez arriver 10 minutes avant votre réservation. 
                Si vous avez besoin d'annuler ou de modifier votre réservation, contactez-nous au moins 24 heures à l'avance.
              </p>
            </div>
          </div>
        ) : (
          <div className="no-data-section">
            <p>Aucun détail de réservation disponible.</p>
          </div>
        )}

        {/* Action Buttons */}
        <div className="button-group">
          <button 
            className="btn btn-primary" 
            onClick={() => navigate("/")}
          >
            Retour à l'accueil
          </button>
          <button 
            className="btn btn-secondary" 
            onClick={() => window.print()}
          >
            Imprimer la confirmation
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmBooking;
