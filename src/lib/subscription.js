/**
 * Subscription Service
 * Handles validation and persistence of newsletter subscribers.
 * Uses localStorage to simulate a database file for persistence.
 */

const STORAGE_KEY = 'blog_subscribers';

export const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};

export const subscribeToNewsletter = (email) => {
  // 1. Validate Email Format
  if (!email || !validateEmail(email)) {
    return { 
      success: false, 
      message: 'Por favor, ingresa un correo electrónico válido.' 
    };
  }

  try {
    // 2. Retrieve existing data
    const existingData = localStorage.getItem(STORAGE_KEY);
    const subscribers = existingData ? JSON.parse(existingData) : [];

    // 3. Check for duplicates
    const isSubscribed = subscribers.some(
      sub => sub.email.toLowerCase() === email.toLowerCase()
    );

    if (isSubscribed) {
      return { 
        success: false, 
        message: '¡Ya estás suscrita! Gracias por ser parte de nuestra comunidad.' 
      };
    }

    // 4. Save new subscriber
    const newSubscriber = {
      email: email.toLowerCase(),
      subscribedAt: new Date().toISOString(),
      source: 'blog_sidebar'
    };

    subscribers.push(newSubscriber);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(subscribers));

    // Optional: Log for debugging
    console.log('New subscriber saved:', newSubscriber);
    console.log('Total subscribers:', subscribers.length);

    return { 
      success: true, 
      message: '¡Gracias por suscribirte! Te hemos añadido a nuestra lista.' 
    };

  } catch (error) {
    console.error('Subscription error:', error);
    return { 
      success: false, 
      message: 'Hubo un error al guardar tu suscripción. Intenta de nuevo.' 
    };
  }
};

export const getSubscribersCount = () => {
  try {
    const existingData = localStorage.getItem(STORAGE_KEY);
    const subscribers = existingData ? JSON.parse(existingData) : [];
    return subscribers.length;
  } catch (e) {
    return 0;
  }
};