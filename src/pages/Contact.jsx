import ContactForm from '../components/sections/ContactForm';
import ContactTalk from '../components/sections/ContactTalk';
import { CONTACT_HEADING, CONTACT_TALK } from '../data/pages/contact';

export default function Contact() {
  return (
    <main>
      <ContactForm heading={CONTACT_HEADING} />
      <ContactTalk talk={CONTACT_TALK} />
    </main>
  );
}