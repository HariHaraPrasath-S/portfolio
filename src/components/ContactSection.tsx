import { useState } from 'react';
import { Mail, Phone, MapPin, Instagram, Linkedin, Send, Github } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import CosmicOrb from './CosmicOrb';

const contactInfo = [
  { icon: Mail, label: 'Email', value: 'hariharaprasath1142@gmail.com', href: 'mailto:hariharaprasath1142@gmail.com' },
  { icon: Phone, label: 'Phone', value: '+91 8072163059', href: 'tel:+918072163059' },
  { icon: MapPin, label: 'Location', value: 'Trichy – 620020, Tamil Nadu', href: '#' },
];

const socialLinks = [
  { 
    icon: Instagram, 
    href: 'https://www.instagram.com/mr.h_h_p04?igsh=MXB5Ymd2MXQzYXF5bQ==', 
    label: 'Instagram',
    hoverBg: 'hover:bg-gradient-to-br hover:from-purple-600 hover:via-pink-500 hover:to-orange-400',
    hoverIcon: 'group-hover:text-white group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]'
  },
  { 
    icon: Linkedin, 
    href: 'https://linkedin.com/in/harihara-prasath', 
    label: 'LinkedIn',
    hoverBg: 'hover:bg-[#0077B5]',
    hoverIcon: 'group-hover:text-white group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]'
  },
  { 
    icon: Github, 
    href: '#', 
    label: 'GitHub',
    hoverBg: 'hover:bg-[#24292F] hover:shadow-[0_0_20px_rgba(255,255,255,0.3),0_0_40px_rgba(139,92,246,0.2)]',
    hoverIcon: 'group-hover:text-white group-hover:drop-shadow-[0_0_12px_rgba(255,255,255,1)]'
  },
];

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);

  try {
    const response = await fetch("/api/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: formData.name.trim(),
        email: formData.email.trim(),
        message: formData.message.trim(),
      }),
    });

    if (!response.ok) throw new Error("Failed to send");

    toast.success("Message sent successfully! I'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  } catch (error) {
    console.error("Error sending message:", error);
    toast.error("Failed to send message. Please try again.");
  } finally {
    setIsSubmitting(false);
  }
};

  return (
    <section id="contact" className="relative py-32 overflow-hidden">
      {/* Soft glow edge */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

      {/* Background Orb */}
      <CosmicOrb className="top-1/2 right-0 -translate-y-1/2 translate-x-1/2" />

      <div className="w-full px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-widest">Get In Touch</span>
          <h2 className="font-space text-4xl md:text-5xl font-bold mt-4 gradient-text">
            Cosmic Connection
          </h2>
          <p className="text-muted-foreground mt-4 max-w-lg mx-auto">
            Let's create something extraordinary together
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 w-full lg:max-w-5xl lg:mx-auto">
          {/* Contact Form */}
          <div className="glass-card rounded-3xl p-8 animate-fade-in-left section-glow">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <Input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Your name"
                  required
                  className="bg-secondary/50 border-border focus:border-primary rounded-xl"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <Input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="your@email.com"
                  required
                  className="bg-secondary/50 border-border focus:border-primary rounded-xl"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <Textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Your message..."
                  rows={5}
                  required
                  className="bg-secondary/50 border-border focus:border-primary rounded-xl resize-none"
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="cosmic-button w-full flex items-center justify-center gap-2 text-primary-foreground disabled:opacity-50 group"
              >
                {isSubmitting ? (
                  <span>Sending...</span>
                ) : (
                  <>
                    <Send className="w-5 h-5 group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.6)] transition-all" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8 animate-fade-in-right">
            {/* Info Cards */}
            {contactInfo.map((info, idx) => (
              <a
                key={idx}
                href={info.href}
                className="glass-card rounded-2xl p-6 flex items-start gap-4 group section-glow"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-cosmic-violet/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <info.icon className="w-6 h-6 text-primary group-hover:drop-shadow-[0_0_8px_rgba(139,92,246,0.6)] transition-all" />
                </div>
      <div className="min-w-0">
  <p className="text-muted-foreground text-sm">{info.label}</p>
  <p className="font-medium text-sm sm:text-base truncate">
    {info.value}
  </p>
</div>
              </a>
            ))}

            {/* Social Links - Full Background Color on Hover */}
            <div className="flex gap-4 pt-4">
              {socialLinks.map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-14 h-14 rounded-xl glass flex items-center justify-center hover:scale-110 transition-all duration-300 group hover:border-transparent ${social.hoverBg}`}
                  aria-label={social.label}
                >
                  <social.icon className={`w-6 h-6 text-muted-foreground transition-all duration-300 ${social.hoverIcon}`} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
