import {
  Component,
  signal,
  computed,
  AfterViewInit,
  ElementRef,
  ViewChild,
  PLATFORM_ID,
  Inject,
} from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { FormsModule } from '@angular/forms';

export interface ChatMessage {
  id: number;
  from: 'bot' | 'user';
  text: string;
  timestamp: Date;
  options?: string[];
}

// Mock conversation tree
const RESPONSES: Record<string, { text: string; options?: string[] }> = {
  'Annual Reports': {
    text: 'Our Annual Audit Reports are available under Reports & Publications. You can view the latest 2024–25 report there. Would you like me to help you find something else?',
    options: ['Yes, help me find something', 'No, thank you'],
  },
  'Audit Services': {
    text: 'The NAO provides audit services covering financial, compliance, and performance audits across government ministries and state-owned enterprises. Would you like more details?',
    options: ['Tell me about financial audits', 'Tell me about performance audits', 'Back to menu'],
  },
  'Legislations': {
    text: 'Key legislation governing the NAO includes the Finance and Audit Act, the National Audit Act, and the Public Procurement Act. You can find full details on our Legislations page.',
    options: ['Visit Legislations page', 'Back to menu'],
  },
  'Report a Concern': {
    text: 'If you have information about the misuse of public funds or financial misconduct, you can use our confidential Report a Concern form. All reports are handled with the utmost discretion.',
    options: ['Go to Report a Concern', 'Back to menu'],
  },
  'Contact NAO': {
    text: 'You can reach us at:\n📍 7th Floor, Air Mauritius Centre, Port Louis\n📞 +230 207 8600\n✉️ auditor@nao.govmu.org\n\nOur office hours are Monday–Friday, 9:00 AM – 4:00 PM.',
    options: ['Back to menu'],
  },
  'Tell me about financial audits': {
    text: 'Financial audits assess whether government accounts present a true and fair view of financial transactions and whether public money has been properly accounted for.',
    options: ['Back to menu'],
  },
  'Tell me about performance audits': {
    text: 'Performance audits (Value for Money audits) assess whether public resources are used economically, efficiently, and effectively in delivering services.',
    options: ['Back to menu'],
  },
  'Visit Legislations page': {
    text: 'You can find all relevant legislation at /legislations. Is there anything else I can help with?',
    options: ['Back to menu', 'No, thank you'],
  },
  'Go to Report a Concern': {
    text: 'You can submit a concern at /report-concern. Your identity can remain anonymous. Is there anything else?',
    options: ['Back to menu', 'No, thank you'],
  },
  'Yes, help me find something': {
    text: 'Sure! Here are the main areas I can assist with:',
    options: ['Annual Reports', 'Audit Services', 'Legislations', 'Report a Concern', 'Contact NAO'],
  },
  'Back to menu': {
    text: 'Of course! How else can I assist you?',
    options: ['Annual Reports', 'Audit Services', 'Legislations', 'Report a Concern', 'Contact NAO'],
  },
  'No, thank you': {
    text: 'You are welcome! Feel free to chat again if you have any questions. Have a great day! 😊',
    options: [],
  },
};

const MAIN_MENU_OPTIONS = [
  'Annual Reports',
  'Audit Services',
  'Legislations',
  'Report a Concern',
  'Contact NAO',
];

const GREETING: ChatMessage = {
  id: 1,
  from: 'bot',
  text: 'Hello! 👋 Welcome to the National Audit Office of Mauritius. I\'m here to help you navigate our services. What can I assist you with today?',
  timestamp: new Date(),
  options: MAIN_MENU_OPTIONS,
};

@Component({
  selector: 'app-chat-widget',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './chat-widget.component.html',
  styleUrl: './chat-widget.component.scss',
})
export class ChatWidgetComponent implements AfterViewInit {
  @ViewChild('messageList') messageListRef!: ElementRef<HTMLDivElement>;

  isOpen = signal(false);
  messages = signal<ChatMessage[]>([GREETING]);
  userInput = signal('');
  isTyping = signal(false);
  hasOpened = signal(false);
  private nextId = 2;

  showBadge = computed(() => !this.isOpen() && !this.hasOpened());

  constructor(@Inject(PLATFORM_ID) private platformId: object) {}

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      setTimeout(() => {
        this.isOpen.set(true);
        this.hasOpened.set(true);
      }, 1200);
    }
  }

  toggle(): void {
    this.isOpen.update((v) => !v);
    if (this.isOpen()) {
      this.hasOpened.set(true);
      this.scrollToBottom();
    }
  }

  selectOption(option: string): void {
    this.addUserMessage(option);
    this.respondTo(option);
  }

  sendMessage(): void {
    const text = this.userInput().trim();
    if (!text) return;
    this.userInput.set('');
    this.addUserMessage(text);

    // Check for exact match first, otherwise fallback
    const key = Object.keys(RESPONSES).find(
      (k) => k.toLowerCase() === text.toLowerCase()
    );
    if (key) {
      this.respondTo(key);
    } else {
      this.showTyping(() => {
        this.pushMessage({
          id: this.nextId++,
          from: 'bot',
          text: 'I\'m not sure about that, but I can help you with the following topics:',
          timestamp: new Date(),
          options: MAIN_MENU_OPTIONS,
        });
      });
    }
  }

  onEnter(event: KeyboardEvent): void {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      this.sendMessage();
    }
  }

  private respondTo(key: string): void {
    const response = RESPONSES[key];
    if (!response) return;
    this.showTyping(() => {
      this.pushMessage({
        id: this.nextId++,
        from: 'bot',
        text: response.text,
        timestamp: new Date(),
        options: response.options,
      });
    });
  }

  private addUserMessage(text: string): void {
    this.pushMessage({ id: this.nextId++, from: 'user', text, timestamp: new Date() });
  }

  private showTyping(cb: () => void): void {
    this.isTyping.set(true);
    setTimeout(() => {
      this.isTyping.set(false);
      cb();
    }, 900);
  }

  private pushMessage(msg: ChatMessage): void {
    this.messages.update((msgs) => [...msgs, msg]);
    setTimeout(() => this.scrollToBottom(), 50);
  }

  private scrollToBottom(): void {
    if (this.messageListRef?.nativeElement) {
      this.messageListRef.nativeElement.scrollTop =
        this.messageListRef.nativeElement.scrollHeight;
    }
  }
}
