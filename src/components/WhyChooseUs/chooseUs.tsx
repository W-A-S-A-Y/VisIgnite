import React from 'react';

const WhyChooseUs: React.FC = () => {
  return (
    <div style={styles.wrapper}>
      <div style={styles.container}>
        <div style={styles.section}>
          <h3>Why Choose Us</h3>
          <p>
            At Savvital, we offer a blend of professionalism, versatility, and dynamism,
            tailoring virtual services to meet your unique business needs.
          </p>
        </div>
        <div style={styles.section}>
          <h3>Save Your Time</h3>
          <p>
            Time is money in business, and Savvital saves you both. Our team handles your operations,
            freeing you to focus on growth and profit.
          </p>
        </div>
        <div style={styles.sectionHighlight}>
          <h3>Cost Effective</h3>
          <p>
            We deliver cost-effectiveness by offering highly skilled services at competitive rates,
            ensuring you get the best ROI for your business.
          </p>
        </div>
        <div style={styles.section}>
          <h3>Tailored Service</h3>
          <p>
            Personalized, flexible virtual assistance. We tailor our services to your unique business
            needs, providing the right support when and how you need it.
          </p>
        </div>
      </div>
    </div>
  );
};

const styles = {
  wrapper: {
    backgroundColor: '#F7F7F7', // Unified background for the whole section
    padding: '40px 0',
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
  },
  container: {
    display: 'flex',
    flexDirection: 'row' as const, // Horizontal layout for all sections
    maxWidth: '1200px',            // Keeps it centered and constrained in large screens
    width: '100%',
    justifyContent: 'space-between',
  },
  section: {
    flex: 1,
    padding: '20px',
    backgroundColor: '#FFC107',   // Standard orange background
    borderRadius: '10px',
    margin: '0 10px',             // Space between the sections
    textAlign: 'center' as const,
    color: '#333',
    display: 'flex',
    flexDirection: 'column' as const,
    justifyContent: 'center',
    minHeight: '250px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Light shadow
  },
  sectionHighlight: {
    flex: 1.2,                      // Slightly larger box
    padding: '20px',
    backgroundColor: '#004D40',     // Dark green background
    borderRadius: '10px',
    margin: '0 10px',               // Same margin to maintain spacing
    textAlign: 'center' as const,
    color: '#FFF',
    display: 'flex',
    flexDirection: 'column' as const,
    justifyContent: 'center',
    minHeight: '250px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Same shadow for consistency
  },
};

export default WhyChooseUs;
