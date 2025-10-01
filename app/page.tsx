import { Collections } from './sections/Collections';
import { Events } from './sections/Events';
import { VisitorArea } from './sections/VisitorArea';
import { ChatbotButton } from './components/ChatbotButton';

export default function Home() {
  return (
    <div className="space-y-16">
      <Collections />
      <Events />
      <VisitorArea />
      <ChatbotButton />
    </div>
  );
}
