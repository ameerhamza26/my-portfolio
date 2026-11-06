import React, { useState, FormEvent } from 'react';
import { Mail, Phone, MapPin, Send, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';
import { profile } from '../data/profile';
import { Section } from './ui/Section';
import { SocialLinks } from './ui/SocialLinks';

// Messages are delivered to the inbox via Web3Forms (https://web3forms.com), no backend needed.
// The access key is public by design (it only allows sending to the registered email).
// Free plan only accepts browser submissions, so test from the site, not curl.
const ENDPOINT = 'https://api.web3forms.com/submit';
const ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_KEY || 'a7ef8109-2fed-4d39-b968-051aa7bce512';

type Status = 'idle' | 'sending' | 'sent' | 'error';

export const Contact: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [honey, setHoney] = useState(''); // spam honeypot, must stay empty
  const [status, setStatus] = useState<Status>('idle');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (honey) return;
    setStatus('sending');
    try {
      const res = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          subject: `Portfolio message from ${name}`,
          from_name: 'ameerhamza.me',
          name,
          email,
          message,
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || data.success !== true) throw new Error(data.message || 'Failed');
      setStatus('sent');
      setName('');
      setEmail('');
      setMessage('');
    } catch {
      setStatus('error');
    }
  };

  const mailtoFallback = `mailto:${profile.email}?subject=${encodeURIComponent(
    `Portfolio message from ${name || 'a visitor'}`
  )}&body=${encodeURIComponent(message)}`;

  const inputClass =
    'w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors';

  return (
    <Section
      id="contact"
      title="Get In Touch"
      subtitle="Hiring for a backend, platform or technical lead role, or have a project in mind? I'd love to hear from you."
    >
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-gray-50 p-8 rounded-xl">
          <h3 className="text-xl font-bold text-gray-900 mb-6">Contact Information</h3>

          <div className="space-y-6">
            <div className="flex items-start">
              <Mail className="text-blue-600 mr-4 mt-1 shrink-0" size={20} />
              <div>
                <h4 className="text-sm font-medium text-gray-500 mb-1">Email</h4>
                <a href={`mailto:${profile.email}`} className="text-gray-800 hover:text-blue-600 transition-colors break-all">
                  {profile.email}
                </a>
              </div>
            </div>

            <div className="flex items-start">
              <Phone className="text-blue-600 mr-4 mt-1 shrink-0" size={20} />
              <div>
                <h4 className="text-sm font-medium text-gray-500 mb-1">Phone / WhatsApp</h4>
                <a href={`tel:${profile.phone}`} className="text-gray-800 hover:text-blue-600 transition-colors">
                  {profile.phoneDisplay}
                </a>
                <a
                  href={`https://wa.me/${profile.phone.replace('+', '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-sm text-green-600 hover:text-green-700 mt-1"
                >
                  Message on WhatsApp →
                </a>
              </div>
            </div>

            <div className="flex items-start">
              <MapPin className="text-blue-600 mr-4 mt-1 shrink-0" size={20} />
              <div>
                <h4 className="text-sm font-medium text-gray-500 mb-1">Location</h4>
                <p className="text-gray-800">{profile.location} · open to remote</p>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Find me online</h3>
            <SocialLinks />
          </div>
        </div>

        <div className="bg-white shadow-lg rounded-xl p-8">
          <h3 className="text-xl font-bold text-gray-900 mb-6">Send a Message</h3>

          {status === 'sent' && (
            <div className="flex gap-3 bg-green-50 text-green-800 p-4 rounded-lg mb-6" role="status">
              <CheckCircle2 className="shrink-0" size={20} />
              <div>
                <p className="font-medium">Thank you for your message!</p>
                <p>I'll get back to you as soon as possible.</p>
              </div>
            </div>
          )}
          {status === 'error' && (
            <div className="flex gap-3 bg-red-50 text-red-800 p-4 rounded-lg mb-6" role="alert">
              <AlertCircle className="shrink-0" size={20} />
              <div>
                <p className="font-medium">Sorry, the message couldn't be sent.</p>
                <p>
                  Please{' '}
                  <a href={mailtoFallback} className="underline">
                    email me directly
                  </a>{' '}
                  instead.
                </p>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="botcheck"
              value={honey}
              onChange={(e) => setHoney(e.target.value)}
              className="hidden"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
            />
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                maxLength={100}
                className={inputClass}
                placeholder="Jane Doe"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className={inputClass}
                placeholder="jane@company.com"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Your Message
              </label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                minLength={10}
                maxLength={5000}
                rows={5}
                className={inputClass}
                placeholder="Hi Ameer, I'd like to talk about..."
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={status === 'sending'}
              className="w-full bg-blue-600 text-white py-3 px-6 rounded-md font-medium hover:bg-blue-700 transition-colors flex items-center justify-center disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status === 'sending' ? (
                <>
                  <Loader2 size={18} className="mr-2 animate-spin" /> Sending…
                </>
              ) : (
                <>
                  <Send size={18} className="mr-2" /> Send Message
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </Section>
  );
};
