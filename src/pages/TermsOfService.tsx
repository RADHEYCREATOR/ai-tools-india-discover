import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms of Service</h1>
        <p className="text-sm text-gray-600 mb-8">Last updated: January 2025</p>
        
        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-700 mb-4">
              By accessing and using AIToolsIndia ("we", "our", "us"), you agree to be bound by these Terms of Service ("Terms"). If you disagree with any part of these terms, you may not access the service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Description of Service</h2>
            <p className="text-gray-700 mb-4">
              AIToolsIndia is a curated directory of artificial intelligence tools, providing information, reviews, and links to AI services. We do not own, operate, or control the third-party tools featured on our platform.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. User Responsibilities</h2>
            <p className="text-gray-700 mb-4">You agree to:</p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Use the service only for lawful purposes</li>
              <li>Not attempt to harm or disrupt the website or its users</li>
              <li>Not use automated systems to access the service without permission</li>
              <li>Respect intellectual property rights</li>
              <li>Provide accurate information when contacting us</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Third-Party Services</h2>
            <p className="text-gray-700 mb-4">
              Our website contains links to third-party AI tools and services. We are not responsible for:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>The content, privacy policies, or practices of third-party services</li>
              <li>The availability or functionality of external tools</li>
              <li>Any transactions between you and third-party providers</li>
              <li>The accuracy of information about third-party services</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Intellectual Property</h2>
            <p className="text-gray-700 mb-4">
              The content on AIToolsIndia, including text, graphics, logos, and design, is owned by us or our licensors and is protected by copyright and other intellectual property laws. You may not reproduce, distribute, or create derivative works without our written permission.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Disclaimers</h2>
            <p className="text-gray-700 mb-4">
              AIToolsIndia is provided "as is" without warranties of any kind. We do not guarantee:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>The accuracy, completeness, or reliability of information</li>
              <li>Uninterrupted or error-free service</li>
              <li>The performance of third-party tools</li>
              <li>That the service will meet your specific requirements</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Limitation of Liability</h2>
            <p className="text-gray-700 mb-4">
              To the fullest extent permitted by law, AIToolsIndia shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, or business opportunities.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. User-Generated Content</h2>
            <p className="text-gray-700 mb-4">
              If you submit content to us (such as reviews, comments, or suggestions), you grant us a non-exclusive, worldwide, royalty-free license to use, modify, and distribute that content. You represent that you have the right to grant this license.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Privacy</h2>
            <p className="text-gray-700 mb-4">
              Your privacy is important to us. Please review our Privacy Policy, which governs the collection and use of your information.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Modifications to Terms</h2>
            <p className="text-gray-700 mb-4">
              We reserve the right to modify these Terms at any time. We will notify users of significant changes by posting the updated Terms on our website. Your continued use of the service after such changes constitutes acceptance of the new Terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Termination</h2>
            <p className="text-gray-700 mb-4">
              We may terminate or suspend your access to the service immediately, without prior notice, for conduct that we believe violates these Terms or is harmful to other users, us, or third parties.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">12. Governing Law</h2>
            <p className="text-gray-700 mb-4">
              These Terms are governed by the laws of India. Any disputes arising from these Terms or your use of the service shall be subject to the exclusive jurisdiction of the courts in India.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">13. Contact Information</h2>
            <p className="text-gray-700 mb-4">
              If you have any questions about these Terms of Service, please contact us at:
            </p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-700">
                Email: <a href="mailto:legal@aitoolsindia.in" className="text-primary hover:underline">legal@aitoolsindia.in</a><br />
                Website: <a href="https://aitoolsindia.in" className="text-primary hover:underline">aitoolsindia.in</a>
              </p>
            </div>
          </section>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default TermsOfService;