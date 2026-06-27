import { useEffect } from 'react';
import { ChevronLeft } from 'lucide-react';
import { motion } from 'framer-motion';

export default function PrivacyPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background dot-pattern text-white font-sans selection:bg-white/20 pt-32 pb-20 px-6 relative">
      <div className="max-w-4xl mx-auto relative z-10">
        <a 
          href="#" 
          className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-10 transition-colors group"
        >
          <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </a>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="glass p-10 md:p-16 rounded-[2.5rem] shadow-2xl relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-[80px] -mr-32 -mt-32 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-[80px] -ml-32 -mb-32 pointer-events-none" />
          
          <div className="relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">TabFlowAI Privacy Policy</h1>
            <p className="text-gray-400 mb-12 text-lg font-light border-b border-white/10 pb-8">
              <strong>Last Updated:</strong> March 2026
            </p>

            <div className="text-gray-300 leading-relaxed font-light text-lg">
              <p className="mb-8">Welcome to TabFlowAI. This Privacy Policy explains how we collect, use, and protect your information when you use our Chrome Extension. We are committed to ensuring that your privacy is protected and respected.</p>

              <h2 className="text-3xl font-semibold text-white mt-16 mb-8 tracking-tight">1. Information We Collect</h2>
              
              <h3 className="text-xl font-medium text-white mt-8 mb-4">A. Data Collected Automatically (Device/Browser Data)</h3>
              <p className="mb-6">To provide the core functionality of TabFlowAI (organizing your browser tabs), our extension accesses:</p>
              <ul className="list-disc pl-6 space-y-3 mb-10">
                <li><strong className="text-white font-medium">Tab Information:</strong> URLs and Titles of currently open tabs.</li>
                <li><strong className="text-white font-medium">Tab Groups:</strong> Information about your existing tab groups to manage and organize them.</li>
              </ul>

              <h3 className="text-xl font-medium text-white mt-8 mb-4">B. User Account Data</h3>
              <p className="mb-6">If you choose to use our cloud-sync or task management features, we collect:</p>
              <ul className="list-disc pl-6 space-y-3 mb-10">
                <li><strong className="text-white font-medium">Authentication Data:</strong> We use Google OAuth for secure login. We receive your basic profile information (Email address, Name, Profile Picture) as authorized by you during the Google Sign-In process.</li>
              </ul>

              <h2 className="text-3xl font-semibold text-white mt-16 mb-8 tracking-tight">2. How We Use Your Information</h2>
              <p className="mb-6">TabFlowAI uses the collected data exclusively to provide and improve the extension's features:</p>
              <ul className="list-disc pl-6 space-y-4 mb-10">
                <li><strong className="text-white font-medium">AI Tab Organization:</strong> We send the URLs and Titles of your open tabs to our secure backend (which utilizes AI models) specifically to categorize and group them. <strong className="text-white font-medium">We do not save your browsing history.</strong> The tab data is processed in real-time and immediately discarded after categorization.</li>
                <li><strong className="text-white font-medium">Task Management:</strong> Tasks you create within the extension are saved to your account so they can be synced across your devices.</li>
                <li><strong className="text-white font-medium">Authentication:</strong> Your Google profile data is used only to create and manage your TabFlowAI user account.</li>
              </ul>

              <h2 className="text-3xl font-semibold text-white mt-16 mb-8 tracking-tight">3. Data Sharing and Third Parties</h2>
              <p className="mb-6">We <strong className="text-white font-medium">do not</strong> sell, rent, or trade your personal information or browsing data to any third parties.</p>
              <p className="mb-6">We share data only with the following trusted service providers strictly for operational purposes:</p>
              <ul className="list-disc pl-6 space-y-3 mb-10">
                <li><strong className="text-white font-medium">Google Generative AI / Gemini:</strong> Used solely for interpreting the context of tab titles/URLs to categorize them.</li>
                <li><strong className="text-white font-medium">Render.com:</strong> Our secure hosting provider for the backend infrastructure.</li>
              </ul>

              <h2 className="text-3xl font-semibold text-white mt-16 mb-8 tracking-tight">4. Permissions Requested and Why</h2>
              <p className="mb-6">Our Chrome Extension requires specific permissions to function:</p>
              <ul className="list-disc pl-6 space-y-3 mb-10">
                <li><strong className="text-white font-medium"><code>tabs</code> & <code>tabGroups</code>:</strong> Required to read the titles and URLs of your open tabs and organize them into Chrome Tab Groups.</li>
                <li><strong className="text-white font-medium"><code>storage</code>:</strong> Used to save your local settings, preferences, and session tokens securely on your device.</li>
                <li><strong className="text-white font-medium"><code>alarms</code>:</strong> Used to manage timers and reminders for the integrated task manager.</li>
                <li><strong className="text-white font-medium"><code>sidePanel</code>:</strong> Allows the extension to provide a seamless UI experience within the Chrome Side Panel.</li>
                <li><strong className="text-white font-medium"><code>identity</code>:</strong> Required to enable secure Google OAuth single sign-on.</li>
                <li><strong className="text-white font-medium"><code>https://tabflowai.onrender.com/</code>:</strong> Required to securely communicate with our AI backend server to classify your tabs and synchronize your tasks.</li>
              </ul>

              <h2 className="text-3xl font-semibold text-white mt-16 mb-8 tracking-tight">5. Security</h2>
              <p className="mb-10">We are committed to ensuring that your information is secure. We use industry-standard encryption (HTTPS/SSL) for all communications between the extension and our servers. Our backend API is protected with token-based authentication.</p>

              <h2 className="text-3xl font-semibold text-white mt-16 mb-8 tracking-tight">6. Data Retention and Deletion</h2>
              <ul className="list-disc pl-6 space-y-3 mb-10">
                <li><strong className="text-white font-medium">Browsing Data:</strong> Tab data sent for AI classification is not stored persistently on our servers.</li>
                <li><strong className="text-white font-medium">Account Data:</strong> Your tasks and account data are retained as long as your account is active. You can request the deletion of your account and all associated data at any time by contacting us.</li>
              </ul>

              <h2 className="text-3xl font-semibold text-white mt-16 mb-8 tracking-tight">7. Changes to This Privacy Policy</h2>
              <p className="mb-10">We may update this Privacy Policy from time to time. We will notify users of any significant changes by updating the "Last Updated" date at the top of this policy and, if appropriate, through a notification within the extension.</p>

              <h2 className="text-3xl font-semibold text-white mt-16 mb-8 tracking-tight">8. Contact Us</h2>
              <p className="mb-10">If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at:<br/>
              <a href="mailto:svv.kaz@gmail.com" className="text-white hover:text-gray-300 font-medium hover:underline mt-4 inline-block transition-colors">svv.kaz@gmail.com</a></p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
