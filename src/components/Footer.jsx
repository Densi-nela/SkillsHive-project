import { GitBranch, Mail, MessageCircle, Globe, Link2 } from "lucide-react";

const platformLinks = [
  "Explore Skills",
  "How It Works",
  "Success Stories",
  "Community",
];

const supportLinks = [
  "Help Center",
  "Safety Guidelines",
  "Terms of Service",
  "Privacy Policy",
];

 function Footer() {
  return (
    <footer
      className="text-white px-8 py-12"
      style={{ background: "linear-gradient(135deg, #1a3a6b 0%, #1e3f6e 100%)" }}
    >
      <div className="max-w-5xl mx-auto">

        {/* Top grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 mb-10">

          {/* Brand */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <span className="text-2xl">🐝</span>
              <span className="text-xl font-bold text-white">SkillHive</span>
            </div>
            <p className="text-blue-200/80 text-sm leading-relaxed">
              Empowering learners worldwide to exchange knowledge and grow
              together.
            </p>
          </div>

          {/* Platform */}
          <div className="flex flex-col gap-3">
            <h4 className="font-bold text-white text-base">Platform</h4>
            <ul className="flex flex-col gap-2">
              {platformLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-blue-200/80 text-sm hover:text-white transition-colors duration-200"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div className="flex flex-col gap-3">
            <h4 className="font-bold text-white text-base">Support</h4>
            <ul className="flex flex-col gap-2">
              {supportLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-blue-200/80 text-sm hover:text-white transition-colors duration-200"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div className="flex flex-col gap-4">
            <h4 className="font-bold text-white text-base">Connect</h4>

            {/* Social icons */}
            <div className="flex gap-3">
              {[GitBranch, Mail, MessageCircle, Globe, Link2 ].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 flex items-center justify-center rounded-lg bg-white/10 hover:bg-white/20 transition-colors duration-200"
                >
                  <Icon size={16} className="text-white" />
                </a>
              ))}
            </div>

            {/* Contact */}
            <div className="flex flex-col gap-2">
              <a
                href="mailto:hello@skillhive.com"
                className="flex items-center gap-2 text-blue-200/80 text-sm hover:text-white transition-colors duration-200"
              >
                <Mail size={14} />
                hello@skillhive.com
              </a>
              <a
                href="#"
                className="flex items-center gap-2 text-blue-200/80 text-sm hover:text-white transition-colors duration-200"
              >
                <MessageCircle size={14} />
                Live Chat
              </a>
            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-6 text-center">
          <p className="text-blue-200/70 text-sm">
            © 2026 SkillHive. All rights reserved. Built with{" "}
            <span className="text-red-400">❤️</span> for learners everywhere.
          </p>
        </div>

      </div>
    </footer>
  );
}
export default Footer