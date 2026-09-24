-- Enable PostGIS for geospatial location prediction
CREATE EXTENSION IF NOT EXISTS postgis;

CREATE TABLE accounts (
    account_id VARCHAR(50) PRIMARY KEY,
    risk_level VARCHAR(20) DEFAULT 'Low Risk',
    velocity_score NUMERIC,
    unrelated_senders INT
);

CREATE TABLE risk_predictions (
    prediction_id SERIAL PRIMARY KEY,
    account_id VARCHAR(50) REFERENCES accounts(account_id),
    target_geom GEOMETRY(Point, 4326),
    predicted_zone VARCHAR(100),
    confidence_score INT,
    window_start TIMESTAMP,
    window_end TIMESTAMP,
    alert_status VARCHAR(20) DEFAULT 'Pending'
);

-- Insert synthetic data for the prototype demonstration
INSERT INTO accounts (account_id, risk_level, velocity_score, unrelated_senders) VALUES 
('AC-9932', 'High Risk', 94.5, 12),
('AC-1102', 'Medium Risk', 65.0, 4),
('AC-8841', 'Low Risk', 12.5, 1);

INSERT INTO risk_predictions (account_id, target_geom, predicted_zone, confidence_score, window_start, window_end) VALUES
('AC-9932', ST_SetSRID(ST_MakePoint(77.2090, 28.6139), 4326), 'Zone X ATM Cluster', 92, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP + INTERVAL '3 hours'),
('AC-1102', ST_SetSRID(ST_MakePoint(77.2200, 28.5900), 4326), 'Zone Y Branch', 75, CURRENT_TIMESTAMP + INTERVAL '1 hour', CURRENT_TIMESTAMP + INTERVAL '4 hours');
