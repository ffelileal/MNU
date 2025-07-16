import React from 'react';

const MapEmbed = () => {
  return (
    <div>
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3367.0222590902476!2d-63.734865224555335!3d-32.426874473811935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95cdaf256b5a5327%3A0x2b599a3cc80f53fe!2sInstituto%20Divino%20Coraz%C3%B3n!5e0!3m2!1ses-419!2sar!4v1749608315142!5m2!1ses-419!2sar" 
        width="100%" 
        height="250" 
        style={{ border: 0, maxWidth: '400px' }} 
        allowFullScreen 
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default MapEmbed;