import Head from 'next/head';
import ExpandableCard from '../components/ExpandableCard';
import Layout from '../components/layout';
import utilStyles from '../styles/utils.module.css';

const faqList = [
  {
    title:
      'Is there a login function where user can login and contribute articles?',
    content:
      'We are still developing defense mechanism behind user login function and it will be deployed one we make sure that it is secure enough.',
  },
  {
    title: 'What should I do if I want to contribute articles?',
    content:
      'Currently, you can send us your articles via email at securityedu@gmail.com. We will review your articles and add them to the website if they are appropriate. Additionally, any questions or suggestions are also welcomed.',
  },
  {
    title: 'For the search feature, can I search by keywords?',
    content:
      'Yes, absolutely. Our current search function goes through both the title and the content of the articles. This is why some articles may show up in the search result even though the keyword is not in the title.',
  },
  {
    title: 'What is phishing and how can I protect myself from it?',
    content:
      'Phishing is a type of online scam where an attacker attempts to trick you into giving away sensitive information, such as your passwords or credit card numbers. To protect yourself from phishing, be cautious of emails or messages from unknown senders, double-check URLs before clicking on them, and use anti-phishing software.',
  },
  {
    title: 'What are some common types of cyber attacks?',
    content:
      "Some common types of cyber attacks include malware, ransomware, denial-of-service attacks, and phishing. Each of these attacks has its own methods and goals, but they all involve exploiting vulnerabilities in a target's online security.",
  },
  {
    title: 'How can I make sure my passwords are secure?',
    content:
      "To make sure your passwords are secure, use a mix of uppercase and lowercase letters, numbers, and symbols, avoid using common words or phrases, and use a different password for each of your accounts. It's also a good idea to use a password manager to generate and store strong passwords.",
  },
  {
    title: 'What is two-factor authentication and why is it important?',
    content:
      'Two-factor authentication is a security measure that requires you to provide two forms of identification before accessing an account. This can include something you know (like a password) and something you have (like a phone). Two-factor authentication is important because it provides an extra layer of security against hackers who may have obtained your password.',
  },
  {
    title: 'What is a VPN and why should I use one?',
    content:
      'A VPN, or virtual private network, is a tool that encrypts your internet connection and masks your IP address. This can help protect your privacy and security online, especially when using public Wi-Fi networks. VPNs can also allow you to access geographically-restricted content.',
  },
  {
    title: 'What are some best practices for keeping my computer secure?',
    content:
      'Some best practices for keeping your computer secure include keeping your operating system and software up-to-date, using anti-virus and anti-malware software, using a firewall, being cautious of email attachments and links, and backing up your data regularly.',
  },
  {
    title: 'How can I protect my personal information online?',
    content:
      'To protect your personal information online, be cautious of sharing sensitive information on social media or in public forums, use secure passwords and two-factor authentication, and avoid clicking on suspicious links or downloading unknown attachments.',
  },
  {
    title: 'What is social engineering and how can I protect myself from it?',
    content:
      'Social engineering is a type of cyber attack that relies on tricking people into divulging sensitive information or performing actions that compromise their security. To protect yourself from social engineering attacks, be cautious of unsolicited messages or calls, double-check the identity of people requesting information, and use security software to help detect and prevent these attacks.',
  },
  {
    title: 'What are some emerging cybersecurity threats to be aware of?',
    content:
      'Some emerging cybersecurity threats include deepfake technology, ransomware-as-a-service, and supply chain attacks. These threats are constantly evolving and require ongoing vigilance and awareness.',
  },
  {
    title:
      'What should I do if I suspect my computer or accounts have been hacked?',
    content:
      'If you suspect your computer or accounts have been hacked, the first step is to change all of your passwords immediately. You should also run a virus scan and check for any suspicious activity on your accounts. If you are unable to resolve the issue on your own, consider seeking help from a cybersecurity professional.',
  },
];

const FAQ = () => {
  return (
    <Layout>
      <Head>
        <title>SecurityEdu FAQ</title>
      </Head>
      <div>
        <h1 className={utilStyles.headingXl}>SecurityEdu FAQ</h1>
        {faqList.map((card, index) => (
          <ExpandableCard
            key={index}
            title={card.title}
            content={card.content}
            cardSx={{ mb: '1rem' }}
          />
        ))}
      </div>
    </Layout>
  );
};

export default FAQ;
