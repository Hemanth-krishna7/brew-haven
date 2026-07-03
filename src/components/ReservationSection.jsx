import React, { useState } from 'react';

export default function ReservationSection() {
  const initialFormState = {
    fullName: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '',
    specialRequests: ''
  };

  const [formData, setFormData] = useState(initialFormState);
  const [errors, setErrors] = useState({});
  const [submittedData, setSubmittedData] = useState(null);

  // Helper to get today's date in local YYYY-MM-DD format
  const getTodayDateString = () => {
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const dd = String(today.getDate()).padStart(2, '0');
    return `${yyyy}-${mm}-${dd}`;
  };

  // Handle Input Changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error for field when typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  // Form Validation
  const validateForm = () => {
    const tempErrors = {};
    
    // Full Name
    if (!formData.fullName.trim()) {
      tempErrors.fullName = 'Full Name is required.';
    }

    // Email Validation
    if (!formData.email.trim()) {
      tempErrors.email = 'Email Address is required.';
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        tempErrors.email = 'Please enter a valid email address.';
      }
    }

    // Phone Validation
    if (!formData.phone.trim()) {
      tempErrors.phone = 'Phone Number is required.';
    } else {
      const phoneRegex = /^\+?[0-9\s\-()]{7,15}$/;
      if (!phoneRegex.test(formData.phone)) {
        tempErrors.phone = 'Please enter a valid phone number (min 7 digits).';
      }
    }

    // Date Validation
    if (!formData.date) {
      tempErrors.date = 'Reservation Date is required.';
    } else {
      const todayStr = getTodayDateString();
      if (formData.date < todayStr) {
        tempErrors.date = 'Reservation date cannot be in the past.';
      }
    }

    // Time Validation
    if (!formData.time) {
      tempErrors.time = 'Reservation Time is required.';
    }

    // Guest Validation
    if (!formData.guests) {
      tempErrors.guests = 'Number of Guests is required.';
    } else {
      const guestNum = parseInt(formData.guests, 10);
      if (isNaN(guestNum) || guestNum < 1 || guestNum > 20) {
        tempErrors.guests = 'Guests must be a number between 1 and 20.';
      }
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  // Form Submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData(null); // Clear previous submission

    if (validateForm()) {
      // Store submission details to display in the success message
      setSubmittedData({
        fullName: formData.fullName,
        guests: formData.guests,
        date: formData.date,
        time: formData.time,
        email: formData.email
      });
      
      // Reset Form State
      setFormData(initialFormState);
      setErrors({});
    }
  };

  return (
    <section 
      id="reservation" 
      className="py-24 px-6 md:px-12 lg:px-24 bg-background border-t border-secondary/20"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        
        {/* Left Column: Business Info */}
        <div className="flex flex-col space-y-8 lg:sticky lg:top-28">
          <div className="flex flex-col space-y-4">
            <span className="text-xs uppercase tracking-widest text-accent font-semibold">Reservations</span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary leading-tight">
              Book Your Table
            </h2>
            <p className="font-sans text-sm text-text-dark/80 leading-relaxed max-w-lg">
              Experience Brew Haven at its finest. Reserving your table in advance guarantees a dedicated space in our sunlit, cozy sanctuary. Perfect for coffee cuppings, weekday business meetings, or a relaxing weekend brunch.
            </p>
          </div>

          {/* Business Hours */}
          <div className="border-t border-secondary/20 pt-6">
            <h4 className="font-serif text-base font-semibold text-primary mb-3">Hours of Operation</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-sans text-sm text-text-dark/80">
              <div>
                <span className="block font-medium text-accent">Monday – Friday</span>
                <span>8:00 AM – 9:00 PM</span>
              </div>
              <div>
                <span className="block font-medium text-accent">Saturday – Sunday</span>
                <span>9:00 AM – 10:00 PM</span>
              </div>
            </div>
          </div>

          {/* Contacts */}
          <div className="border-t border-secondary/20 pt-6 space-y-4">
            <h4 className="font-serif text-base font-semibold text-primary">Contact Information</h4>
            <ul className="space-y-2 font-sans text-sm text-text-dark/85">
              <li>
                <span className="font-medium text-text-dark/70">Phone:</span>{' '}
                <a href="tel:+15558675309" className="hover:text-primary transition-colors duration-200">
                  (555) 867-5309
                </a>
              </li>
              <li>
                <span className="font-medium text-text-dark/70">Email:</span>{' '}
                <a href="mailto:hello@brewhaven.com" className="hover:text-primary transition-colors duration-200">
                  hello@brewhaven.com
                </a>
              </li>
              <li>
                <span className="font-medium text-text-dark/70">Address:</span>{' '}
                <span className="text-text-dark/70">123 Espresso Blvd, Coffee City, CC 90210</span>
              </li>
            </ul>
          </div>

          {/* Note Card */}
          <div className="p-6 bg-surface border border-secondary/15 rounded-xl text-xs text-text-dark/70 leading-relaxed font-sans shadow-sm">
            <span className="font-semibold text-primary block mb-1">Weekend Reservation Policy</span>
            Due to high guest volumes on Friday evenings and weekends, we highly recommend completing your reservation at least 48 hours in advance. Walk-ins are accommodated based on seating availability.
          </div>
        </div>

        {/* Right Column: Reservation Form */}
        <div className="flex flex-col space-y-6">
          <div className="bg-surface border border-secondary/15 p-8 rounded-xl shadow-sm">
            <form onSubmit={handleSubmit} noValidate className="space-y-5">
              {/* Full Name */}
              <div className="flex flex-col space-y-1.5">
                <label htmlFor="fullName" className="font-sans text-xs font-semibold text-text-dark/80">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="John Doe"
                  required
                  aria-required="true"
                  aria-invalid={errors.fullName ? 'true' : 'false'}
                  className={`font-sans text-sm px-4 py-3 rounded-lg border bg-background text-text-dark transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background ${
                    errors.fullName ? 'border-amber-600 focus-visible:border-amber-600' : 'border-secondary/30 focus-visible:border-primary'
                  }`}
                />
                {errors.fullName && (
                  <span className="font-sans text-[11px] text-amber-700 font-medium">
                    {errors.fullName}
                  </span>
                )}
              </div>

              {/* Grid: Email & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Email */}
                <div className="flex flex-col space-y-1.5">
                  <label htmlFor="email" className="font-sans text-xs font-semibold text-text-dark/80">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                    aria-required="true"
                    aria-invalid={errors.email ? 'true' : 'false'}
                    className={`font-sans text-sm px-4 py-3 rounded-lg border bg-background text-text-dark transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background ${
                      errors.email ? 'border-amber-600 focus-visible:border-amber-600' : 'border-secondary/30 focus-visible:border-primary'
                    }`}
                  />
                  {errors.email && (
                    <span className="font-sans text-[11px] text-amber-700 font-medium">
                      {errors.email}
                    </span>
                  )}
                </div>

                {/* Phone */}
                <div className="flex flex-col space-y-1.5">
                  <label htmlFor="phone" className="font-sans text-xs font-semibold text-text-dark/80">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="(555) 000-0000"
                    required
                    aria-required="true"
                    aria-invalid={errors.phone ? 'true' : 'false'}
                    className={`font-sans text-sm px-4 py-3 rounded-lg border bg-background text-text-dark transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background ${
                      errors.phone ? 'border-amber-600 focus-visible:border-amber-600' : 'border-secondary/30 focus-visible:border-primary'
                    }`}
                  />
                  {errors.phone && (
                    <span className="font-sans text-[11px] text-amber-700 font-medium">
                      {errors.phone}
                    </span>
                  )}
                </div>
              </div>

              {/* Grid: Date, Time & Guests */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {/* Date */}
                <div className="flex flex-col space-y-1.5">
                  <label htmlFor="date" className="font-sans text-xs font-semibold text-text-dark/80">
                    Date *
                  </label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    min={getTodayDateString()}
                    required
                    aria-required="true"
                    aria-invalid={errors.date ? 'true' : 'false'}
                    className={`font-sans text-sm px-4 py-3 rounded-lg border bg-background text-text-dark transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background ${
                      errors.date ? 'border-amber-600 focus-visible:border-amber-600' : 'border-secondary/30 focus-visible:border-primary'
                    }`}
                  />
                  {errors.date && (
                    <span className="font-sans text-[11px] text-amber-700 font-medium">
                      {errors.date}
                    </span>
                  )}
                </div>

                {/* Time */}
                <div className="flex flex-col space-y-1.5">
                  <label htmlFor="time" className="font-sans text-xs font-semibold text-text-dark/80">
                    Time *
                  </label>
                  <input
                    type="time"
                    id="time"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    required
                    aria-required="true"
                    aria-invalid={errors.time ? 'true' : 'false'}
                    className={`font-sans text-sm px-4 py-3 rounded-lg border bg-background text-text-dark transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background ${
                      errors.time ? 'border-amber-600 focus-visible:border-amber-600' : 'border-secondary/30 focus-visible:border-primary'
                    }`}
                  />
                  {errors.time && (
                    <span className="font-sans text-[11px] text-amber-700 font-medium">
                      {errors.time}
                    </span>
                  )}
                </div>

                {/* Guests */}
                <div className="flex flex-col space-y-1.5">
                  <label htmlFor="guests" className="font-sans text-xs font-semibold text-text-dark/80">
                    Guests *
                  </label>
                  <input
                    type="number"
                    id="guests"
                    name="guests"
                    value={formData.guests}
                    onChange={handleChange}
                    placeholder="2"
                    min="1"
                    max="20"
                    required
                    aria-required="true"
                    aria-invalid={errors.guests ? 'true' : 'false'}
                    className={`font-sans text-sm px-4 py-3 rounded-lg border bg-background text-text-dark transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background ${
                      errors.guests ? 'border-amber-600 focus-visible:border-amber-600' : 'border-secondary/30 focus-visible:border-primary'
                    }`}
                  />
                  {errors.guests && (
                    <span className="font-sans text-[11px] text-amber-700 font-medium">
                      {errors.guests}
                    </span>
                  )}
                </div>
              </div>

              {/* Special Requests */}
              <div className="flex flex-col space-y-1.5">
                <label htmlFor="specialRequests" className="font-sans text-xs font-semibold text-text-dark/80">
                  Special Requests (optional)
                </label>
                <textarea
                  id="specialRequests"
                  name="specialRequests"
                  value={formData.specialRequests}
                  onChange={handleChange}
                  placeholder="e.g. High chair needed, window seat request, dietary preferences..."
                  rows="3"
                  className="font-sans text-sm px-4 py-3 rounded-lg border border-secondary/30 bg-background text-text-dark transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:border-primary resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full font-sans text-sm font-semibold tracking-wider text-background bg-primary hover:bg-accent hover:shadow-lg hover:shadow-primary/10 px-6 py-3.5 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background transition-all duration-200 mt-2"
              >
                Reserve Table
              </button>
            </form>
          </div>

          {/* Conditional Successful Submission Card */}
          {submittedData && (
            <div className="p-6 bg-emerald-50 border border-emerald-200 rounded-xl shadow-sm flex flex-col space-y-3">
              <div className="flex items-center space-x-3 text-emerald-800 font-serif font-bold text-lg">
                <svg className="w-6 h-6 text-emerald-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Reservation Request Received!</span>
              </div>
              <p className="font-sans text-sm text-emerald-800/90 leading-relaxed">
                Thank you, <strong className="text-emerald-900">{submittedData.fullName}</strong>. We have received your booking request for{' '}
                <strong className="text-emerald-900">{submittedData.guests} guests</strong> on{' '}
                <strong className="text-emerald-900">{submittedData.date}</strong> at{' '}
                <strong className="text-emerald-900">{submittedData.time}</strong>.
              </p>
              <p className="font-sans text-xs text-emerald-800/80">
                A confirmation summary and details have been sent to <strong className="text-emerald-900">{submittedData.email}</strong>. We look forward to welcoming you!
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
