// ServicesList.jsx
import React, { useState } from "react";
import { services } from "./servicesData";
import "./styles.css"; // Optional for custom styling

export default function ServicesList() {
  const [selectedService, setSelectedService] = useState(null);

  const handleClick = (service) => {
    setSelectedService(service);
  };

  return (
    <div className="services-container">
      <div className="service-columns">
        {Object.entries(services).map(([category, serviceList]) => (
          <div className="card" key={category}>
            <div className="card-header">{category}</div>
            <ul className="card-body">
              {serviceList.map((service, index) => (
                <li
                  key={index}
                  className="clickable"
                  onClick={() => handleClick(service)}
                >
                  ▶ {service.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {selectedService && (
        <div className="service-details">
          <h3>{selectedService.name}</h3>
          <p><strong>📄 Required Documents:</strong></p>
          <ul>
            {selectedService.documents.map((doc, idx) => (
              <li key={idx}>{doc}</li>
            ))}
          </ul>
          <p><strong>🎁 Benefits:</strong></p>
          <ul>
            {selectedService.benefits.map((ben, idx) => (
              <li key={idx}>{ben}</li>
            ))}
          </ul>
          <p><strong>🗓 Last Date to Apply:</strong> {selectedService.lastDate}</p>
          <p><strong>⏱ Timeline:</strong> {selectedService.timeline}</p>
        </div>
      )}
    </div>
  );
}
